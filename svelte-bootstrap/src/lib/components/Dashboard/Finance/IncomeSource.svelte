<script>
	import { onMount } from 'svelte';

	let chartEl;

	onMount(async () => {
		const echarts = await import('echarts');

		if (chartEl) {
			const myChart = echarts.init(chartEl);

			const option = {
				legend: {
					bottom: '0',
					left: 'center',
					itemWidth: 10,
					itemHeight: 10,
					textStyle: {
						fontSize: 12,
						color: '#fff'
					}
				},
				toolbox: {
					show: false,
					feature: {
						mark: { show: true },
						dataView: { show: true, readOnly: false },
						restore: { show: true },
						saveAsImage: { show: true }
					}
				},
				color: ['#3584FC', '#FD5812', '#3584FC', '#FD5812'],
				series: [
					{
						name: 'Income Source',
						type: 'pie',
						radius: [15, 70],
						center: ['50%', '50%'],
						roseType: 'area',
						itemStyle: {
							borderRadius: 8
						},
						data: [
							{ value: 40, name: 'Product Sales' },
							{ value: 15, name: 'Investments' },
							{ value: 35, name: 'Salary' },
							{ value: 20, name: 'Consulting' }
						]
					}
				]
			};

			myChart.setOption(option);
		}
	});
</script>

<div class="col-md-6 col-xxl-12">
	<div
		class="card border-0 rounded-3 mb-4"
		style="background: linear-gradient(120deg, #343A46 0%, #23272E 99.29%);"
	>
		<div class="card-body p-4">
			<div class="d-flex justify-content-between flex-wrap gap-2 mb-4">
				<h3 class="fs-18 mb-0 text-white">Income Source</h3>
				<span class="fs-12 text-white">Last 30 days</span>
			</div>

			<div style="margin: -51px 0 -5px 0;">
				<div
					id="income_source"
					bind:this={chartEl}
					class="mx-auto"
					style="width: 300px; height: 250px;"
				></div>
			</div>
		</div>
	</div>
</div>
