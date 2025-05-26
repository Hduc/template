<script>
	import { onMount } from 'svelte';

	let chartContainer;
	let chart;

	const chartOptions = {
		series: [
			{
				name: 'Ethereum Rate',
				data: [20, 40, 60, 60, 50, 30, 20, 20, 40, 40, 60, 60]
			}
		],
		chart: {
			type: 'area',
			height: 253,
			zoom: { enabled: false },
			toolbar: { show: false }
		},
		colors: ['#3584FC'],
		dataLabels: { enabled: false },
		stroke: {
			curve: 'stepline',
			width: 3,
			lineCap: '10'
		},
		grid: {
			borderColor: '#ECF0FF',
			strokeDashArray: 0,
			xaxis: { lines: { show: false } }
		},
		fill: {
			type: 'gradient',
			gradient: {
				stops: [0, 90, 100],
				shadeIntensity: 1,
				opacityFrom: 0,
				opacityTo: 0.8
			}
		},
		xaxis: {
			categories: ['NOV 16', '17', '18', '19', '20', '21'],
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
			tickAmount: 4,
			max: 80,
			min: 0,
			labels: {
				show: false,
				formatter: (val) => `${val}K`,
				style: {
					colors: '#9C9AB6',
					fontSize: '12px',
					fontWeight: 500
				}
			},
			axisBorder: { show: false },
			axisTicks: { show: false }
		},
		legend: {
			show: true,
			position: 'top',
			fontSize: '12px',
			horizontalAlign: 'center',
			itemMargin: { horizontal: 8 },
			labels: { colors: '#64748B' },
			markers: {
				width: 9,
				height: 9,
				offsetX: -2,
				offsetY: -0.5,
				radius: 2
			}
		},
		tooltip: {
			y: {
				formatter: (val) => `$${val}K`
			}
		}
	};

	const rateList = [
		{ time: '11:30 AM', price: '$3,605.08', change: '+5.4%', type: 'success' },
		{ time: '01:20 PM', price: '$3,615.50', change: '-3.21%', type: 'danger' },
		{ time: '11:30 AM', price: '$3,831.13', change: '+7.32%', type: 'success' }
	];

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');
		chart = new ApexCharts(chartContainer, chartOptions);
		await chart.render();
	});
</script>

<!-- Chart -->
<div style="margin: -30px -5px 0 -21px;">
	<div bind:this={chartContainer}></div>
</div>

<!-- Rate list -->
<ul class="ps-0 mb-0 list-unstyled mt-30">
	{#each rateList as item, i (i)}
		<li class="d-flex justify-content-between align-items-center mb-4">
			<span class="fs-12 fw-bold">{item.time}</span>
			<span class="fs-12 fw-semibold text-secondary">{item.price}</span>
			<span class="fs-12 fw-medium text-{item.type}">{item.change}</span>
		</li>
	{/each}
</ul>
