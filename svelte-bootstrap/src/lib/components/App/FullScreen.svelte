<script>
	let isFullscreen = false;

	function toggleFullScreen() {
		if (
			(document.fullScreenElement !== undefined && document.fullScreenElement === null) ||
			(document.msFullscreenElement !== undefined && document.msFullscreenElement === null) ||
			(document.mozFullScreen !== undefined && !document.mozFullScreen) ||
			(document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)
		) {
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}

		isFullscreen = !isFullscreen;
	}
</script>

<li class="header-right-item">
	<button
		class="fullscreen-btn bg-transparent p-0 border-0 {isFullscreen ? 'active' : ''}"
		on:click={toggleFullScreen}
		id="fullscreen-button"
	>
		<i class="material-symbols-outlined text-body">fullscreen</i>
	</button>
</li>
