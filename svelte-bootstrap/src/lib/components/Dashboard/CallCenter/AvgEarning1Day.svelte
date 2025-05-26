<script>
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		if (chartEl) {
			chartEl.innerHTML = '';

			const options = {
				series: [
					{
						name: 'Agent Avg Earnings',
						data: [20, 40, 60, 60, 50, 30, 20, 20, 40, 40, 60, 60]
					}
				],
				chart: {
					type: 'area',
					height: 260,
					zoom: { enabled: false },
					toolbar: { show: false }
				},
				colors: ['#9135E8'],
				dataLabels: { enabled: false },
				stroke: {
					curve: 'stepline',
					width: 3,
					lineCap: '10'
				},
				grid: {
					borderColor: '#ECF0FF',
					strokeDashArray: 10,
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
						style: { colors: '#8695AA', fontSize: '12px' }
					}
				},
				yaxis: {
					tickAmount: 4,
					max: 80,
					min: 0,
					labels: {
						show: false,
						formatter: (val) => `$${val}K`,
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
					fontFamily: 'Inter',
					fontWeight: 400,
					itemMargin: { horizontal: 8, vertical: 0 },
					labels: { colors: '#64748B' },
					markers: {
						width: 9,
						height: 9,
						offsetX: -2,
						offsetY: -0.5,
						radius: 2
					}
				}
			};

			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div style="margin: -30px -5px 0 -21px;">
	<div id="agent_avg_earnings" bind:this={chartEl}></div>
</div>
<div class="d-flex align-items-center position-relative z-1 justify-content-between">
	<div class="d-flex align-items-center">
		<div class="flex-shrink-0">
			<div
				class="bg-body-bg border text-center rounded-2"
				style="width: 48px; height: 48px; line-height: 48px;"
			>
				<img src="/assets/images/agent-avg-earnings.svg" alt="agent-avg-earnings" />
			</div>
		</div>
		<div class="flex-grow-1 ms-3">
			<h3 class="fs-28 fw-semibold text-secondary mb-0">$2,534</h3>
			<span class="text-body d-block">Last month earning</span>
		</div>
	</div>

	<span class="d-flex align-items-center align-items-center text-body">
		<i class="material-symbols-outlined fs-18 pe-2 text-success-60">trending_up</i>
		<span class="fw-medium me-1 text-secondary">+8.7%</span>
	</span>
</div>
