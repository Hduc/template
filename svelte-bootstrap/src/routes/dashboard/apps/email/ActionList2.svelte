<script>
	import { EyeIcon, LockIcon, Trash2Icon } from 'svelte-feather-icons';

	let open = false;

	function toggleDropdown() {
		open = !open;
	}

	function closeDropdown() {
		open = false;
	}
</script>

<div
	class="dropdown action-opt ms-2 position-relative top-3"
	on:focusout={closeDropdown}
	data-bs-title="More Option"
>
	<button class="p-0 border-0 bg-transparent" type="button" on:click={toggleDropdown}>
		<i class="material-symbols-outlined fs-20 text-body hover">more_vert</i>
	</button>
	{#if open}
		<ul
			class="dropdown-menu dropdown-menu-end bg-white border box-shadow show"
			style="position: absolute;"
		>
			<li>
				<a class="dropdown-item" href="javascript:void(0);">
					<EyeIcon />
					View All
				</a>
			</li>
			<li>
				<a class="dropdown-item" href="javascript:void(0);">
					<Trash2Icon />
					Delete One
				</a>
			</li>
			<li>
				<a class="dropdown-item" href="javascript:void(0);">
					<LockIcon />
					Block
				</a>
			</li>
		</ul>
	{/if}
</div>
