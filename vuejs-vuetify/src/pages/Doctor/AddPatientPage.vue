<template>
  <PageTitle pageTitle="Add Patient" subTitle="Doctor" />

  <AddPatient />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import AddPatient from "@/components/Pages/Doctor/AddPatient/index.vue";

export default defineComponent({
  name: "AddPatientPage",
  components: {
    PageTitle,
    AddPatient,
  },
});
</script>
