<template>
  <v-card
    class="total-expense-card trezo-card mb-25 border-radius d-block border-0 shadow-none"
  >
    <div
      class="trezo-card-content d-flex justify-content-between align-items-center"
    >
      <div class="info">
        <span class="d-block"> Total Expense </span>
        <h3>$18,950</h3>
        <div class="gap-10 d-flex align-items-center">
          <span class="trezo-badge with-border border-radius rejected">
            -18.1%
          </span>
          <span class="d-block text-xs"> Last Month </span>
        </div>
      </div>
      <div
        class="icon text-purple rounded-circle d-flex align-items-center justify-content-center"
      >
        <i class="material-symbols-outlined"> payments </i>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalExpense",
});
</script>

<style scoped lang="scss">
.total-expense-card {
  &.v-card {
    &.trezo-card {
      background: linear-gradient(90deg, #f3e8ff 0%, #fff 100%) !important;
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
      background-color: #f3e8ff;

      i {
        font-size: 35px;
      }
    }
  }
}
</style>
