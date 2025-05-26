<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let open = false;
	let dropdownRef;

	// Close when clicking outside
	onMount(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef && !dropdownRef.contains(event.target)) {
				open = false;
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<li class="header-right-item" bind:this={dropdownRef}>
	<div class="dropdown admin-profile">
		<button
			type="button"
			class={`d-xxl-flex align-items-center bg-transparent border-0 text-start p-0 cursor dropdown-toggle ${open ? 'show' : ''}`}
			data-bs-toggle="dropdown"
			on:click={() => (open = !open)}
		>
			<div class="flex-shrink-0">
				<img
					class="rounded-circle wh-40 administrator"
					src="/assets/images/administrator.jpg"
					alt="admin"
				/>
			</div>
			<div class="flex-grow-1 ms-2">
				<div class="d-flex align-items-center justify-content-between">
					<div class="d-none d-xxl-block">
						<div class="d-flex align-content-center">
							<h3>Olivia</h3>
						</div>
					</div>
				</div>
			</div>
		</button>
		{#if open}
			<div
				class="dropdown-menu border-0 bg-white dropdown-menu-end show"
				style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 42px);"
				data-popper-placement="bottom-end"
			>
				<div class="d-flex align-items-center info">
					<div class="flex-shrink-0">
						<img
							class="rounded-circle wh-30 administrator"
							src="/assets/images/administrator.jpg"
							alt="admin"
						/>
					</div>
					<div class="flex-grow-1 ms-2">
						<h3 class="fw-medium">Olivia John</h3>
						<span class="fs-12">Marketing Manager</span>
					</div>
				</div>
				<ul class="admin-link ps-0 mb-0 list-unstyled">
					<li>
						<a
							class="dropdown-item admin-item-link d-flex align-items-center text-body"
							href="/dashboard/my-profile"
						>
							<i class="material-symbols-outlined">account_circle</i>
							<span class="ms-2">My Profile</span>
						</a>
					</li>
					<li>
						<a
							class="dropdown-item admin-item-link d-flex align-items-center text-body"
							href="/dashboard/chat"
						>
							<i class="material-symbols-outlined">chat</i>
							<span class="ms-2">Messages</span>
						</a>
					</li>
					<li>
						<a
							class="dropdown-item admin-item-link d-flex align-items-center text-body"
							href="/dashboard/to-do-list"
						>
							<i class="material-symbols-outlined">format_list_bulleted </i>
							<span class="ms-2">My Task</span>
						</a>
					</li>
					<li>
						<a
							class="dropdown-item admin-item-link d-flex align-items-center text-body"
							href="/dashboard/checkout"
						>
							<i class="material-symbols-outlined">credit_card </i>
							<span class="ms-2">Billing</span>
						</a>
					</li>
				</ul>
				<ul class="admin-link ps-0 mb-0 list-unstyled">
					<li>
						<a
							class="dropdown-item admin-item-link d-flex align-items-center text-body"
							href="/dashboard/settings"
						>
							<i class="material-symbols-outlined">settings </i>
							<span class="ms-2">Settings</span>
						</a>
					</li>
					<li>
						<a
							class="dropdown-item admin-item-link d-flex align-items-center text-body"
							href="/dashboard/tickets"
						>
							<i class="material-symbols-outlined">support</i>
							<span class="ms-2">Support</span>
						</a>
					</li>
					<li>
						<a
							class="dropdown-item admin-item-link d-flex align-items-center text-body"
							href="/auth/lock-screen"
						>
							<i class="material-symbols-outlined">lock</i>
							<span class="ms-2">Lock Screen</span>
						</a>
					</li>
					<li>
						<a
							class="dropdown-item admin-item-link d-flex align-items-center text-body"
							href="/auth/login"
						>
							<i class="material-symbols-outlined">logout</i>
							<span class="ms-2">Logout</span>
						</a>
					</li>
				</ul>
			</div>
		{/if}
	</div>
</li>
