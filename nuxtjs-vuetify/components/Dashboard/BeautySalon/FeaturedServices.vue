<template>
  <v-card
    class="featured-services-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Featured Services</h5>
    </div>

    <div class="trezo-card-content">
      <ul class="p-0 m-0 list-unstyled">
        <li
          v-for="(service, index) in services"
          :key="service.id"
          class="d-flex align-items-center justify-content-between"
        >
          <div class="info d-flex align-items-center">
            <v-img :src="service.icon" :alt="service.name" />
            <div>
              <span class="d-block text-black fw-semibold">
                {{ service.name }}
              </span>
              <span class="d-block text-body">
                {{ service.served }}
                Served this week
              </span>
            </div>
          </div>
          <span
            class="number fw-medium text-primary rounded-circle d-flex align-items-center justify-content-center"
          >
            {{ index + 1 }}
          </span>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import icon1 from "@/assets/images/icons/hair-cutting.svg";
import icon2 from "@/assets/images/icons/manicure.svg";
import icon3 from "@/assets/images/icons/pedicure.svg";
import icon4 from "@/assets/images/icons/nail-polish.svg";
import icon5 from "@/assets/images/icons/woman.svg";

export default defineComponent({
  name: "FeaturedServices",
  setup() {
    const services = [
      {
        id: 1,
        name: "Hair Cut",
        icon: icon1,
        served: 132,
      },
      {
        id: 2,
        name: "Manicure",
        icon: icon2,
        served: 102,
      },
      {
        id: 3,
        name: "Pedicure",
        icon: icon3,
        served: 99,
      },
      {
        id: 4,
        name: "Nail Art",
        icon: icon4,
        served: 89,
      },
      {
        id: 5,
        name: "Facial Treatment",
        icon: icon5,
        served: 72,
      },
    ];
    return {
      services,
    };
  },
});
</script>

<style lang="scss" scoped>
.featured-services-card {
  .trezo-card-content {
    ul {
      li {
        border-bottom: 1px solid var(--borderColor);
        padding-bottom: 12px;
        margin-bottom: 12px;

        .info {
          gap: 15px;

          span {
            font-size: 12px;

            &:nth-child(1) {
              font-size: var(--fontSize);
              margin-bottom: 2px;
            }
          }
        }
        .number {
          width: 25px;
          height: 25px;
          font-size: 12px;
          background-color: #dde4ff;
        }
        &:last-child {
          border-bottom-width: 0;
          padding-bottom: 0;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
