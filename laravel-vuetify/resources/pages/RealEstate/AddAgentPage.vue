<template>
    <PageTitle pageTitle="Add Agent" subTitle="Real Estate" />

    <AddAgent />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import AddAgent from "../../components/Pages/RealEstate/AddAgent/index.vue";

export default defineComponent({
    name: "AddAgentPage",
    components: {
        PageTitle,
        AddAgent,
    },
});
</script>
