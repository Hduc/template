<script>
	import ActiveUser from '$lib/components/Dashboard/Analytics/ActiveUser.svelte';
	import AnalyticsOverview from '$lib/components/Dashboard/Analytics/AnalyticsOverview.svelte';
	import BrwserUsedByUsers from '$lib/components/Dashboard/Analytics/BrwserUsedByUsers.svelte';
	import Clicks from '$lib/components/Dashboard/Analytics/Clicks.svelte';
	import DeviceSession from '$lib/components/Dashboard/Analytics/DeviceSession.svelte';
	import Impressions from '$lib/components/Dashboard/Analytics/Impressions.svelte';
	import ImpressionsByKeywords from '$lib/components/Dashboard/Analytics/ImpressionsByKeywords.svelte';
	import Sessions from '$lib/components/Dashboard/Analytics/Sessions.svelte';
	import SessionsByChannel from '$lib/components/Dashboard/Analytics/SessionsByChannel.svelte';
	import TopBrowsingPages from '$lib/components/Dashboard/Analytics/TopBrowsingPages.svelte';
	import UsersByCountry from '$lib/components/Dashboard/Analytics/UsersByCountry.svelte';
	import WebsiteVisits from '$lib/components/Dashboard/Analytics/WebsiteVisits.svelte';
</script>

<svelte:head>
	<title>Analytics | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row">
	<div class="col-xxl-8">
		<AnalyticsOverview />
		<WebsiteVisits />
	</div>
	<div class="col-xxl-4">
		<ActiveUser />
	</div>
</div>

<div class="row">
	<div class="col-xxl-7">
		<BrwserUsedByUsers />
	</div>
	<div class="col-xxl-5">
		<DeviceSession />
	</div>
</div>

<div class="row justify-content-center">
	<Clicks />
	<Impressions />
	<Sessions />
</div>

<div class="row">
	<SessionsByChannel />
	<ImpressionsByKeywords />
</div>

<div class="row">
	<TopBrowsingPages />
	<UsersByCountry />
</div>
