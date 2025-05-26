<script>
	import { onMount } from 'svelte';
	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [
				{
					name: 'Income',
					data: [40, 60, 50, 40, 45, 38, 42, 35, 45]
				},
				{
					name: 'Expenses',
					data: [60, 80, 90, 80, 60, 70, 60, 90, 60]
				}
			],
			chart: {
				type: 'bar',
				height: 360,
				toolbar: {
					show: false
				}
			},
			colors: ['#9CAAFF', '#605DFF'],
			plotOptions: {
				bar: {
					columnWidth: '60%'
				}
			},
			grid: {
				show: true,
				borderColor: '#ECEEF2'
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: 4,
				show: true,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				axisTicks: { show: false },
				axisBorder: { show: false },
				labels: {
					style: {
						colors: '#8695AA',
						fontSize: '12px'
					}
				}
			},
			yaxis: {
				tickAmount: 6,
				min: 0,
				labels: {
					formatter: (val) => '$' + val,
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				},
				axisBorder: { show: false },
				axisTicks: { show: false }
			},
			tooltip: {
				y: {
					formatter: (val) => '$' + val
				}
			},
			legend: {
				show: true,
				position: 'bottom',
				fontSize: '12px',
				horizontalAlign: 'center',
				fontFamily: 'Inter',
				fontWeight: 400,
				offsetY: 10,
				itemMargin: {
					horizontal: 8,
					vertical: 10
				},
				labels: {
					colors: '#64748B'
				},
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

		if (chartEl) {
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div class="card border-0 rounded-3 bg-white mb-4">
	<div class="card-body p-4">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
			<h3 class="mb-0">Static</h3>
			<select
				class="form-select month-select form-control w-135 bg-border-color border-color bg-transparent"
				aria-label="Default select example"
			>
				<option selected>Monthly</option>
				<option value="1">Last 90 days</option>
				<option value="2">Last 1 year</option>
			</select>
		</div>

		<div style="margin: -25px -9px -20px -16px;">
			<div id="static" bind:this={chartEl}></div>
		</div>
	</div>
</div>
