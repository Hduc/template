<template>
  <PageTitle pageTitle="Live Auction" subTitle="NFT Marketplace" />

  <LiveAuction />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import LiveAuction from "@/components/Pages/NFTMarketplace/LiveAuction/index.vue";

export default defineComponent({
  name: "LiveAuctionPage",
  components: {
    PageTitle,
    LiveAuction,
  },
});
</script>
