<script>
	import { onMount } from 'svelte';
	import LtrRtl from './LtrRtl.svelte';
	import SidebarLightDark from './SidebarLightDark.svelte';
	import HeaderLightDark from './HeaderLightDark.svelte';
	import FooterLightDark from './FooterLightDark.svelte';
	import CardStyle from './CardStyle.svelte';
	import CardStyleBgWhite from './CardStyleBGWhite.svelte';

	let showOffcanvas = false;

	function openSettings() {
		showOffcanvas = true;
	}

	function closeSettings() {
		showOffcanvas = false;
		document.body.classList.remove('offcanvas-backdrop', 'show');
		document.body.style.overflow = '';
	}
</script>

<button
	class="theme-settings-btn p-0 border-0 bg-transparent position-absolute"
	style="right: 30px; bottom: 30px;"
	type="button"
	on:click={openSettings}
>
	<i class="material-symbols-outlined bg-primary wh-35 lh-35 text-white rounded-1">settings</i>
</button>

<div
	class={`offcanvas offcanvas-end bg-white ${showOffcanvas ? 'show' : ''}`}
	tabindex="-1"
	id="offcanvasScrolling"
	aria-labelledby="offcanvasScrollingLabel"
	style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
>
	<div class="offcanvas-header bg-body-bg py-3 px-4">
		<h5 class="offcanvas-title fs-18" id="offcanvasScrollingLabel">Theme Settings</h5>
		<button
			type="button"
			class="btn-close"
			data-bs-dismiss="offcanvas"
			aria-label="Close"
			on:click={closeSettings}
		></button>
	</div>
	<div class="offcanvas-body p-4">
		<LtrRtl />

		<SidebarLightDark />

		<HeaderLightDark />

		<FooterLightDark />

		<CardStyle />

		<CardStyleBgWhite />
	</div>
</div>
