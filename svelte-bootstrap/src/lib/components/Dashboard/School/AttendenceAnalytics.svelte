<script>
	import DropDownMonth from '$lib/components/Common/DropDownMonth.svelte';
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [
				{
					name: 'Teachers',
					data: [500, 600, 250, 600, 200, 500, 600, 120, 250, 500, 200, 250]
				},
				{
					name: 'Boys',
					data: [200, 300, 200, 400, 200, 250, 350, 120, 250, 300, 120, 200]
				},
				{
					name: 'Girls',
					data: [150, 250, 200, 300, 300, 150, 200, 300, 200, 250, 400, 200]
				}
			],
			chart: {
				type: 'bar',
				height: 347,
				stacked: true,
				toolbar: {
					show: false
				},
				zoom: {
					enabled: true
				}
			},
			plotOptions: {
				bar: {
					borderRadius: 10,
					horizontal: false,
					columnWidth: '20px',
					borderRadiusApplication: 'end'
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: ['#605DFF', '#9CAAFF', '#DDE4FF'],
			xaxis: {
				categories: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec'
				],
				axisTicks: {
					show: false,
					color: '#8695AA'
				},
				axisBorder: {
					show: true,
					color: '#D5D9E2'
				},
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
				max: 1450,
				min: 0,
				labels: {
					style: {
						colors: '#8695AA',
						fontSize: '12px'
					}
				},
				axisBorder: {
					show: true,
					color: '#D5D9E2'
				},
				axisTicks: {
					show: false,
					color: '#ECEEF2'
				}
			},
			legend: {
				show: true,
				position: 'top',
				horizontalAlign: 'left',
				fontSize: '12px',
				fontFamily: 'Inter',
				fontWeight: 400,
				offsetY: -1,
				itemMargin: {
					horizontal: 8,
					vertical: 0
				},
				labels: {
					colors: '#64748B'
				},
				markers: {
					size: 7,
					offsetX: -2,
					offsetY: -0.5,
					shape: 'diamond'
				}
			},
			fill: {
				type: 'gradient',
				opacity: 1,
				gradient: {
					shade: '#605DFF',
					type: 'vertical',
					shadeIntensity: 0.5,
					gradientToColors: undefined,
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 50, 10],
					colorStops: []
				}
			},
			grid: {
				show: true,
				strokeDashArray: 8,
				borderColor: '#ECF0FF'
			}
		};

		if (chartEl) {
			chartEl.innerHTML = '';
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});

	let isOpen = false;
	let selected = 'This Month';
	let dropdownEl;

	const options = ['This Day', 'This Week', 'This Month', 'This Year'];

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectOption(option) {
		selected = option;
		isOpen = false;
	}

	function handleClickOutside(event) {
		if (dropdownEl && !dropdownEl.contains(event.target)) {
			isOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="card custom-shadow rounded-3 bg-white border mb-4">
	<div class="custom-padding-30">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-3">
			<h3 class="mb-0 fw-semibold">Attendance Analytics</h3>
			<DropDownMonth />
		</div>

		<div style="margin: -6px -1px -26px -17px;">
			<!-- Chart Mount Point -->
			<div id="attendance_analytics" bind:this={chartEl}></div>
		</div>
	</div>
</div>
