<script>
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { EditIcon, EyeIcon, MoreVerticalIcon, TrashIcon } from 'svelte-feather-icons';

	let show = false;

	const toggleDropdown = () => {
		show = !show;
	};

	const closeDropdown = () => {
		show = false;
	};

	onMount(() => {
		document.addEventListener('click', (e) => {
			if (!e.target.closest('.dropdown')) {
				closeDropdown();
			}
		});
	});

	// 👇 Combined transition
	function fadeScale(node, { duration = 250 }) {
		return {
			duration,
			css: (t) => `opacity: ${t}; transform: scale(${0.95 + t * 0.05});`
		};
	}
</script>

<div class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-1">
	<span class="d-block mb-1">Ethereum Rate</span>
	<div class="dropdown action-opt text-center">
		<button type="button" class="btn bg-transparent p-0" on:click|stopPropagation={toggleDropdown}>
			<MoreVerticalIcon />
		</button>

		{#if show}
			<ul
				class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow show"
				transition:fadeScale
			>
				<li>
					<button class="dropdown-item" on:click|stopPropagation={toggleDropdown}>
						<EditIcon />
						Edit
					</button>
				</li>
				<li>
					<button class="dropdown-item" on:click|stopPropagation={toggleDropdown}>
						<EyeIcon />
						View
					</button>
				</li>
				<li>
					<button button class="dropdown-item" on:click|stopPropagation={toggleDropdown}>
						<TrashIcon />
						Delete
					</button>
				</li>
			</ul>
		{/if}
	</div>
</div>
