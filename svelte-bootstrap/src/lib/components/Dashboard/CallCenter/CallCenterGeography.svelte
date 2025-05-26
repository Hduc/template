<script>
	import DropDownMonth from '$lib/components/Common/DropDownMonth.svelte';

	import { onMount } from 'svelte';
	let mapEl;

	onMount(async () => {
		const { default: jsVectorMap } = await import('jsvectormap');
		await import('jsvectormap/dist/maps/world-merc.js');

		const markers = [
			{ name: 'United States', coords: [26.8206, 30.8025] },
			{ name: 'Canada', coords: [71.7069, -42.6043] },
			{ name: 'Brazil', coords: [0.7069, -40.6043] }
		];

		if (mapEl) {
			const jvm = new jsVectorMap({
				map: 'world_merc',
				selector: mapEl,
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
					const name = marker.name;
					if (name === 'Russia' || name === 'Brazil') {
						return index;
					}
				}),
				markers: markers,
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
		}
	});
</script>

<div class="card custom-shadow rounded-3 bg-white border mb-4">
	<div class="custom-padding-30">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
			<h3 class="mb-0 fw-semibold">Call Center Geography</h3>

			<DropDownMonth classnames="without-border position-relative" />
		</div>
		<div class="text-center" style="margin: 40px 0;">
			<div id="call_center_geography" bind:this={mapEl} style="height: 187px;"></div>
		</div>
		<ul class="ps-0 mb-0 list-unstyled sales_by_locations mt-4">
			<li class="d-flex align-items-center pe-0">
				<div class="flex-shrink-0">
					<img src="/assets/images/usa.svg" class="wh-30 rounded-circle" alt="usa" />
				</div>
				<div class="flex-grow-1 ms-3">
					<div class="d-flex justify-content-between position-relative">
						<span class="fw-medium d-block mb-2">United States</span>
						<span class="count fw-medium text-body">90%</span>
						<span class="position-absolute top-50 start-50 translate-middle pb-2 fw-medium"
							>1,200 calls</span
						>
					</div>
					<div
						class="progress"
						role="progressbar"
						aria-label="Example with label"
						aria-valuenow="90"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div class="progress-bar bg-success-60" style="width: 90%"></div>
					</div>
				</div>
			</li>
			<li class="d-flex align-items-center pe-0">
				<div class="flex-shrink-0">
					<img src="/assets/images/canada.svg" class="wh-30 rounded-circle" alt="canada" />
				</div>
				<div class="flex-grow-1 ms-3">
					<div class="d-flex justify-content-between position-relative">
						<span class="fw-medium d-block mb-2">Canada</span>
						<span class="count fw-medium text-body">88%</span>
						<span class="position-absolute top-50 start-50 translate-middle pb-2 fw-medium"
							>980 calls</span
						>
					</div>
					<div
						class="progress"
						role="progressbar"
						aria-label="Example with label"
						aria-valuenow="88"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div class="progress-bar bg-primary" style="width: 88%"></div>
					</div>
				</div>
			</li>
			<li class="d-flex align-items-center pe-0">
				<div class="flex-shrink-0">
					<img src="/assets/images/brazil.svg" class="wh-30 rounded-circle" alt="brazil" />
				</div>
				<div class="flex-grow-1 ms-3">
					<div class="d-flex justify-content-between position-relative">
						<span class="fw-medium d-block mb-2">Brazil</span>
						<span class="count fw-medium text-body">65%</span>
						<span class="position-absolute top-50 start-50 translate-middle pb-2 fw-medium"
							>850 calls</span
						>
					</div>
					<div
						class="progress"
						role="progressbar"
						aria-label="Example with label"
						aria-valuenow="65"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div class="progress-bar bg-danger" style="width: 65%"></div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>
