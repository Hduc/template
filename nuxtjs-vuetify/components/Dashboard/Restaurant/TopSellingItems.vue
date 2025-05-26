<template>
  <v-card
    class="top-selling-items-card trezo-card bg-white border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Top Selling Items</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius bg-gray border-0"
          >
            {{ timeRange }}
          </button>
        </template>
        <v-list class="menu-content">
          <v-list-item
            v-for="(range, index) in timeRanges"
            :key="index"
            @click="handleTimeRangeChange(range)"
            :class="{ 'active-range': timeRange === range }"
          >
            <v-list-item-title>{{ range }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="row">
        <div
          class="col-md-3 col-sm-6"
          v-for="(item, index) in topSellingItems.slice(0, 4)"
          :key="index"
        >
          <div class="item position-relative">
            <div
              class="rating fw-semibold d-flex align-items-center bg-dark text-white"
            >
              <i class="ri-star-fill"></i>
              {{ item.rating }}
            </div>
            <RouterLink
              to="/restaurant/dish-details/"
              class="d-block image"
              :style="{ backgroundImage: `url(${item.image})` }"
            ></RouterLink>
            <h6 class="fw-semibold">
              <RouterLink to="/restaurant/dish-details/">
                {{ item.name }}
              </RouterLink>
            </h6>
            <span class="d-block">{{ item.sold }} sold</span>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "@/assets/images/products/product28.jpg";
import image2 from "@/assets/images/products/product29.jpg";
import image3 from "@/assets/images/products/product30.jpg";
import image4 from "@/assets/images/products/product31.jpg";

interface TopSellingItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  sold: number;
}

export default defineComponent({
  name: "TopSellingItems",
  setup() {
    const timeRanges = ["Weekly", "Monthly", "Yearly"];
    const timeRange = ref(timeRanges[0]);
    const topSellingItems = ref<TopSellingItem[]>([]);

    const fetchTopSellingItems = () => {
      // Simulate different data based on time range
      if (timeRange.value === "Weekly") {
        topSellingItems.value = [
          {
            id: 1,
            name: "Thai Bean Soup",
            image: image1,
            rating: 5.0,
            sold: 1235,
          },
          {
            id: 2,
            name: "Meat Lasagnia",
            image: image2,
            rating: 4.8,
            sold: 1045,
          },
          {
            id: 3,
            name: "Veg Sandwich",
            image: image3,
            rating: 4.9,
            sold: 1015,
          },
          {
            id: 4,
            name: "Creamy Fish",
            image: image4,
            rating: 4.7,
            sold: 996,
          },
        ];
      } else if (timeRange.value === "Monthly") {
        topSellingItems.value = [
          {
            id: 1,
            name: "Thai Bean Soup",
            image: image4,
            rating: 5.0,
            sold: 5000,
          },
          {
            id: 2,
            name: "Meat Lasagnia",
            image: image3,
            rating: 4.8,
            sold: 4500,
          },
          {
            id: 3,
            name: "Veg Sandwich",
            image: image2,
            rating: 4.9,
            sold: 4200,
          },
          {
            id: 4,
            name: "Creamy Fish",
            image: image1,
            rating: 4.7,
            sold: 4000,
          },
        ];
      } else if (timeRange.value === "Yearly") {
        topSellingItems.value = [
          {
            id: 1,
            name: "Thai Bean Soup",
            image: image3,
            rating: 5.0,
            sold: 15000,
          },
          {
            id: 2,
            name: "Meat Lasagnia",
            image: image2,
            rating: 4.8,
            sold: 14000,
          },
          {
            id: 3,
            name: "Veg Sandwich",
            image: image1,
            rating: 4.9,
            sold: 13000,
          },
          {
            id: 4,
            name: "Creamy Fish",
            image: image4,
            rating: 4.7,
            sold: 12000,
          },
        ];
      }
    };

    const handleTimeRangeChange = (range: string) => {
      timeRange.value = range;
      fetchTopSellingItems();
    };

    // Initial data fetch
    fetchTopSellingItems();

    return {
      topSellingItems,
      timeRange,
      timeRanges,
      handleTimeRangeChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.top-selling-items-card {
  .trezo-card-content {
    .item {
      .rating {
        border-radius: 30px;
        position: absolute;
        padding: 1.5px 5px;
        font-size: 12px;
        right: 3px;
        gap: 3px;
        top: 3px;

        i {
          color: #fd5812;
          font-size: 14px;
        }
      }
      .image {
        height: 137px;
        margin-bottom: 15px;
        border-radius: 10px;
        background: {
          position: center center;
          repeat: no-repeat;
          size: cover;
        }
      }
      h6 {
        font-size: 14px;
        margin-bottom: 4px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .top-selling-items-card {
    .trezo-card-content {
      margin-bottom: -15px;

      .item {
        margin-bottom: 15px;

        .image {
          margin-bottom: 12px;
        }
      }
    }
  }
}
</style>
