<template>
  <v-card
    class="stats-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
    :style="{ 'background-image': `url(${bgImage})` }"
    role="status"
    aria-live="polite"
  >
    <div class="trezo-card-content">
      <div
        class="box border-radius bg-white"
        v-for="(stat, key) in stats"
        :key="key"
      >
        <span class="d-block text-capitalize text-body">
          {{ formatKey(key) }}
        </span>
        <h4 class="mb-0">
          {{ stat.value }}
          <span class="fw-normal text-body" v-if="stat.date">
            ({{ stat.date }})
          </span>
        </h4>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import bgImage from "@/assets/images/sparkline-bg.jpg";

interface CryptoStat {
  value: string;
  date?: string;
}

interface Stats {
  totalValue: CryptoStat;
  firstTradeVolume: CryptoStat;
  lastTradeVolume: CryptoStat;
  marketCap: CryptoStat;
}

export default defineComponent({
  name: "CryptoStatsPanel",
  props: {
    stats: {
      type: Object as () => Stats,
      default: () => ({
        totalValue: { value: "$597.655B" },
        firstTradeVolume: { value: "$21.953M", date: "1 Jan, 2025" },
        lastTradeVolume: { value: "$25.965B", date: "1 Nov, 2025" },
        marketCap: { value: "$1.36T" },
      }),
    },
    bgImage: {
      type: String,
      default: bgImage,
    },
  },
  methods: {
    formatKey(key: string): string {
      return key.replace(/([A-Z])/g, " $1").toLowerCase();
    },
  },
});
</script>

<style scoped lang="scss">
.stats-card {
  background: {
    position: center center;
    repeat: no-repeat;
    size: cover;
  }
  .trezo-card-content {
    gap: 25px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    .box {
      padding: 25px;

      h4 {
        font-size: 20px;
        margin-top: 5px;

        span {
          font-size: var(--fontSize);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .stats-card {
    .trezo-card-content {
      gap: 17px;
      grid-template-columns: repeat(1, minmax(0, 1fr));

      .box {
        padding: 17px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .stats-card {
    .trezo-card-content {
      gap: 20px;
      grid-template-columns: repeat(2, minmax(0, 1fr));

      .box {
        padding: 20px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .stats-card {
    .trezo-card-content {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}
</style>
