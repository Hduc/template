<script>
	import { onMount } from 'svelte';
	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [
				{
					name: 'Total Calls',
					data: [800, 150, 700, 250, 500, 400, 700, 300, 900, 800, 1200, 600]
				}
			],
			chart: {
				type: 'area',
				height: 325,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			colors: ['#9135E8'],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth',
				width: [2, 2, 0],
				dashArray: [0, 6, 0]
			},
			grid: {
				borderColor: '#ffffff'
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
				axisTicks: {
					show: false,
					color: '#B1BBC8'
				},
				axisBorder: {
					show: false,
					color: '#B1BBC8'
				},
				labels: {
					style: {
						colors: '#8695AA',
						fontSize: '12px'
					}
				}
			},
			yaxis: {
				tickAmount: 5,
				max: 1800,
				min: 0,
				labels: {
					style: {
						colors: '#8695AA',
						fontSize: '12px'
					}
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
			}
		};

		if (chartEl) {
			chartEl.innerHTML = '';
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div style="margin: -24px -10px -26px -18px;">
	<div id="answered_calls" bind:this={chartEl}></div>
</div>
