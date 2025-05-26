<template>
  <PageTitle pageTitle="Patients List" subTitle="Doctor" />

  <PatientsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import PatientsList from "@/components/Pages/Doctor/PatientsList/index.vue";

export default defineComponent({
  name: "PatientsListPage",
  components: {
    PageTitle,
    PatientsList,
  },
});
</script>
