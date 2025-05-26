<template>
  <v-card
    class="income-vs-expense-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Income vs Expense</h5>
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
          v-if="isClient"
          type="bar"
          height="336"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

type Timeframe = "This Day" | "This Week" | "This Month" | "This Year";

export default defineComponent({
  name: "IncomeExpenseChart",
  setup() {
    const isClient = ref(false);
    const selectedTimeframe = ref<keyof typeof chartData>("This Week");
    const series = ref<{ name: string; data: number[] }[]>([]);
    const timeframes = ref<Timeframe[]>([
      "This Day",
      "This Week",
      "This Month",
      "This Year",
    ]);

    const chartOptions = ref({
      chart: {
        type: "bar",
        height: 336,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["#4936F5", "#C2CDFF"],
      plotOptions: {
        bar: {
          borderRadius: 3,
          columnWidth: "24px",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        strokeDashArray: 7,
        borderColor: "#ECEEF2",
      },
      xaxis: {
        categories: [] as string[],
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
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: (val: number) => {
            return val + "K";
          },
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
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 15,
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

    const chartData = {
      "This Day": {
        series: [
          { name: "Income", data: [10] },
          { name: "Expense", data: [-8] },
        ],
        categories: ["Today"],
      },
      "This Week": {
        series: [
          { name: "Income", data: [70, 42, 70, 120, 40, 70, 90] },
          { name: "Expense", data: [-70, -44, -70, -120, -40, -70, -120] },
        ],
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      "This Month": {
        series: [
          { name: "Income", data: [200, 180, 250, 300] },
          { name: "Expense", data: [-150, -120, -200, -250] },
        ],
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      },
      "This Year": {
        series: [
          { name: "Income", data: [900, 1100, 950, 1200] },
          { name: "Expense", data: [-800, -950, -900, -1100] },
        ],
        categories: ["Q1", "Q2", "Q3", "Q4"],
      },
    };

    const updateTimeframe = (timeframe: Timeframe) => {
      selectedTimeframe.value = timeframe;
      const data = chartData[timeframe];
      series.value = data.series;
      chartOptions.value = {
        ...chartOptions.value,
        xaxis: {
          ...chartOptions.value.xaxis,
          categories: data.categories,
        },
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
      selectedTimeframe,
      timeframes,
      updateTimeframe,
    };
  },
});
</script>
