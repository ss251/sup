package util

type Response struct {
	Status        string      `json:"status,omitempty"`
	SucessMessage string      `json:"success_message,omitempty"`
	ErrorMessage  string      `json:"error_message,omitempty"`
	Payload       interface{} `json:"payload,omitempty"`
}

func MakeSuccessResponse(success_message string, payload interface{}) interface{} {
	response := Response{
		SucessMessage: success_message,
		Status:        "success",
		ErrorMessage:  "",
		Payload:       payload,
	}
	return response
}

func MakeErrorResponse(error_message string, payload interface{}) interface{} {
	response := Response{
		SucessMessage: "",
		Status:        "failure",
		ErrorMessage:  error_message,
		Payload:       payload,
	}
	return response
}
