<script>
	import Campaigns from '$lib/components/Dashboard/Marketing/Campaigns.svelte';
	import Channels from '$lib/components/Dashboard/Marketing/Channels.svelte';
	import ExternalLinks from '$lib/components/Dashboard/Marketing/ExternalLinks.svelte';
	import Highlights from '$lib/components/Dashboard/Marketing/Highlights.svelte';
	import InstagramCampaigns from '$lib/components/Dashboard/Marketing/InstagramCampaigns.svelte';
	import InstagramSubscriber from '$lib/components/Dashboard/Marketing/InstagramSubscriber.svelte';
	import MarketingTool from '$lib/components/Dashboard/Marketing/MarketingTool.svelte';
	import MobileApp from '$lib/components/Dashboard/Marketing/MobileApp.svelte';
	import PerformanceOverview from '$lib/components/Dashboard/Marketing/PerformanceOverview.svelte';
	import Statistics from '$lib/components/Dashboard/Marketing/Statistics.svelte';
</script>

<svelte:head>
	<title>Marketing | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row">
	<Statistics />
</div>
<div class="row">
	<PerformanceOverview />
	<MobileApp />
</div>

<div class="row">
	<div class="col-lg-4">
		<Highlights />
		<Channels />
	</div>
	<div class="col-lg-8">
		<Campaigns />
		<div class="row">
			<ExternalLinks />
			<InstagramCampaigns />
		</div>
	</div>
</div>

<div class="row">
	<MarketingTool />
	<InstagramSubscriber />
</div>
