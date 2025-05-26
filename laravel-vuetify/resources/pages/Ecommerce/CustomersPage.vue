<template>
    <PageTitle pageTitle="Customers" subTitle="eCommerce" />

    <Customers />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import Customers from "../../components/Pages/Ecommerce/Customers/index.vue";

export default defineComponent({
    name: "CustomersPage",
    components: {
        PageTitle,
        Customers,
    },
});
</script>
