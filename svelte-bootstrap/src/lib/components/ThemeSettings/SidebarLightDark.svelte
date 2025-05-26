<script>
	import { onMount } from 'svelte';

	let currentTheme = 'sidebar-light';

	onMount(() => {
		const saved = localStorage.getItem('trezo_theme');
		currentTheme = saved || 'sidebar-light';
		document.body.setAttribute('sidebar-dark-light-data-theme', currentTheme);
	});

	function toggleSidebarTheme() {
		currentTheme = currentTheme === 'sidebar-dark' ? 'sidebar-light' : 'sidebar-dark';
		document.body.setAttribute('sidebar-dark-light-data-theme', currentTheme);
		localStorage.setItem('trezo_theme', currentTheme);
	}
</script>

<div class="mb-4 pb-2">
	<h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">Only Sidebar Light / Dark</h4>

	<div
		class="d-flex align-items-center position-relative settings-box-wrap for-sidebar-dark"
		style="gap: 25px;"
	>
		<!-- Light Box -->
		<div class="cursor position-relative active-wrap2">
			<div class="settings-box">
				{#each Array(7) as _, i}
					<span key={i}></span>
				{/each}
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				{#if currentTheme === 'sidebar-light'}
					<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"></i>
				{:else}
					<i class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40"></i>
				{/if}
				<span class="fw-semibold">Light</span>
			</div>
		</div>

		<!-- Dark Box -->
		<div class="cursor position-relative active-wrap1">
			<div class="settings-box">
				{#each Array(7) as _, i}
					<span key={i}></span>
				{/each}
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				{#if currentTheme === 'sidebar-dark'}
					<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"></i>
				{:else}
					<i class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40"></i>
				{/if}
				<span class="fw-semibold">Dark</span>
			</div>
		</div>

		<!-- Toggle Button -->
		<button
			class="sidebar-light-dark settings-btn"
			aria-label="Toggle sidebar light/dark mode"
			on:click={toggleSidebarTheme}
		></button>
	</div>
</div>
