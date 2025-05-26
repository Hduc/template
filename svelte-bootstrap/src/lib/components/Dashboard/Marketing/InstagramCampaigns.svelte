<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'Campaign Budget',
					data: [50, 40, 30, 50, 40, 30, 50]
				},
				{
					name: 'Followers Goal',
					data: [11, 32, 45, 32, 34, 52, 41]
				}
			],
			chart: {
				type: 'area',
				height: 149,
				zoom: { enabled: false },
				toolbar: { show: false }
			},
			colors: ['#FF6D57', '#AD63F6'],
			dataLabels: { enabled: false },
			grid: { show: false, borderColor: '#ECEEF2' },
			stroke: { curve: 'smooth', width: 2 },
			xaxis: {
				categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				axisTicks: { show: false, color: '#ECEEF2' },
				axisBorder: { show: false, color: '#ECEEF2' },
				labels: {
					show: false,
					style: { colors: '#8695AA', fontSize: '12px' }
				}
			},
			yaxis: {
				show: false,
				labels: {
					formatter: (val) => '$' + val + 'k',
					style: { colors: '#64748B', fontSize: '12px' }
				},
				axisBorder: { show: false, color: '#ECEEF2' },
				axisTicks: { show: false, color: '#ECEEF2' }
			},
			legend: {
				show: false,
				position: 'top',
				fontSize: '12px',
				horizontalAlign: 'left',
				itemMargin: { horizontal: 8, vertical: 0 },
				labels: { colors: '#64748B' },
				markers: {
					size: 7,
					offsetX: -2,
					offsetY: -0.5,
					shape: 'diamond'
				}
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<div class="col-md-6">
	<div class="rounded-3 mb-4 for-dark" style="background-color: #DDE4FF;">
		<div class="card-body p-4">
			<div class="mb-4">
				<h3 class="mb-0">
					Instagram Campaigns
					<span class="bg-danger bg-opacity-10 text-danger fs-12 py-1 px-2 rounded-1">Live Now</span
					>
				</h3>
			</div>

			<div class="d-flex justify-content-between mb-3">
				<div>
					<div class="d-flex align-items-center mb-2">
						<span
							class="d-inline-block rounded-circle bg-primary-div position-relative top-1"
							style="width: 10px; height: 10px;"
						></span>
						<span class="ms-2">Campaign Budget</span>
					</div>
					<h3 class="fs-24 mb-0">$3200</h3>
				</div>
				<div>
					<div class="d-flex align-items-center mb-2">
						<span
							class="d-inline-block rounded-circle bg-danger position-relative top-1"
							style="width: 10px; height: 10px;"
						></span>
						<span class="ms-2">Followers Goal</span>
					</div>
					<h3 class="fs-24 mb-0">140,000</h3>
				</div>
			</div>

			<div style="margin: -55px -11px -30px -12px;">
				<!-- Chart Container -->
				<div id="instagram_campaigns" bind:this={chartContainer}></div>
			</div>
		</div>
	</div>
</div>
