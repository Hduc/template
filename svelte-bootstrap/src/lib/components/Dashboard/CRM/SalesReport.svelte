<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'Online',
					data: [45, 23, 62, 60, 110, 100, 135]
				},
				{
					name: 'Offline',
					data: [20, 58, 24, 50, 40, 70, 97]
				}
			],
			chart: {
				height: 378,
				type: 'line',
				zoom: { enabled: false },
				toolbar: { show: true }
			},
			dataLabels: { enabled: false },
			colors: ['#605DFF', '#FE7A36'],
			stroke: {
				curve: 'straight',
				width: 2
			},
			grid: {
				show: true,
				borderColor: '#F6F7F9'
			},
			markers: {
				size: 4,
				strokeWidth: 0,
				shape: ['circle', 'square'],
				hover: { size: 5 }
			},
			xaxis: {
				categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				axisTicks: { show: false, color: '#B1BBC8' },
				axisBorder: { show: false, color: '#B1BBC8' },
				labels: {
					show: true,
					style: { colors: '#8695AA', fontSize: '12px' }
				}
			},
			yaxis: {
				tickAmount: 6,
				max: 150,
				min: 0,
				labels: {
					formatter: (val) => `$${val}k`,
					style: { colors: '#64748B', fontSize: '12px' }
				}
			},
			legend: {
				show: true,
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

<!-- Chart Layout -->
<div class="col-xxl-8 col-xl-7 col-lg-6">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
				<h3 class="mb-0">Sales Report</h3>
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

			<div style="margin-bottom: -15px; margin-left: -10px;">
				<div bind:this={chartContainer}></div>
			</div>
		</div>
	</div>
</div>
