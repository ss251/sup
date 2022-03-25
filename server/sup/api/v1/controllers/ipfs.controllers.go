package controllers

import (
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"sup/api/v1/models"
	"sup/config"
	"sup/store"
	"sup/util"

	"github.com/gin-gonic/gin"
	gateway "github.com/ipfs/go-ipfs-api"
)

func UploadToIPFS(c *gin.Context) {
	err := store.CheckDir(config.GetKey("ZIPS_DIR"))
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, util.MakeErrorResponse(err.Error(), nil))
		return
	}

	ipfs_gateway := gateway.NewShell(config.GetKey("IPFS_URL"))
	var hash string
	var file_names []string
	zip_folder := config.GetKey("ZIPS_DIR")
	form_data, err := c.MultipartForm()
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, util.MakeErrorResponse(err.Error(), nil))
		return
	}

	//Get zip file from form data
	files := form_data.File["file"]
	for _, file := range files {
		fp, _ := file.Open()
		defer fp.Close()

		//path for storing zip file
		path, _ := filepath.Abs(zip_folder)
		path = path + "/" + file.Filename

		without_extesnion := strings.Split(file.Filename, ".")

		//create file and copy contentes of zip file
		dest_file, err := os.OpenFile(path, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, os.ModeTemporary)
		if err != nil {
			c.AbortWithStatusJSON(http.StatusBadGateway, util.MakeErrorResponse(err.Error(), nil))
			return
		}
		defer dest_file.Close()

		_, err = io.Copy(dest_file, fp)
		if err != nil {
			c.AbortWithStatusJSON(http.StatusBadGateway, util.MakeErrorResponse(err.Error(), nil))
			return
		}

		//unzip the zip file and store in unzipped folder
		file_names, err = store.UnzipSource(path, config.GetKey("UNZIPPED_DIR"))
		if err != nil {
			c.AbortWithStatusJSON(http.StatusBadGateway, util.MakeErrorResponse(err.Error(), nil))
			return
		}

		//Add the unzipped folder to ipfs
		folder_hash, err := ipfs_gateway.AddDir(config.GetKey("UNZIPPED_DIR") + "/" + without_extesnion[0])
		if err != nil {
			c.AbortWithStatusJSON(http.StatusBadGateway, util.MakeErrorResponse(err.Error(), nil))
			return
		}

		hash = folder_hash

	}

	//Create a json file contains all the hashes of all files in folder
	path, _ := store.GenerateJsonDataForIPFSFolder(hash, file_names)

	//upload the json file to ipfs
	json_hash, err := ipfs_gateway.AddDir(path)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadGateway, util.MakeErrorResponse(err.Error(), nil))
		return
	}

	err = os.RemoveAll(path)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadGateway, util.MakeErrorResponse(err.Error(), nil))
		return
	}

	c.AbortWithStatusJSON(http.StatusOK, util.MakeSuccessResponse("Zip to Metadata Conversion is Successful", []string{json_hash}))
}

func StoreSupInfo(c *gin.Context) {
	var data models.SupData
	err := c.BindJSON(&data)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, util.MakeErrorResponse(err.Error(), nil))
		return
	}
	err = data.Create()
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, util.MakeErrorResponse(err.Error(), nil))
		return
	}
	c.AbortWithStatusJSON(200, util.MakeSuccessResponse("Sup Info Stored", nil))
}

func GetSupInfo(c *gin.Context) {
	var record models.SupData
	data, err := record.Get()
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, util.MakeErrorResponse(err.Error(), nil))
		return
	}
	c.AbortWithStatusJSON(200, util.MakeSuccessResponse("Sup Info Retrieved", data))
}
