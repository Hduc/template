<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import '../lib/assets/google-icon.css';
	import '../lib/assets/remixicon.css';
	import 'swiper/css';
	import 'swiper/css/bundle';
	import '../lib/assets/style.css';
	import Navbar from '$lib/components/App/Navbar.svelte';
	import Footer from '$lib/components/App/Footer.svelte';
	import CopyRight from '$lib/components/App/CopyRight.svelte';
	import BackToTop from '$lib/components/App/BackToTop.svelte';
	import Preloader from '$lib/components/App/Preloader.svelte';
	import LightDarkBtn from '$lib/components/App/LightDarkBtn.svelte';
	let { children, data } = $props();
	onMount(() => {
		register(); // Register Swiper elements only once on mount
	});

	onMount(() => {
		if (!('hideNavbar' in data) || !data.hideNavbar) {
			document.body.setAttribute('data-bs-spy', 'scroll');
			document.body.setAttribute('data-bs-target', '#navbar-example2');
			document.body.setAttribute('data-bs-root-margin', '0px 0px -40%');
			document.body.setAttribute('data-bs-smooth-scroll', 'true');
			document.body.classList.add('scrollspy-example');
			document.body.setAttribute('tabindex', '0');
		} else {
			document.body.classList.add('boxed-size');
		}
	});
</script>

<Preloader />
{#if !('hideNavbar' in data) || !data.hideNavbar}
	<Navbar />
{/if}
{@render children()}
{#if !('hideNavbar' in data) || !data.hideNavbar}
	<Footer />
	<CopyRight />
	<BackToTop />
{/if}

<LightDarkBtn />
