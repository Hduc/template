<template>
  <v-card
    class="revenue-by-branches-card trezo-card bg-white border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Revenue by Branches</h5>

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
      <div class="map-image text-center">
        <v-img src="@/assets/images/map.svg" alt="map" />
      </div>
      <ul class="p-0 mb-0 list-unstyled">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="d-flex align-items-center justify-content-between"
        >
          <div class="flag d-flex align-items-center">
            <v-img :src="item.flag" :alt="item.country" />
            <span class="d-block fw-medium">{{ item.country }}</span>
          </div>
          <div class="percentage-progress d-flex align-items-center">
            <div
              class="progress trezo-progress w-100"
              role="progressbar"
              :aria-valuenow="item.percentage"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar"
                :class="getProgressBarClass(item.percentage)"
                :style="{ width: item.percentage + '%' }"
              ></div>
            </div>
            <span class="d-block">{{ item.percentage }}%</span>
          </div>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import flag1 from "@/assets/images/flags/portugal.svg";
import flag2 from "@/assets/images/flags/germany.svg";
import flag3 from "@/assets/images/flags/spain.svg";
import flag4 from "@/assets/images/flags/canada.svg";
import flag5 from "@/assets/images/flags/usa.svg";

interface StockData {
  country: string;
  flag: string;
  percentage: number;
}

export default defineComponent({
  name: "RevenueByBranches",
  setup() {
    const items = ref<StockData[]>([
      {
        country: "Portugal",
        flag: flag1,
        percentage: 85,
      },
      {
        country: "Germany",
        flag: flag2,
        percentage: 65,
      },
      {
        country: "Spain",
        flag: flag3,
        percentage: 45,
      },
      {
        country: "Canada",
        flag: flag4,
        percentage: 75,
      },
      {
        country: "USA",
        flag: flag5,
        percentage: 20,
      },
    ]);

    const getProgressBarClass = (percentage: number) => {
      if (percentage >= 75) return "bg-success";
      if (percentage >= 50) return "bg-secondary";
      if (percentage >= 25) return "bg-purple";
      return "bg-danger";
    };

    return {
      items,
      getProgressBarClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.revenue-by-branches-card {
  .trezo-card-content {
    .map-image {
      .v-img {
        justify-content: center;
      }
    }
    ul {
      margin-top: 25px;

      li {
        border-top: 1px solid var(--borderColor);
        padding: {
          top: 12px;
          bottom: 12px;
        }
        .flag {
          gap: 8px;

          .v-img {
            width: 24px;
          }
        }
        .percentage-progress {
          width: 150px;
          gap: 12px;

          .trezo-progress {
            height: 5px;
            background: #ecf0ff;
            border-radius: 50px;
            overflow: hidden;

            .progress-bar {
              color: #fff;
              background-color: var(--primaryColor);
              transition: var(--transition);
              height: 5px;
            }
          }
          .percentage {
            font-size: 12px;
          }
        }
        &:last-child {
          border-bottom: 1px solid var(--borderColor);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .revenue-by-branches-card {
    .trezo-card-content {
      ul {
        margin-top: 17px;

        li {
          padding: {
            top: 10px;
            bottom: 10px;
          }
          .percentage-progress {
            width: 130px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .revenue-by-branches-card {
    .trezo-card-content {
      ul {
        margin-top: 20px;
      }
    }
  }
}
</style>
