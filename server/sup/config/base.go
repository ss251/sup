package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func ConfigEnv(path string) {
	if os.Getenv("LOAD_CONFIG_FILE") == "" {
		err := godotenv.Load(path)
		if err != nil {
			log.Fatal("unable to load env file:", err)
		}
	}
}

func GetKey(key string) string {
	return os.Getenv(key)
}
