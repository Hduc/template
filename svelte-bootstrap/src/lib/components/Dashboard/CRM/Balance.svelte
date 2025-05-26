<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'Revenue',
					data: [5, 12, 20, 23, 25, 30, 40, 45, 50, 70, 65, 80]
				},
				{
					name: 'Expenses',
					data: [15, 20, 30, 30, 35, 45, 60, 70, 80, 85, 95, 120]
				}
			],
			chart: {
				type: 'area',
				height: 355,
				zoom: { enabled: false }
			},
			colors: ['#AD63F6', '#605DFF'],
			dataLabels: { enabled: false },
			grid: {
				borderColor: '#ECEEF2'
			},
			stroke: {
				curve: 'straight',
				width: 2
			},
			xaxis: {
				categories: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec'
				],
				axisTicks: { show: false, color: '#B1BBC8' },
				axisBorder: { show: false, color: '#B1BBC8' },
				labels: {
					show: true,
					style: {
						colors: '#8695AA',
						fontSize: '12px'
					}
				}
			},
			yaxis: {
				tickAmount: 6,
				max: 150,
				min: 0,
				labels: {
					formatter: (val) => '$' + val + 'k',
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				}
			},
			legend: {
				show: true,
				position: 'top',
				fontSize: '12px',
				horizontalAlign: 'left',
				itemMargin: {
					horizontal: 8,
					vertical: 0
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

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<div class="col-lg-8">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30">
				<h3 class="mb-0">Balance Overview</h3>
				<select
					class="form-select month-select form-control w-145"
					aria-label="Default select example"
				>
					<option selected>Current Year</option>
					<option value="1">Last Year</option>
					<option value="2">Last Monthly</option>
				</select>
			</div>

			<!-- Chart container with your original margin styling -->
			<div style="margin: -5px -9px 0px -16px;">
				<div bind:this={chartContainer}></div>
			</div>

			<ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-4 justify-content-center">
				<li class="d-flex align-items-center">
					<h4 class="fs-20 fw-semibold text-primary me-2 mb-0">$628k</h4>
					<span class="fs-12">Revenue</span>
				</li>
				<li class="d-flex align-items-center">
					<h4 class="fs-20 fw-semibold text-primary-div me-2 mb-0">$379k</h4>
					<span class="fs-12">Expenses</span>
				</li>
				<li class="d-flex align-items-center">
					<h4 class="fs-20 fw-semibold text-success me-2 mb-0">11.2%</h4>
					<span class="fs-12">Profit Ratio</span>
				</li>
			</ul>
		</div>
	</div>
</div>
