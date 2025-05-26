<template>
  <PageTitle pageTitle="Menus" subTitle="Restaurant" />

  <Menus />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Menus from "@/components/Pages/Restaurant/Menus/index.vue";

export default defineComponent({
  name: "MenuPage",
  components: {
    PageTitle,
    Menus,
  },
});
</script>
