<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'Projects',
					data: [400, 550, 600, 700, 1000, 1100, 1200]
				}
			],
			chart: {
				type: 'bar',
				height: 342,
				toolbar: { show: false }
			},
			colors: ['#3584FC'],
			plotOptions: {
				bar: {
					horizontal: true
				}
			},
			grid: {
				show: true,
				borderColor: '#ECEEF2'
			},
			dataLabels: { enabled: false },
			xaxis: {
				categories: [
					'Project Planning',
					'Research',
					'Design',
					'Front-end',
					'Development',
					'Review & QA',
					'Launch'
				],
				axisTicks: { show: true, color: '#ECEEF2' },
				axisBorder: { show: true, color: '#ECEEF2' },
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
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				},
				axisBorder: { show: true, color: '#ECEEF2' },
				axisTicks: { show: true, color: '#ECEEF2' }
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<!-- Layout matching original HTML -->
<div class="col-xl-6">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
				<h3 class="mb-0">Projects Roadmap</h3>
				<select
					class="form-select month-select form-control p-0 h-auto border-0 w-90"
					style="background-position: right 0 center;"
					aria-label="Default select example"
				>
					<option selected>This Week</option>
					<option value="1">This Month</option>
					<option value="2">This Year</option>
				</select>
			</div>

			<div style="margin-top: -25px; margin-left: -10px; margin-bottom: -25px;">
				<div bind:this={chartContainer}></div>
			</div>
		</div>
	</div>
</div>
