<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'Active Users',
					data: [20, 15, 25, 95, 25, 65, 15, 25, 15, 20]
				}
			],
			chart: {
				type: 'bar',
				height: 408,
				toolbar: { show: false }
			},
			colors: ['#605DFF', '#AD63F6', '#3584FC', '#FD5812'],
			plotOptions: {
				bar: {
					columnWidth: '15%',
					borderRadius: 5
				}
			},
			grid: {
				show: true,
				borderColor: '#ECF0FF'
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: 3,
				show: true,
				colors: ['transparent']
			},
			xaxis: {
				categories: [
					'Oct 01',
					'Oct 02',
					'Oct 03',
					'Oct 04',
					'Oct 05',
					'Oct 06',
					'Oct 07',
					'Oct 08',
					'Oct 09',
					'Oct 10'
				],
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
					formatter: (val) => '$' + val + 'K',
					style: {
						colors: '#8695AA',
						fontSize: '12px'
					}
				},
				axisBorder: { show: false },
				axisTicks: { show: false }
			},
			legend: {
				show: false
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<div class="card-body p-4">
	<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30">
		<h3 class="mb-0">Active Users</h3>
		<select
			class="form-select month-select form-control w-135 bg-border-color border-color"
			aria-label="Default select example"
		>
			<option selected>Monthly</option>
			<option value="1">Yearly</option>
		</select>
	</div>

	<div style="margin: -24px -30px -27px -17px;">
		<div id="active_users" bind:this={chartContainer}></div>
	</div>
</div>
