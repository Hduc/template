<script>
	import ActiveUser from '$lib/components/Dashboard/SaaS/ActiveUser.svelte';
	import ActiveUsers from '$lib/components/Dashboard/SaaS/ActiveUsers.svelte';
	import Conversion from '$lib/components/Dashboard/SaaS/Conversion.svelte';
	import GrossRevenue from '$lib/components/Dashboard/SaaS/GrossRevenue.svelte';
	import LatestTransaction from '$lib/components/Dashboard/SaaS/LatestTransaction.svelte';
	import ProductTradeCondition from '$lib/components/Dashboard/SaaS/ProductTradeCondition.svelte';
	import RecentActiveUsers from '$lib/components/Dashboard/SaaS/RecentActiveUsers.svelte';
	import Revenue from '$lib/components/Dashboard/SaaS/Revenue.svelte';
	import SalesByCountry from '$lib/components/Dashboard/SaaS/SalesByCountry.svelte';

	import TodaysPayment from '$lib/components/Dashboard/SaaS/TodaysPayment.svelte';
	import TopReferers from '$lib/components/Dashboard/SaaS/TopReferers.svelte';
	import UpgradePlans from '$lib/components/Dashboard/SaaS/UpgradePlans.svelte';
</script>

<svelte:head>
	<title>SaaS | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row">
	<div class="col-lg-8 col-xxl-9">
		<TodaysPayment />
	</div>
	<div class="col-lg-4 col-xxl-3">
		<ActiveUser />
		<Revenue />
		<Conversion />
	</div>
</div>

<div class="row">
	<div class="col-lg-4">
		<div class="card bg-white border-0 rounded-3 mb-4">
			<TopReferers />
		</div>
	</div>
	<div class="col-lg-8">
		<div class="card bg-white border-0 rounded-3 mb-4">
			<ActiveUsers />
		</div>
	</div>
</div>

<div class="row">
	<div class="col-lg-8">
		<LatestTransaction />
	</div>
	<div class="col-lg-4">
		<UpgradePlans />
	</div>
</div>

<div class="row">
	<div class="col-lg-4">
		<RecentActiveUsers />
	</div>
	<div class="col-lg-8">
		<div class="card bg-white border-0 rounded-3 mb-4">
			<ProductTradeCondition />
		</div>
	</div>
</div>

<div class="row">
	<div class="col-lg-8">
		<GrossRevenue />
	</div>
	<div class="col-lg-4">
		<SalesByCountry />
	</div>
</div>
