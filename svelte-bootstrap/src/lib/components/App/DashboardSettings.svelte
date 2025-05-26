<script>
	import { onMount } from 'svelte';
	import LtrRtl from '$lib/components/ThemeSettings/LtrRtl.svelte';
	import SidebarLightDark from '$lib/components/ThemeSettings/SidebarLightDark.svelte';
	import HeaderLightDark from '$lib/components/ThemeSettings/HeaderLightDark.svelte';
	import FooterLightDark from '$lib/components/ThemeSettings/FooterLightDark.svelte';
	import CardStyle from '$lib/components/ThemeSettings/CardStyle.svelte';
	import CardStyleBgWhite from '$lib/components/ThemeSettings/CardStyleBGWhite.svelte';

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

<li class="header-right-item">
	<button
		class="theme-settings-btn p-0 border-0 bg-transparent"
		type="button"
		data-bs-toggle="offcanvas"
		data-bs-target="#offcanvasScrolling"
		aria-controls="offcanvasScrolling"
		on:click={openSettings}
	>
		<i
			class="material-symbols-outlined"
			data-bs-toggle="tooltip"
			data-bs-placement="left"
			data-bs-title="Click On Theme Settings">settings</i
		>
	</button>
</li>

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
