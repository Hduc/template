<script>
	import { onMount } from 'svelte';

	let isVisible = true;

	onMount(() => {
		setTimeout(() => {
			isVisible = false;
		}, 1000);
	});
</script>

{#if isVisible}
	<div class="preloader" id="preloader">
		<div class="preloader">
			<div class="waviy position-relative">
				<span class="d-inline-block">T</span>
				<span class="d-inline-block">R</span>
				<span class="d-inline-block">E</span>
				<span class="d-inline-block">Z</span>
				<span class="d-inline-block">O</span>
			</div>
		</div>
	</div>
{/if}
