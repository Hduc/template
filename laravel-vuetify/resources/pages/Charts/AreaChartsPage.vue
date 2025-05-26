<template>
    <PageTitle pageTitle="Area Charts" subTitle="Charts" />
    <AreaCharts />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import AreaCharts from "../../components/Modules/Charts/AreaCharts/index.vue";

export default defineComponent({
    name: "AreaChartsPage",
    components: {
        PageTitle,
        AreaCharts,
    },
});
</script>
