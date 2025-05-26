<template>
    <PageTitle pageTitle="Google Map" />

    <Maps />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../components/Common/PageTitle.vue";
import Maps from "../components/Modules/Maps/index.vue";

export default defineComponent({
    name: "MapsPage",
    components: {
        PageTitle,
        Maps,
    },
});
</script>
