<template>
  <v-card
    class="portfolio-value-card trezo-card mb-25 border-radius d-block border-0 shadow-none"
  >
    <div
      class="trezo-card-content d-flex align-items-center justify-content-between"
    >
      <div>
        <span class="d-block"> Portfolio Value </span>
        <h5 class="mb-0">$94.69B</h5>
      </div>
      <div
        class="icon rounded-circle bg-white text-primary d-flex align-items-center justify-content-center"
      >
        <i class="material-symbols-outlined"> attach_money </i>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PortfolioValue",
});
</script>

<style lang="scss" scoped>
.portfolio-value-card {
  &.v-card {
    &.trezo-card {
      background-color: #dde4ff;
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
