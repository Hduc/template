<template>
  <v-card
    class="performance-per-investment-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Performance Per Investment</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius border-0 bg-transparent"
          >
            {{ selectedPeriod }}
          </button>
        </template>

        <v-list class="menu-content">
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('Today')"
          >
            Today
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('Last Week')"
          >
            Last Week
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('Last Month')"
          >
            Last Month
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('Last Year')"
          >
            Last Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="rangeBar"
          height="411"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef, onMounted } from "vue";

export default defineComponent({
  name: "PerformancePerInvestmentChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref<keyof typeof datasets>("Last Month");

    // Define different datasets for each time period
    const datasets = {
      Today: [
        { x: "Bitcoin", y: [5, 10] },
        { x: "Ethereum", y: [3, 7] },
        { x: "Solana", y: [2, 6] },
        { x: "Tether", y: [1, 4] },
        { x: "USDC", y: [0, 3] },
        { x: "XRP", y: [1, 2] },
      ],
      "Last Week": [
        { x: "Bitcoin", y: [4, 8] },
        { x: "Ethereum", y: [3, 6] },
        { x: "Solana", y: [2, 7] },
        { x: "Tether", y: [1, 5] },
        { x: "USDC", y: [1, 4] },
        { x: "XRP", y: [0, 3] },
      ],
      "Last Month": [
        { x: "Bitcoin", y: [8, 2] },
        { x: "Ethereum", y: [5, 3] },
        { x: "Solana", y: [4, 8] },
        { x: "Tether", y: [3, 5] },
        { x: "USDC", y: [2, 5] },
        { x: "XRP", y: [1, 2] },
      ],
      "Last Year": [
        { x: "Bitcoin", y: [10, 15] },
        { x: "Ethereum", y: [8, 12] },
        { x: "Solana", y: [5, 10] },
        { x: "Tether", y: [3, 7] },
        { x: "USDC", y: [2, 6] },
        { x: "XRP", y: [1, 4] },
      ],
    };

    const series = shallowRef([
      {
        name: "Investment",
        data: datasets[selectedPeriod.value],
      },
    ]);

    // Chart options (unchanged)
    const chartOptions = {
      chart: {
        type: "rangeBar",
        height: 411,
        toolbar: {
          show: false,
        },
      },
      colors: ["#3584FC"],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: string) {
          return val + "%";
        },
        style: {
          fontSize: "12px",
          fontFamily: "Inter",
          fontWeight: "400",
        },
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      xaxis: {
        axisTicks: {
          show: true,
          color: "#64748B",
        },
        axisBorder: {
          show: true,
          color: "#64748B",
        },
        labels: {
          style: {
            colors: "#3A4252",
            fontFamily: "Inter",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        min: 0,
        labels: {
          style: {
            colors: "#3A4252",
            fontFamily: "Inter",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
    };

    const updateChartData = (period: keyof typeof datasets) => {
      selectedPeriod.value = period;
      series.value = [
        {
          name: "Investment",
          data: datasets[period],
        },
      ];
    };

    onMounted(() => {
      setTimeout(() => {
        isClient.value = true;
      }, 100);
    });

    return {
      isClient,
      series,
      chartOptions,
      selectedPeriod,
      updateChartData,
    };
  },
});
</script>

<style scoped lang="scss">
.performance-per-investment-card {
  .trezo-card-content {
    .chart {
      margin: {
        top: -15px;
        bottom: -15px;
      }
    }
  }
}
</style>
