<script>
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [
				{ name: 'New Listings', data: [30, 40, 20, 50, 60, 70, 50, 40, 30, 60, 50, 45] },
				{ name: 'Sold Properties', data: [80, 50, 90, 40, 50, 90, 55, 60, 80, 30, 95, 80] }
			],
			chart: {
				type: 'area',
				height: 296,
				zoom: { enabled: false },
				toolbar: { show: false }
			},
			colors: ['#605DFF', '#37D80A'],
			dataLabels: { enabled: false },
			stroke: {
				curve: 'straight',
				width: [2, 2],
				dashArray: [6, 6]
			},
			grid: {
				borderColor: '#ECF0FF',
				strokeDashArray: 4,
				xaxis: { lines: { show: false } }
			},
			fill: {
				type: 'gradient',
				gradient: {
					stops: [0, 90, 100],
					shadeIntensity: 1,
					opacityFrom: 0,
					opacityTo: 0.5
				}
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
					style: { colors: '#8695AA', fontSize: '12px' }
				}
			},
			yaxis: {
				tickAmount: 5,
				max: 100,
				min: 0,
				labels: {
					style: { colors: '#8695AA', fontSize: '12px' }
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
				itemMargin: { horizontal: 8, vertical: 10 },
				labels: { colors: '#64748B' },
				markers: {
					width: 9,
					height: 9,
					offsetX: -2,
					offsetY: -0.5,
					radius: 2,
					shape: 'diamond'
				}
			},
			tooltip: {
				y: {
					formatter: (val) => `${val}k`
				}
			}
		};

		const chart = new ApexCharts(chartEl, options);
		chart.render();
	});
</script>

<div class="card bg-white border-0 rounded-3 mb-4">
	<div class="card-body p-4">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30">
			<h3 class="mb-0 position-relative z-1">New Listings vs Sold Properties</h3>
			<select
				class="form-select month-select form-control position-relative z-1"
				aria-label="Default select example"
			>
				<option selected>Monthly</option>
				<option value="1">Weekly</option>
				<option value="2">Today</option>
				<option value="3">Yearly</option>
			</select>
		</div>

		<div style="margin: -25px -9px -20px -18px;">
			<div id="new_listings_vs_sold_properties" bind:this={chartEl}></div>
		</div>
	</div>
</div>
