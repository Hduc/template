(function() {
	"use strict";

    // Navbar Sticky
    const getNavbarID = document.getElementById("navbar");
    if (getNavbarID) {
        window.addEventListener('scroll', event => {
            const height = 150;
            const { scrollTop } = event.target.scrollingElement;
            document.querySelector('#navbar').classList.toggle('is-sticky', scrollTop >= height);
        });
    }

    // Navbar Collapse
    const getNavbarBurgerMenuID = document.getElementById("navbar-burger-menu");
    if (getNavbarBurgerMenuID) {
        const button = document.getElementById('navbar-burger-menu');
        const div = document.getElementById('navbar-collapse');
        button.addEventListener('click', function() {
            button.classList.toggle('active'); // Toggle active class on the button
            div.classList.toggle('active');    // Toggle active class on the div
        });
    }

    // Dark/Light Toggle
	const getSwitchToggleID = document.getElementById('light-dark-toggle');
	if (getSwitchToggleID) {
		const switchToggle = document.getElementById('light-dark-toggle');
        const html = document.documentElement;  // Targeting the <html> element
        if (switchToggle) {
            const savedTheme = localStorage.getItem("trezo_theme");
            // Apply the saved theme class if it exists
            if (savedTheme) {
                html.classList.add(savedTheme === "dark" ? "dark" : "light");
            }
            // Add event listener to switch between themes
            switchToggle.addEventListener("click", () => {
                if (html.classList.contains("dark")) {
                    // Switch to light theme
                    html.classList.remove("dark");
                    html.classList.add("light");
                    localStorage.setItem("trezo_theme", "light");
                } else {
                    // Switch to dark theme
                    html.classList.remove("light");
                    html.classList.add("dark");
                    localStorage.setItem("trezo_theme", "dark");
                }
            });
        }
	}

    // RTL Mode Toggle
	const getRTLModeID = document.getElementById('rtl-mode-toggle');
	if (getRTLModeID) {
		// Function to toggle direction and active class
        function toggleDirection() {
            const htmlTag = document.documentElement; // Access the <html> tag
            const toggleButton = document.getElementById('rtl-mode-toggle'); // Access the button
            const currentDirection = htmlTag.getAttribute('dir');
            const newDirection = currentDirection === 'ltr' ? 'rtl' : 'ltr';
            // Set new direction on the <html> tag
            htmlTag.setAttribute('dir', newDirection);
            // Toggle the 'active' class on the button based on the new direction
            if (newDirection === 'rtl') {
                toggleButton.classList.add('open');
            } else {
                toggleButton.classList.remove('open');
            }
            // Save new direction in localStorage
            localStorage.setItem('textDirection', newDirection);
        }
        // On page load, check if there is a saved direction in localStorage
        window.onload = function() {
            const savedDirection = localStorage.getItem('textDirection') || 'ltr'; // Default to 'ltr' if not found
            const toggleButton = document.getElementById('rtl-mode-toggle'); // Access the button
            // Set the direction for <html> tag based on localStorage
            document.documentElement.setAttribute('dir', savedDirection);
            // Apply the 'active' class if the saved direction is 'rtl'
            if (savedDirection === 'rtl') {
                toggleButton.classList.add('open');
            }
            // Add click event listener to the button
            toggleButton.onclick = toggleDirection;
        };
	}

    // Back to Top
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        const backToTopBtn = document.getElementById("backToTopBtn");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
})();