<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		function generateData(count, yrange) {
			let i = 0;
			let series = [];
			while (i < count) {
				const x = (i + 1).toString();
				const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

				series.push({ x, y });
				i++;
			}
			return series;
		}

		const options = {
			series: [
				{ name: '08 PM', data: generateData(20, { min: -30, max: 55 }) },
				{ name: '09 PM', data: generateData(20, { min: -30, max: 55 }) },
				{ name: '10 PM', data: generateData(20, { min: 0, max: 0 }) },
				{ name: '11 PM', data: generateData(20, { min: -30, max: 55 }) },
				{ name: '12 PM', data: generateData(20, { min: -30, max: 55 }) },
				{ name: '13 PM', data: generateData(20, { min: -30, max: 55 }) },
				{ name: '14 PM', data: generateData(20, { min: -30, max: 55 }) }
			],
			chart: {
				height: 235,
				type: 'heatmap',
				toolbar: { show: false }
			},
			colors: ['#605DFF'],
			plotOptions: {
				heatmap: {
					shadeIntensity: 1
				}
			},
			dataLabels: {
				enabled: false
			},
			grid: {
				show: false,
				borderColor: '#ECEEF2'
			},
			xaxis: {
				categories: Array.from({ length: 20 }, (_, i) => `W${i + 1}`),
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
				labels: {
					show: true,
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				},
				axisBorder: { show: false, color: '#ECEEF2' },
				axisTicks: { show: false, color: '#ECEEF2' }
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<div class="col-lg-12 col-xxl-5">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30">
				<div class="">
					<h3 class="mb-0">Emergency Room Visits</h3>
					<p>ER based on patient visits</p>
				</div>
				<select class="form-select month-select form-control w-135" aria-label="Select time period">
					<option selected>Last Week</option>
					<option value="1">Last 60 Days</option>
					<option value="2">Last 90 Days</option>
				</select>
			</div>

			<div style="margin: -36px -21px -63px -18px;">
				<div id="emergency_room_visits" bind:this={chartContainer} style="margin: 35px auto;"></div>
			</div>
		</div>
	</div>
</div>
