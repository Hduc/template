<template>
  <v-card
    class="performance-metrics-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Performance Metrics</h5>

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
            @click="updatePeriod('Daily')"
          >
            Daily
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updatePeriod('Weekly')"
          >
            Weekly
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updatePeriod('Monthly')"
          >
            Monthly
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updatePeriod('Yearly')"
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
          type="line"
          height="371"
          :options="performanceMetrics"
          :series="metrics"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PerformanceMetricsChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref<keyof typeof dataSets>("Monthly");

    // Sample data for different time periods
    const dataSets = {
      Daily: {
        categories: ["9AM", "12PM", "3PM", "6PM", "9PM", "12AM"],
        metrics: [
          { name: "Revenue", data: [50, 70, 90, 110, 130, 150] },
          { name: "Expenses", data: [5, 10, 15, 20, 25, 30] },
          { name: "Profit", data: [45, 60, 75, 90, 105, 120] },
        ],
      },
      Weekly: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        metrics: [
          { name: "Revenue", data: [100, 120, 140, 160, 180, 200, 220] },
          { name: "Expenses", data: [20, 25, 30, 35, 40, 45, 50] },
          { name: "Profit", data: [80, 95, 110, 125, 140, 155, 170] },
        ],
      },
      Monthly: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        metrics: [
          {
            name: "Revenue",
            data: [120, 130, 140, 155, 165, 175, 185, 190, 200, 205, 200, 225],
          },
          {
            name: "Expenses",
            data: [10, 20, 30, 40, 50, 60, 70, 70, 90, 100, 110, 90],
          },
          {
            name: "Profit",
            data: [0, 5, 10, 15, 20, 25, 30, 35, 25, 45, 50, 55],
          },
        ],
      },
      Yearly: {
        categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
        metrics: [
          { name: "Revenue", data: [500, 600, 700, 800, 900, 1000] },
          { name: "Expenses", data: [100, 150, 200, 250, 300, 350] },
          { name: "Profit", data: [400, 450, 500, 550, 600, 650] },
        ],
      },
    };

    const metrics = ref(dataSets[selectedPeriod.value].metrics);
    const performanceMetrics = ref({
      chart: {
        height: 371,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      colors: ["#37D80A", "#FF4023", "#605DFF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
        dashArray: [0, 0, 0],
      },
      markers: {
        size: 3,
        hover: {
          sizeOffset: 3,
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val + "k";
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      xaxis: {
        categories: dataSets[selectedPeriod.value].categories,
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
            fontFamily: "Inter",
          },
        },
      },
      yaxis: {
        min: 0,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "k";
          },
          style: {
            colors: "#3A4252",
            fontSize: "12px",
            fontFamily: "Inter",
          },
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
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
        fontFamily: "Inter",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 10,
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

    const updatePeriod = (
      period: "Daily" | "Weekly" | "Monthly" | "Yearly"
    ) => {
      selectedPeriod.value = period;
      metrics.value = dataSets[period].metrics;
      performanceMetrics.value = {
        ...performanceMetrics.value,
        xaxis: {
          ...performanceMetrics.value.xaxis,
          categories: dataSets[period].categories,
        },
      };
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      metrics,
      performanceMetrics,
      selectedPeriod,
      updatePeriod,
    };
  },
});
</script>

<style scoped lang="scss">
.performance-metrics-card {
  .trezo-card-content {
    .chart {
      margin: {
        top: -20px;
        bottom: -22px;
      }
    }
  }
}
</style>
