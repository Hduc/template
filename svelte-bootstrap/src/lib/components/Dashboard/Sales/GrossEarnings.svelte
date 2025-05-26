<script>
	import { onMount } from 'svelte';
	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [
				{
					name: 'Earnings',
					data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7]
				}
			],
			chart: {
				height: 207,
				type: 'line',
				toolbar: { show: false }
			},
			stroke: {
				width: 4,
				curve: 'smooth'
			},
			colors: ['#9135E8'],
			xaxis: {
				categories: ['1W', '2W', '3W', '4W', '5W', '6W', '7W', '8W', '9W', '10W'],
				axisTicks: { show: false },
				axisBorder: { show: false },
				labels: {
					show: true,
					style: {
						colors: '#8695AA',
						fontSize: '12px'
					}
				}
			},
			yaxis: {
				show: false,
				labels: {
					formatter: (val) => `$${val}K`,
					style: {
						colors: '#64748B',
						fontSize: '12px'
					}
				},
				axisBorder: { show: false },
				axisTicks: { show: false }
			},
			grid: {
				show: false,
				borderColor: '#ECEEF2'
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<div class="col-lg-4">
	<div class="card bg-primary-div bg-opacity-10 border-0 rounded-3 p-4 mb-4">
		<div class="d-flex align-items-center">
			<div class="flex-shrink-0">
				<img src="/assets/images/balance-2.png" alt="balance" />
			</div>
			<div class="flex-grow-1 ms-2">
				<span class="mb-1 d-block fw-medium text-body">GROSS EARNINGS</span>
				<div class="d-flex">
					<h3 class="mb-0 fs-20 fw-semibold me-1">$78,350.00</h3>
					<i class="material-symbols-outlined fs-16 position-relative top-3 text-success">
						trending_up
					</i>
					<span class="text-success">+2.3%</span>
				</div>
			</div>
		</div>

		<div bind:this={chartContainer}></div>

		<div
			class="d-flex justify-content-between pt-4 for-dark-border"
			style="border-top: 1px solid #E9D5FF;"
		>
			<div>
				<span class="fs-14 d-block mb-1">Total Balance</span>
				<h3 class="fs-20 fw-medium mb-0">$3,42,890</h3>
			</div>
			<div>
				<span class="fs-14 d-block mb-1">Withdrawals</span>
				<h3 class="fs-20 fw-medium mb-0">$2,35,425</h3>
			</div>
		</div>
	</div>
</div>
