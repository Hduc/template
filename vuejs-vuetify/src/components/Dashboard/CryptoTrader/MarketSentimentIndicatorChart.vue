<template>
  <v-card
    class="market-sentiment-indicator-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Market Sentiment Indicator</h5>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="radialBar"
          height="360"
          :options="marketSentimentIndicator"
          :series="indicator"
        ></apexchart>
      </div>

      <ul
        class="p-0 m-0 list-unstyled d-flex align-items-center m-auto justify-content-center flex-wrap"
        style="gap: 13px; max-width: 315px"
      >
        <li class="d-flex align-items-center" style="gap: 5px">
          <span
            class="d-block rounded-circle"
            style="background-color: #00d26a; width: 12px; height: 12px"
          ></span>
          <span class="fs-13">Extreme Greed</span>
        </li>
        <li class="d-flex align-items-center" style="gap: 5px">
          <span
            class="d-block rounded-circle"
            style="background-color: #00d26a; width: 12px; height: 12px"
          ></span>
          <span class="fs-13">Greed</span>
        </li>
        <li class="d-flex align-items-center" style="gap: 5px">
          <span
            class="d-block rounded-circle"
            style="background-color: #fcd53f; width: 12px; height: 12px"
          ></span>
          <span class="fs-13">Neutral</span>
        </li>
        <li class="d-flex align-items-center" style="gap: 5px">
          <span
            class="d-block rounded-circle"
            style="background-color: #ff6723; width: 12px; height: 12px"
          ></span>
          <span class="fs-13">Fear</span>
        </li>
        <li class="d-flex align-items-center" style="gap: 5px">
          <span
            class="d-block rounded-circle"
            style="background-color: #f8312f; width: 12px; height: 12px"
          ></span>
          <span class="fs-13">Extreme Fear</span>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MarketSentimentIndicatorChart",
  setup() {
    const isClient = ref(false);
    const indicator = ref([100]);
    const marketSentimentIndicator = ref({
      chart: {
        type: "radialBar",
        height: 360,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#ffffff",
            strokeWidth: "100%",
          },
          dataLabels: {
            show: false,
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          gradientToColors: ["#FF3D00"],
          stops: [0, 50, 100],
          colorStops: [
            { offset: 0, color: "#00C851", opacity: 1 }, // Extreme Greed
            { offset: 25, color: "#8BC34A", opacity: 1 }, // Greed
            { offset: 50, color: "#FFC107", opacity: 1 }, // Neutral
            { offset: 75, color: "#FF9800", opacity: 1 }, // Fear
            { offset: 100, color: "#FF3D00", opacity: 1 }, // Extreme Fear
          ],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Market Sentiment"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      indicator,
      marketSentimentIndicator,
    };
  },
});
</script>

<style scoped lang="scss">
.market-sentiment-indicator-card {
  .trezo-card-content {
    .chart {
      margin-top: -30px;
      margin-bottom: -20px;
    }
    .custom-legends {
      gap: 13px;
      max-width: 315px;
      margin-top: -30px;

      div {
        gap: 5px;
      }
    }
  }
}
</style>
