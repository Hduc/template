<template>
    <PageTitle pageTitle="Data Table" subTitle="Tables" />

    <DataTable />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import DataTable from "../../components/Modules/Tables/DataTable/index.vue";

export default defineComponent({
    name: "DataTablePage",
    components: {
        PageTitle,
        DataTable,
    },
});
</script>
