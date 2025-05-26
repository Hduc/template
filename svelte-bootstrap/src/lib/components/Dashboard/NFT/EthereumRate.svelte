<script>
	import EthFilter from './ETHFilter.svelte';
	import EthTab1 from './EthTab1.svelte';
	import EthTab2 from './EthTab2.svelte';
	import EthTab3 from './EthTab3.svelte';
	import EthTab4 from './EthTab4.svelte';
	import EthTab5 from './EthTab5.svelte';

	let activeTab = '1D';
</script>

<div class="col-xxl-4 col-lg-4">
	<div class="card bg-white border-0 p-4 mb-4 rounded-10">
		<EthFilter />
		<div class="d-flex align-items-center mb-2">
			<h3 class="fs-32 fw-bold text-secondary mb-0">$1,528</h3>
			<span
				class="fw-medium fs-12 text-success bg-success bg-opacity-10 border border-success px-2 rounded-pill ms-2"
			>
				+5.4%
				<i class="ri-arrow-up-line"></i>
			</span>
		</div>

		<span class="fs-12 d-block mb-4">Vs previous 30 days</span>

		<ul class="nav nav-tabs justify-content-between ethereum-rate-tabs" id="myTab" role="tablist">
			{#each ['1D', '5D', '1M', '6M', '1Y'] as tab}
				<li class="nav-item" role="presentation">
					<button
						class="nav-link {activeTab === tab ? 'active' : ''}"
						type="button"
						on:click={() => (activeTab = tab)}
					>
						{tab}
					</button>
				</li>
			{/each}
		</ul>

		<div class="tab-content" id="myTabContent">
			{#if activeTab === '1D'}
				<div
					class="tab-pane fade show active"
					id="ethereum1-tab-pane"
					role="tabpanel"
					aria-labelledby="ethereum1-tab"
					tabindex="0"
				>
					<EthTab1 />
				</div>
			{:else if activeTab === '5D'}
				<div
					class="tab-pane fade show active"
					id="ethereum2-tab-pane"
					role="tabpanel"
					aria-labelledby="ethereum2-tab"
					tabindex="0"
				>
					<EthTab2 />
				</div>
			{:else if activeTab === '1M'}
				<div
					class="tab-pane fade show active"
					id="ethereum3-tab-pane"
					role="tabpanel"
					aria-labelledby="ethereum3-tab"
					tabindex="0"
				>
					<EthTab3 />
				</div>
			{:else if activeTab === '6M'}
				<div
					class="tab-pane fade show active"
					id="ethereum4-tab-pane"
					role="tabpanel"
					aria-labelledby="ethereum4-tab"
					tabindex="0"
				>
					<EthTab4 />
				</div>
			{:else if activeTab === '1Y'}
				<div
					class="tab-pane fade show active"
					id="ethereum5-tab-pane"
					role="tabpanel"
					aria-labelledby="ethereum5-tab"
					tabindex="0"
				>
					<EthTab5 />
				</div>
			{/if}
		</div>
	</div>
</div>
