<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Media" subTitle="Apps" />

    <div class="row justify-content-center">
      <div class="col-xl-3 col-lg-3 col-md-4">
        <AppsFileManagerSidebar />
      </div>
      <div class="col-xl-9 col-lg-9 col-md-8">
        <AppsFileManagerMedia />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MediaPage",
});
</script>
