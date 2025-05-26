<script>
	import {
		MoreHorizontalIcon,
		ClockIcon,
		PieChartIcon,
		RotateCwIcon,
		CalendarIcon,
		BarChartIcon,
		EyeIcon,
		TrashIcon
	} from 'svelte-feather-icons';
	import { cubicOut } from 'svelte/easing';

	let open = false;
	let dropdownRef;
	let menuRef;
	let menuPosition = 'dropdown-menu-end';

	function fadeScale(node, { delay = 0, duration = 150, easing = cubicOut, baseScale = 0.95 }) {
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

	function toggleDropdown() {
		open = !open;

		if (open) {
			setTimeout(() => {
				if (menuRef) {
					const rect = menuRef.getBoundingClientRect();
					const viewportWidth = window.innerWidth;

					if (rect.right > viewportWidth) {
						menuPosition = ''; // Remove end-align class
					} else {
						menuPosition = 'dropdown-menu-end'; // Keep aligned right
					}
				}
			}, 0);
		}
	}
</script>

<div class="dropdown action-opt" bind:this={dropdownRef}>
	<button
		class="btn bg-transparent p-0"
		type="button"
		aria-label="More options"
		on:click={toggleDropdown}
	>
		<MoreHorizontalIcon />
	</button>

	{#if open}
		<ul
			class={`dropdown-menu bg-white border box-shadow ${menuPosition} ${open ? 'show' : ''}`}
			bind:this={menuRef}
			transition:fadeScale
		>
			<li>
				<button on:click={() => (open = false)} class="dropdown-item"><ClockIcon /> Today</button>
			</li>
			<li>
				<button on:click={() => (open = false)} class="dropdown-item"
					><PieChartIcon /> Last 7 Days</button
				>
			</li>
			<li>
				<button on:click={() => (open = false)} class="dropdown-item"
					><RotateCwIcon /> Last Month</button
				>
			</li>
			<li>
				<button on:click={() => (open = false)} class="dropdown-item"
					><CalendarIcon /> Last 1 Year</button
				>
			</li>
			<li>
				<button on:click={() => (open = false)} class="dropdown-item"
					><BarChartIcon /> All Time</button
				>
			</li>
			<li>
				<button on:click={() => (open = false)} class="dropdown-item"><EyeIcon /> View</button>
			</li>
			<li>
				<button on:click={() => (open = false)} class="dropdown-item"><TrashIcon /> Delete</button>
			</li>
		</ul>
	{/if}
</div>

<style>
	.dropdown-menu-end {
		right: 0;
		left: auto;
	}
</style>
