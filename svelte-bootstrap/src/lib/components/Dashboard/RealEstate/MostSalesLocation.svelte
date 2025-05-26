<script>
	import DropdownFilter from '$lib/components/Common/DropdownFilter.svelte';

	import { onMount } from 'svelte';

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

<div class="card bg-white border-0 rounded-3 mb-4">
	<div class="card-body p-4">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
			<h3 class="mb-0">Most Sales Location</h3>

			<DropdownFilter />
		</div>
		<div class="text-center" style="margin: 38px 0;">
			<div id="most_sales_location" bind:this={mapContainer}></div>
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
						<div class="progress-bar bg-danger" style="width: 75%">
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
						<div class="progress-bar bg-success" style="width: 40%">
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
						<div class="progress-bar bg-primary-div" style="width: 10%">
							<span class="count fw-medium text-body">10%</span>
						</div>
					</div>
				</div>
			</li>
			<li class="d-flex align-items-center">
				<div class="flex-shrink-0">
					<img src="/assets/images/portugal.svg" class="wh-30 rounded-circle" alt="portugal" />
				</div>
				<div class="flex-grow-1 ms-3">
					<span class="fw-medium d-block mb-2">Portugal</span>
					<div
						class="progress"
						role="progressbar"
						aria-label="Example with label"
						aria-valuenow="0o5"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div class="progress-bar" style="width: 05%">
							<span class="count fw-medium text-body">05%</span>
						</div>
					</div>
				</div>
			</li>
			<li class="d-flex align-items-center">
				<div class="flex-shrink-0">
					<img src="/assets/images/spain.svg" class="wh-30 rounded-circle" alt="spain" />
				</div>
				<div class="flex-grow-1 ms-3">
					<span class="fw-medium d-block mb-2">Spain</span>
					<div
						class="progress"
						role="progressbar"
						aria-label="Example with label"
						aria-valuenow="15"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div class="progress-bar bg-secondary bg-opacity-50" style="width: 15%">
							<span class="count fw-medium text-body">15%</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>
