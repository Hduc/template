<script>
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			chart: {
				height: 170,
				width: 170,
				type: 'radialBar'
			},
			series: [35],
			colors: ['#605DFF'],
			plotOptions: {
				radialBar: {
					hollow: {
						margin: 0,
						size: '35%',
						background: '#F5F7F8'
					},
					track: {
						background: '#F5F7F8'
					},
					dataLabels: {
						name: {
							offsetY: -10,
							color: '#4b9bfa',
							fontSize: '.625rem',
							show: false
						},
						value: {
							show: true,
							offsetY: 5,
							color: '#3A4252',
							fontSize: '14px',
							fontWeight: 700,
							fontFamily: 'Inter'
						}
					}
				}
			},
			stroke: {
				lineCap: '0'
			},
			labels: ['Status']
		};

		if (chartEl) {
			chartEl.innerHTML = '';
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div class="card bg-white border-0 rounded-3 mb-4">
	<div class="card-body p-4">
		<div class="d-flex justify-content-between align-items-center mb-4">
			<span
				class="d-inline-block border-success border bg-success bg-opacity-10 text-success rounded-pill fs-12 fw-medium px-2"
				>+ 35%</span
			>
			<span class="fs-12">Last 30 days</span>
		</div>
		<div class="row align-items-end">
			<div class="col-sm-6">
				<span class="d-block mb-2">Properties for Rent</span>
				<h3 class="mb-0 fs-20 mb-0">2,510</h3>
			</div>
			<div class="col-sm-6">
				<div style="margin: -36px 0 -36px 0;">
					<div id="properties_for_rent" bind:this={chartEl} class="mt-4 mt-sm-0"></div>
				</div>
			</div>
		</div>
	</div>
</div>
