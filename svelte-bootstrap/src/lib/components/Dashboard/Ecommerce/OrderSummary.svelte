<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [60, 30, 10],
			chart: {
				height: 296,
				type: 'donut'
			},
			labels: ['Completed', 'New Order', 'Pending'],
			colors: ['#37D80A', '#605DFF', '#AD63F6'],
			legend: {
				show: true,
				position: 'top',
				fontSize: '12px',
				horizontalAlign: 'center',
				itemMargin: { horizontal: 8, vertical: 0 },
				labels: {
					colors: '#64748B'
				},
				markers: {
					width: 9,
					height: 9,
					offsetX: -2,
					offsetY: -0.5,
					shape: 'diamond'
				}
			},
			dataLabels: {
				enabled: false
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<div class="col-xl-5 col-xxl-4 col-lg-5">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
				<h3 class="mb-0">Order Summary</h3>
				<select class="form-select month-select form-control" aria-label="Default select example">
					<option selected>Today</option>
					<option value="1">Weekly</option>
					<option value="2">Monthly</option>
					<option value="3">Yearly</option>
				</select>
			</div>

			<div class="pt-4">
				<div bind:this={chartContainer}></div>
			</div>

			<ul class="ps-0 mb-0 list-unstyled sales_by_locations style-two">
				<li>
					<span class="fw-medium d-block mb-2">Completed Order</span>
					<div
						class="progress"
						role="progressbar"
						aria-label="Success example"
						aria-valuenow="60"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div class="progress-bar bg-success" style="width: 60%">
							<span class="count fw-medium text-body">60%</span>
						</div>
					</div>
				</li>
				<li>
					<span class="fw-medium d-block mb-2">New Order</span>
					<div
						class="progress"
						role="progressbar"
						aria-label="Primary example"
						aria-valuenow="30"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div class="progress-bar bg-primary" style="width: 30%">
							<span class="count fw-medium text-body">30%</span>
						</div>
					</div>
				</li>
				<li>
					<span class="fw-medium d-block mb-2">Pending Order</span>
					<div
						class="progress"
						role="progressbar"
						aria-label="Example with label"
						aria-valuenow="10"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div class="progress-bar bg-primary-div" style="width: 10%">
							<span class="count fw-medium text-body">10%</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
