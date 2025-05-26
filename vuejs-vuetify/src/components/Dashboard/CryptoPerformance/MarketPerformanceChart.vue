<template>
  <v-card
    class="market-performance-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Market Performance</h5>

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
      <apexchart
        v-if="isClient"
        type="pie"
        height="340"
        :options="marketPerformance"
        :series="performance"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MarketPerformanceChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref("Last Month");
    const performance = ref([25, 18, 22, 35, 15, 28]);

    // Define different datasets for each time period
    const chartData = {
      Today: [10, 15, 20, 25, 10, 20],
      "Last Week": [15, 20, 18, 30, 12, 25],
      "Last Month": [25, 18, 22, 35, 15, 28],
      "Last Year": [30, 25, 20, 40, 20, 35],
    };

    const marketPerformance = ref({
      chart: {
        height: 340,
        type: "pie",
      },
      labels: [
        "Revenue Growth",
        "Profit Margins",
        "Cost of Goods Sold",
        "Market Share",
        "Sales Volume",
        "Return on Investment",
      ],
      colors: [
        "#37D80A",
        "#3584FC",
        "#FE7A36",
        "#AD63F6",
        "#FF4023",
        "#605DFF",
      ],
      stroke: {
        width: 0,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: true,
        fontSize: "12px",
        fontFamily: "Inter",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 6,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
    });

    // Function to update chart data based on selected period
    const updateChartData = (period: string) => {
      selectedPeriod.value = period;
      performance.value = [...chartData[period as keyof typeof chartData]];
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      performance,
      marketPerformance,
      selectedPeriod,
      updateChartData,
    };
  },
});
</script>
