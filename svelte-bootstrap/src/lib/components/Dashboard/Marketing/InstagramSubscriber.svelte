<script>
	import DropdownFilter from '$lib/components/Common/DropdownFilter.svelte';

	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{ name: 'Gained', data: [44, 60, 41, 67, 22, 43, 13, 30, 20, 8] },
				{ name: 'Lost', data: [13, 30, 20, 8, 13, 27, 44, 60, 41, 67] }
			],
			chart: {
				type: 'bar',
				height: 389,
				stacked: true,
				toolbar: { show: false },
				zoom: { enabled: true }
			},
			plotOptions: {
				bar: {
					borderRadius: 5,
					horizontal: false,
					columnWidth: '28px',
					borderRadiusApplication: 'end'
				}
			},
			dataLabels: { enabled: false },
			colors: ['#605DFF', '#9CAAFF', '#DDE4FF'],
			xaxis: {
				categories: [
					'Oct 01',
					'Oct 02',
					'Oct 03',
					'Oct 04',
					'Oct 05',
					'Oct 06',
					'Oct 07',
					'Oct 07',
					'Oct 08',
					'Oct 09'
				],
				axisTicks: { show: false, color: '#8695AA' },
				axisBorder: { show: true, color: '#D5D9E2' },
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
				max: 125,
				min: 0,
				labels: {
					formatter: (val) => val + 'K',
					style: {
						colors: '#8695AA',
						fontSize: '12px'
					}
				},
				axisBorder: { show: true, color: '#D5D9E2' },
				axisTicks: { show: false, color: '#ECEEF2' }
			},
			legend: {
				show: true,
				position: 'bottom',
				fontSize: '12px',
				horizontalAlign: 'left',
				itemMargin: { horizontal: 8, vertical: 0 },
				labels: { colors: '#64748B' },
				markers: {
					size: 7,
					offsetX: -2,
					offsetY: -0.5,
					shape: 'diamond'
				}
			},
			fill: { opacity: 1 },
			grid: {
				show: true,
				strokeDashArray: 0,
				borderColor: '#ECF0FF'
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<div class="col-lg-9 col-md-8">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30">
				<h3 class="mb-0">Instagram Subscriber</h3>
				<DropdownFilter />
			</div>

			<div style="margin: -25px -28px -16px -17px;">
				<!-- Chart Container -->
				<div id="instagram_subscriber" bind:this={chartContainer}></div>
			</div>
		</div>
	</div>
</div>
