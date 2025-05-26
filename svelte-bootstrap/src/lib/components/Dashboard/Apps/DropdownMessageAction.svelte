<script>
	import { CornerUpRightIcon, Trash2Icon } from 'svelte-feather-icons';
	import DropdownMessageAction from './DropdownMessageAction.svelte';

	let isDropdownOpen = false;

	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}

	function closeDropdown() {
		isDropdownOpen = false;
	}
</script>

<div class="dropdown action-opt ms-2">
	<button
		class="p-0 border-0 bg-transparent"
		type="button"
		on:click={toggleDropdown}
		aria-label="More options"
	>
		<i class="ri-more-2-fill text-secondary"></i>
	</button>

	{#if isDropdownOpen}
		<ul
			class="dropdown-menu dropdown-menu-end bg-white border box-shadow show"
			style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 26px);"
		>
			<li>
				<button class="dropdown-item" type="button" on:click={closeDropdown}>
					<CornerUpRightIcon />
					Reply
				</button>
			</li>
			<li>
				<button class="dropdown-item" type="button" on:click={closeDropdown}>
					<Trash2Icon />
					Delete You
				</button>
			</li>
			<li>
				<button class="dropdown-item" type="button" on:click={closeDropdown}>
					<Trash2Icon />
					Delete Everyone
				</button>
			</li>
		</ul>
	{/if}
</div>
