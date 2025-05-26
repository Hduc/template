<script>
	import { onMount } from 'svelte';
	export let classnames = '';
	let isOpen = false;
	let selected = 'This Month';
	let dropdownEl;

	const options = ['This Day', 'This Week', 'This Month', 'This Year'];

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectOption(option) {
		selected = option;
		isOpen = false;
	}

	function handleClickOutside(event) {
		if (dropdownEl && !dropdownEl.contains(event.target)) {
			isOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class={`dropdown select-dropdown ${classnames}`}>
	<button
		class="dropdown-toggle bg-transparent border text-body rounded-2"
		style="padding-right: 35px;"
		type="button"
		on:click={toggleDropdown}
	>
		{selected}
	</button>

	{#if isOpen}
		<ul
			class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3 show"
			style="display: block;"
		>
			{#each options as option}
				<li>
					<button
						class="dropdown-item text-secondary py-2 px-3"
						on:click={() => selectOption(option)}
					>
						{option}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
