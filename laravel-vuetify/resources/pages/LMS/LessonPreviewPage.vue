<template>
    <PageTitle pageTitle="Lesson Preview" subTitle="LMS" />

    <LessonPreview />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import LessonPreview from "../../components/Pages/LMS/LessonPreview/index.vue";

export default defineComponent({
    name: "LessonPreviewPage",
    components: {
        PageTitle,
        LessonPreview,
    },
});
</script>
