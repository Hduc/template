<script>
	import { onMount } from 'svelte';
	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{ name: 'Gross Earnings', data: [44, 60, 41, 67, 22, 43] },
				{ name: 'Tax Withheld', data: [13, 30, 20, 8, 13, 27] },
				{ name: 'Net Earnings', data: [11, 20, 15, 15, 21, 14] }
			],
			chart: {
				type: 'bar',
				height: 402,
				stacked: true,
				toolbar: { show: false },
				zoom: { enabled: true }
			},
			plotOptions: {
				bar: {
					borderRadius: 5,
					horizontal: false,
					columnWidth: '28px',
					borderRadiusApplication: 'end'
				}
			},
			dataLabels: { enabled: false },
			colors: ['#605DFF', '#9CAAFF', '#DDE4FF'],
			xaxis: {
				categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
				axisTicks: { show: false },
				axisBorder: { show: true, color: '#D5D9E2' },
				labels: {
					show: true,
					style: {
						colors: '#8695AA',
						fontSize: '12px'
					}
				}
			},
			yaxis: {
				tickAmount: 5,
				max: 125,
				min: 0,
				labels: {
					formatter: (val) => `$${val}K`,
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				},
				axisBorder: { show: true, color: '#D5D9E2' },
				axisTicks: { show: false }
			},
			legend: {
				show: true,
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
			},
			fill: { opacity: 1 },
			grid: {
				show: true,
				strokeDashArray: 10,
				borderColor: '#ECEEF2'
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<div class="col-lg-8">
	<div class="card bg-white border rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30">
				<h3 class="mb-0">Recent Earnings</h3>
				<select
					class="form-select month-select form-control p-0 h-auto border-0 w-90"
					style="background-position: right 0 center;"
					aria-label="Default select example"
				>
					<option selected>This Month</option>
					<option value="1">Last Month</option>
					<option value="2">Last Year</option>
				</select>
			</div>

			<div style="margin: -5px -9px -28px -17px;">
				<div bind:this={chartContainer}></div>
			</div>
		</div>
	</div>
</div>
