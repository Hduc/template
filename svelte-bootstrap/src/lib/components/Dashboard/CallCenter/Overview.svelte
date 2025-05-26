<script>
	import AnswerdCalls from './AnswerdCalls.svelte';
	import MissedCalls from './MissedCalls.svelte';
	import TotalCalls from './TotalCalls.svelte';

	let activeTab = 'total-calls';
</script>

<div id="nav-tab" class=" call-overview-tabs" role="tablist">
	<div class="row justify-content-center">
		<div class="col-md-4 col-sm-6">
			<div
				class="card bg-primary bg-opacity-10 border-0 rounded-3 p-4 mb-4 calls-card {activeTab ===
				'total-calls'
					? 'active'
					: ''}"
				id="nav-total-calls-tab"
				type="button"
				role="tab"
				tabindex="0"
				on:click={() => (activeTab = 'total-calls')}
			>
				<div class="d-flex align-items-center mb-3">
					<div class="flex-grow-1 me-3">
						<span class="text-body d-block mb-1">Total Calls</span>
						<h3 class="fs-24 fw-semibold text-secondary">26,435</h3>
					</div>

					<div class="flex-shrink-0">
						<img src="/assets/images/total-calls.svg" alt="total-calls" />
					</div>
				</div>
				<span class="d-flex align-items-center align-items-center text-body">
					<i class="material-symbols-outlined fs-18 pe-2 position-relative top-1 text-success"
						>trending_up</i
					>
					<span class="fw-medium me-1 text-secondary">+15%</span> last year
				</span>
			</div>
		</div>
		<div class="col-md-4 col-sm-6">
			<div
				class="card bg-primary-divs border-0 rounded-3 p-4 mb-4 calls-card {activeTab ===
				'answered-calls'
					? 'active'
					: ''}"
				id="nav-answered-calls-tab"
				type="button"
				role="tab"
				on:click={() => (activeTab = 'answered-calls')}
				style="background-color: #FAF5FF;"
			>
				<div class="d-flex align-items-center mb-3">
					<div class="flex-grow-1 me-3">
						<span class="text-body d-block mb-1">Answered Calls</span>
						<h3 class="fs-24 fw-semibold text-secondary">18,520</h3>
					</div>

					<div class="flex-shrink-0">
						<img src="/assets/images/answered-calls.svg" alt="answered-calls" />
					</div>
				</div>
				<span class="d-flex align-items-center align-items-center text-body">
					<i class="material-symbols-outlined fs-18 pe-2 position-relative top-1 text-success-60"
						>trending_up</i
					>
					<span class="fw-medium me-1 text-secondary">+15%</span> last year
				</span>
			</div>
		</div>
		<div class="col-md-4 col-sm-12">
			<div
				class="card bg-dangers border-0 rounded-3 p-4 mb-4 calls-card {activeTab === 'missed-calls'
					? 'active'
					: ''}"
				id="nav-missed-calls-tab"
				type="button"
				role="tab"
				on:click={() => (activeTab = 'missed-calls')}
				style="background-color: #FFF5ED;"
			>
				<div class="d-flex align-items-center mb-3">
					<div class="flex-grow-1 me-3">
						<span class="text-body d-block mb-1">Missed Calls</span>
						<h3 class="fs-24 fw-semibold text-secondary">3,735</h3>
					</div>

					<div class="flex-shrink-0">
						<img src="/assets/images/missed-calls.svg" alt="missed-calls" />
					</div>
				</div>
				<span class="d-flex align-items-center align-items-center text-body">
					<i class="material-symbols-outlined fs-18 pe-2 position-relative top-1 text-danger-50"
						>trending_down</i
					>
					<span class="fw-medium me-1 text-secondary">-25%</span> last year
				</span>
			</div>
		</div>
	</div>
</div>

<div class="tab-content" id="nav-tabContent">
	{#if activeTab === 'total-calls'}
		<div
			class="tab-pane fade show active"
			id="nav-total-calls"
			role="tabpanel"
			aria-labelledby="nav-total-calls-tab"
			tabindex="0"
		>
			<TotalCalls />
		</div>
	{:else if activeTab === 'answered-calls'}
		<div
			class="tab-pane fade show active"
			id="nav-answered-calls"
			role="tabpanel"
			aria-labelledby="nav-answered-calls-tab"
			tabindex="0"
		>
			<AnswerdCalls />
		</div>
	{:else if activeTab === 'missed-calls'}
		<div
			class="tab-pane fade show active"
			id="nav-missed-calls"
			role="tabpanel"
			aria-labelledby="nav-missed-calls-tab"
			tabindex="0"
		>
			<MissedCalls />
		</div>
	{/if}
</div>
