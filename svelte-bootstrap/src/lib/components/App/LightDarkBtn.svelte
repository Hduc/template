<script>
	import { onMount } from 'svelte';
	export let stylingClass = '';

	let currentTheme = 'light';

	onMount(() => {
		const saved = localStorage.getItem('trezo_theme');
		currentTheme = saved || 'light';
		document.body.setAttribute('data-theme', currentTheme);
	});

	function toggleTheme() {
		currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
		document.body.setAttribute('data-theme', currentTheme);
		localStorage.setItem('trezo_theme', currentTheme);
	}
</script>

<button
	class={stylingClass
		? stylingClass
		: 'switch-toggle settings-btn dark-btn p-0 bg-transparent position-absolute top-0 d-none'}
	id="switch-toggle"
	on:click={toggleTheme}
>
	<span class="dark">
		<i class="material-symbols-outlined">light_mode</i>
	</span>
	<span class="light">
		<i class="material-symbols-outlined">dark_mode</i>
	</span>
</button>
