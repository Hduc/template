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

<div class="col-lg-4">
	<div class="card bg-white border rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
				<h3 class="mb-0">Sales by Locations</h3>

				<DropdownFilter />
			</div>
			<div class="text-center mb-0">
				<div bind:this={mapContainer} style="width: 100%; height: 150px;"></div>
			</div>

			<div class="default-table-area style-two sales-locations-table">
				<div class="table-responsive">
					<table class="table align-middle border-0">
						<thead>
							<tr class="border-bottom">
								<th scope="col" class="bg-transparent">Country</th>
								<th scope="col" class="text-end bg-transparent">Orders</th>
								<th scope="col" class="text-end bg-transparent">Earnings</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="text-end fw-medium ps-0">
									<div class="d-flex">
										<img
											src="/assets/images/usa.svg"
											class="rounded-circle"
											style="width: 20px;"
											alt="usa"
										/>
										<span class="ps-2 fw-medium">USA</span>
									</div>
								</td>
								<td class="text-end fw-medium">22,124</td>
								<td class="text-end fw-medium">$250.4k</td>
							</tr>
							<tr>
								<td class="text-end fw-medium ps-0">
									<div class="d-flex">
										<img
											src="/assets/images/germany.svg"
											class="rounded-circle"
											style="width: 20px;"
											alt="germany"
										/>
										<span class="ps-2 fw-medium">Germany</span>
									</div>
								</td>
								<td class="text-end fw-medium">18,320</td>
								<td class="text-end fw-medium">$180.3k</td>
							</tr>
							<tr>
								<td class="text-end fw-medium ps-0">
									<div class="d-flex">
										<img
											src="/assets/images/united-kingdom.svg"
											class="rounded-circle"
											style="width: 20px;"
											alt="united-kingdom"
										/>
										<span class="ps-2 fw-medium">UK</span>
									</div>
								</td>
								<td class="text-end fw-medium">12,560</td>
								<td class="text-end fw-medium">$125.6k</td>
							</tr>
							<tr>
								<td class="text-end fw-medium ps-0">
									<div class="d-flex">
										<img
											src="/assets/images/canada.svg"
											class="rounded-circle"
											style="width: 20px;"
											alt="usa"
										/>
										<span class="ps-2 fw-medium">Canada</span>
									</div>
								</td>
								<td class="text-end fw-medium">8,720</td>
								<td class="text-end fw-medium">$94.1k</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@import '../../../assets/jsvectormap.min.css';
</style>
