<script>
	import Courses from '$lib/components/Dashboard/LMS/Courses.svelte';
	import CoursesSales from '$lib/components/Dashboard/LMS/CoursesSales.svelte';
	import EnrolledByCountries from '$lib/components/Dashboard/LMS/EnrolledByCountries.svelte';
	import GroupLessons from '$lib/components/Dashboard/LMS/GroupLessons.svelte';
	import InterestedTopics from '$lib/components/Dashboard/LMS/InterestedTopics.svelte';
	import StudentsProgress from '$lib/components/Dashboard/LMS/StudentsProgress.svelte';
	import TimeSpent from '$lib/components/Dashboard/LMS/TimeSpent.svelte';
	import TopCourses from '$lib/components/Dashboard/LMS/TopCourses.svelte';
	import TopInstructors from '$lib/components/Dashboard/LMS/TopInstructors.svelte';
	import TotalCourses from '$lib/components/Dashboard/LMS/TotalCourses.svelte';
	import TotalEnrolled from '$lib/components/Dashboard/LMS/TotalEnrolled.svelte';
	import TotalMentors from '$lib/components/Dashboard/LMS/TotalMentors.svelte';
	import Welcome from '$lib/components/Dashboard/LMS/Welcome.svelte';
</script>

<svelte:head>
	<title>LMS | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row justify-content-center">
	<div class="col-xxl-6">
		<Welcome />
	</div>
	<div class="col-xxl-6">
		<div class="row justify-content-center">
			<TotalCourses />
			<TotalEnrolled />
			<TotalMentors />
		</div>
	</div>
</div>

<div class="row justify-content-center">
	<div class="col-xxl-7 col-lg-6">
		<InterestedTopics />
	</div>
	<div class="col-xxl-5 col-lg-6">
		<TopInstructors />
	</div>
</div>

<div class="row justify-content-center">
	<StudentsProgress />
	<GroupLessons />
	<EnrolledByCountries />
</div>

<div class="card bg-white border-0 rounded-3 mb-4">
	<Courses />
</div>

<div class="row justify-content-center">
	<CoursesSales />
	<TimeSpent />
	<TopCourses />
</div>
