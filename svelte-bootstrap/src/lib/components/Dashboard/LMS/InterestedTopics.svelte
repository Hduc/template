<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'Courses',
					data: [47, 69, 37, 17, 28, 40]
				}
			],
			chart: {
				type: 'bar',
				height: 396,
				toolbar: {
					show: false
				}
			},
			colors: ['#605DFF'],
			plotOptions: {
				bar: {
					barHeight: '21px',
					horizontal: true
				}
			},
			grid: {
				show: true,
				borderColor: '#ECEEF2'
			},
			dataLabels: {
				enabled: false
			},
			xaxis: {
				categories: [
					'UX/UI Design',
					'WordPress',
					'Motion Design',
					'Video Editing',
					'Angular',
					'Python'
				],
				axisTicks: {
					show: true,
					color: '#ECEEF2'
				},
				axisBorder: {
					show: true,
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
				labels: {
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				},
				axisBorder: {
					show: true,
					color: '#ECEEF2'
				},
				axisTicks: {
					show: true,
					color: '#ECEEF2'
				}
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<!-- Full Card Layout -->
<div class="card bg-white border-0 rounded-3 mb-4">
	<div class="card-body p-4">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
			<h3 class="mb-0">Student’s Interested Topics</h3>
			<select
				class="form-select month-select form-control p-0 h-auto border-0 w-110"
				style="background-position: right 0 center;"
				aria-label="Default select example"
			>
				<option selected>Last 6 Month</option>
				<option value="1">Last 8 Month</option>
				<option value="2">Last 12 Month</option>
			</select>
		</div>

		<!-- Chart container with bind -->
		<div bind:this={chartContainer}></div>
	</div>
</div>
