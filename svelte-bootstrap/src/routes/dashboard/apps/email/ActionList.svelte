<script>
	let open = false;

	const dropdownItems = ['All', 'None', 'Read', 'Unread', 'Starred', 'Unstarred'];

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
		<ul class="dropdown-menu bg-white box-shadow show" style="border: 1px solid #F6F7F9;">
			{#each dropdownItems as item}
				<li>
					<a class="dropdown-item fs-13" href="#">{item}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.dropdown-menu.show {
		display: block;
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 1000;
	}
</style>
