<template>
  <PageTitle pageTitle="Property Details" subTitle="Real Estate Agent" />

  <PropertyDetails />
  <Reviews />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import PropertyDetails from "@/components/Pages/RealEstateAgent/PropertyDetails/index.vue";
import Reviews from "@/components/Pages/RealEstateAgent/PropertyDetails/Reviews.vue";

export default defineComponent({
  name: "PropertyDetailsPage",
  components: {
    PageTitle,
    PropertyDetails,
    Reviews,
  },
});
</script>
