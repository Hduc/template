<template>
  <v-card
    class="top-channels-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Top Channels</h5>
      <div class="trezo-card-subtitle">
        <a href="#" class="view-all-btn d-inline-block">
          <span class="d-inline-block position-relative">
            Browse All
            <i class="ri-arrow-right-s-line"></i>
          </span>
        </a>
      </div>
    </div>

    <div class="trezo-card-content">
      <ul class="p-0 m-0 list-unstyled">
        <li
          class="d-flex align-items-center justify-content-between"
          v-for="channel in channels"
          :key="channel.id"
        >
          <div class="title d-flex align-items-center">
            <v-img :src="channel.icon" :alt="channel.name" />
            <div>
              <span class="d-block fw-semibold text-black">
                {{ channel.name }}
              </span>
              <span class="d-block">
                {{ channel.category }}
              </span>
            </div>
          </div>
          <div class="circle-progress-bar rounded-circle position-relative">
            <svg
              width="60"
              height="60"
              viewBox="-25 -25 250 250"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style="transform: rotate(-90deg)"
            >
              <circle
                r="90"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="transparent"
                stroke-width="16px"
                stroke-dasharray="565.48px"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="90"
                cx="100"
                cy="100"
                :stroke="channel.color"
                stroke-width="16px"
                stroke-linecap="round"
                :stroke-dashoffset="getStrokeDashOffset(channel.percentage)"
                fill="transparent"
                stroke-dasharray="565.48px"
              ></circle>
            </svg>
            <span class="percentage d-block text-body">
              {{ channel.percentage }}%
            </span>
          </div>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/facebook-real.svg";
import image2 from "~/assets/images/dribbble-real.svg";
import image3 from "~/assets/images/instagram-real.svg";
import image4 from "~/assets/images/google-real.svg";
import image5 from "~/assets/images/figma-real.svg";

interface Channel {
  id: number;
  name: string;
  category: string;
  icon: string;
  percentage: number;
  color: string;
}

export default defineComponent({
  name: "TopChannels",
  setup() {
    const channels: Channel[] = [
      {
        id: 1,
        name: "Facebook",
        category: "Community",
        icon: image1,
        percentage: 80,
        color: "#6f77f3",
      },
      {
        id: 2,
        name: "Dribbble",
        category: "Community",
        icon: image2,
        percentage: 75,
        color: "#5ba5fa",
      },
      {
        id: 3,
        name: "Instagram",
        category: "Reel",
        icon: image3,
        percentage: 80,
        color: "#fc7936",
      },
      {
        id: 4,
        name: "Google",
        category: "SEO & PPC",
        icon: image4,
        percentage: 100,
        color: "#58f229",
      },
      {
        id: 5,
        name: "Figma",
        category: "Community",
        icon: image5,
        percentage: 60,
        color: "#bf85fb",
      },
    ];

    const getStrokeDashOffset = (percentage: number): string => {
      const circumference = 565.48; // 2 * π * r (where r = 90)
      return ((100 - percentage) / 100) * circumference + "px";
    };

    return {
      channels,
      getStrokeDashOffset,
    };
  },
});
</script>

<style lang="scss" scoped>
.top-channels-card {
  .trezo-card-content {
    ul {
      li {
        border-bottom: 1px solid var(--borderColor);
        padding-bottom: 10px;
        margin-bottom: 10px;

        .title {
          gap: 15px;

          span {
            &:nth-child(2) {
              font-size: 12px;
              margin-top: 2px;
            }
          }
        }
        .circle-progress-bar {
          width: 50px;
          height: 50px;

          svg {
            top: -5px;
            left: -5px;
            position: relative;
          }
          .percentage {
            top: 50%;
            left: 50%;
            font-size: 10px;
            position: absolute;
            transform: translateY(-50%) translateX(-50%);
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
</style>
