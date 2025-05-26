<script>
	import AttendenceAnalytics from '$lib/components/Dashboard/School/AttendenceAnalytics.svelte';
	import AttendenceToday from '$lib/components/Dashboard/School/AttendenceToday.svelte';
	import NewAdmissions from '$lib/components/Dashboard/School/NewAdmissions.svelte';
	import NoticeBoard from '$lib/components/Dashboard/School/NoticeBoard.svelte';
	import StudentsList from '$lib/components/Dashboard/School/StudentsList.svelte';
	import StudentsOverview from '$lib/components/Dashboard/School/StudentsOverview.svelte';
	import Teachers from '$lib/components/Dashboard/School/Teachers.svelte';
	import TotalStudents from '$lib/components/Dashboard/School/TotalStudents.svelte';
	import TotalTeachers from '$lib/components/Dashboard/School/TotalTeachers.svelte';
	import UpcomingEvents from '$lib/components/Dashboard/School/UpcomingEvents.svelte';
	import Welcome from '$lib/components/Dashboard/School/Welcome.svelte';
</script>

<svelte:head>
	<title>School | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<Welcome />

<div class="row">
	<div class="col-xxl-8">
		<div class="card-group custom-shadow mb-4 rounded-3">
			<TotalStudents />
			<TotalTeachers />
			<AttendenceToday />
		</div>
	</div>
	<div class="col-xxl-4">
		<div class="card custom-shadow rounded-3 bg-white border mb-4">
			<div class="custom-padding-30">
				<UpcomingEvents />
			</div>
		</div>
	</div>
</div>

<div class="row">
	<div class="col-lg-8 col-md-7">
		<AttendenceAnalytics />
	</div>

	<div class="col-lg-4 col-md-5">
		<Teachers />
	</div>
</div>

<div class="row">
	<div class="col-xxl-4 col-md-6">
		<div class="card custom-shadow rounded-3 bg-white border mb-4">
			<StudentsOverview />
		</div>
	</div>

	<div class="col-xxl-4 col-md-6">
		<div class="card custom-shadow rounded-3 bg-white border mb-4">
			<NewAdmissions />
		</div>
	</div>

	<div class="col-xxl-4 col-md-12">
		<NoticeBoard />
	</div>
</div>

<div class="card custom-shadow rounded-3 bg-white border mb-4">
	<StudentsList />
</div>
