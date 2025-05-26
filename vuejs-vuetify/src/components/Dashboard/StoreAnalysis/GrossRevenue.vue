<template>
  <v-card
    class="sa-gross-revenue-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <div class="trezo-card-title">
        <span class="d-block">Gross Revenue</span>
        <div class="revenue d-flex align-items-center">
          <h3 class="mb-0 lh-1">$1,528</h3>
          <span class="trezo-status-badge shipped">+5.4%</span>
        </div>
        <span class="text-xs d-block">vs previous 30 days</span>
      </div>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius bg-gray border-0"
          >
            {{ selectedTimeframe }}
          </button>
        </template>
        <v-list class="menu-content">
          <v-list-item
            v-for="timeframe in timeframes"
            :key="timeframe"
            @click="updateTimeframe(timeframe)"
          >
            <v-list-item-title>{{ timeframe }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient && chartOptions"
          type="line"
          height="315"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

interface SeriesData {
  name: string;
  data: number[];
}

interface ChartData {
  series: SeriesData[];
  categories: string[];
}

export default defineComponent({
  name: "GrossRevenue",
  setup() {
    const isClient = ref(false);
    const timeframes = ["Weekly", "Monthly", "Yearly"] as const;
    type Timeframe = (typeof timeframes)[number];
    const selectedTimeframe = ref<Timeframe>("Weekly");
    const series = ref<SeriesData[]>([]);
    const chartOptions = ref<any>(null);

    const chartData: Record<Timeframe, ChartData> = {
      Weekly: {
        series: [
          { name: "Sales Revenue", data: [108, 110, 105, 120, 115, 125, 130] },
          { name: "Sales Volume", data: [125, 135, 145, 125, 130, 115, 140] },
          { name: "Order Value", data: [125, 130, 115, 140, 125, 135, 145] },
        ],
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      Monthly: {
        series: [
          {
            name: "Sales Revenue",
            data: [108, 130, 110, 140, 130, 115, 125, 115, 125, 140, 140, 130],
          },
          {
            name: "Sales Volume",
            data: [140, 120, 125, 130, 110, 145, 135, 110, 130, 120, 130, 145],
          },
          {
            name: "Order Value",
            data: [125, 115, 128, 120, 125, 130, 135, 130, 135, 145, 120, 125],
          },
        ],
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
      },
      Yearly: {
        series: [
          { name: "Sales Revenue", data: [150, 175, 190, 200, 220] },
          { name: "Sales Volume", data: [240, 250, 170, 200, 210] },
          { name: "Order Value", data: [170, 200, 210, 240, 250] },
        ],
        categories: ["2019", "2020", "2021", "2022", "2023"],
      },
    };

    const initializeChartOptions = (categories: string[]) => {
      return {
        chart: {
          type: "line",
          height: 315,
          toolbar: {
            show: false,
          },
        },
        colors: ["#757DFF", "#AD63F6", "#37D80A"],
        stroke: {
          width: 3,
          curve: "straight",
          dashArray: [0, 8],
        },
        grid: {
          show: true,
          borderColor: "#ECF0FF",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: categories,
          axisTicks: {
            show: false,
            color: "#DDE4FF",
          },
          axisBorder: {
            show: false,
            color: "#DDE4FF",
          },
          labels: {
            show: true,
            style: {
              colors: "#8695AA",
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          labels: {
            formatter: (val: number) => `$${val}K`,
            style: {
              colors: "#8695AA",
              fontSize: "12px",
            },
          },
          axisBorder: {
            show: false,
            color: "#DDE4FF",
          },
          axisTicks: {
            show: false,
            color: "#DDE4FF",
          },
        },
        tooltip: {
          y: {
            formatter: (val: number) => `${val}k`,
          },
        },
        legend: {
          show: true,
          fontSize: "12px",
          position: "bottom",
          horizontalAlign: "center",
          itemMargin: {
            horizontal: 8,
            vertical: 8,
          },
          labels: {
            colors: "#64748B",
          },
          markers: {
            size: 6,
            offsetX: -2,
            offsetY: -0.5,
            shape: "square",
          },
        },
      };
    };

    const updateTimeframe = (timeframe: Timeframe) => {
      selectedTimeframe.value = timeframe;
      const data = chartData[timeframe];
      series.value = [...data.series];
      chartOptions.value = initializeChartOptions(data.categories);
    };

    onMounted(() => {
      isClient.value = true;
      updateTimeframe(selectedTimeframe.value);
    });

    return {
      isClient,
      series,
      chartOptions,
      selectedTimeframe,
      timeframes,
      updateTimeframe,
    };
  },
});
</script>

<style lang="scss" scoped>
.sa-gross-revenue-card {
  .v-card-header {
    .trezo-card-title {
      h3 {
        font-size: 32px;
      }
      .revenue {
        gap: 10px;
        margin: {
          top: 9px;
          bottom: 10px;
        }
      }
      .trezo-status-badge {
        border-radius: 30px;
        padding: {
          left: 11px;
          right: 11px;
        }
      }
      .text-xs {
        font-size: 12px;
      }
    }
  }

  .trezo-card-content {
    .chart {
      margin: {
        top: -18px;
        left: -14px;
        bottom: -18px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sa-gross-revenue-card {
    .v-card-header {
      .trezo-card-title {
        h3 {
          font-size: 26px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sa-gross-revenue-card {
    .v-card-header {
      .trezo-card-title {
        h3 {
          font-size: 28px;
        }
      }
    }
  }
}
</style>
