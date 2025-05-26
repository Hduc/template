<template>
  <PageTitle pageTitle="Patient Details" subTitle="Doctor" />

  <PatientDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import PatientDetails from "@/components/Pages/Doctor/PatientDetails/index.vue";

export default defineComponent({
  name: "PatientDetailsPage",
  components: {
    PageTitle,
    PatientDetails,
  },
});
</script>
