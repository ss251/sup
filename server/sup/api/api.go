package api

import (
	v1 "sup/api/v1"

	"github.com/gin-gonic/gin"
)

func ApplyRoutes(r *gin.Engine) {
	api := r.Group("/api")
	{
		v1.ApplyRoutes(api)
	}
}
