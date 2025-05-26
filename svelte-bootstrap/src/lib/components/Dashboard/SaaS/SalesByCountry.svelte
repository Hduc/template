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
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
			<h3 class="mb-0">Sales By Country</h3>
			<DropdownFilter />
		</div>
		<div class="ext-center" style="margin: 54px 0;">
			<div bind:this={mapContainer} id="sales_by_country_map"></div>
		</div>
		<ul class="ps-0 mb-0 list-unstyled">
			<li class="mb-3 pb-3 border-bottom">
				<div class="d-flex align-items-center justify-content-between">
					<div class="flex-shrink-0">
						<div class="d-flex align-items-center">
							<img
								src="/assets/images/united-states-3.png"
								style="width: 24px;"
								alt="united-states"
							/>
							<div class="ms-3">
								<h4 class="mb-0 fs-12 fw-semibold lh-1">United States</h4>
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<div class="d-flex align-items-center justify-content-end">
							<div class="progress-responsive" style="width: 120px;">
								<div
									class="progress rounded-pill"
									style="height: 8px; background-color: #ECF0FF;"
									role="progressbar"
									aria-label="Example with label"
									aria-valuenow="85"
									aria-valuemin="0"
									aria-valuemax="100"
								>
									<div
										class="progress-bar rounded-pill"
										style="width: 85%; height: 8px; background-color: #757DFF;"
									></div>
								</div>
							</div>
							<span class="count text-body ms-3 fs-14 fw-medium">85%</span>
						</div>
					</div>
				</div>
			</li>
			<li class="mb-3 pb-3 border-bottom">
				<div class="d-flex align-items-center justify-content-between">
					<div class="flex-shrink-0">
						<div class="d-flex align-items-center">
							<img src="/assets/images/japan.png" style="width: 24px;" alt="japan" />
							<div class="ms-3">
								<h4 class="mb-0 fs-12 fw-semibold lh-1">Japan</h4>
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<div class="d-flex align-items-center justify-content-end">
							<div class="progress-responsive" style="width: 120px;">
								<div
									class="progress rounded-pill"
									style="height: 8px; background-color: #ECF0FF;"
									role="progressbar"
									aria-label="Example with label"
									aria-valuenow="65"
									aria-valuemin="0"
									aria-valuemax="100"
								>
									<div
										class="progress-bar rounded-pill"
										style="width: 65%; height: 8px; background-color: #0F79F3;"
									></div>
								</div>
							</div>
							<span class="count text-body ms-3 fs-14 fw-medium">65%</span>
						</div>
					</div>
				</div>
			</li>
			<li class="mb-3 pb-3 border-bottom">
				<div class="d-flex align-items-center justify-content-between">
					<div class="flex-shrink-0">
						<div class="d-flex align-items-center">
							<img src="/assets/images/australia-2.png" style="width: 24px;" alt="australia" />
							<div class="ms-3">
								<h4 class="mb-0 fs-12 fw-semibold lh-1">Australia</h4>
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<div class="d-flex align-items-center justify-content-end">
							<div class="progress-responsive" style="width: 120px;">
								<div
									class="progress rounded-pill"
									style="height: 8px; background-color: #ECF0FF;"
									role="progressbar"
									aria-label="Example with label"
									aria-valuenow="45"
									aria-valuemin="0"
									aria-valuemax="100"
								>
									<div
										class="progress-bar rounded-pill"
										style="width: 45%; height: 8px; background-color: #9135E8;"
									></div>
								</div>
							</div>
							<span class="count text-body ms-3 fs-14 fw-medium">45%</span>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="d-flex align-items-center justify-content-between">
					<div class="flex-shrink-0">
						<div class="d-flex align-items-center">
							<img src="/assets/images/germany-2.png" style="width: 24px;" alt="germany" />
							<div class="ms-3">
								<h4 class="mb-0 fs-12 fw-semibold lh-1">Germany</h4>
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<div class="d-flex align-items-center justify-content-end">
							<div class="progress-responsive" style="width: 120px;">
								<div
									class="progress rounded-pill"
									style="height: 8px; background-color: #ECF0FF;"
									role="progressbar"
									aria-label="Example with label"
									aria-valuenow="75"
									aria-valuemin="0"
									aria-valuemax="100"
								>
									<div
										class="progress-bar rounded-pill"
										style="width: 75%; height: 8px; background-color: #25B003;"
									></div>
								</div>
							</div>
							<span class="count text-body ms-3 fs-14 fw-medium">75%</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>

<style>
	@import '../../../assets/jsvectormap.min.css';
</style>
