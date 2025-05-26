<script>
	import { onMount } from 'svelte';

	let chartContainer;
	let chartInstance;
	let selectedPeriod = 'Monthly';

	const chartData = {
		Monthly: [
			{ name: 'Current Sale', data: [35, 50, 55, 60, 50, 60, 55, 60, 78, 40, 95, 80] },
			{ name: 'Last Year Sale', data: [70, 50, 40, 40, 62, 52, 80, 40, 60, 53, 70, 70] }
		],
		Weekly: [
			{ name: 'Current Sale', data: [10, 20, 18, 25, 22, 30, 28] },
			{ name: 'Last Year Sale', data: [15, 18, 20, 22, 21, 26, 24] }
		],
		Today: [
			{ name: 'Current Sale', data: [5, 8, 6, 9, 7, 12] },
			{ name: 'Last Year Sale', data: [3, 4, 5, 6, 5, 7] }
		],
		Yearly: [
			{ name: 'Current Sale', data: [400, 450, 500, 550, 600] },
			{ name: 'Last Year Sale', data: [300, 350, 400, 420, 480] }
		]
	};

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: chartData[selectedPeriod],
			chart: { type: 'area', height: 366, zoom: { enabled: false } },
			colors: ['#605DFF', '#DDE4FF'],
			dataLabels: { enabled: false },
			stroke: { curve: 'smooth', width: [2, 2], dashArray: [0, 6] },
			grid: { borderColor: '#ffffff' },
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
				categories:
					selectedPeriod === 'Weekly'
						? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						: selectedPeriod === 'Today'
							? ['9am', '10am', '11am', '12pm', '1pm', '2pm']
							: selectedPeriod === 'Yearly'
								? ['2019', '2020', '2021', '2022', '2023']
								: [
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
				axisTicks: { show: false, color: '#B1BBC8' },
				axisBorder: { show: false, color: '#B1BBC8' },
				labels: { style: { colors: '#8695AA', fontSize: '12px' } }
			},
			yaxis: {
				tickAmount: 5,
				max: 100,
				min: 0,
				labels: {
					formatter: function (val) {
						return '$' + val + 'K';
					},
					style: { colors: '#8695AA', fontSize: '12px' }
				}
			},
			legend: {
				show: true,
				position: 'top',
				fontSize: '12px',
				horizontalAlign: 'left',
				fontFamily: 'Inter',
				fontWeight: 400,
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
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return '$' + val + 'k';
					}
				}
			}
		};

		chartInstance = new ApexCharts(chartContainer, options);
		chartInstance.render();
	});

	// When select value changes
	function updateChart() {
		if (!chartInstance) return;

		const categories =
			selectedPeriod === 'Weekly'
				? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				: selectedPeriod === 'Today'
					? ['9am', '10am', '11am', '12pm', '1pm', '2pm']
					: selectedPeriod === 'Yearly'
						? ['2019', '2020', '2021', '2022', '2023']
						: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		chartInstance.updateOptions({
			series: chartData[selectedPeriod],
			xaxis: { categories }
		});
	}
</script>

<!-- HTML -->
<div class="card bg-white border-0 rounded-3 mb-4">
	<div class="card-body p-4">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30">
			<h3 class="mb-0">Total Sales</h3>
			<select
				class="form-select month-select form-control"
				aria-label="Select chart period"
				bind:value={selectedPeriod}
				on:change={updateChart}
			>
				<option>Monthly</option>
				<option>Weekly</option>
				<option>Today</option>
				<option>Yearly</option>
			</select>
		</div>

		<div style="margin-bottom: -15px; margin-left: -10px; margin-top: -10px;">
			<div bind:this={chartContainer} id="top_sales"></div>
		</div>
	</div>
</div>
