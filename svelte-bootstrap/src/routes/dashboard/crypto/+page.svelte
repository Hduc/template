<script>
	import CryptocurrencyWatchList from '$lib/components/Dashboard/Crypto/CryptocurrencyWatchList.svelte';
	import CryptoRankings from '$lib/components/Dashboard/Crypto/CryptoRankings.svelte';
	import Exchange from '$lib/components/Dashboard/Crypto/Exchange.svelte';
	import MarketPriceStatistics from '$lib/components/Dashboard/Crypto/MarketPriceStatistics.svelte';
	import Portfolio from '$lib/components/Dashboard/Crypto/Portfolio.svelte';
	import TransactionHistory from '$lib/components/Dashboard/Crypto/TransactionHistory.svelte';
</script>

<svelte:head>
	<title>Crypto | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="border-0 p-4 pb-0 bg-white rounded-3 mb-4 without-card">
	<CryptocurrencyWatchList />
	<div class="row">
		<MarketPriceStatistics />
		<Exchange />
	</div>
</div>

<div class="row">
	<TransactionHistory />
	<Portfolio />
</div>

<div class="card bg-white border-0 rounded-3 mb-4">
	<CryptoRankings />
</div>
