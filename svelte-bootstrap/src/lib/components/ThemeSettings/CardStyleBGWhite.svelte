<script>
	import { onMount } from 'svelte';

	let currentCardBg = 'card-bg-normal';

	onMount(() => {
		const saved = localStorage.getItem('trezo_theme');
		currentCardBg = saved || 'card-bg-normal';
		document.body.setAttribute('card-bg-data-theme', currentCardBg);
	});

	function toggleCardBg() {
		currentCardBg = currentCardBg === 'card-bg-normal' ? 'card-bg-gray' : 'card-bg-normal';

		document.body.setAttribute('card-bg-data-theme', currentCardBg);
		localStorage.setItem('trezo_theme', currentCardBg);
	}
</script>

<div class="mb-4 pb-2">
	<h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">Card Style BG White / Gray</h4>

	<div
		class="d-flex align-items-center position-relative settings-box-wrap for-card-bg-gray"
		style="gap: 25px;"
	>
		<!-- White BG -->
		<div class="cursor position-relative active-wrap2">
			<div class="settings-box bg-light-40">
				{#each Array(7) as _, i}
					<span class="bg-white" key={`w${i}`}></span>
				{/each}
				{#each Array(6) as _, i}
					<span class="rounded-3 bg-white" key={`w-r${i}`}></span>
				{/each}
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				{#if currentCardBg === 'card-bg-normal'}
					<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"></i>
				{:else}
					<i class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40"></i>
				{/if}
				<span class="fw-semibold">White</span>
			</div>
		</div>

		<!-- Gray BG -->
		<div class="cursor position-relative active-wrap1">
			<div class="settings-box">
				{#each Array(7) as _, i}
					<span key={`g${i}`}></span>
				{/each}
				{#each Array(6) as _, i}
					<span class="rounded-3" key={`g-r${i}`}></span>
				{/each}
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				{#if currentCardBg === 'card-bg-gray'}
					<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"></i>
				{:else}
					<i class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40"></i>
				{/if}
				<span class="fw-semibold">Gray</span>
			</div>
		</div>

		<!-- Toggle Button -->
		<button
			class="card-bg settings-btn"
			id="card-bg"
			aria-label="Toggle card background"
			on:click={toggleCardBg}
		></button>
	</div>
</div>
