<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'Today’s Payment',
					data: [20, 50, 60, 30, 30, 40, 60, 70, 40, 50]
				}
			],
			chart: {
				type: 'area',
				height: 340,
				zoom: { enabled: false },
				toolbar: { show: false }
			},
			colors: ['#FFFFFF'],
			dataLabels: { enabled: false },
			stroke: {
				curve: 'monotoneCubic',
				width: 3
			},
			grid: {
				borderColor: '#4E3FB9'
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
					'09:00',
					'10:00',
					'11:00',
					'12:00',
					'13:00',
					'14:00',
					'15:00',
					'16:00',
					'17:00',
					'18:00'
				],
				axisTicks: { show: false },
				axisBorder: { show: false },
				labels: {
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
					formatter: (val) => `$${val}K`,
					style: {
						colors: '#8695AA',
						fontSize: '12px'
					}
				}
			},
			legend: { show: false },
			tooltip: {
				y: {
					formatter: (val) => `$${val}k`
				}
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<!-- Chart UI -->
<div
	class="rounded-3 p-4 mb-4"
	style="background: linear-gradient(104deg, #361E7D 2.4%, #403CFF 112.33%);"
>
	<div class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-1">
		<span class="d-block mb-1" style="color: #B1BBC8;">Today’s Payment</span>
		<select
			class="form-select month-select form-control w-135 bg-border-color border-color"
			aria-label="Default select example"
		>
			<option selected>All</option>
			<option value="1">Monthly</option>
			<option value="2">Yearly</option>
		</select>
	</div>

	<div class="d-flex align-items-center mb-4">
		<h3 class="fs-32 fw-bold text-white mb-0">$1,528</h3>
		<span
			class="fw-medium fs-12 border border-success px-2 rounded-pill ms-2"
			style="background-color: #D8FFC8; color: #1E8308;"
		>
			+5.4%
		</span>
	</div>

	<div style="margin: -24px -9px -27px -17px;">
		<div id="today_payment" bind:this={chartContainer}></div>
	</div>
</div>
