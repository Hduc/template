<script>
	import DropDownMonth from '$lib/components/Common/DropDownMonth.svelte';

	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [
				{
					name: 'Boys',
					data: [70, 42, 70, 120, 40, 70, 90]
				},
				{
					name: 'Girls',
					data: [-70, -44, -70, -120, -40, -70, -90]
				}
			],
			colors: ['#3584FC', '#FD5812'],
			chart: {
				type: 'bar',
				height: 291,
				stacked: true,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					columnWidth: '20%',
					borderRadius: 5,
					borderRadiusApplication: 'end',
					borderRadiusWhenStacked: 'all'
				}
			},
			dataLabels: {
				enabled: false
			},
			grid: {
				borderColor: '#EDEFF5',
				strokeDashArray: 8,
				xaxis: {
					lines: { show: true }
				},
				yaxis: {
					lines: { show: false }
				}
			},
			legend: {
				show: true,
				position: 'top',
				fontSize: '12px',
				horizontalAlign: 'left',
				fontFamily: 'Inter',
				fontWeight: 400,
				itemMargin: { horizontal: 8, vertical: 0 },
				labels: { colors: '#64748B' },
				markers: {
					size: 7,
					offsetX: -2,
					offsetY: -0.5,
					shape: 'diamond'
				}
			},
			xaxis: {
				categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				axisTicks: { show: false, color: '#8695AA' },
				axisBorder: { show: false, color: '#D5D9E2' },
				labels: {
					show: true,
					style: { colors: '#64748B', fontSize: '12px' }
				}
			},
			yaxis: {
				show: false
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: (val) => `Status ${val}`
				}
			}
		};

		if (chartEl) {
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div class="custom-padding-30">
	<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-4">
		<h3 class="mb-0 fw-semibold">Students Overview</h3>
		<DropDownMonth classnames=" without-border position-relative" />
	</div>

	<div style="margin: -5px -9px -27px -16px;" class="pb-5">
		<div id="students_overview" bind:this={chartEl}></div>
	</div>

	<div>
		<div class="d-flex gap-2 align-items-center">
			<div class="d-flex">
				<div
					class="text-center rounded-1"
					style="background-color: #DAEBFF; width: 42px; height: 42px; line-height: 42px;"
				>
					<img src="/assets/images/boys.svg" alt="boys" />
				</div>
				<div class="ms-2">
					<span class="d-block">Boys</span>
					<h3 class="fs-20 fw-semibold mb-0">980</h3>
				</div>
			</div>
			<div class="d-flex ms-5">
				<div
					class="text-center rounded-1"
					style="background-color: #FFE8D4; width: 42px; height: 42px; line-height: 42px;"
				>
					<img src="/assets/images/girls.svg" alt="boys" />
				</div>
				<div class="ms-2">
					<span class="d-block">Girls</span>
					<h3 class="fs-20 fw-semibold mb-0">675</h3>
				</div>
			</div>
		</div>
	</div>
</div>
