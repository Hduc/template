<template>
  <v-card
    class="low-stock-alerts-card trezo-card bg-white border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Low Stock Alerts</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-2-fill"></i>
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Day
          </button>
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <ul class="p-0 m-0 list-unstyled">
        <li
          v-for="(item, index) in lowStockItems"
          :key="index"
          class="d-flex align-items-center justify-content-between"
        >
          <span class="d-block text-black fw-semibold">{{ item.name }}</span>
          <span class="d-block text-danger fw-bold">{{ item.quantity }}</span>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LowStockAlerts",
  setup() {
    const lowStockItems = ref([
      { name: "Thai Bean Soup", quantity: 1 },
      { name: "Banana Shake", quantity: 3 },
      { name: "Chicken Tandoori", quantity: 5 },
      { name: "Thai Chicken Masala", quantity: 5 },
      { name: "Chicken Club Sandwich", quantity: 6 },
      { name: "Shrimp Fried Rice", quantity: 2 },
      { name: "Grilled Salmon", quantity: 4 },
    ]);

    return {
      lowStockItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.low-stock-alerts-card {
  .trezo-card-content {
    ul {
      li {
        margin-bottom: 13px;
        padding-bottom: 13px;
        border-bottom: 1px solid var(--borderColor);

        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom-width: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .low-stock-alerts-card {
    .trezo-card-content {
      ul {
        li {
          margin-bottom: 10px;
          padding-bottom: 10px;
        }
      }
    }
  }
}
</style>
