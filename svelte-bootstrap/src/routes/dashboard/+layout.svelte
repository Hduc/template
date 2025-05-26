<script>
	import DashboardFooter from '$lib/components/App/DashboardFooter.svelte';
	import DashboardNav from '$lib/components/App/DashboardNav.svelte';
	import Preloader from '$lib/components/App/Preloader.svelte';
	import Sidebar from '$lib/components/App/Sidebar.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('boxed-size');
	});
</script>

<Preloader />
<Sidebar />
<div class="container-fluid">
	<div class="main-content d-flex flex-column">
		<!-- Navbar -->
		<DashboardNav />

		<div class="main-content-container overflow-hidden">
			<slot />
		</div>

		<div class="flex-grow-1"></div>
		<DashboardFooter />
	</div>
</div>
