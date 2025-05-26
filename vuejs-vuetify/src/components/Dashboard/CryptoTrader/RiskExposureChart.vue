<template>
  <v-card
    class="risk-exposure-card trezo-card mb-25 border-radius d-block bg-white shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Risk Exposure</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none z-1"
          >
            <i class="ri-more-fill"></i>
          </button>
        </template>

        <v-list class="menu-content">
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('daily')"
          >
            Daily
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('weekly')"
          >
            Weekly
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('monthly')"
          >
            Monthly
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('yearly')"
          >
            Yearly
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="radar"
          height="340"
          :options="riskExposure"
          :series="risk"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RiskExposureChart",
  setup() {
    const isClient = ref(false);
    const currentPeriod = ref("daily"); // Track current period

    const chartData = {
      daily: [
        {
          name: "Risk",
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: "Risk",
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: "Risk",
          data: [30, 70, 80, 15, 45, 10],
        },
      ],
      weekly: [
        {
          name: "Risk",
          data: [60, 70, 40, 60, 90, 40],
        },
        {
          name: "Risk",
          data: [40, 50, 60, 70, 40, 60],
        },
        {
          name: "Risk",
          data: [50, 60, 70, 30, 60, 30],
        },
      ],
      monthly: [
        {
          name: "Risk",
          data: [40, 60, 50, 70, 80, 60],
        },
        {
          name: "Risk",
          data: [60, 40, 70, 50, 60, 40],
        },
        {
          name: "Risk",
          data: [70, 50, 60, 40, 70, 50],
        },
      ],
      yearly: [
        {
          name: "Risk",
          data: [30, 50, 60, 80, 70, 80],
        },
        {
          name: "Risk",
          data: [70, 60, 50, 30, 80, 60],
        },
        {
          name: "Risk",
          data: [60, 70, 80, 50, 60, 70],
        },
      ],
    };

    const risk = ref(chartData.daily);

    const categories = [
      "Market",
      "Technology",
      "Compliance",
      "Liquidity",
      "Operational",
      "Credit",
    ];

    const riskExposure = ref({
      chart: {
        height: 340,
        type: "radar",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: categories,
        labels: {
          show: true,
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
        },
      },
      markers: {
        size: 3,
        strokeWidth: 0,
      },
      colors: ["#FD5812", "#37D80A", "#605DFF"],
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.4,
        },
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
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
    });

    // Method to update chart data based on selected period
    const updateChartData = (period: string) => {
      currentPeriod.value = period;
      risk.value = chartData[period as keyof typeof chartData];
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      risk,
      riskExposure,
      updateChartData,
    };
  },
});
</script>
