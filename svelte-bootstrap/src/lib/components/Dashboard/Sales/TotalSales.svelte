<script>
	import { onMount } from 'svelte';
	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'Sales',
					data: [3, 7, 7, 10, 9, 7, 20]
				}
			],
			chart: {
				type: 'area',
				height: 116,
				zoom: { enabled: false },
				toolbar: { show: false }
			},
			colors: ['#4936F5'],
			dataLabels: { enabled: false },
			grid: { show: false, borderColor: '#ECEEF2' },
			stroke: { curve: 'straight', width: 1 },
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
					formatter: (val) => '$' + val + 'k',
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				},
				axisBorder: { show: false },
				axisTicks: { show: false }
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

<div class="col-sm-6 col-xxl-3">
	<div class="card border bg-white rounded-3 overflow-hidden mb-4">
		<div class="d-flex align-items-center p-4 pb-3 mb-1">
			<div class="flex-shrink-0">
				<div
					class="wh-55 bg-primary bg-opacity-25 text-center rounded-2"
					style="line-height: 55px;"
				>
					<i class="ri-shopping-cart-line fs-22 bg-primary text-white rounded-2 p-2"></i>
				</div>
			</div>
			<div class="flex-grow-1 ms-3">
				<h3 class="fs-24 fw-medium mb-0">$150,000</h3>
				<span>Total Sales</span>
			</div>
		</div>
		<div class="d-flex align-items-center p-4 pb-0">
			<span
				class="d-inline-block bg-success text-success bg-opacity-10 border border-success rounded-pill px-2 fw-medium d-flex align-items-center"
			>
				<i class="ri-arrow-up-fill fs-16 lh-1"></i>
				12%
			</span>
			<span class="ms-2 fs-12">from last week</span>
		</div>
		<div style="margin: -45px -11px -31px -15px;">
			<div bind:this={chartContainer}></div>
		</div>
	</div>
</div>
