<template>
  <v-card
    class="customers-from-channels-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Customers From Channels</h5>
    </div>

    <div class="trezo-card-content">
      <ul class="p-0 m-0 list-unstyled">
        <li
          v-for="channel in channels"
          :key="channel.name"
          class="d-flex align-items-center justify-content-between"
        >
          <div class="title d-flex align-items-center">
            <v-img :src="channel.icon" :alt="channel.name" />
            <div>
              <span class="d-block fw-semibold text-black">
                {{ channel.name }}
              </span>
              <span class="d-block">{{ channel.description }}</span>
            </div>
          </div>
          <div class="percentage-progress d-flex align-items-center">
            <div
              class="progress trezo-progress w-100"
              role="progressbar"
              :aria-valuenow="channel.percentage"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar"
                :class="channel.progressBarClass"
                :style="{ width: channel.percentage + '%' }"
              ></div>
            </div>
            <span class="d-block percentage">{{ channel.percentage }}%</span>
          </div>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import icon1 from "@/assets/images/icons/facebook3.svg";
import icon2 from "@/assets/images/icons/dribbble2.svg";
import icon3 from "@/assets/images/icons/instagram2.svg";
import icon4 from "@/assets/images/icons/google3.svg";

export default defineComponent({
  name: "CustomersFromChannels",
  data() {
    return {
      channels: [
        {
          name: "Facebook",
          description: "Community",
          icon: icon1,
          percentage: 50,
          progressBarClass: "",
        },
        {
          name: "Dribbble",
          description: "Community",
          icon: icon2,
          percentage: 75,
          progressBarClass: "bg-secondary",
        },
        {
          name: "Instagram",
          description: "Reels",
          icon: icon3,
          percentage: 30,
          progressBarClass: "bg-orange",
        },
        {
          name: "Google",
          description: "SEO & PPC",
          icon: icon4,
          percentage: 20,
          progressBarClass: "bg-success",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.customers-from-channels-card {
  .trezo-card-content {
    ul {
      li {
        border-bottom: 1px solid var(--borderColor);
        padding-bottom: 14px;
        margin-bottom: 14px;

        .title {
          gap: 15px;

          span {
            &:nth-child(2) {
              font-size: 12px;
              margin-top: 2px;
            }
          }
        }
        .percentage-progress {
          width: 150px;
          gap: 12px;

          .trezo-progress {
            height: 8px;
            background: #ecf0ff;
            border-radius: 50px;
            overflow: hidden;

            .bg-secondary {
              background-color: var(--secondaryColor) !important;
            }
            .bg-orange {
              background-color: var(--orangeColor) !important;
            }
            .progress-bar {
              color: #fff;
              background-color: var(--primaryColor);
              transition: var(--transition);
              height: 8px;
            }
          }
          .percentage {
            font-size: 12px;
          }
        }
        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom-width: 0;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .customers-from-channels-card {
    .trezo-card-content {
      ul {
        li {
          .percentage-progress {
            width: 130px;
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .customers-from-channels-card {
    .trezo-card-content {
      ul {
        li {
          .percentage-progress {
            width: 120px;
          }
        }
      }
    }
  }
}
</style>
