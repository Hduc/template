<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'Website Visits',
					data: [3, 7, 7, 10, 9, 11, 15]
				}
			],
			chart: {
				type: 'area',
				height: 95,
				zoom: { enabled: false },
				toolbar: { show: false }
			},
			colors: ['#3584FC'],
			dataLabels: { enabled: false },
			grid: {
				show: false,
				borderColor: '#ECEEF2'
			},
			stroke: {
				curve: 'straight',
				width: 1
			},
			xaxis: {
				categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				axisTicks: { show: false },
				axisBorder: { show: false },
				labels: {
					show: false,
					style: {
						colors: '#8695AA',
						fontSize: '12px'
					}
				}
			},
			yaxis: {
				show: false,
				labels: {
					formatter: (val) => val + 'k',
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				}
			},
			legend: {
				show: false,
				position: 'top',
				fontSize: '12px',
				horizontalAlign: 'left',
				itemMargin: { horizontal: 8, vertical: 0 },
				labels: { colors: '#64748B' },
				markers: {
					width: 9,
					height: 9,
					offsetX: -2,
					offsetY: -0.5,
					radius: 2,
					shape: 'diamond'
				}
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<div class="col-md-4 col-sm-6 pe-4">
	<div class="d-flex align-items-center justify-content-between position-relative">
		<div class="mb-3">
			<span class="fs-14">Website Visits</span>
			<h3 class="fs-20 mb-0">215.2k</h3>
		</div>
		<!-- Chart Container -->
		<div
			bind:this={chartContainer}
			id="website_visits"
			class="chart-position for-sale"
			style="right: -10px; top: -30px;"
		></div>
	</div>
	<div class="d-flex align-items-center justify-content-between position-relative mt-1">
		<span
			class="d-inline-block bg-success bg-opacity-10 text-success px-2 border border-success rounded-pill fs-12 fw-medium"
			>+10% Increase</span
		>
		<span class="fs-12">Last 7 days</span>
	</div>
</div>
