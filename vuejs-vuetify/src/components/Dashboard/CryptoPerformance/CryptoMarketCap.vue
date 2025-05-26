<template>
  <v-card
    class="crypto-market-cap-card trezo-card mb-25 border-radius d-block border-0 shadow-none"
  >
    <div
      class="trezo-card-content d-flex align-items-center justify-content-between"
    >
      <div>
        <span class="d-block"> Crypto Market Cap </span>
        <h5 class="mb-0">$2.64T</h5>
      </div>
      <div
        class="icon rounded-circle bg-white text-purple d-flex align-items-center justify-content-center"
      >
        <i class="material-symbols-outlined"> payments </i>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoMarketCap",
});
</script>

<style lang="scss" scoped>
.crypto-market-cap-card {
  &.v-card {
    &.trezo-card {
      background-color: #f3e8ff;
    }
  }
  padding: {
    top: 15px !important;
    bottom: 15px !important;
  }
  .trezo-card-content {
    h5 {
      margin-top: 4px;
      font-size: 20px;
    }
    .icon {
      width: 53px;
      height: 53px;
    }
  }
}
</style>
