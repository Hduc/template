package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// SetupRoutes initializes all routes
func SetupRoutes(r *gin.Engine) {
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "landing.html", gin.H{
			"title": "Home",
		})
	})
	r.GET("/features", func(c *gin.Context) {
		c.HTML(http.StatusOK, "features.html", gin.H{
			"title": "Features",
		})
	})
	r.GET("/our-team", func(c *gin.Context) {
		c.HTML(http.StatusOK, "our-team.html", gin.H{
			"title": "Our Team",
		})
	})
	r.GET("/faqs", func(c *gin.Context) {
		c.HTML(http.StatusOK, "faqs.html", gin.H{
			"title": "FAQ's",
		})
	})
	r.GET("/contact", func(c *gin.Context) {
		c.HTML(http.StatusOK, "contact.html", gin.H{
			"title": "Contact",
		})
	})
	r.GET("/login", func(c *gin.Context) {
		c.HTML(http.StatusOK, "login.html", gin.H{
			"title": "Login",
		})
	})
	r.GET("/register", func(c *gin.Context) {
		c.HTML(http.StatusOK, "register.html", gin.H{
			"title": "Register",
		})
	})
	r.GET("/reset-password", func(c *gin.Context) {
		c.HTML(http.StatusOK, "reset-password.html", gin.H{
			"title": "Reset Password",
		})
	})
	r.GET("/forget-password", func(c *gin.Context) {
		c.HTML(http.StatusOK, "forget-password.html", gin.H{
			"title": "Forget Password",
		})
	})
	r.GET("/confirm-mail", func(c *gin.Context) {
		c.HTML(http.StatusOK, "confirm-mail.html", gin.H{
			"title": "Confirm Mail",
		})
	})
	r.GET("/lock-screen", func(c *gin.Context) {
		c.HTML(http.StatusOK, "lock-screen.html", gin.H{
			"title": "Lock Screen",
		})
	})
	r.GET("/logout", func(c *gin.Context) {
		c.HTML(http.StatusOK, "logout.html", gin.H{
			"title": "Logout",
		})
	})

	// Dashboard Routes
	dashboard := r.Group("/dashboard")
	{
		dashboard.GET("/", func(c *gin.Context) {
			c.HTML(http.StatusOK, "ecommarce.html", gin.H{
				"title": "eCommarce",
			})
		})
		dashboard.GET("/crm", func(c *gin.Context) {
			c.HTML(http.StatusOK, "crm.html", gin.H{
				"title": "CRM",
			})
		})
		dashboard.GET("/project-management", func(c *gin.Context) {
			c.HTML(http.StatusOK, "project-management.html", gin.H{
				"title": "Project Management",
			})
		})
		dashboard.GET("/lms", func(c *gin.Context) {
			c.HTML(http.StatusOK, "lms.html", gin.H{
				"title": "LMS",
			})
		})
		dashboard.GET("/help-desk", func(c *gin.Context) {
			c.HTML(http.StatusOK, "help-desk.html", gin.H{
				"title": "Help Desk",
			})
		})
		dashboard.GET("/analytics", func(c *gin.Context) {
			c.HTML(http.StatusOK, "analytics.html", gin.H{
				"title": "Analytics",
			})
		})
		dashboard.GET("/crypto", func(c *gin.Context) {
			c.HTML(http.StatusOK, "crypto.html", gin.H{
				"title": "Crypto",
			})
		})
		dashboard.GET("/sales", func(c *gin.Context) {
			c.HTML(http.StatusOK, "sales.html", gin.H{
				"title": "Sales",
			})
		})
		dashboard.GET("/hospital", func(c *gin.Context) {
			c.HTML(http.StatusOK, "hospital.html", gin.H{
				"title": "Hospital",
			})
		})
		dashboard.GET("/marketing", func(c *gin.Context) {
			c.HTML(http.StatusOK, "marketing.html", gin.H{
				"title": "Marketing",
			})
		})
		dashboard.GET("/nft", func(c *gin.Context) {
			c.HTML(http.StatusOK, "nft.html", gin.H{
				"title": "NFT",
			})
		})
		dashboard.GET("/saas", func(c *gin.Context) {
			c.HTML(http.StatusOK, "saas.html", gin.H{
				"title": "SaaS",
			})
		})
		dashboard.GET("/real-estate", func(c *gin.Context) {
			c.HTML(http.StatusOK, "real-estate.html", gin.H{
				"title": "Real Estate",
			})
		})
		dashboard.GET("/shipment", func(c *gin.Context) {
			c.HTML(http.StatusOK, "shipment.html", gin.H{
				"title": "Shipment",
			})
		})
		dashboard.GET("/finance", func(c *gin.Context) {
			c.HTML(http.StatusOK, "finance.html", gin.H{
				"title": "Finance",
			})
		})
		dashboard.GET("/hrm", func(c *gin.Context) {
			c.HTML(http.StatusOK, "hrm.html", gin.H{
				"title": "HRM",
			})
		})
		dashboard.GET("/school", func(c *gin.Context) {
			c.HTML(http.StatusOK, "school.html", gin.H{
				"title": "School",
			})
		})
		dashboard.GET("/call-center", func(c *gin.Context) {
			c.HTML(http.StatusOK, "call-center.html", gin.H{
				"title": "Call Center",
			})
		})
		dashboard.GET("/pos-system", func(c *gin.Context) {
			c.HTML(http.StatusOK, "pos-system.html", gin.H{
				"title": "Pos System",
			})
		})
		dashboard.GET("/podcast", func(c *gin.Context) {
			c.HTML(http.StatusOK, "podcast.html", gin.H{
				"title": "podcast",
			})
		})
	}
}