<script>
	import { onMount } from 'svelte';

	let mapContainer;

	onMount(async () => {
		const { default: jsVectorMap } = await import('jsvectormap');
		await import('jsvectormap/dist/maps/world-merc.js');

		const markers = [
			{ name: 'United States', coords: [26.8206, 30.8025] },
			{ name: 'Germany', coords: [61.524, 105.3188] },
			{ name: 'United Kingdom', coords: [56.1304, -106.3468] },
			{ name: 'Canada', coords: [71.7069, -42.6043] }
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

<div class="col-xxl-5">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4 pb-0">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
				<h3 class="mb-0">Users by Country</h3>
				<select
					class="form-select month-select form-control p-0 h-auto border-0 pe-4 w-auto"
					style="background-position: right 0 center; color: #64748B !important;"
					aria-label="Default select example"
				>
					<option>Last Week</option>
					<option value="1">Last Month</option>
					<option selected value="2">Last Year</option>
				</select>
			</div>
			<div class="text-center" style="margin: 46px 0;">
				<div
					id="users_by_country_map"
					bind:this={mapContainer}
					style="width: 100%; height: 150px;"
				></div>
			</div>
			<div class="row">
				<div class="col-sm-6">
					<div class="d-flex mb-4">
						<div class="flex-shrink-0 position-relative top-1">
							<img
								src="/assets/images/united-states-2.png"
								class="rounded-circle"
								style="width: 20px; height: 20px;"
								alt="united-states"
							/>
						</div>
						<div class="flex-grow-1 ms-2">
							<span class="fs-12 fw-medium d-block mb-1">United States</span>
							<h4 class="mb-0 fs-16 fw-semibold">
								12,800 <span class="text-body fs-12">35.6%</span>
							</h4>
						</div>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="d-flex mb-4">
						<div class="flex-shrink-0 position-relative top-1">
							<img
								src="/assets/images/united-kingdom-2.png"
								class="rounded-circle"
								style="width: 20px; height: 20px;"
								alt="united-states"
							/>
						</div>
						<div class="flex-grow-1 ms-2">
							<span class="fs-12 fw-medium d-block mb-1">United Kingdom</span>
							<h4 class="mb-0 fs-16 fw-semibold">
								6,750 <span class="text-body fs-12">18.7%</span>
							</h4>
						</div>
					</div>
				</div>
				<div class="col-12">
					<div class="border-bottom mb-4"></div>
				</div>
				<div class="col-sm-6">
					<div class="d-flex mb-4">
						<div class="flex-shrink-0 position-relative top-1">
							<img
								src="/assets/images/canada-2.png"
								class="rounded-circle"
								style="width: 20px; height: 20px;"
								alt="canada"
							/>
						</div>
						<div class="flex-grow-1 ms-2">
							<span class="fs-12 fw-medium d-block mb-1">Canada</span>
							<h4 class="mb-0 fs-16 fw-semibold">
								2,500 <span class="text-body fs-12">6.3%</span>
							</h4>
						</div>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="d-flex mb-4">
						<div class="flex-shrink-0 position-relative top-1">
							<img
								src="/assets/images/australia.png"
								class="rounded-circle"
								style="width: 20px; height: 20px;"
								alt="australia"
							/>
						</div>
						<div class="flex-grow-1 ms-2">
							<span class="fs-12 fw-medium d-block mb-1">Australia</span>
							<h4 class="mb-0 fs-16 fw-semibold">
								2,200 <span class="text-body fs-12">5.4%</span>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@import '../../../assets/jsvectormap.min.css';
</style>
