<template>
    <PageTitle pageTitle="All Projects" subTitle="Project Management" />

    <ProjectsList />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import ProjectsList from "../../components/Pages/ProjectManagement/ProjectsList/index.vue";

export default defineComponent({
    name: "ProjectsListPage",
    components: {
        PageTitle,
        ProjectsList,
    },
});
</script>
