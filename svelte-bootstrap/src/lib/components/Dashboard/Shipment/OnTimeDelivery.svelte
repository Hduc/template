<script>
	import { onMount } from 'svelte';
	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [85, 15],
			chart: {
				height: 180,
				type: 'pie'
			},
			labels: ['Delivered', 'Canceled'],
			colors: ['#37D80A', '#FF4023'],
			dataLabels: {
				enabled: true,
				style: {
					fontSize: '10px',
					fontFamily: 'Inter',
					colors: ['#fff']
				},
				dropShadow: {
					enabled: true,
					top: 0,
					left: 0,
					blur: 0,
					color: '#000',
					opacity: 0
				}
			},
			plotOptions: {
				pie: {
					expandOnClick: false
				}
			},
			stroke: {
				width: 1,
				show: true,
				colors: ['#ffffff']
			},
			legend: {
				show: true,
				position: 'left',
				fontSize: '12px',
				horizontalAlign: 'bottom',
				offsetX: -25,
				offsetY: 109,
				fontFamily: 'Inter',
				fontWeight: 400,
				itemMargin: {
					horizontal: 0,
					vertical: 4
				},
				labels: {
					colors: '#64748B'
				},
				markers: {
					width: 9,
					height: 9,
					shape: 'diamond',
					offsetX: -1
				}
			}
		};

		if (chartEl) {
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div class="col-md-12 col-xxl-4">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<span class="fs-14 d-block mb-4">On-Time Delivery</span>
			<div style="margin: -7px 0 -13px 0;">
				<div id="on_time_delivery" bind:this={chartEl}></div>
			</div>
		</div>
	</div>
</div>
