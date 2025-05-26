<template>
    <PageTitle pageTitle="Carousels" subTitle="UI Elements" />
    <Carousels />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import Carousels from "../../components/Modules/UIElements/Carousels/index.vue";

export default defineComponent({
    name: "CarouselsPage",
    components: {
        PageTitle,
        Carousels,
    },
});
</script>
