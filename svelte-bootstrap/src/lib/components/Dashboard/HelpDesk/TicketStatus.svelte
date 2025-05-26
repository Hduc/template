<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{ name: 'Solved', data: [28, 50, 90, 95, 20, 70, 35] },
				{ name: 'In Progress', data: [80, 60, 70, 30, 45, 20, 80] },
				{ name: 'Pending', data: [32, 23, 78, 35, 65, 35, 15] },
				{ name: 'Others', data: [60, 25, 80, 25, 15, 40, 15] }
			],
			chart: {
				type: 'bar',
				height: 395,
				toolbar: { show: false }
			},
			colors: ['#605DFF', '#3584FC', '#AD63F6', '#FD5812'],
			plotOptions: {
				bar: {
					columnWidth: '65%'
				}
			},
			grid: {
				show: true,
				borderColor: '#ECEEF2'
			},
			dataLabels: { enabled: false },
			stroke: {
				width: 3,
				show: true,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				axisTicks: { show: false, color: '#ECEEF2' },
				axisBorder: { show: false, color: '#ECEEF2' },
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
				max: 100,
				min: 0,
				labels: {
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				},
				axisBorder: { show: false, color: '#ECEEF2' },
				axisTicks: { show: false, color: '#ECEEF2' }
			},
			tooltip: {
				y: {
					formatter: (val) => `${val} Tickets`
				}
			},
			legend: {
				show: false,
				position: 'top',
				fontSize: '12px',
				horizontalAlign: 'left',
				itemMargin: {
					horizontal: 8,
					vertical: 0
				},
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

<div class="col-lg-12 col-xxl-8 col-sm-8 pe-sm-0 custom-p1 custom-xxxl-10">
	<div class="card bg-white border-0 rounded-3 rounded-end-0 position-relative">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
				<h3 class="mb-0">Tickets Status</h3>
				<select
					class="form-select month-select form-control p-0 h-auto border-0 w-90 d-sm-none"
					style="background-position: right 0 center;"
					aria-label="Default select example"
				>
					<option selected>This Week</option>
					<option value="1">This Month</option>
					<option value="2">This Year</option>
				</select>
			</div>

			<div style="margin-top: -20px; margin-left: -15px; margin-bottom: -22px;">
				<div bind:this={chartContainer}></div>
			</div>
		</div>
	</div>
</div>
