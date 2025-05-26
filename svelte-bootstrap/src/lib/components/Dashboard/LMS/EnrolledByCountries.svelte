<script>
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import {
		BarChartIcon,
		CalendarIcon,
		ClockIcon,
		EyeIcon,
		MoreHorizontalIcon,
		PieChartIcon,
		RotateCwIcon,
		TrashIcon
	} from 'svelte-feather-icons';

	let open = false;
	let dropdownRef;

	function fadeScale(node, { delay = 0, duration = 150, easing = cubicOut, baseScale = 0.95 }) {
		const o = +getComputedStyle(node).opacity;
		const s = baseScale;

		return {
			delay,
			duration,
			easing,
			css: (t) => `
        opacity: ${t * o};
        transform: scale(${s + (1 - s) * t});
      `
		};
	}

	let mapContainer;

	onMount(async () => {
		const { default: jsVectorMap } = await import('jsvectormap');
		await import('jsvectormap/dist/maps/world-merc.js');

		const markers = [
			{ name: 'United States', coords: [26.8206, 30.8025] },
			{ name: 'Germany', coords: [61.524, 105.3188] },
			{ name: 'United Kingdom', coords: [56.1304, -106.3468] },
			{ name: 'Canada', coords: [71.7069, -42.6043] },
			{ name: 'Portugal', coords: [80.7069, -70.6043] },
			{ name: 'Spain', coords: [0.7069, -40.6043] }
		];

		const jvm = new jsVectorMap({
			map: 'world_merc',
			selector: mapContainer,
			onLoaded(map) {
				window.addEventListener('resize', () => {
					map.updateSize();
				});
			},
			regionStyle: {
				initial: { fill: '#d1d4db' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				if (marker.name === 'Russia' || marker.name === 'Brazil') {
					return index;
				}
			}),
			markers,
			markerStyle: {
				initial: { fill: '#5c5cff' },
				selected: { fill: '#ff5050' }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: 'Inter',
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	});
</script>

<div class="col-xxl-4 col-md-6">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
				<h3 class="mb-0">Enrolled by Countries</h3>

				<div class="dropdown action-opt" bind:this={dropdownRef}>
					<button
						class="btn bg-transparent p-0"
						type="button"
						aria-label="More options"
						on:click={() => (open = !open)}
					>
						<MoreHorizontalIcon />
					</button>

					{#if open}
						<ul
							class={`dropdown-menu dropdown-menu-end bg-white border box-shadow ${open ? 'show' : ''}`}
							transition:fadeScale
						>
							<li>
								<button on:click={() => (open = !open)} class="dropdown-item">
									<ClockIcon />
									Today
								</button>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}>
									<PieChartIcon />
									Last 7 Days
								</button>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}
									><RotateCwIcon /> Last Month</button
								>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}
									><CalendarIcon /> Last 1 Year</button
								>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}
									><BarChartIcon /> All Time</button
								>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}
									><EyeIcon /> View</button
								>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}
									><TrashIcon /> Delete</button
								>
							</li>
						</ul>
					{/if}
				</div>
			</div>
			<div class="text-center" style="margin: 43px 0;">
				<div bind:this={mapContainer} style="width: 100%; height: 150px;"></div>
			</div>
			<ul class="ps-0 mb-0 list-unstyled sales_by_locations mt-4">
				<li class="d-flex align-items-center">
					<div class="flex-shrink-0">
						<img src="/assets/images/usa.svg" class="wh-30 rounded-circle" alt="usa" />
					</div>
					<div class="flex-grow-1 ms-3">
						<span class="fw-medium d-block mb-2">United States</span>
						<div
							class="progress"
							role="progressbar"
							aria-label="Example with label"
							aria-valuenow="85"
							aria-valuemin="0"
							aria-valuemax="100"
						>
							<div class="progress-bar" style="width: 85%">
								<span class="count fw-medium text-body">85%</span>
							</div>
						</div>
					</div>
				</li>
				<li class="d-flex align-items-center">
					<div class="flex-shrink-0">
						<img src="/assets/images/germany.svg" class="wh-30 rounded-circle" alt="germany" />
					</div>
					<div class="flex-grow-1 ms-3">
						<span class="fw-medium d-block mb-2">Germany</span>
						<div
							class="progress"
							role="progressbar"
							aria-label="Example with label"
							aria-valuenow="75"
							aria-valuemin="0"
							aria-valuemax="100"
						>
							<div class="progress-bar" style="width: 75%">
								<span class="count fw-medium text-body">75%</span>
							</div>
						</div>
					</div>
				</li>
				<li class="d-flex align-items-center">
					<div class="flex-shrink-0">
						<img
							src="/assets/images/united-kingdom.svg"
							class="wh-30 rounded-circle"
							alt="united-kingdom"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<span class="fw-medium d-block mb-2">United Kingdom</span>
						<div
							class="progress"
							role="progressbar"
							aria-label="Example with label"
							aria-valuenow="40"
							aria-valuemin="0"
							aria-valuemax="100"
						>
							<div class="progress-bar" style="width: 40%">
								<span class="count fw-medium text-body">40%</span>
							</div>
						</div>
					</div>
				</li>
				<li class="d-flex align-items-center">
					<div class="flex-shrink-0">
						<img src="/assets/images/canada.svg" class="wh-30 rounded-circle" alt="canada" />
					</div>
					<div class="flex-grow-1 ms-3">
						<span class="fw-medium d-block mb-2">Canada</span>
						<div
							class="progress"
							role="progressbar"
							aria-label="Example with label"
							aria-valuenow="10"
							aria-valuemin="0"
							aria-valuemax="100"
						>
							<div class="progress-bar" style="width: 10%">
								<span class="count fw-medium text-body">10%</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
