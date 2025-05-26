<script>
	import { onMount } from 'svelte';
	let chartEl;

	onMount(async () => {
		const echarts = await import('echarts'); // ← fixed, no `.default`

		if (chartEl) {
			const chart = echarts.init(chartEl);

			const option = {
				tooltip: {
					trigger: 'item'
				},
				legend: {
					bottom: '0',
					left: 'center',
					itemWidth: 10,
					itemHeight: 10,
					textStyle: {
						fontSize: 12,
						color: '#64748B'
					}
				},
				color: ['#37D80A', '#FD5812', '#605DFF'],
				series: [
					{
						name: 'Cash at End of the Month',
						type: 'pie',
						radius: ['40%', '70%'],
						center: ['50%', '70%'],
						startAngle: 180,
						endAngle: 360,
						data: [
							{ value: 1048, name: '42.9%' },
							{ value: 735, name: '20.0%' },
							{ value: 580, name: '37.1%' }
						]
					}
				]
			};

			chart.setOption(option);

			// Optional: Handle window resize
			window.addEventListener('resize', () => {
				chart.resize();
			});
		}
	});
</script>

<div class="card border-0 rounded-3 bg-white mb-4">
	<div class="card-body p-4">
		<span class="d-block mb-3">Cash at End of the Month</span>
		<div style="margin: -37px 0 -5px 0;">
			<div
				id="cash_at_end_of_the_month"
				bind:this={chartEl}
				style="width: 300px; height:166px;"
				class="m-auto"
			></div>
		</div>
	</div>
</div>
