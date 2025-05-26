<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { isSidebarCollapsed } from '$lib/stores/sidebar';

	let openGroup = null;
	$: currentPath = $page.url.pathname;

	import { menuSections } from '$lib/stores/menuSections';

	onMount(() => {
		for (const section of menuSections) {
			for (const item of section.items) {
				if (item.type === 'group' && item.links.some((link) => link.path === currentPath)) {
					openGroup = item.groupKey;
					break;
				}
			}
		}
	});

	const toggleGroup = (key) => {
		openGroup = openGroup === key ? null : key;
	};

	// Update body attribute on change
	$: {
		if (typeof document !== 'undefined') {
			if ($isSidebarCollapsed) {
				document.body.setAttribute('sidebar-data-theme', 'sidebar-hide');
			} else {
				document.body.setAttribute('sidebar-data-theme', 'sidebar-show');
			}
		}
	}
</script>

<div class="sidebar-area" id="sidebar-area">
	<div class="logo position-relative">
		<a href="/dashboard" class="d-block text-decoration-none position-relative">
			<img src="/assets/images/logo-icon.png" alt="logo-icon" />
			<span class="logo-text fw-bold text-dark">Trezo</span>
		</a>
		<button
			class="sidebar-burger-menu bg-transparent p-0 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y"
			id="sidebar-burger-menu"
			aria-label="Toggle sidebar"
			on:click={() => isSidebarCollapsed.update((v) => !v)}
		>
			<span class="material-symbols-outlined">close</span>
		</button>
	</div>

	<aside
		id="layout-menu"
		class="layout-menu menu-vertical menu scroll-bar"
		style="overflow: overlay;"
	>
		<ul class="menu-inner">
			{#each menuSections as section}
				<li class="menu-title small text-uppercase">
					<span class="menu-title-text">{section.title}</span>
				</li>

				{#each section.items as item}
					{#if item.type === 'group'}
						<li class="menu-item {openGroup === item.groupKey ? 'open' : ''}">
							<button
								type="button"
								class="menu-link menu-toggle {openGroup === item.groupKey ? 'active' : ''}"
								on:click={() => toggleGroup(item.groupKey)}
							>
								<span class="material-symbols-outlined menu-icon">{item.icon}</span>
								<span class="title">{item.label}</span>
								{#if item.count}
									<span class="count">{item.count}</span>
								{/if}
								<span class="arrow material-symbols-outlined transition-transform">
									{openGroup === item.groupKey ? 'expand_more' : 'chevron_right'}
								</span>
							</button>

							<ul
								class="menu-sub"
								style="display: {openGroup === item.groupKey ? 'block' : 'none'};"
							>
								{#each item.links as link}
									<li class="menu-item">
										<a
											href={link.path}
											class="menu-link {currentPath === link.path ? 'active' : ''}"
										>
											{link.label}
										</a>
									</li>
								{/each}
							</ul>
						</li>
					{:else if item.type === 'link'}
						<li class="menu-item">
							<a href={item.path} class="menu-link {currentPath === item.path ? 'active' : ''}">
								<span class="material-symbols-outlined menu-icon">{item.icon}</span>
								<span class="title">{item.label}</span>
							</a>
						</li>
					{/if}
				{/each}
			{/each}
		</ul>
	</aside>
</div>
