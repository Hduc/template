<script>
	import { onMount } from 'svelte';

	let currentFooterTheme = 'footer-light';

	onMount(() => {
		const saved = localStorage.getItem('trezo_theme');
		currentFooterTheme = saved || 'footer-light';
		document.body.setAttribute('footer-dark-light-data-theme', currentFooterTheme);
	});

	function toggleFooterTheme() {
		currentFooterTheme = currentFooterTheme === 'footer-dark' ? 'footer-light' : 'footer-dark';

		document.body.setAttribute('footer-dark-light-data-theme', currentFooterTheme);
		localStorage.setItem('trezo_theme', currentFooterTheme);
	}
</script>

<div class="mb-4 pb-2">
	<h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">Only Footer Light / Dark</h4>

	<div
		class="d-flex align-items-center position-relative settings-box-wrap for-footer-dark"
		style="gap: 25px;"
	>
		<!-- Light Option -->
		<div class="cursor position-relative active-wrap2">
			<div class="settings-box">
				{#each Array(7) as _, i}
					<span key={i}></span>
				{/each}
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				{#if currentFooterTheme === 'footer-light'}
					<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"></i>
				{:else}
					<i class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40"></i>
				{/if}
				<span class="fw-semibold">Light</span>
			</div>
		</div>

		<!-- Dark Option -->
		<div class="cursor position-relative active-wrap1">
			<div class="settings-box">
				{#each Array(7) as _, i}
					<span key={i}></span>
				{/each}
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				{#if currentFooterTheme === 'footer-dark'}
					<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"></i>
				{:else}
					<i class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40"></i>
				{/if}
				<span class="fw-semibold">Dark</span>
			</div>
		</div>

		<!-- Toggle Button -->
		<button
			class="footer-light-dark settings-btn"
			aria-label="Toggle footer light/dark mode"
			on:click={toggleFooterTheme}
		></button>
	</div>
</div>
