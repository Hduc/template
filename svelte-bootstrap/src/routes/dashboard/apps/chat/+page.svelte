<script>
	import BreadCrumb from '$lib/components/Common/BreadCrumb.svelte';
	import ChatBox from '$lib/components/Dashboard/Apps/ChatBox.svelte';
	import ProfileList from '$lib/components/Dashboard/Apps/ProfileList.svelte';
</script>

<svelte:head>
	<title>Chat | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<BreadCrumb page="Chat" category="APPS" parentLink="/dashboard" />

<div class="row justify-content-center">
	<ProfileList />

	<ChatBox />
</div>
