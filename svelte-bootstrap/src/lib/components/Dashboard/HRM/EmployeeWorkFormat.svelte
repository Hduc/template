<script>
	import DropdownFilter from '$lib/components/Common/DropdownFilter.svelte';
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [120, 160, 50, 20],
			chart: {
				height: 255,
				type: 'donut'
			},
			labels: ['Remote', 'In-office', 'Hybrid', 'Shift'],
			colors: ['#FD5812', '#605DFF', '#37D80A', '#AD63F6'],
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
				fontFamily: 'Inter',
				fontWeight: 400,
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
								color: '#64748B',
								fontSize: '16px',
								fontWeight: '600',
								offsetY: -6
							},
							total: {
								show: true,
								color: '#64748B',
								fontSize: '14px',
								fontWeight: '400'
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

		if (chartEl) {
			chartEl.innerHTML = '';
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div class="card border-0 rounded-3 bg-white mb-4">
	<div class="custom-padding-30">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
			<h3 class="mb-0 fw-semibold">Employee Work Format</h3>
			<DropdownFilter />
		</div>
		<div style="margin: -8px 0 -18px 0;">
			<!-- Chart container -->
			<div id="employee_work_format" bind:this={chartEl}></div>
		</div>
	</div>
	<ul class="ps-0 list-unstyled mb-2">
		<li
			class="d-flex justify-content-between align-items-center border-top"
			style="padding: 13px 30px;"
		>
			<div class="d-flex align-items-center" style="width: 175px;">
				<div class="flex-grow-1">
					<div class="d-flex align-items-center gap-2">
						<span class="d-inline-block bg-danger-50" style="width: 8px; height: 8px;"></span>
						<span class="fw-medium text-secondary">Remote</span>
					</div>
				</div>
				<span class="flex-shrink-0 d-flex align-items-center text-success-60">
					<div class="d-flex">
						34%
						<i class="material-symbols-outlined fs-18 ms-1 position-relative top-1">trending_up</i>
					</div>
				</span>
			</div>
			<span class="fw-bold text-secondary">120</span>
		</li>
		<li
			class="d-flex justify-content-between align-items-center border-top"
			style="padding: 13px 30px;"
		>
			<div class="d-flex align-items-center" style="width: 175px;">
				<div class="flex-grow-1">
					<div class="d-flex align-items-center gap-2">
						<span class="d-inline-block bg-primary-50" style="width: 8px; height: 8px;"></span>
						<span class="fw-medium text-secondary">In-office</span>
					</div>
				</div>
				<span class="flex-shrink-0 d-flex align-items-center text-danger-50">
					<div class="d-flex">
						46%
						<i class="material-symbols-outlined fs-18 ms-1 position-relative top-1">trending_down</i
						>
					</div>
				</span>
			</div>
			<span class="fw-bold text-secondary">160</span>
		</li>
		<li
			class="d-flex justify-content-between align-items-center border-top"
			style="padding: 13px 30px;"
		>
			<div class="d-flex align-items-center" style="width: 175px;">
				<div class="flex-grow-1">
					<div class="d-flex align-items-center gap-2">
						<span class="d-inline-block bg-success" style="width: 8px; height: 8px;"></span>
						<span class="fw-medium text-secondary">Hybrid</span>
					</div>
				</div>
				<span class="flex-shrink-0 d-flex align-items-center text-success-60">
					<div class="d-flex">
						15%
						<i class="material-symbols-outlined fs-18 ms-1 position-relative top-1">trending_up</i>
					</div>
				</span>
			</div>
			<span class="fw-bold text-secondary">50</span>
		</li>
		<li
			class="d-flex justify-content-between align-items-center border-top"
			style="padding: 13px 30px;"
		>
			<div class="d-flex align-items-center" style="width: 175px;">
				<div class="flex-grow-1">
					<div class="d-flex align-items-center gap-2">
						<span class="d-inline-block bg-primary-div-50" style="width: 8px; height: 8px;"></span>
						<span class="ms-1 fw-medium text-secondary">Shift</span>
					</div>
				</div>
				<span class="flex-shrink-0 d-flex align-items-center text-danger-50">
					<div class="d-flex">
						05%
						<i class="material-symbols-outlined fs-18 ms-1 position-relative top-1">trending_down</i
						>
					</div>
				</span>
			</div>
			<span class="fw-bold text-secondary">20</span>
		</li>
	</ul>
</div>
