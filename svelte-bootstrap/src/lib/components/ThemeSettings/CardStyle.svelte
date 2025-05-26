<script>
	import { onMount } from 'svelte';

	let currentCardStyle = 'card-radius';

	onMount(() => {
		const saved = localStorage.getItem('trezo_theme');
		currentCardStyle = saved || 'card-radius';
		document.body.setAttribute('card-radius-square-data-theme', currentCardStyle);
	});

	function toggleCardStyle() {
		currentCardStyle = currentCardStyle === 'card-square' ? 'card-radius' : 'card-square';

		document.body.setAttribute('card-radius-square-data-theme', currentCardStyle);
		localStorage.setItem('trezo_theme', currentCardStyle);
	}
</script>

<div class="mb-4 pb-2">
	<h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">Card Style Radius / Square</h4>

	<div
		class="d-flex align-items-center position-relative settings-box-wrap for-card-radius"
		style="gap: 25px;"
	>
		<!-- Radius Preview -->
		<div class="cursor position-relative active-wrap2">
			<div class="settings-box">
				{#each Array(7) as _, i}
					<span key={i}></span>
				{/each}
				{#each Array(6) as _, i}
					<span class="rounded-3" key={`r${i}`}></span>
				{/each}
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				{#if currentCardStyle === 'card-radius'}
					<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"></i>
				{:else}
					<i class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40"></i>
				{/if}
				<span class="fw-semibold">Radius</span>
			</div>
		</div>

		<!-- Square Preview -->
		<div class="cursor position-relative active-wrap1">
			<div class="settings-box rounded-0">
				{#each Array(7) as _, i}
					<span class="rounded-0" key={`s${i}`}></span>
				{/each}
				{#each Array(6) as _, i}
					<span key={`s2${i}`}></span>
				{/each}
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				{#if currentCardStyle === 'card-square'}
					<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"></i>
				{:else}
					<i class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40"></i>
				{/if}
				<span class="fw-semibold">Square</span>
			</div>
		</div>

		<!-- Toggle Button -->
		<button
			class="card-radius-square settings-btn"
			id="card-radius-square"
			aria-label="Toggle card radius to square"
			on:click={toggleCardStyle}
		></button>
	</div>
</div>
