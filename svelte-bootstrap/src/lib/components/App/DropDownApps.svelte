<script>
	import { cubicOut } from 'svelte/easing';
	import { onClickOutside } from '$lib/actions/onClickOutside';
	import { onMount } from 'svelte';

	let open = false;
	let dropdownRef;

	// Custom fade + scale transition
	function fadeScale(
		node,
		{ delay = 0, duration = 200, easing = cubicOut, baseScale = 0.95 } = {}
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

	onMount(() => {
		if (dropdownRef) {
			onClickOutside(dropdownRef, () => {
				open = false;
			});
		}
	});
</script>

<li>
	<div class="dropdown notifications apps" bind:this={dropdownRef}>
		<button
			class="btn btn-secondary border-0 p-0 position-relative"
			type="button"
			on:click={() => (open = !open)}
		>
			<span class="material-symbols-outlined">apps</span>
		</button>

		{#if open}
			<div
				class="dropdown-menu dropdown-lg p-0 border-0 py-4 px-3 max-h-312 show"
				data-simplebar
				transition:fadeScale
			>
				<div class="notification-menu d-flex flex-wrap justify-content-between gap-4">
					{#each [{ name: 'Figma', url: 'https://www.figma.com/', img: '/assets/images/figma.svg' }, { name: 'Dribbble', url: 'https://www.dribbble.com/', img: '/assets/images/dribbble.svg' }, { name: 'Spotify', url: 'https://www.spotify.com/', img: '/assets/images/spotify.svg' }, { name: 'Github', url: 'https://www.github.com/', img: '/assets/images/github.svg' }, { name: 'GDrive', url: 'https://www.google.com/drive/', img: '/assets/images/gdrive.svg' }, { name: 'Trello', url: 'https://www.trello.com/', img: '/assets/images/trello.svg' }, { name: 'Slak', url: 'https://www.slak.com/', img: '/assets/images/slak.svg' }, { name: 'Pinterest', url: 'https://www.pinterest.com/', img: '/assets/images/pinterest.svg' }, { name: 'Facebook', url: 'https://www.facebook.com/', img: '/assets/images/facebook.svg' }, { name: 'Linkedin', url: 'https://www.linkedin.com/', img: '/assets/images/linkedin.svg' }] as app}
						<a href={app.url} target="_blank" class="dropdown-item p-0 text-center">
							<img src={app.img} class="wh-25" alt={app.name} />
							<span>{app.name}</span>
						</a>
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
