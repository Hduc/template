<script>
	import { cubicOut } from 'svelte/easing';

	let open = false;
	let dropdownRef;

	function fadeScale(
		node,
		{ delay = 0, duration = 150, easing = cubicOut, baseScale = 0.95 } = {}
	) {
		const o = +getComputedStyle(node).opacity;
		const s = baseScale;
		return {
			delay,
			duration,
			easing,
			css: (t) => `
				opacity: ${t * o};
				transform: scale(${s + (1 - s) * t});
			`
		};
	}
</script>

<li class="header-right-item" bind:this={dropdownRef}>
	<div class="dropdown notifications language">
		<button
			class="btn btn-secondary dropdown-toggle border-0 p-0 position-relative"
			type="button"
			on:click={() => (open = !open)}
			aria-expanded={open}
		>
			<span class="material-symbols-outlined">translate</span>
		</button>

		{#if open}
			<div
				class="dropdown-menu dropdown-lg p-0 border-0 dropdown-menu-end show"
				transition:fadeScale
			>
				<span class="fw-semibold fs-15 text-secondary title p-3 d-block">Choose Language</span>
				<div class="max-h-275 px-3 pb-3" style="overflow-y: auto;">
					{#each [{ name: 'English', img: '/assets/images/usa.svg' }, { name: 'Canada', img: '/assets/images/canada.svg' }, { name: 'Germany', img: '/assets/images/germany.svg' }, { name: 'Portugal', img: '/assets/images/portugal.svg' }, { name: 'Spain', img: '/assets/images/spain.svg' }] as lang}
						<div class="notification-menu">
							<button
								on:click={() => (open = !open)}
								class="dropdown-item d-flex align-items-center"
							>
								<div class="flex-shrink-0">
									<img src={lang.img} class="wh-30 rounded-circle" alt={lang.name} />
								</div>
								<div class="flex-grow-1 ms-2">
									<span class="text-secondary fw-medium fs-14">{lang.name}</span>
								</div>
							</button>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</li>

<style>
	.dropdown-menu.show {
		display: block;
	}
</style>
