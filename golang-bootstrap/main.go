package main

import (
	"trezo-go-twcss/routes"

	"github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()

	r.Static("/assets", "./static")

	r.LoadHTMLGlob("templates/*.html")

	routes.SetupRoutes(r)

    r.Run(":8080") // Runs on localhost:8080 by default
}