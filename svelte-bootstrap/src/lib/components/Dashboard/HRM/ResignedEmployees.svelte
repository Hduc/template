<script>
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [
				{
					name: 'Resigned',
					data: [44, 30, 57, 35, 61, 35, 63]
				}
			],
			chart: {
				type: 'bar',
				height: 140,
				toolbar: { show: false }
			},
			plotOptions: {
				bar: {
					columnWidth: '50%',
					borderRadius: 2
				}
			},
			colors: ['#EE3E08'],
			dataLabels: { enabled: false },
			grid: { show: false, borderColor: '#ECEEF2' },
			stroke: {
				width: 2,
				show: true,
				colors: ['transparent']
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
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				}
			},
			tooltip: {
				y: {
					formatter: (val) => `Total:${val}`
				}
			},
			fill: {
				opacity: 1,
				colors: '#EE3E08',
				type: 'solid'
			}
		};

		if (chartEl) {
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div class="card border-0 rounded-3 bg-white mb-4">
	<div class="custom-padding-30 position-relative">
		<div class="d-flex align-items-center mb-4 pb-2">
			<div class="flex-shrink-0">
				<div
					class="text-center rounded-2 bg-danger-50"
					style="width: 44px; height: 44px; line-height: 44px;"
				>
					<img src="/assets/images/icon-resigned.svg" alt="icon-resigned" />
				</div>
			</div>
			<div class="flex-grow-1 ms-3">
				<span class="d-block mb-1">Resigned Employees</span>
				<h3 class="fw-semibold fs-20 mb-0">3,18</h3>
			</div>
		</div>

		<div class="d-flex align-items-center">
			<i
				class="ri-arrow-right-down-line d-inline-block text-center rounded-1 fs-18 text-danger-50"
				style="width: 26px; height: 26px; line-height: 26px; background-color: #FFE8D4;"
			></i>
			<p class="ms-2"><span class="text-secondary fw-medium">-5%</span> last year</p>
		</div>

		<div
			id="resigned_employees"
			bind:this={chartEl}
			class="chart-position top-50 translate-middle-y"
		></div>
	</div>
</div>
