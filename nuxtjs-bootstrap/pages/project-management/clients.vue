<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Clients" subTitle="Project Management" />

    <PagesProjectManagementClients />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClientsPage",
});
</script>
