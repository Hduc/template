<template>
    <PageTitle pageTitle="Badges" subTitle="UI Elements" />
    <Badges />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import Badges from "../../components/Modules/UIElements/Badges/index.vue";

export default defineComponent({
    name: "BadgesPage",
    components: {
        PageTitle,
        Badges,
    },
});
</script>
