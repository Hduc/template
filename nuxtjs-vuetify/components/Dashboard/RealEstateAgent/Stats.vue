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
            <v-img :src="stat.image" :alt="'building' + (index + 1)" />
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "@/assets/images/building1.png";
import image2 from "@/assets/images/building2.png";
import image3 from "@/assets/images/building3.png";
import image4 from "@/assets/images/building4.png";

interface StatItem {
  title: string;
  value: string | number;
  trend: number;
  image: string;
}

export default defineComponent({
  name: "StatsDashboard",
  setup() {
    const stats: StatItem[] = [
      {
        title: "Total Listings",
        value: 3251,
        trend: 3.4,
        image: image1,
      },
      {
        title: "Sales Volume",
        value: "$1.2M",
        trend: -3.2,
        image: image2,
      },
      {
        title: "Active Deals",
        value: 1124,
        trend: 1.4,
        image: image3,
      },
      {
        title: "Closed Deals",
        value: 2312,
        trend: -1.2,
        image: image4,
      },
    ];

    return {
      stats,
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
