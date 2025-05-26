<template>
    <PageTitle pageTitle="Autocomplete" subTitle="UI Elements" />
    <Autocomplete />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import Autocomplete from "../../components/Modules/UIElements/Autocomplete/index.vue";

export default defineComponent({
    name: "AutocompletePage",
    components: {
        PageTitle,
        Autocomplete,
    },
});
</script>
