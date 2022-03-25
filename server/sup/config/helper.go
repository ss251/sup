package config

import (
	"log"
	"sup/api/v1/models"
	"sup/database"
)

func Automigrate() {
	err := database.DB.AutoMigrate(models.SupData{})
	if err != nil {
		log.Fatal("Automigrate failed:", err)
	}
}
