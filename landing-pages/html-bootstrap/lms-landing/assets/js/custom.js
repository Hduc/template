(function () {
	"use strict";

	window.onload = function () {

		// Preloader JS
		const getPreloaderId = document.getElementById('preloader');
		if (getPreloaderId) {
			getPreloaderId.style.display = 'none';
		}

		// Header Sticky
		const getNavbarId = document.getElementById("navbar");
		if (getNavbarId) {
			window.addEventListener('scroll', event => {
				const height = 150;
				const { scrollTop } = event.target.scrollingElement;
				document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
			});
		}
	};

	// Back to Top JS
	const getId = document.getElementById("backtotop");
	if (getId) {
		const topbutton = document.getElementById("backtotop");
		topbutton.onclick = function (e) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		};
		window.onscroll = function () {
			if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
				topbutton.style.opacity = "1";
			} else {
				topbutton.style.opacity = "0";
			}
		};
	}

	// Toggler JS
	const getnavbarTogglerId = document.getElementById('navbar_toggler');
	if (getnavbarTogglerId) {

		document.querySelector('.navbar-toggler').addEventListener('click', function () {
			this.classList.toggle('open');
		});

	}

	// Partners Slide JS
	var swiper = new Swiper(".partners-slide", {
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: false,
		preventClicks: true,
		loop: false,
		autoHeight: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
			},
			400: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 5,
			},
			992: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 6,
			},
		}
	});

	// Dark/Light Toggle
	const getSwitchToggleId = document.getElementById('switch-toggle');
	if (getSwitchToggleId) {
		const switchtoggle = document.querySelector(".switch-toggle");
		const savedTheme = localStorage.getItem("trezo_theme");
		if (savedTheme) {
			document.body.setAttribute("data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("data-theme") === "dark") {
				document.body.setAttribute("data-theme", "light");
				localStorage.setItem("trezo_theme", "light");
			} else {
				document.body.setAttribute("data-theme", "dark");
				localStorage.setItem("trezo_theme", "dark");
			}
		});
	}

	// Review Rating
	const ratings = document.querySelectorAll('.rating');
	ratings.forEach(rating => {
		rating.addEventListener('click', () => {
			// reset all ratings to default state
			ratings.forEach(rating => {
				rating.classList.remove('active');
			});

			// add active class to clicked rating and all previous ratings
			rating.classList.add('active');
			let prevRating = rating.previousElementSibling;
			while (prevRating) {
				prevRating.classList.add('active');
				prevRating = prevRating.previousElementSibling;
			}
		});
	});

})();

try {
	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('trezo_rtl', themeName);
		document.documentElement.className = themeName;
	}
	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('trezo_rtl') === 'rtl') {
			setTheme('ltr');
		} else {
			setTheme('rtl');
		}
	}

	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('trezo_rtl') === 'rtl') {
			setTheme('rtl');
			document.getElementById('slider').checked = false;
		} else {
			setTheme('ltr');
			document.getElementById('slider').checked = true;
		}
	})();
} catch { }