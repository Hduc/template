<script>
	import DropdownFilter from '$lib/components/Common/DropdownFilter.svelte';
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [
				{
					name: 'Time Spent',
					data: [400, 500, 300, 650, 220, 400, 380, 750, 350, 250, 200, 100]
				}
			],
			chart: {
				type: 'bar',
				height: 255,
				toolbar: {
					show: false
				}
			},
			colors: ['#605DFF'],
			plotOptions: {
				bar: {
					columnWidth: '55%'
				}
			},
			grid: {
				borderColor: '#ECF0FF',
				strokeDashArray: 4,
				xaxis: {
					lines: {
						show: false
					}
				}
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
				axisTicks: {
					show: false,
					color: '#ECEEF2'
				},
				axisBorder: {
					show: false,
					color: '#ECEEF2'
				},
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
				min: 0,
				labels: {
					formatter: (val) => `$${val}K`,
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				},
				axisBorder: {
					show: false,
					color: '#ECEEF2'
				},
				axisTicks: {
					show: false,
					color: '#ECEEF2'
				}
			},
			legend: {
				show: true,
				position: 'top',
				fontSize: '12px',
				horizontalAlign: 'left',
				fontFamily: 'Inter',
				fontWeight: 400,
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
			},
			tooltip: {
				y: {
					formatter: (val) => `${val}k`
				}
			}
		};

		if (chartEl) {
			chartEl.innerHTML = '';
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div class="card bg-white border-0 rounded-3 mb-4">
	<div class="card-body p-4">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
			<h3 class="mb-0">Rental Income</h3>

			<DropdownFilter />
		</div>

		<div style="margin: -25px -21px -28px -18px;">
			<div id="rental_income" bind:this={chartEl}></div>
		</div>
	</div>
</div>
