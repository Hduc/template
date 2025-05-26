<script>
	import { onMount } from 'svelte';
	import TotalCustomers from './TotalCustomers.svelte';
	import TotalRevenue from './TotalRevenue.svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{ name: 'Completed', data: [80, 55, 60, 55, 80] },
				{ name: 'Pending', data: [50, 85, 60, 70, 60] }
			],
			chart: {
				type: 'bar',
				height: 99,
				toolbar: { show: false }
			},
			colors: ['#1F64F1', '#C2CDFF'],
			plotOptions: {
				bar: { columnWidth: '85%' }
			},
			dataLabels: { enabled: false },
			stroke: {
				width: 2,
				show: true,
				colors: ['transparent']
			},
			grid: { borderColor: '#ffffff' },
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
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
					style: { colors: '#64748B', fontSize: '12px' }
				}
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return val + '%';
					}
				}
			},
			legend: {
				show: false,
				fontSize: '12px',
				position: 'bottom',
				horizontalAlign: 'center',
				fontFamily: 'Inter',
				fontWeight: 400,
				itemMargin: { horizontal: 8, vertical: 0 },
				labels: { colors: '#64748B' },
				markers: {
					width: 9,
					height: 9,
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

<div class="row justify-content-center">
	<div class="col-md-4 col-lg-12">
		<div class="card bg-white border-0 rounded-3 mb-4 stats-box">
			<div class="card-body p-4">
				<div class="d-flex justify-content-between flex-wrap gap-2">
					<div>
						<div class="d-flex">
							<span>Total Orders</span>
							<span class="count">-7.6%</span>
						</div>
						<h3 class="fs-20 mt-1 mb-0">$72,458</h3>
					</div>
					<span class="fs-12">Last 7 days</span>
				</div>

				<div
					style="
					max-width: 153px;
					margin: auto;
					margin-top: -27px;
					margin-bottom: -18px;
				"
				>
					<div bind:this={chartContainer}></div>
				</div>

				<ul class="ps-0 mb-0 list-unstyled stats-list">
					<li class="d-flex justify-content-between align-items-center">
						<span class="title">Completed</span>
						<span>62%</span>
					</li>
					<li class="d-flex justify-content-between align-items-center">
						<span class="title">Pending payment</span>
						<span>38%</span>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<TotalCustomers />
	<TotalRevenue />
</div>
