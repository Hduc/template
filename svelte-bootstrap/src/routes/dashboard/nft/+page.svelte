<script>
	import Banner from '$lib/components/Dashboard/NFT/Banner.svelte';
	import EthereumRate from '$lib/components/Dashboard/NFT/EthereumRate.svelte';
	import FeaturedNft from '$lib/components/Dashboard/NFT/FeaturedNFT.svelte';
	import NftSlides from '$lib/components/Dashboard/NFT/NftSlides.svelte';
	import ActiveAuctions from '$lib/components/Dashboard/NFT/ActiveAuctions.svelte';
	import MobileApp from '$lib/components/Dashboard/NFT/MobileApp.svelte';
	import MostPopularSellers from '$lib/components/Dashboard/NFT/MostPopularSellers.svelte';
	import WorldwideTopCreators from '$lib/components/Dashboard/NFT/WorldwideTopCreators.svelte';
	import TopCollections from '$lib/components/Dashboard/NFT/TopCollections.svelte';
	import TopNfts from '$lib/components/Dashboard/NFT/TopNfts.svelte';
	import HistoryOfBids from '$lib/components/Dashboard/NFT/HistoryOfBids.svelte';
</script>

<svelte:head>
	<title>NFT | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<Banner />
<NftSlides />
<div class="row">
	<EthereumRate />
	<ActiveAuctions />
</div>

<div class="row">
	<div class="col-lg-8 col-xxl-9">
		<FeaturedNft />
	</div>
	<div class="col-lg-4 col-xxl-3">
		<MobileApp />
	</div>
</div>

<div class="row">
	<MostPopularSellers />
	<WorldwideTopCreators />
</div>

<div class="row">
	<div class="col-xxl-3 col-sm-6 order-2 order-xxl-1">
		<div class="card bg-white border-0 rounded-3 mb-4">
			<TopCollections />
		</div>
	</div>
	<div class="col-xxl-6 col-lg-12 order-1 order-xxl-2">
		<div class="card bg-white border-0 rounded-3 mb-4">
			<TopNfts />
		</div>
	</div>
	<div class="col-xxl-3 col-sm-6 order-3 order-xxl-3">
		<div class="card bg-white border-0 rounded-3 mb-4">
			<HistoryOfBids />
		</div>
	</div>
</div>
