<template>
    <PageTitle pageTitle="Videos" subTitle="UI Elements" />
    <Videos />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import Videos from "../../components/Modules/UIElements/Videos/index.vue";

export default defineComponent({
    name: "VideosPage",
    components: {
        PageTitle,
        Videos,
    },
});
</script>
