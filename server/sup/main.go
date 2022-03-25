package main

import (
	"log"
	"sup/api"
	"sup/config"
	"sup/database"

	"github.com/gin-gonic/gin"
)

func main() {
	config.ConfigEnv(".env")
	database.InitDB(config.GetKey("PG_URI"))
	config.Automigrate()
	app := gin.Default()
	api.ApplyRoutes(app)
	err := app.Run(":" + config.GetKey("PORT"))
	if err != nil {
		log.Fatal(err)
	}
}
