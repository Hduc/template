<script>
	import { onMount } from 'svelte';

	let direction = 'ltr';

	function setTheme(dir) {
		direction = dir;
		document.documentElement.setAttribute('dir', dir);
		localStorage.setItem('trezo_rtl', dir);
	}

	function toggleDirection() {
		if (localStorage.getItem('trezo_rtl') === 'rtl') {
			setTheme('ltr');
		} else {
			setTheme('rtl');
		}
	}

	onMount(() => {
		const saved = localStorage.getItem('trezo_rtl');
		setTheme(saved || 'ltr');
	});
</script>

<div class="mb-4 pb-2">
	<h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">RTL / LTR</h4>

	<div
		class="d-flex align-items-center position-relative settings-box-wrap for-rtl-mode"
		style="gap: 25px;"
	>
		<div class="cursor position-relative active-wrap2">
			<div class="settings-box">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary opacity-1"></i>
				<i
					class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0 opacity-0"
				></i>
				<span class="fw-semibold">LTR</span>
			</div>
		</div>
		<div class="cursor position-relative active-wrap1">
			<div class="settings-box for-rtl">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px;">
				<i class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary opacity-1"></i>
				<i
					class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0 opacity-0"
				></i>
				<span class="fw-semibold">RTL</span>
			</div>
		</div>
		<label id="switch" class="switch-for-rtl">
			<input
				type="checkbox"
				class="position-absolute top-0 bottom-0 start-0 end-0 opacity-0 cursor"
				on:click={toggleDirection}
				id="slider"
			/>
			<span class="sliders round"></span>
		</label>
	</div>
</div>
