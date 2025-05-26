<script>
	import OrderSummary from '$lib/components/Dashboard/Ecommerce/OrderSummary.svelte';
	import RecentOrders from '$lib/components/Dashboard/Ecommerce/RecentOrders.svelte';
	import RecentTransactions from '$lib/components/Dashboard/Ecommerce/RecentTransactions.svelte';
	import ReturnCustomerRate from '$lib/components/Dashboard/Ecommerce/ReturnCustomerRate.svelte';
	import SalesByLocation from '$lib/components/Dashboard/Ecommerce/SalesByLocation.svelte';
	import TopSailingProducts from '$lib/components/Dashboard/Ecommerce/TopSailingProducts.svelte';
	import TotalOrders from '$lib/components/Dashboard/Ecommerce/TotalOrders.svelte';
	import TotalSales from '$lib/components/Dashboard/Ecommerce/TotalSales.svelte';
	import WelcomeBox from '$lib/components/Dashboard/Ecommerce/WelcomeBox.svelte';
</script>

<svelte:head>
	<title>eCommerce | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row justify-content-center">
	<div class="col-lg-8">
		<WelcomeBox />
		<TotalSales />
	</div>
	<div class="col-lg-4">
		<TotalOrders />
	</div>
</div>

<div class="row justify-content-center">
	<SalesByLocation />
	<TopSailingProducts />
</div>

<div class="row justify-content-center">
	<RecentOrders />
	<OrderSummary />
</div>

<div class="row justify-content-center">
	<RecentTransactions />
	<ReturnCustomerRate />
</div>
