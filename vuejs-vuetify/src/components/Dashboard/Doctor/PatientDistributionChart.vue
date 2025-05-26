<template>
  <v-card
    class="patient-distribution-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Patient Distribution</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius border-0 bg-gray"
          >
            {{ selectedTimeframe }}
          </button>
        </template>
        <v-list class="menu-content">
          <v-list-item
            v-for="(item, index) in timeRanges"
            :key="index"
            @click="updateTimeframe(item)"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="donut"
          height="306"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import type { ApexOptions } from "apexcharts";

type Timeframe = "Daily" | "Weekly" | "Monthly" | "Yearly";

export default defineComponent({
  name: "PatientDistributionChart",
  setup() {
    const isClient = ref(false);
    const selectedTimeframe = ref<Timeframe>("Weekly");
    const timeRanges = ref<Timeframe[]>([
      "Daily",
      "Weekly",
      "Monthly",
      "Yearly",
    ]);
    const series = ref<number[]>([]);
    const labels = ref<string[]>([]);

    const chartData = {
      Daily: {
        series: [40, 20, 10],
        labels: ["Male", "Female", "Children"],
      },
      Weekly: {
        series: [50, 30, 20],
        labels: ["Male", "Female", "Children"],
      },
      Monthly: {
        series: [200, 150, 100],
        labels: ["Male", "Female", "Children"],
      },
      Yearly: {
        series: [2500, 2000, 1500],
        labels: ["Male", "Female", "Children"],
      },
    };

    const chartOptions = ref<ApexOptions>({
      chart: {
        height: 306,
        type: "donut",
      },
      labels: labels.value,
      colors: ["#605DFF", "#58F229", "#5DA8FF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        show: true,
        colors: ["#ffffff"],
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
                show: true,
                color: "#3A4252",
                fontSize: "28px",
                fontWeight: "600",
              },
              total: {
                show: true,
                color: "#64748B",
              },
            },
          },
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
    });

    const updateTimeframe = (timeframe: Timeframe) => {
      selectedTimeframe.value = timeframe;
      const data = chartData[timeframe];
      series.value = data.series;
      labels.value = data.labels;
      // Create a new object to force reactivity
      chartOptions.value = {
        ...chartOptions.value,
        labels: data.labels,
      };
    };

    onMounted(() => {
      isClient.value = true;
      updateTimeframe(selectedTimeframe.value);
    });

    return {
      isClient,
      series,
      chartOptions,
      timeRanges,
      selectedTimeframe,
      updateTimeframe,
    };
  },
});
</script>

<style lang="scss" scoped>
.patient-distribution-card {
  .trezo-card-content {
    .chart {
      margin-top: -9px;
    }
  }
}
</style>
