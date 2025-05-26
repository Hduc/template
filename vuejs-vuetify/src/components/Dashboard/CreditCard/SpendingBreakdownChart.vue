<template>
  <v-card
    class="spending-breakdown-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Spending Breakdown</h5>

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
            @click="updateChartData('day')"
          >
            This Day
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('week')"
          >
            This Week
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('month')"
          >
            This Month
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('year')"
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
          type="donut"
          height="284"
          :options="spendingBreakdown"
          :series="breakdown"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SpendingBreakdownChart",
  setup() {
    const isClient = ref(false);
    const breakdown = ref([35, 25, 12, 10, 10, 8]);
    const labels = [
      "Groceries",
      "Utilities",
      "Rent",
      "Entertainment",
      "Transportation",
      "Other",
    ];

    // Define different datasets for each time period
    const chartData = {
      day: [15, 10, 5, 8, 12, 10],
      week: [25, 20, 15, 10, 15, 15],
      month: [35, 25, 12, 10, 10, 8],
      year: [40, 30, 15, 5, 5, 5],
    };

    const spendingBreakdown = ref({
      chart: {
        height: 284,
        type: "donut",
      },
      labels: labels,
      colors: [
        "#37D80A",
        "#FE7A36",
        "#3584FC",
        "#FF4023",
        "#AD63F6",
        "#605DFF",
      ],
      stroke: {
        width: 2,
        show: true,
        colors: ["#ffffff"],
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              name: {
                color: "#64748B",
              },
              value: {
                show: false,
                color: "#3A4252",
                fontSize: "28px",
                fontFamily: "Inter",
                fontWeight: "600",
                formatter: function (val: number, opts: any) {
                  if (
                    !opts ||
                    !opts.w ||
                    !opts.w.globals ||
                    !opts.w.globals.seriesTotals
                  ) {
                    return val + "k";
                  }
                  const total = opts.w.globals.seriesTotals.reduce(
                    (a: any, b: any) => a + b,
                    0
                  );
                  const percentage =
                    total > 0 ? ((val / total) * 100).toFixed(1) : "0";
                  return `${val}k (${percentage}%)`;
                },
              },
              total: {
                show: false,
                color: "#64748B",
                formatter: function (w: any) {
                  if (!w || !w.globals || !w.globals.seriesTotals) {
                    return "0k";
                  }
                  return `${w.globals.seriesTotals.reduce(
                    (a: any, b: any) => a + b,
                    0
                  )}k`;
                },
              },
            },
          },
        },
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "left",
        fontFamily: "Inter",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 0,
          vertical: 7,
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "k";
          },
        },
      },
    });

    // Function to update chart data based on selected period
    const updateChartData = (period: "day" | "week" | "month" | "year") => {
      breakdown.value = [...chartData[period]]; // Create a new array to trigger reactivity
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      breakdown,
      spendingBreakdown,
      updateChartData,
    };
  },
});
</script>

<style scoped lang="scss">
.spending-breakdown-card {
  .trezo-card-content {
    .chart {
      margin: {
        top: -5px;
        bottom: -5px;
      }
    }
  }
}
</style>
