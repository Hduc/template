<script>
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [
				{
					name: 'Employees',
					data: [3, 12, 8, 15, 8, 10, 15]
				}
			],
			chart: {
				type: 'area',
				height: 140,
				zoom: { enabled: false },
				toolbar: { show: false }
			},
			colors: ['#4936F5'],
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 90, 100]
				}
			},
			dataLabels: { enabled: false },
			grid: { show: false, borderColor: '#ECEEF2' },
			stroke: {
				curve: 'smooth',
				width: 0
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
					formatter: (val) => `${val}%`,
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				}
			},
			legend: { show: false },
			tooltip: {
				y: {
					formatter: function (val) {
						return `Total: ${val}`;
					}
				}
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
					class="text-center rounded-2 bg-primary-50"
					style="width: 44px; height: 44px; line-height: 44px;"
				>
					<img src="/assets/images/icon-employees.svg" alt="icon-employees" />
				</div>
			</div>
			<div class="flex-grow-1 ms-3">
				<span class="d-block mb-1">Total Employees</span>
				<h3 class="fw-semibold fs-20 mb-0">15,720</h3>
			</div>
		</div>

		<div class="d-flex align-items-center">
			<i
				class="ri-arrow-right-up-line d-inline-block text-center rounded-1 fs-18 text-success-50"
				style="width: 26px; height: 26px; line-height: 26px; background-color: #D8FFC8;"
			></i>
			<p class="ms-2"><span class="text-secondary fw-medium">+12%</span> last year</p>
		</div>

		<div
			id="total_employees"
			bind:this={chartEl}
			class="chart-position top-50 translate-middle-y"
		></div>
	</div>
</div>
