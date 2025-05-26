<template>
  <PageTitle pageTitle="Properties" subTitle="Real Estate Agent" />

  <Properties />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Properties from "@/components/Pages/RealEstateAgent/Properties/index.vue";

export default defineComponent({
  name: "PropertiesPage",
  components: {
    PageTitle,
    Properties,
  },
});
</script>
