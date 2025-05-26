<template>
  <v-card
    class="price-movement-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Price Movement</h5>

      <div class="trezo-card-subtitle">
        <button
          type="button"
          :class="[
            'd-inline-block transition p-0',
            { active: activePeriod === '1h' },
          ]"
          @click="changePeriod('1h')"
        >
          1h
        </button>
        <button
          type="button"
          :class="[
            'd-inline-block transition p-0',
            { active: activePeriod === '1d' },
          ]"
          @click="changePeriod('1d')"
        >
          1d
        </button>
        <button
          type="button"
          :class="[
            'd-inline-block transition p-0',
            { active: activePeriod === '1w' },
          ]"
          @click="changePeriod('1w')"
        >
          1w
        </button>
        <button
          type="button"
          :class="[
            'd-inline-block transition p-0',
            { active: activePeriod === '1m' },
          ]"
          @click="changePeriod('1m')"
        >
          1m
        </button>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="candlestick"
          height="350"
          :options="priceMovement1"
          :series="price1"
        ></apexchart>
        <div style="margin-top: -12px">
          <apexchart
            v-if="isClient"
            type="bar"
            height="160"
            :options="priceMovement2"
            :series="price2"
          ></apexchart>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PriceMovementChart",
  setup() {
    const isClient = ref(false);
    const activePeriod = ref<"1h" | "1d" | "1w" | "1m">("1h"); // Default active period

    // Sample data for different time periods
    const periodData: Record<
      "1h" | "1d" | "1w" | "1m",
      { price1: any[]; price2: any[] }
    > = {
      "1h": generateDataForPeriod("1h"),
      "1d": generateDataForPeriod("1d"),
      "1w": generateDataForPeriod("1w"),
      "1m": generateDataForPeriod("1m"),
    };

    const price1 = ref(periodData[activePeriod.value].price1);
    const price2 = ref(periodData[activePeriod.value].price2);

    const priceMovement1 = ref({
      chart: {
        id: "candlestickChart",
        type: "candlestick",
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: false },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#37D80A",
            downward: "#FF4023",
          },
          wick: {
            useFillColor: true,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      xaxis: {
        type: "datetime",
        axisTicks: {
          show: true,
          color: "#64748B",
        },
        axisBorder: {
          show: true,
          color: "#64748B",
        },
        labels: {
          show: true,
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        labels: {
          show: true,
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
          formatter: (value: number) => value.toFixed(2),
        },
        axisBorder: {
          show: false,
          color: "#64748B",
        },
        axisTicks: {
          show: false,
          color: "#64748B",
        },
      },
      grid: {
        show: true,
        borderColor: "#F6F7F9",
      },
    });

    const priceMovement2 = ref({
      chart: {
        type: "bar",
        height: 160,
        toolbar: { show: false },
        brush: {
          enabled: true,
          target: "candlestickChart",
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date().getTime() - 30 * 24 * 60 * 60 * 1000,
            max: new Date().getTime(),
          },
          fill: {
            color: "#ccc",
            opacity: 0.4,
          },
          stroke: {
            color: "#0D47A1",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      colors: ["#605DFF"],
      xaxis: {
        type: "datetime",
        axisTicks: {
          show: true,
          color: "#64748B",
        },
        axisBorder: {
          show: true,
          color: "#64748B",
        },
        labels: {
          show: true,
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        labels: {
          show: true,
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
          formatter: (value: number) => value.toFixed(2),
        },
        axisBorder: {
          show: false,
          color: "#64748B",
        },
        axisTicks: {
          show: false,
          color: "#64748B",
        },
      },
      grid: {
        show: true,
        borderColor: "#F6F7F9",
      },
    });

    function changePeriod(period: "1h" | "1d" | "1w" | "1m") {
      activePeriod.value = period;
      price1.value = periodData[period].price1;
      price2.value = periodData[period].price2;
    }

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      price1,
      priceMovement1,
      price2,
      priceMovement2,
      activePeriod,
      changePeriod,
    };
  },
});

// Helper function to generate different data for different periods
function generateDataForPeriod(period: "1h" | "1d" | "1w" | "1m") {
  // This is just a placeholder - replace with your actual data generation logic
  // For a real app, you would probably fetch this data from an API
  const baseData = {
    "1h": {
      price1: [
        {
          name: "Price (1h)",
          data: generateCandleData(24, 10500), // 24 points for 1 hour
        },
      ],
      price2: [
        {
          name: "Volume (1h)",
          data: generateVolumeData(24, 10500),
        },
      ],
    },
    "1d": {
      price1: [
        {
          name: "Price (1d)",
          data: generateCandleData(24, 20500), // 24 points for 1 day
        },
      ],
      price2: [
        {
          name: "Volume (1d)",
          data: generateVolumeData(24, 20500),
        },
      ],
    },
    "1w": {
      price1: [
        {
          name: "Price (1w)",
          data: generateCandleData(7, 20080), // 7 points for 1 week
        },
      ],
      price2: [
        {
          name: "Volume (1w)",
          data: generateVolumeData(7, 20080),
        },
      ],
    },
    "1m": {
      price1: [
        {
          name: "Price (1m)",
          data: generateCandleData(30, 43200), // 30 points for 1 month
        },
      ],
      price2: [
        {
          name: "Volume (1m)",
          data: generateVolumeData(30, 43200),
        },
      ],
    },
  };

  return baseData[period] || baseData["1h"];
}

function generateCandleData(count: number, minutes: number) {
  const data = [];
  const now = new Date();

  for (let i = 0; i < count; i++) {
    const date = new Date(now.getTime() - (count - i - 1) * minutes * 60000);
    const open = 50 + Math.random() * 10;
    const close = open + (Math.random() * 4 - 2);
    const high = Math.max(open, close) + Math.random() * 2;
    const low = Math.min(open, close) - Math.random() * 2;

    data.push({
      x: date,
      y: [open, high, low, close],
    });
  }

  return data;
}

function generateVolumeData(count: number, minutes: number) {
  const data = [];
  const now = new Date();

  for (let i = 0; i < count; i++) {
    const date = new Date(now.getTime() - (count - i - 1) * minutes * 60000);
    const value = Math.random() * 50 - 25; // Random value between -25 and 25

    data.push({
      x: date,
      y: value,
    });
  }

  return data;
}
</script>

<style scoped lang="scss">
.price-movement-card {
  .v-card-header {
    .trezo-card-subtitle {
      button {
        width: 40px;
        height: 30px;
        font-size: 14px;
        border-radius: 4px;
        color: var(--bodyColor);
        background-color: transparent;
        border: 1px solid var(--borderColor);
        margin: {
          left: 3px;
          right: 3px;
        }
        &.active,
        &:hover {
          color: var(--whiteColor);
          border-color: var(--primaryColor);
          background-color: var(--primaryColor);
        }
      }
    }
  }
  .trezo-card-content {
    .chart {
      margin: {
        top: -18px;
        bottom: -15px;
      }
    }
  }
}
</style>
