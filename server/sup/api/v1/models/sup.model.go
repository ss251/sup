package models

import (
	"sup/database"

	"gorm.io/gorm"
)

type SupData struct {
	gorm.Model      `json:"-"`
	Name            string `json:"name" gorm:"type:varchar(50)"`
	Metadata        string `json:"metadata_url" gorm:"type:varchar"`
	Symbol          string `json:"symbol" gorm:"type:varchar"`
	ContractAddress string `json:"contract_address" gorm:"type:varchar"`
}

func (I *SupData) Create() error {
	resp := database.DB.Create(I)
	if resp.Error != nil {
		return resp.Error
	} else {
		return nil
	}
}

func (I *SupData) Get() ([]SupData, error) {
	var data []SupData
	resp := database.DB.Find(&data)
	if resp.Error != nil {
		return data, resp.Error
	} else {
		return data, nil
	}

}

type JsonMetadata struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Image       string `json:"image"`
}
