<script>
	import DropDownMonth from '$lib/components/Common/DropDownMonth.svelte';
	import AgentAverageEarnings from '$lib/components/Dashboard/CallCenter/AgentAverageEarnings.svelte';
	import AgentsPerformanceOverview from '$lib/components/Dashboard/CallCenter/AgentsPerformanceOverview.svelte';
	import CallCenterGeography from '$lib/components/Dashboard/CallCenter/CallCenterGeography.svelte';
	import InboundCall from '$lib/components/Dashboard/CallCenter/InboundCall.svelte';
	import OutboundCalls from '$lib/components/Dashboard/CallCenter/OutboundCalls.svelte';
	import Overview from '$lib/components/Dashboard/CallCenter/Overview.svelte';
	import RecentCalls from '$lib/components/Dashboard/CallCenter/RecentCalls.svelte';
	// import { onMount } from 'svelte';

	// onMount(() => {
	// 	document.body.classList.add('bg-white');
	// });
</script>

<svelte:head>
	<title>Call Center | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row">
	<div class="col-xxl-8">
		<div class="card custom-shadow rounded-3 bg-white border mb-4">
			<div class="custom-padding-30">
				<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-4">
					<h3 class="mb-0 fw-semibold">Overview</h3>
					<DropDownMonth />
				</div>
				<Overview />
			</div>
		</div>
	</div>

	<div class="col-xxl-4">
		<div class="row">
			<div class="col-xxl-12 col-md-6">
				<InboundCall />
			</div>
			<div class="col-xxl-12 col-md-6">
				<OutboundCalls />
			</div>
		</div>
	</div>
</div>

<div class="row">
	<div class="col-lg-7 col-xxl-6">
		<AgentsPerformanceOverview />
	</div>
	<div class="col-lg-5 col-xxl-6">
		<CallCenterGeography />
	</div>
</div>

<div class="row">
	<div class="col-xxl-4">
		<AgentAverageEarnings />
	</div>
	<div class="col-xxl-8">
		<RecentCalls />
	</div>
</div>
