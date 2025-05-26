<template>
  <PageTitle pageTitle="Appointments" subTitle="Doctor" />

  <Appointments />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Appointments from "@/components/Pages/Doctor/Appointments/index.vue";

export default defineComponent({
  name: "AppointmentsPage",
  components: {
    PageTitle,
    Appointments,
  },
});
</script>
