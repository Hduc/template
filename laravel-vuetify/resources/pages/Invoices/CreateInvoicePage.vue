<template>
    <PageTitle pageTitle="Create Invoice" subTitle="Invoices" />

    <CreateInvoice />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import CreateInvoice from "../../components/Pages/Invoices/CreateInvoice/index.vue";

export default defineComponent({
    name: "CreateInvoicePage",
    components: {
        PageTitle,
        CreateInvoice,
    },
});
</script>
