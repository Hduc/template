<template>
  <PageTitle pageTitle="Gainers & Losers" subTitle="Crypto Trader" />

  <GainersLosers />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import GainersLosers from "@/components/Pages/CryptoTrader/GainersLosers/index.vue";

export default defineComponent({
  name: "GainersLosersPage",
  components: {
    PageTitle,
    GainersLosers,
  },
});
</script>
