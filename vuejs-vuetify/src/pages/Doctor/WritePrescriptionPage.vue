<template>
  <PageTitle pageTitle="Write a Prescription" subTitle="Doctor" />

  <WritePrescription />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import WritePrescription from "@/components/Pages/Doctor/WritePrescription/index.vue";

export default defineComponent({
  name: "WritePrescriptionPage",
  components: {
    PageTitle,
    WritePrescription,
  },
});
</script>
