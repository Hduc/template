<script>
	import { onMount } from 'svelte';
	import Visits from './Visits.svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'New Registers',
					data: [3, 12, 8, 10, 15, 10, 7]
				}
			],
			chart: {
				type: 'area',
				height: 95,
				zoom: { enabled: false },
				toolbar: { show: false }
			},
			colors: ['#C52B09'],
			dataLabels: { enabled: false },
			grid: {
				show: false,
				borderColor: '#ECEEF2'
			},
			stroke: {
				curve: 'smooth',
				width: 1
			},
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
					formatter: (val) => val + 'k',
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				}
			},
			legend: {
				show: false,
				position: 'top',
				fontSize: '12px',
				horizontalAlign: 'left',
				itemMargin: { horizontal: 8, vertical: 0 },
				labels: { colors: '#64748B' },
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

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<div class="card border-0 p-4 bg-white rounded-3 mb-4 position-relative">
	<div class="row">
		<Visits />
		<div class="col-md-4 col-sm-6 border-start ps-lg-4">
			<div class="d-flex align-items-center justify-content-between position-relative">
				<div class="mb-3">
					<span class="fs-14">New Registers</span>
					<h3 class="fs-20 mb-0">35.3k</h3>
				</div>
				<!-- Chart HTML -->
				<div
					bind:this={chartContainer}
					id="new_registers"
					class="chart-position for-sale"
					style="right: -10px; top: -30px;"
				></div>
			</div>
			<div class="d-flex align-items-center justify-content-between position-relative mt-1">
				<span
					class="d-inline-block bg-success bg-opacity-10 text-success px-2 border border-success rounded-pill fs-12 fw-medium"
					>+15% Increase</span
				>
				<span class="fs-12">Last 7 days</span>
			</div>
		</div>
		<div class="col-lg-3 d-none d-md-block">
			<img
				src="/assets/images/shape-2.png"
				class="position-absolute top-0 end-0 bottom-0 shape-2"
				alt="shape"
			/>
		</div>
	</div>
</div>
