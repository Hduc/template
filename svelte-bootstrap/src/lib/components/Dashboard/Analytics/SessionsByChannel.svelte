<script>
	import { onMount } from 'svelte';

	let chartContainer;

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			series: [976, 651, 818, 459, 320, 209],
			chart: {
				type: 'donut',
				height: 274
			},
			labels: ['Email', 'Organic Search', 'Direct Browse', 'Paid Search', 'Social', 'Referral'],
			colors: ['#605DFF', '#3584FC', '#AD63F6', '#0dcaf0', '#25B003', '#FD5812'],
			stroke: {
				width: 1,
				show: true,
				colors: ['#ffffff']
			},
			legend: {
				show: false,
				position: 'top',
				fontSize: '12px',
				horizontalAlign: 'center',
				itemMargin: {
					horizontal: 8,
					vertical: 0
				},
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
			plotOptions: {
				pie: {
					expandOnClick: false,
					donut: {
						labels: {
							show: true,
							name: {
								color: '#64748B'
							},
							value: {
								show: true,
								color: '#3A4252',
								fontSize: '28px',
								fontWeight: '600'
							},
							total: {
								show: true,
								color: '#64748B'
							}
						}
					}
				}
			},
			dataLabels: {
				enabled: false
			},
			tooltip: {
				enabled: false
			}
		};

		const chart = new ApexCharts(chartContainer, options);
		chart.render();
	});
</script>

<div class="col-xxl-5">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30">
				<h3 class="mb-0">Sessions by Channel</h3>
				<select
					class="form-select month-select form-control w-135"
					aria-label="Default select example"
				>
					<option selected>Last 30 Days</option>
					<option value="1">Last 60 Days</option>
					<option value="2">Last 90 Days</option>
				</select>
			</div>

			<div style="margin-top: -10px; margin-bottom: 10px;">
				<!-- Chart container wrapper -->
				<div bind:this={chartContainer} id="sessions_by_channel"></div>
			</div>

			<div class="d-flex justify-content-center flex-wrap gap-3 gap-lg-4">
				<div>
					<div class="d-flex align-items-center">
						<span class="wh-11 bg-primary rounded-1 me-1"></span>
						<span>Email</span>
					</div>
					<h4 class="fs-18 fw-medium mb-0 mt-1 ps-3">976</h4>
				</div>
				<div>
					<div class="d-flex align-items-center">
						<span class="wh-11 rounded-1 me-1" style="background-color: #3584FC;"></span>
						<span>Organic Search</span>
					</div>
					<h4 class="fs-18 fw-medium mb-0 mt-1 ps-3">651</h4>
				</div>
				<div>
					<div class="d-flex align-items-center">
						<span class="wh-11 bg-primary-div rounded-1 me-1"></span>
						<span>Direct Browse</span>
					</div>
					<h4 class="fs-18 fw-medium mb-0 mt-1 ps-3">818</h4>
				</div>
				<div>
					<div class="d-flex align-items-center">
						<span class="wh-11 bg-info rounded-1 me-1"></span>
						<span>Paid Search</span>
					</div>
					<h4 class="fs-18 fw-medium mb-0 mt-1 ps-3">459</h4>
				</div>
				<div>
					<div class="d-flex align-items-center">
						<span class="wh-11 bg-success rounded-1 me-1"></span>
						<span>Social</span>
					</div>
					<h4 class="fs-18 fw-medium mb-0 mt-1 ps-3">320</h4>
				</div>
				<div>
					<div class="d-flex align-items-center">
						<span class="wh-11 bg-danger rounded-1 me-1"></span>
						<span>Referral</span>
					</div>
					<h4 class="fs-18 fw-medium mb-0 mt-1 ps-3">209</h4>
				</div>
			</div>
		</div>
	</div>
</div>
