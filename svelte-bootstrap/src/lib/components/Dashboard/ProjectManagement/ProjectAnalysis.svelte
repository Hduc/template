<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{ name: 'Budgets', data: [40, 60, 55, 30, 60, 130, 63] },
				{ name: 'Expenses', data: [15, 65, 100, 40, 90, 90, 91] },
				{ name: 'Revenue', data: [55, 70, 30, 50, 110, 60, 52] }
			],
			chart: {
				type: 'bar',
				height: 370,
				toolbar: { show: true }
			},
			colors: ['#605DFF', '#AD63F6', '#3584FC'],
			plotOptions: {
				bar: {
					columnWidth: '60%'
				}
			},
			grid: {
				show: true,
				borderColor: '#ECEEF2'
			},
			dataLabels: { enabled: false },
			stroke: {
				width: 4,
				show: true,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				axisTicks: { show: false, color: '#ECEEF2' },
				axisBorder: { show: false, color: '#ECEEF2' },
				labels: {
					show: true,
					style: { colors: '#8695AA', fontSize: '12px' }
				}
			},
			yaxis: {
				tickAmount: 6,
				max: 150,
				min: 0,
				labels: {
					style: { colors: '#64748B', fontSize: '12px' }
				},
				axisBorder: { show: false, color: '#ECEEF2' },
				axisTicks: { show: false, color: '#ECEEF2' }
			},
			tooltip: {
				y: {
					formatter: (val) => `$${val}k`
				}
			},
			legend: {
				show: true,
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

<!-- Full layout with chart binding -->
<div class="col-xxl-4 col-lg-4">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
				<h3 class="mb-0">Project Analysis</h3>
				<select
					class="form-select month-select form-control p-0 h-auto border-0 w-90"
					style="background-position: right 0 center;"
					aria-label="Default select example"
				>
					<option selected>Last 7 Days</option>
					<option value="1">This Month</option>
					<option value="2">This Year</option>
				</select>
			</div>

			<div style="margin: -5px -9px -28px -16px;">
				<div bind:this={chartContainer}></div>
			</div>
		</div>
	</div>
</div>
