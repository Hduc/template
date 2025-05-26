<script>
	import CustomerReviews from '$lib/components/Dashboard/RealEstate/CustomerReviews.svelte';
	import LatestTransaction from '$lib/components/Dashboard/RealEstate/LatestTransaction.svelte';
	import MostSalesLocation from '$lib/components/Dashboard/RealEstate/MostSalesLocation.svelte';
	import NewCustomers from '$lib/components/Dashboard/RealEstate/NewCustomers.svelte';
	import PropertiesForRent from '$lib/components/Dashboard/RealEstate/PropertiesForRent.svelte';
	import PropertiesForSale from '$lib/components/Dashboard/RealEstate/PropertiesForSale.svelte';
	import RecentProperty from '$lib/components/Dashboard/RealEstate/RecentProperty.svelte';
	import RentalIncome from '$lib/components/Dashboard/RealEstate/RentalIncome.svelte';
	import Revenue from '$lib/components/Dashboard/RealEstate/Revenue.svelte';
	import SocialSearch from '$lib/components/Dashboard/RealEstate/SocialSearch.svelte';
	import SoldProperties from '$lib/components/Dashboard/RealEstate/SoldProperties.svelte';
	import TopProperty from '$lib/components/Dashboard/RealEstate/TopProperty.svelte';
	import TotalProperty from '$lib/components/Dashboard/RealEstate/TotalProperty.svelte';
</script>

<svelte:head>
	<title>Real Estate | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row">
	<div class="col-xxl-4">
		<div class="row">
			<TotalProperty />
			<Revenue />
		</div>
	</div>
	<div class="col-xxl-8">
		<SoldProperties />
	</div>
</div>

<div class="row justify-content-center">
	<div class="col-lg-4 col-md-6">
		<PropertiesForSale />
	</div>
	<div class="col-lg-4 col-md-6">
		<PropertiesForRent />
	</div>
	<div class="col-lg-4 col-md-6">
		<NewCustomers />
	</div>
</div>

<div class="row justify-content-center">
	<div class="col-xxl-5">
		<MostSalesLocation />
		<RecentProperty />
	</div>
	<div class="col-xxl-7">
		<RentalIncome />
		<div class="row">
			<div class="col-lg-6">
				<SocialSearch />
				<TopProperty />
			</div>
			<div class="col-lg-6">
				<CustomerReviews />
			</div>
		</div>
	</div>
</div>

<div class="card bg-white border-0 rounded-3 mb-4">
	<LatestTransaction />
</div>
