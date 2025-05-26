<script>
	import Agents from '$lib/components/Dashboard/HelpDesk/Agents.svelte';
	import Congratulation from '$lib/components/Dashboard/HelpDesk/Congratulation.svelte';
	import CustomerRatings from '$lib/components/Dashboard/HelpDesk/CustomerRatings.svelte';
	import CustomerSatisfaction from '$lib/components/Dashboard/HelpDesk/CustomerSatisfaction.svelte';
	import ResponseTime from '$lib/components/Dashboard/HelpDesk/ResponseTime.svelte';
	import SolvedTickets from '$lib/components/Dashboard/HelpDesk/SolvedTickets.svelte';
	import SupportOverview from '$lib/components/Dashboard/HelpDesk/SupportOverview.svelte';
	import TicketDue from '$lib/components/Dashboard/HelpDesk/TicketDue.svelte';
	import TicketOpen from '$lib/components/Dashboard/HelpDesk/TicketOpen.svelte';
	import TicketProgress from '$lib/components/Dashboard/HelpDesk/TicketProgress.svelte';
	import TicketResolved from '$lib/components/Dashboard/HelpDesk/TicketResolved.svelte';
	import TicketStatus from '$lib/components/Dashboard/HelpDesk/TicketStatus.svelte';
	import TicketsWeekly from '$lib/components/Dashboard/HelpDesk/TicketsWeekly.svelte';
	import ToDoList from '$lib/components/Dashboard/HelpDesk/ToDoList.svelte';
</script>

<svelte:head>
	<title>Help Desk | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row justify-content-center">
	<div class="col-lg-4">
		<Congratulation />
		<div class="row justify-content-center">
			<TicketResolved />
			<TicketProgress />
			<TicketDue />
			<TicketOpen />
		</div>
	</div>
	<div class="col-lg-8">
		<div class="row mb-4">
			<TicketStatus />
			<TicketsWeekly />
		</div>
		<div class="row">
			<CustomerSatisfaction />
			<ResponseTime />
		</div>
	</div>
</div>

<div class="card bg-white border-0 rounded-3 mb-4">
	<Agents />
</div>

<div class="row justify-content-center">
	<SolvedTickets />
	<CustomerRatings />
</div>

<div class="row justify-content-center">
	<ToDoList />
	<SupportOverview />
</div>
