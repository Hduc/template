<script>
	import DropdownFilter from '$lib/components/Common/DropdownFilter.svelte';
	import AvgEarning15Day from './AvgEarning15Day.svelte';
	import AvgEarning1Day from './AvgEarning1Day.svelte';
	import AvgEarning1Month from './AvgEarning1Month.svelte';
	import AvgEarning1Year from './AvgEarning1Year.svelte';
	import AvgEarning6Month from './AvgEarning6Month.svelte';

	let activeTab = '1d';

	const tabs = [
		{ id: '1d', label: '1d', component: AvgEarning1Day },
		{ id: '15d', label: '15d', component: AvgEarning15Day },
		{ id: '1m', label: '1m', component: AvgEarning1Month },
		{ id: '6m', label: '6m', component: AvgEarning6Month },
		{ id: '1y', label: '1y', component: AvgEarning1Year }
	];
</script>

<div class="card custom-shadow rounded-3 bg-white border mb-4">
	<div class="custom-padding-30">
		<div class="d-flex justify-content-between align-items-center gap-1 pb-2 mb-4">
			<h3 class="mb-0 fw-semibold">Agent Avg. Earnings</h3>

			<DropdownFilter />
		</div>

		<ul class="nav nav-tabs justify-content-between ethereum-rate-tabs" id="myTab" role="tablist">
			{#each tabs as tab}
				<li class="nav-item" role="presentation">
					<button
						class={`nav-link fw-normal ${activeTab === tab.id ? 'active' : ''}`}
						style="font-size: 14px;"
						type="button"
						on:click={() => (activeTab = tab.id)}
					>
						{tab.label}
					</button>
				</li>
			{/each}
		</ul>

		<div class="tab-content" id="myTabContent">
			{#if activeTab === tabs[0].id}
				<div
					class="tab-pane fade show active"
					id="ethereum1-tab-pane"
					role="tabpanel"
					aria-labelledby="ethereum1-tab"
					tabindex="0"
				>
					<AvgEarning1Day />
				</div>
			{:else if activeTab === tabs[1].id}
				<div
					class="tab-pane fade show active"
					id="ethereum2-tab-pane"
					role="tabpanel"
					aria-labelledby="ethereum2-tab"
					tabindex="0"
				>
					<AvgEarning15Day />
				</div>
			{:else if activeTab === tabs[2].id}
				<div
					class="tab-pane fade show active"
					id="ethereum3-tab-pane"
					role="tabpanel"
					aria-labelledby="ethereum3-tab"
					tabindex="0"
				>
					<AvgEarning1Month />
				</div>
			{:else if activeTab === tabs[3].id}
				<div
					class="tab-pane fade show active"
					id="ethereum4-tab-pane"
					role="tabpanel"
					aria-labelledby="ethereum4-tab"
					tabindex="0"
				>
					<AvgEarning6Month />
				</div>
			{:else if activeTab === tabs[4].id}
				<div
					class="tab-pane fade show active"
					id="ethereum5-tab-pane"
					role="tabpanel"
					aria-labelledby="ethereum5-tab"
					tabindex="0"
				>
					<AvgEarning1Year />
				</div>
			{/if}
		</div>
	</div>
</div>
