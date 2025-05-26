<script>
	import EmployeeAttendanceTrends from '$lib/components/Dashboard/HRM/EmployeeAttendanceTrends.svelte';
	import EmployeeLeaveRequests from '$lib/components/Dashboard/HRM/EmployeeLeaveRequests.svelte';
	import EmployeesList from '$lib/components/Dashboard/HRM/EmployeesList.svelte';
	import EmployeeWorkFormat from '$lib/components/Dashboard/HRM/EmployeeWorkFormat.svelte';
	import NewEmplyees from '$lib/components/Dashboard/HRM/NewEmplyees.svelte';
	import ResignedEmployees from '$lib/components/Dashboard/HRM/ResignedEmployees.svelte';
	import TotalEmplyees from '$lib/components/Dashboard/HRM/TotalEmplyees.svelte';
	import TotalPayroll from '$lib/components/Dashboard/HRM/TotalPayroll.svelte';
	import Welcome from '$lib/components/Dashboard/HRM/Welcome.svelte';
</script>

<svelte:head>
	<title>HRM | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row">
	<Welcome />
</div>

<div class="row">
	<div class="col-lg-4 col-md-6">
		<TotalEmplyees />
	</div>
	<div class="col-lg-4 col-md-6">
		<ResignedEmployees />
	</div>
	<div class="col-lg-4 col-md-12">
		<NewEmplyees />
	</div>
</div>

<div class="row">
	<div class="col-lg-8">
		<EmployeeAttendanceTrends />
	</div>
	<div class="col-lg-4">
		<EmployeeWorkFormat />
	</div>
</div>

<div class="row">
	<div class="col-xxl-4">
		<TotalPayroll />
	</div>
	<div class="col-xxl-8">
		<EmployeeLeaveRequests />
	</div>
</div>

<div class="card bg-white border-0 rounded-3 mb-4">
	<EmployeesList />
</div>
