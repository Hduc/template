<template>
    <PageTitle pageTitle="Customer Details" subTitle="eCommerce" />

    <CustomerDetails />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import CustomerDetails from "../../components/Pages/Ecommerce/CustomerDetails/index.vue";

export default defineComponent({
    name: "CustomerDetailsPage",
    components: {
        PageTitle,
        CustomerDetails,
    },
});
</script>
