<script>
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [90, 80, 70, 60],
			chart: {
				height: 230,
				type: 'radialBar'
			},
			plotOptions: {
				radialBar: {
					dataLabels: {
						name: {
							fontSize: '14px'
						},
						value: {
							fontSize: '14px'
						},
						total: {
							show: true,
							label: 'Total',
							formatter: function () {
								return 249;
							}
						}
					},
					hollow: {
						margin: 10,
						size: '40%',
						background: 'transparent'
					}
				}
			},
			labels: ['LinkedIn', 'Twitter', 'Facebook', 'Instagram'],
			colors: ['#AD63F6', '#3584FC', '#37D80A', '#FD5812']
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
		<div class="mb-4">
			<h3 class="mb-0">Social Search</h3>
			<span>Total Traffic In This Week</span>
		</div>

		<div style="margin: -20px 0 -22px 0;">
			<div id="social_search" bind:this={chartEl}></div>
		</div>
	</div>
</div>
