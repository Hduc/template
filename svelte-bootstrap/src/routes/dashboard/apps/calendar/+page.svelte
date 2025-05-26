<script>
	import BreadCrumb from '$lib/components/Common/BreadCrumb.svelte';
	import Calendar from '$lib/components/Dashboard/Apps/Calendar.svelte';
	import EventCalendarSlider from '$lib/components/Dashboard/Apps/EventCalendarSlider.svelte';
</script>

<svelte:head>
	<title>Calendar | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<BreadCrumb page="Calendar" category="APPS" parentLink="/dashboard" />

<div class="row justify-content-center">
	<Calendar />
	<EventCalendarSlider />
</div>
