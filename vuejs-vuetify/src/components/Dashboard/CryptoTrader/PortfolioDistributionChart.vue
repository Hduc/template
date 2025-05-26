<template>
  <v-card
    class="portfolio-distribution-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
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
          type="donut"
          height="194"
          :options="portfolioDistribution"
          :series="distribution"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PortfolioDistributionChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref("daily");
    const distribution = ref([35, 25, 15, 10, 8, 7]);
    const labels = [
      "Stocks",
      "Bonds",
      "Real Estate",
      "Cash",
      "Crypto",
      "Other",
    ];

    const chartData = {
      daily: [35, 25, 15, 10, 8, 7],
      weekly: [30, 28, 18, 12, 7, 5],
      monthly: [40, 20, 12, 15, 8, 5],
      yearly: [45, 15, 10, 20, 5, 5],
    };

    const portfolioDistribution = ref({
      chart: {
        height: 194,
        type: "donut",
      },
      labels: labels,
      colors: [
        "#9135E8",
        "#AD63F6",
        "#BF85FB",
        "#D7B5FD",
        "#E9D5FF",
        "#F3E8FF",
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
              show: false,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#3A4252",
                fontSize: "28px",
                fontFamily: "Inter",
                fontWeight: "600",
                formatter: function (val: number, opts?: any) {
                  if (!opts?.w?.globals?.seriesTotals) return `${val}k`;
                  const total = opts.w.globals.seriesTotals.reduce(
                    (a: number, b: number) => a + b,
                    0
                  );
                  const percentage =
                    total > 0 ? ((val / total) * 100).toFixed(1) : 0;
                  return `${val}k (${percentage}%)`;
                },
              },
              total: {
                show: true,
                color: "#64748B",
                formatter: function (w: any) {
                  if (!w?.globals?.seriesTotals) return "0k";
                  return `${w.globals.seriesTotals.reduce(
                    (a: number, b: number) => a + b,
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
        offsetY: 0,
        fontSize: "12px",
        fontFamily: "Inter",
        position: "left",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 0,
          vertical: 5,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 7,
          offsetX: -4,
          offsetY: -0.5,
          shape: "star",
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
    });

    const updateChartData = (period: string) => {
      selectedPeriod.value = period;
      distribution.value = [...chartData[period as keyof typeof chartData]];
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      distribution,
      portfolioDistribution,
      updateChartData,
      selectedPeriod,
    };
  },
});
</script>

<style scoped lang="scss">
.portfolio-distribution-card {
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
