<script>
	import DropdownFilter from '$lib/components/Common/DropdownFilter.svelte';
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [455, 375, 220, 180, 45],
			chart: {
				height: 251,
				type: 'donut'
			},
			labels: ['Mathematics', 'English', 'History', 'Art', 'Music'],
			colors: ['#37D80A', '#FF4023', '#605DFF', '#AD63F6', '#90C7FF'],
			stroke: {
				width: 1,
				show: true,
				colors: ['#ffffff'],
				lineCap: 'round'
			},
			legend: {
				show: false,
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
					shape: 'diamond'
				}
			},
			plotOptions: {
				pie: {
					expandOnClick: false,
					donut: {
						size: '80%',
						labels: {
							show: true,
							name: {
								color: '#64748B'
							},
							value: {
								show: true,
								color: '#64748B',
								fontSize: '24px',
								fontWeight: '600',
								offsetY: 1
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
				enabled: true
			}
		};

		if (chartEl) {
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div class="custom-padding-30">
	<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-5">
		<h3 class="mb-0 fw-semibold">New Admissions</h3>
		<DropdownFilter />
	</div>
	<div style="margin: -8px 0 -13px 0;">
		<!-- Chart Mount Point -->
		<div id="new_admission" bind:this={chartEl}></div>
	</div>
	<div class="d-flex flex-wrap gap-3 justify-content-center mt-5">
		<div class="d-flex align-items-center">
			<span class="d-inline-block rounded-circle bg-success" style="width: 11px; height: 11px;"
			></span>
			<span class="ms-2">Mathematics: <span class="fw-semibold">455</span></span>
		</div>
		<div class="d-flex align-items-center">
			<span class="d-inline-block rounded-circle bg-danger" style="width: 11px; height: 11px;"
			></span>
			<span class="ms-2">English: <span class="fw-semibold">375</span></span>
		</div>
		<div class="d-flex align-items-center">
			<span class="d-inline-block rounded-circle bg-primary-div" style="width: 11px; height: 11px;"
			></span>
			<span class="ms-2">History: <span class="fw-semibold">220</span></span>
		</div>
		<div class="d-flex align-items-center">
			<span class="d-inline-block rounded-circle bg-primary" style="width: 11px; height: 11px;"
			></span>
			<span class="ms-2">Art: <span class="fw-semibold">180</span></span>
		</div>
		<div class="d-flex align-items-center">
			<span
				class="d-inline-block rounded-circle bg-info bg-opacity-50"
				style="width: 11px; height: 11px;"
			></span>
			<span class="ms-2">Music: <span class="fw-semibold">45</span></span>
		</div>
	</div>
</div>
