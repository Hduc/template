<template>
    <PageTitle pageTitle="Seller Details" subTitle="eCommerce" />

    <SellerDetails />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import SellerDetails from "../../components/Pages/Ecommerce/SellerDetails/index.vue";

export default defineComponent({
    name: "SellerDetailsPage",
    components: {
        PageTitle,
        SellerDetails,
    },
});
</script>
