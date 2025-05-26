<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'Lead Conversion',
					data: [3, 6, 7, 6, 9, 10, 7]
				}
			],
			chart: {
				type: 'area',
				height: 95,
				zoom: { enabled: false },
				toolbar: { show: false }
			},
			colors: ['#605DFF'],
			dataLabels: { enabled: false },
			grid: {
				show: false,
				borderColor: '#ECEEF2'
			},
			stroke: {
				curve: 'smooth',
				width: 1
			},
			xaxis: {
				categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				axisTicks: { show: false, color: '#B1BBC8' },
				axisBorder: { show: false, color: '#B1BBC8' },
				labels: {
					show: false,
					style: { colors: '#8695AA', fontSize: '12px' }
				}
			},
			yaxis: {
				show: false,
				labels: {
					formatter: (val) => val + '%',
					style: { colors: '#64748B', fontSize: '12px' }
				}
			},
			legend: {
				show: false
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<!-- Chart Layout -->
<div class="col-xxl-3 col-xl-6 col-sm-6">
	<div class="card bg-white border-0 rounded-3 mb-4 stats-box position-relative">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between">
				<div class="mb-35">
					<span>Lead Conversion</span>
					<h3 class="fs-20 mt-1 mb-0">48.79%</h3>
				</div>
				<div class="chart-position" bind:this={chartContainer}></div>
			</div>
			<div class="d-flex justify-content-between flex-wrap gap-2 align-items-center">
				<span class="count fw-medium ms-0">-15%</span>
				<span class="fs-12">Last 30 days</span>
			</div>
		</div>
	</div>
</div>
