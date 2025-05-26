<template>
  <v-card
    class="statistics-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Statistics</h5>

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
            @click="changeTimeRange('day')"
          >
            This Day
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="changeTimeRange('week')"
          >
            This Week
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="changeTimeRange('month')"
          >
            This Month
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="changeTimeRange('year')"
          >
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="area"
          height="298"
          :options="statisticsChart"
          :series="statistics"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "StatisticsChart",
  setup() {
    const isClient = ref(false);
    const currentRange = ref("week"); // default to week

    // Sample data for different time ranges
    const dataSets = {
      day: {
        categories: ["12AM", "3AM", "6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
        income: [30, 25, 35, 45, 55, 50, 40, 35],
        expenses: [15, 10, 20, 25, 30, 25, 20, 15],
      },
      week: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        income: [40, 50, 45, 35, 60, 50, 65],
        expenses: [20, 25, 40, 22, 18, 20, 25],
      },
      month: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        income: [150, 180, 200, 170],
        expenses: [80, 90, 110, 95],
      },
      year: {
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
        income: [500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050],
        expenses: [300, 320, 350, 380, 400, 420, 450, 480, 500, 520, 550, 580],
      },
    };

    const statistics = ref([
      {
        name: "Income",
        data: dataSets.week.income,
      },
      {
        name: "Expenses",
        data: dataSets.week.expenses,
      },
    ]);

    const statisticsChart = ref({
      chart: {
        type: "area",
        height: 298,
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
        categories: dataSets.week.categories,
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
            return "$" + val;
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

    const changeTimeRange = (range: string) => {
      currentRange.value = range;
      const data = dataSets[range as keyof typeof dataSets];

      // Update series data
      statistics.value = [
        { name: "Income", data: data.income },
        { name: "Expenses", data: data.expenses },
      ];

      // Update x-axis categories
      statisticsChart.value = {
        ...statisticsChart.value,
        xaxis: {
          ...statisticsChart.value.xaxis,
          categories: data.categories,
        },
      };
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      statistics,
      statisticsChart,
      changeTimeRange,
      currentRange,
    };
  },
});
</script>

<style scoped lang="scss">
.statistics-card {
  .trezo-card-content {
    .chart {
      margin: {
        top: -20px;
        bottom: -18px;
      }
    }
  }
}
</style>
