<template>
    <PageTitle pageTitle="Widgets" />

    <Widgets />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../components/Common/PageTitle.vue";
import Widgets from "../components/Modules/Widgets/index.vue";

export default defineComponent({
    name: "WidgetsPage",
    components: {
        PageTitle,
        Widgets,
    },
});
</script>
