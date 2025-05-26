<template>
  <v-card
    class="total-balance-card trezo-card mb-25 border-radius d-block border-0 shadow-none"
  >
    <div
      class="trezo-card-content d-flex justify-content-between align-items-center"
    >
      <div class="info">
        <span class="d-block"> Total Balance </span>
        <h3>$20,507</h3>
        <div class="gap-10 d-flex align-items-center">
          <span class="trezo-badge with-border border-radius finished">
            +28.5%
          </span>
          <span class="d-block text-xs"> Last Month </span>
        </div>
      </div>
      <div
        class="icon text-secondary rounded-circle d-flex align-items-center justify-content-center"
      >
        <i class="material-symbols-outlined"> account_balance_wallet </i>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalBalance",
});
</script>

<style scoped lang="scss">
.total-balance-card {
  &.v-card {
    &.trezo-card {
      background: linear-gradient(90deg, #daebff 0%, #ffffff 100%) !important;
    }
  }

  .trezo-card-content {
    .info {
      h3 {
        font-size: 20px;
        margin: {
          top: 4px;
          bottom: 22px;
        }
      }
      .trezo-badge {
        border-radius: 15px !important;
      }
      .gap-10 {
        gap: 10px;
      }
    }
    .icon {
      width: 75px;
      height: 75px;
      background-color: #daebff;

      i {
        font-size: 35px;
      }
    }
  }
}
</style>
