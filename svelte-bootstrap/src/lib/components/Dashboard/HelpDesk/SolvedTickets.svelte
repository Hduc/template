<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'New Tickets',
					data: [25, 70, 25, 45, 60, 55, 70]
				},
				{
					name: 'Solved Tickets',
					data: [65, 45, 65, 30, 75, 24, 50]
				}
			],
			chart: {
				type: 'area',
				height: 492,
				zoom: { enabled: false },
				toolbar: { show: false }
			},
			colors: ['#605DFF', '#FD5812'],
			dataLabels: { enabled: false },
			stroke: {
				curve: 'smooth',
				width: 2
			},
			grid: {
				show: true,
				borderColor: '#ECEEF2'
			},
			fill: {
				type: 'gradient',
				gradient: {
					stops: [0, 90, 100],
					shadeIntensity: 1,
					opacityFrom: 0,
					opacityTo: 0.6
				}
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
				tickAmount: 4,
				max: 80,
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
			legend: {
				show: true,
				position: 'top',
				fontSize: '12px',
				horizontalAlign: 'center',
				itemMargin: { horizontal: 8, vertical: 0 },
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

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<!-- UI Layout -->
<div class="col-lg-7">
	<div class="card bg-white border-0 rounded-3 overflow-hidden mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-4">
				<h3 class="mb-0">New Tickets vs Solved Tickets</h3>
				<select
					class="form-select month-select form-control p-0 h-auto border-0 w-99"
					style="background-position: right 0 center;"
					aria-label="Default select example"
				>
					<option selected>Last 7 Days</option>
					<option value="1">Last 30 Days</option>
					<option value="2">Last 50 Days</option>
					<option value="3">Last 60 Days</option>
					<option value="4">Last 90 Days</option>
				</select>
			</div>

			<div style="margin-bottom: -15px; margin-left: -10px; margin-top: -5px;">
				<div bind:this={chartContainer}></div>
			</div>
		</div>
	</div>
</div>
