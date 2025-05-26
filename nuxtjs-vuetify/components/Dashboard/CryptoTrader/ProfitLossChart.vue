<template>
  <v-card
    class="profit-loss-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Profit & Loss</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
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
          type="area"
          height="280"
          :options="profitLossChart"
          :series="profitLoss.series"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ProfitLossChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref("daily");

    const chartData = {
      daily: {
        series: [
          { name: "Profit", data: [35, 45, 55, 35, 65, 38, 63] },
          { name: "Loss", data: [25, 15, 45, 25, 15, 20, 25] },
        ],
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      weekly: {
        series: [
          { name: "Profit", data: [150, 210, 180, 240] },
          { name: "Loss", data: [80, 120, 90, 110] },
        ],
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      },
      monthly: {
        series: [
          { name: "Profit", data: [1200, 1500, 1800, 2100, 1900, 2200] },
          { name: "Loss", data: [500, 700, 600, 800, 750, 900] },
        ],
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      yearly: {
        series: [
          { name: "Profit", data: [15000, 18000, 21000, 24000] },
          { name: "Loss", data: [6000, 7500, 9000, 10500] },
        ],
        categories: ["2020", "2021", "2022", "2023"],
      },
    };

    const profitLoss = ref(chartData.daily);

    const profitLossChart = ref({
      chart: {
        type: "area",
        height: 280,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#37D80A", "#EE3E08"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: [2, 2],
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.5,
        },
      },
      xaxis: {
        categories: profitLoss.value.categories,
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#3A4252",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        min: 0,
        labels: {
          formatter: function (val: string) {
            return val + "%";
          },
          style: {
            colors: "#3A4252",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
        fontFamily: "Inter",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 10,
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

    const updateChartData = (period: string) => {
      selectedPeriod.value = period;
      profitLoss.value = chartData[period as keyof typeof chartData];

      // Update the xaxis categories
      profitLossChart.value = {
        ...profitLossChart.value,
        xaxis: {
          ...profitLossChart.value.xaxis,
          categories: profitLoss.value.categories,
        },
      };
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      profitLoss,
      profitLossChart,
      updateChartData,
      selectedPeriod,
    };
  },
});
</script>

<style scoped lang="scss">
.profit-loss-card {
  .trezo-card-content {
    .chart {
      margin: {
        top: -22px;
        bottom: -20px;
      }
    }
  }
}
</style>
