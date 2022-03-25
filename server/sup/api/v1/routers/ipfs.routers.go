package routers

import (
	"sup/api/v1/controllers"

	"github.com/gin-gonic/gin"
)

func ApplySupRoutes(r *gin.RouterGroup) {
	r.POST("/", controllers.UploadToIPFS)
	r.POST("/store", controllers.StoreSupInfo)
	r.GET("/", controllers.GetSupInfo)
}
