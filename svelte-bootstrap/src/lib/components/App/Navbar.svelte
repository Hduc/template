<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		const Collapse = (await import('bootstrap/js/dist/collapse')).default;

		const collapseEl = document.getElementById('navbarSupportedContent');
		let collapseInstance;

		if (collapseEl) {
			collapseInstance = Collapse.getOrCreateInstance(collapseEl);

			// Add event listeners to all nav links
			const navLinks = collapseEl.querySelectorAll('a.nav-link');

			navLinks.forEach((link) => {
				link.addEventListener('click', () => {
					// Only hide if it's currently shown (mobile view)
					if (collapseEl.classList.contains('show')) {
						collapseInstance.hide();
					}
				});
			});
		}
	});

	onMount(() => {
		const navbar = document.getElementById('navbar');

		if (navbar) {
			const handleScroll = () => {
				const scrollTop = window.scrollY;
				navbar.classList.toggle('sticky', scrollTop >= 150);
			};

			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	});
</script>

<nav class="navbar navbar-expand-lg bg-white bg-opacity-25 fixed-top" id="navbar">
	<div class="container">
		<a class="navbar-brand me-xl-5 me-3" href="/">
			<img src="/assets/images/landing/logo.svg" alt="logo" />
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a
						data-sveltekit-preload-data="tap"
						class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4 active"
						href="/">Home</a
					>
				</li>
				<li class="nav-item">
					<a
						data-sveltekit-preload-data="tap"
						class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4"
						href="/features">Features</a
					>
				</li>
				<li class="nav-item">
					<a
						data-sveltekit-preload-data="tap"
						class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4"
						href="/our-team">Our Team</a
					>
				</li>
				<li class="nav-item">
					<a
						data-sveltekit-preload-data="tap"
						class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4"
						href="/faqs">FAQ’s</a
					>
				</li>
				<li class="nav-item">
					<a
						data-sveltekit-preload-data="tap"
						class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4"
						href="/contact">Contact</a
					>
				</li>
				<li class="nav-item">
					<a
						data-sveltekit-preload-data="tap"
						class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4"
						href="/dashboard">Admin</a
					>
				</li>
			</ul>
			<div class="othres">
				<a
					data-sveltekit-preload-data="tap"
					href="/auth/login"
					class="btn btn-outline-primary-div py-2 px-4 fw-medium fs-16 rounded-3"
				>
					<i class="ri-login-box-line fs-18 position-relative top-2"></i>
					<span class="ms-1">Login</span>
				</a>
				<a
					data-sveltekit-preload-data="tap"
					href="/auth/register"
					class="btn btn-primary-div py-2 px-4 fw-medium fs-16 text-white ms-3 rounded-3"
				>
					<i class="ri-user-line fs-18"></i>
					<span class="ms-1">Register</span>
				</a>
			</div>
		</div>
	</div>
</nav>
