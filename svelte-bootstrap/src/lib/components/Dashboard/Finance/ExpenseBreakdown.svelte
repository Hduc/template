<script>
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const echarts = await import('echarts');

		if (chartEl) {
			const myChart = echarts.init(chartEl);

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
				color: ['#AD63F6', '#BF85FB', '#D7B5FD', '#E9D5FF'],
				series: [
					{
						name: 'Expense Breakdown',
						type: 'pie',
						radius: '50%',
						data: [
							{ value: 1048, name: 'Marketing' },
							{ value: 735, name: 'Sales' },
							{ value: 580, name: 'Salaries' },
							{ value: 484, name: 'Miscellaneous' }
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			};

			myChart.setOption(option);
		}
	});
</script>

<div class="card border-0 rounded-3 bg-white mb-4">
	<div class="card-body p-4">
		<h3 class="mb-4">Expense Breakdown</h3>
		<div style="margin: -70px 0 0 0;">
			<div
				id="expense_breakdown"
				bind:this={chartEl}
				class="mx-auto"
				style="width: 376px; height: 345px;"
			></div>
		</div>
	</div>
</div>
