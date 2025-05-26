<script>
	let open = false;

	const dropdownOptions = [
		{ label: 'All', href: '#' },
		{ label: 'None', href: '#' },
		{ label: 'Read', href: '#' },
		{ label: 'Unread', href: '#' },
		{ label: 'Starred', href: '#' },
		{ label: 'Untarred', href: '#' }
	];

	function toggleDropdown() {
		open = !open;
	}

	function closeDropdown() {
		open = false;
	}
</script>

<div class="btn-group position-relative" on:focusout={closeDropdown}>
	<button
		type="button"
		class="btn btn-danger dropdown-toggle p-0 border-0 ps-0 bg-transparent"
		aria-label="Toggle dropdown menu"
		on:click={toggleDropdown}
	>
	</button>

	{#if open}
		<ul
			class="dropdown-menu bg-white box-shadow dropdown-menu-end show"
			style="border: 1px solid rgb(246, 247, 249); position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(-24px, 54px);"
		>
			{#each dropdownOptions as option}
				<li>
					<a class="dropdown-item fs-13" href={option.href}>
						{option.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.dropdown-menu.show {
		display: block;
		z-index: 1000;
	}
</style>
