<script>
	import { onMount } from 'svelte';

	let currentHeaderTheme = 'header-light';

	onMount(() => {
		const saved = localStorage.getItem('trezo_theme');
		currentHeaderTheme = saved || 'header-light';
		document.body.setAttribute('header-dark-light-data-theme', currentHeaderTheme);
	});

	function toggleHeaderTheme() {
		currentHeaderTheme = currentHeaderTheme === 'header-dark' ? 'header-light' : 'header-dark';

		document.body.setAttribute('header-dark-light-data-theme', currentHeaderTheme);
		localStorage.setItem('trezo_theme', currentHeaderTheme);
	}
</script>

<div class="mb-4 pb-2">
	<h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">Only Header Light / Dark</h4>

	<div
		class="d-flex align-items-center position-relative settings-box-wrap for-header-dark"
		style="gap: 25px;"
	>
		<!-- Light Preview -->
		<div class="cursor position-relative active-wrap2">
			<div class="settings-box">
				{#each Array(7) as _, i}
					<span key={i}></span>
				{/each}
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				{#if currentHeaderTheme === 'header-light'}
					<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"></i>
				{:else}
					<i class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40"></i>
				{/if}
				<span class="fw-semibold">Light</span>
			</div>
		</div>

		<!-- Dark Preview -->
		<div class="cursor position-relative active-wrap1">
			<div class="settings-box">
				{#each Array(7) as _, i}
					<span key={i}></span>
				{/each}
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				{#if currentHeaderTheme === 'header-dark'}
					<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"></i>
				{:else}
					<i class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40"></i>
				{/if}
				<span class="fw-semibold">Dark</span>
			</div>
		</div>

		<!-- Toggle Button -->
		<button
			class="header-light-dark settings-btn"
			id="header-light-dark"
			aria-label="Toggle header light/dark mode"
			on:click={toggleHeaderTheme}
		></button>
	</div>
</div>
