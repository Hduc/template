<script>
	import BalanceOverview from '$lib/components/Dashboard/CRM/BalanceOverview.svelte';
	import RecentLeads from '$lib/components/Dashboard/CRM/RecentLeads.svelte';
	import RevenueGrowth from '$lib/components/Dashboard/CRM/RevenueGrowth.svelte';
	import SalesReport from '$lib/components/Dashboard/CRM/SalesReport.svelte';
	import TopPerformer from '$lib/components/Dashboard/CRM/TopPerformer.svelte';
	import TopProducts from '$lib/components/Dashboard/CRM/TopProducts.svelte';
</script>

<svelte:head>
	<title>CRM | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>
<RevenueGrowth />
<BalanceOverview />
<div class="row justify-content-center">
	<TopPerformer />
	<RecentLeads />
</div>
<div class="row justify-content-center">
	<SalesReport />
	<TopProducts />
</div>
