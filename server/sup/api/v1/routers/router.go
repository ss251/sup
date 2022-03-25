package routers

import "github.com/gin-gonic/gin"

func ApplyMainRoutes(r *gin.RouterGroup) {
	ipfs := r.Group("sup")
	{
		ApplySupRoutes(ipfs)
	}
}
