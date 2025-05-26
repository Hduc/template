<script>
	import { onMount } from 'svelte';

	let showBackToTop = false;

	onMount(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const halfPage = document.documentElement.scrollHeight / 2;

			// Show the button after scrolling past half the page
			showBackToTop = scrollTop >= halfPage;
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // initialize on load

		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<button
	type="button"
	id="backtotop"
	aria-label="Back to top"
	class:hidden={!showBackToTop}
	class:visible={showBackToTop}
	on:click={scrollToTop}
>
	<i class="ri-arrow-up-s-line"></i>
</button>

<style>
	#backtotop.hidden {
		opacity: 0;
		pointer-events: none;
	}
	#backtotop.visible {
		opacity: 1;
	}
</style>
