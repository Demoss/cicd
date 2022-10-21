package main

import (
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"net/http"
	"os"
)

type Greetings struct {
	Helllo string `json:"hello"`
}

func main() {
	if err := godotenv.Load(); err != nil {
		fmt.Println(err)
		return
	}
	corsConfig := cors.DefaultConfig()
	corsConfig.AllowAllOrigins = true
	router := gin.Default()
	router.Use(cors.New(corsConfig))
	hello := Greetings{Helllo: os.Getenv("test")}

	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": hello.Helllo})
	})
	router.Run(":8000")
}
