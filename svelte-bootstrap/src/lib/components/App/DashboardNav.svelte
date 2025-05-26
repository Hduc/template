<script>
	import { isSidebarCollapsed } from '$lib/stores/sidebar';
	import DropDownApps from './DropDownApps.svelte';
	import FullScreen from './FullScreen.svelte';
	import LanguageDropdown from './LanguageDropdown.svelte';
	import LightDarkBtn from './LightDarkBtn.svelte';
	import Notification from './Notification.svelte';
	import ProfileDropdown from './ProfileDropdown.svelte';
	import DashboardSettings from './DashboardSettings.svelte';

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

<header class="header-area bg-white mb-4 rounded-bottom-15" id="header-area">
	<div class="row align-items-center">
		<div class="col-lg-4 col-sm-6">
			<div class="left-header-content">
				<ul
					class="d-flex align-items-center ps-0 mb-0 list-unstyled justify-content-center justify-content-sm-start"
				>
					<li>
						<button
							class="header-burger-menu bg-transparent p-0 border-0"
							id="header-burger-menu"
							on:click={() => isSidebarCollapsed.update((v) => !v)}
						>
							<span class="material-symbols-outlined">menu</span>
						</button>
					</li>
					<li>
						<form class="src-form position-relative">
							<input type="text" class="form-control" placeholder="Search here....." />
							<button
								type="submit"
								class="src-btn position-absolute top-50 end-0 translate-middle-y bg-transparent p-0 border-0"
							>
								<span class="material-symbols-outlined">search</span>
							</button>
						</form>
					</li>
					<DropDownApps />
				</ul>
			</div>
		</div>

		<div class="col-lg-8 col-sm-6">
			<div class="right-header-content mt-2 mt-sm-0">
				<ul
					class="d-flex align-items-center justify-content-center justify-content-sm-end ps-0 mb-0 list-unstyled"
				>
					<li class="header-right-item">
						<div class="light-dark">
							<LightDarkBtn
								stylingClass="switch-toggle settings-btn dark-btn p-0 bg-transparent border-0"
							/>
						</div>
					</li>
					<LanguageDropdown />
					<FullScreen />
					<Notification />
					<ProfileDropdown />
					<DashboardSettings />
				</ul>
			</div>
		</div>
	</div>
</header>
