<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{ name: 'Fashion', data: [20, 40, 25, 60, 30, 50] },
				{ name: 'Others', data: [20, 20, 25, 15, 35, 25] }
			],
			chart: {
				type: 'bar',
				height: 100,
				stacked: true,
				toolbar: { show: false },
				zoom: { enabled: true }
			},
			plotOptions: {
				bar: { columnWidth: '55%' }
			},
			colors: ['#605DFF', '#C2CDFF'],
			grid: { borderColor: '#ffffff' },
			stroke: {
				width: 2,
				show: true,
				colors: ['transparent']
			},
			dataLabels: { enabled: false },
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				axisTicks: { show: false, color: '#B1BBC8' },
				axisBorder: { show: false, color: '#B1BBC8' },
				labels: {
					show: false,
					style: { colors: '#8695AA', fontSize: '12px' }
				}
			},
			yaxis: {
				show: false,
				labels: {
					style: { colors: '#64748B', fontSize: '12px' }
				}
			},
			legend: {
				show: false,
				fontSize: '12px',
				position: 'bottom',
				horizontalAlign: 'center',
				itemMargin: { horizontal: 8, vertical: 0 },
				labels: { colors: '#64748B' },
				markers: {
					width: 9,
					height: 9,
					offsetX: -2,
					offsetY: -0.5,
					shape: 'diamond'
				}
			},
			fill: { opacity: 1 }
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<!-- HTML Layout -->
<div class="col-md-4 col-lg-12">
	<div class="card bg-white border-0 rounded-3 mb-4 stats-box">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between flex-wrap gap-2">
				<div>
					<div class="d-flex">
						<span>Total Revenue</span>
						<span class="count up">+10%</span>
					</div>
					<h3 class="fs-20 mt-1 mb-0">$165,458</h3>
				</div>
				<span class="fs-12">Last 30 days</span>
			</div>

			<div style="max-width: 196px; margin: auto; margin-top: -24px; margin-bottom: -15px;">
				<div bind:this={chartContainer}></div>
			</div>

			<ul class="ps-0 mb-0 list-unstyled stats-list">
				<li class="d-flex justify-content-between align-items-center">
					<span class="title">Fashion</span>
					<span>75%</span>
				</li>
				<li class="d-flex justify-content-between align-items-center">
					<span class="title">Others</span>
					<span>25%</span>
				</li>
			</ul>
		</div>
	</div>
</div>
