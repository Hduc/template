<template>
  <div class="row">
    <div class="col-lg-3 col-sm-6" v-for="(stat, index) in stats" :key="index">
      <v-card
        class="stat-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="trezo-card-content d-flex align-items-center justify-content-between"
        >
          <div>
            <span class="d-block">
              {{ stat.title }}
            </span>
            <h3 class="lh-1">
              {{ stat.value }}
            </h3>
            <span
              class="trezo-badge with-border"
              :class="{
                finished: stat.trend > 0,
                cancelled: stat.trend <= 0,
              }"
            >
              {{ stat.trend > 0 ? "+" : "" }}{{ stat.trend }}%
            </span>
          </div>
          <div>
            <v-img :src="getImagePath(index)" :alt="'building' + (index + 1)" />
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface StatItem {
  title: string;
  value: string | number;
  trend: number;
}

export default defineComponent({
  name: "StatsDashboard",
  setup() {
    const stats: StatItem[] = [
      {
        title: "Total Listings",
        value: 3251,
        trend: 3.4,
      },
      {
        title: "Sales Volume",
        value: "$1.2M",
        trend: -3.2,
      },
      {
        title: "Active Deals",
        value: 1124,
        trend: 1.4,
      },
      {
        title: "Closed Deals",
        value: 2312,
        trend: -1.2,
      },
    ];

    const getImagePath = (index: number): string => {
      return require(`@/assets/images/building${index + 1}.png`);
    };

    return {
      stats,
      getImagePath,
    };
  },
});
</script>

<style scoped lang="scss">
.stat-card {
  .trezo-card-content {
    h3 {
      font-size: 24px;
      margin: {
        top: 6px;
        bottom: 11px;
      }
    }
    .trezo-badge {
      border-radius: 30px;
    }
  }
}
</style>
