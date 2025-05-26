<template>
  <PageTitle pageTitle="Wallet" subTitle="Crypto Trader" />
  <CTWallet />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CTWallet from "@/components/Pages/CryptoTrader/CTWallet/index.vue";

export default defineComponent({
  name: "CTWalletPage",
  components: {
    PageTitle,
    CTWallet,
  },
});
</script>
