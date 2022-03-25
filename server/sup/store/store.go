package store

import (
	"archive/zip"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"sup/api/v1/models"
	"sup/config"
)

func GenerateJsonDataForIPFSFolder(hash string, files []string) (string, error) {
	CheckDir(config.GetKey("JSON_DIR"))
	path := config.GetKey("JSON_DIR")
	for i, file := range files {
		if file == "" {
			continue
		}
		var temp models.JsonMetadata
		temp.Name = file
		temp.Image = "ipfs://" + hash + "/" + file

		//marshal to json
		js, _ := json.Marshal(temp)

		file_name := config.GetKey("JSON_DIR") + "/" + strconv.Itoa(i)
		file, err := os.OpenFile(file_name, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, os.ModePerm)
		if err != nil {
			return "", err
		}
		defer file.Close()

		err = ioutil.WriteFile(file_name, js, 0644)
		if err != nil {
			return "", err
		}

	}
	return path, nil

}

func UnzipSource(source, destination string) ([]string, error) {
	// 1. Open the zip file
	reader, err := zip.OpenReader(source)
	if err != nil {
		return []string{}, err
	}
	defer reader.Close()

	// 2. Get the absolute destination path
	destination, err = filepath.Abs(destination)
	if err != nil {
		return []string{}, err
	}

	var files []string
	// 3. Iterate over zip files inside the archive and unzip each of them
	for _, f := range reader.File {
		file_name_without_folder := strings.Split(f.Name, "/")
		files = append(files, file_name_without_folder[1])
		err := UnzipFile(f, destination)
		if err != nil {
			return []string{}, err
		}
	}

	return files, nil
}

func UnzipFile(f *zip.File, destination string) error {
	// 4. Check if file paths are not vulnerable to Zip Slip
	filePath := filepath.Join(destination, f.Name)
	if !strings.HasPrefix(filePath, filepath.Clean(destination)+string(os.PathSeparator)) {
		return fmt.Errorf("invalid file path: %s", filePath)
	}

	// 5. Create directory tree
	if f.FileInfo().IsDir() {
		if err := os.MkdirAll(filePath, os.ModePerm); err != nil {
			return err
		}
		return nil
	}

	if err := os.MkdirAll(filepath.Dir(filePath), os.ModePerm); err != nil {
		return err
	}

	// 6. Create a destination file for unzipped content
	destinationFile, err := os.OpenFile(filePath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode())
	if err != nil {
		return err
	}
	defer destinationFile.Close()

	// 7. Unzip the content of a file and copy it to the destination file
	zippedFile, err := f.Open()
	if err != nil {
		return err
	}
	defer zippedFile.Close()

	if _, err := io.Copy(destinationFile, zippedFile); err != nil {
		return err
	}
	return nil
}

func CheckDir(path string) error {
	if _, err := os.Stat(path); os.IsNotExist(err) {
		err := os.Mkdir(path, os.ModeDir)
		if err != nil {
			return err
		}
	}
	return nil

}
