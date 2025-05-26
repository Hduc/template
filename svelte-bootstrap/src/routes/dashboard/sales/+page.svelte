<script>
	import GrossEarnings from '$lib/components/Dashboard/Sales/GrossEarnings.svelte';
	import RealTimeSales from '$lib/components/Dashboard/Sales/RealTimeSales.svelte';
	import RecentEarnings from '$lib/components/Dashboard/Sales/RecentEarnings.svelte';
	import RecentOrders from '$lib/components/Dashboard/Sales/RecentOrders.svelte';
	import SalesByLocations from '$lib/components/Dashboard/Sales/SalesByLocations.svelte';
	import SalesOverview from '$lib/components/Dashboard/Sales/SalesOverview.svelte';
	import TotalOrders from '$lib/components/Dashboard/Sales/TotalOrders.svelte';
	import TotalProfit from '$lib/components/Dashboard/Sales/TotalProfit.svelte';
	import TotalRevenue from '$lib/components/Dashboard/Sales/TotalRevenue.svelte';
	import TotalSales from '$lib/components/Dashboard/Sales/TotalSales.svelte';
	import TransactionHistory from '$lib/components/Dashboard/Sales/TransactionHistory.svelte';
	import Welcome from '$lib/components/Dashboard/Sales/Welcome.svelte';
</script>

<svelte:head>
	<title>Sales | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="card bg-white border-0 rounded-3 p-4 pb-0 mb-4">
	<Welcome />
	<div class="row">
		<TotalSales />
		<TotalOrders />
		<TotalProfit />
		<TotalRevenue />
	</div>
	<div class="row">
		<RecentEarnings />
		<SalesByLocations />
	</div>
</div>

<div class="row justify-content-center">
	<TransactionHistory />
	<RecentOrders />
</div>

<div class="row">
	<RealTimeSales />
	<SalesOverview />
	<GrossEarnings />
</div>
