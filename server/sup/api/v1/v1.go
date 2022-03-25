package v1

import (
	"sup/api/v1/routers"

	"github.com/gin-gonic/gin"
)

func ApplyRoutes(r *gin.RouterGroup) {
	v1 := r.Group("v1")
	{
		routers.ApplyMainRoutes(v1)
	}
}
