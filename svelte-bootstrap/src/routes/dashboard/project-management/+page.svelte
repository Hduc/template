<script>
	import AllProjects from '$lib/components/Dashboard/ProjectManagement/AllProjects.svelte';
	import ProjectAnalysis from '$lib/components/Dashboard/ProjectManagement/ProjectAnalysis.svelte';
	import ProjectOverview from '$lib/components/Dashboard/ProjectManagement/ProjectOverview.svelte';
	import ProjectProgress from '$lib/components/Dashboard/ProjectManagement/ProjectProgress.svelte';
	import ProjectRoadmap from '$lib/components/Dashboard/ProjectManagement/ProjectRoadmap.svelte';
	import TaskOverview from '$lib/components/Dashboard/ProjectManagement/TaskOverview.svelte';
	import Tasks from '$lib/components/Dashboard/ProjectManagement/Tasks.svelte';
	import TeamMambers from '$lib/components/Dashboard/ProjectManagement/TeamMambers.svelte';
	import ToDoList from '$lib/components/Dashboard/ProjectManagement/ToDoList.svelte';
	import WorkingSchedule from '$lib/components/Dashboard/ProjectManagement/WorkingSchedule.svelte';
</script>

<svelte:head>
	<title>Project Management | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row justify-content-center">
	<ProjectOverview />
	<ProjectRoadmap />
</div>

<div class="row justify-content-center">
	<ProjectProgress />
	<Tasks />
</div>

<AllProjects />

<div class="row justify-content-center">
	<ProjectAnalysis />
	<TeamMambers />
	<WorkingSchedule />
</div>

<div class="row justify-content-center">
	<ToDoList />
	<TaskOverview />
</div>
