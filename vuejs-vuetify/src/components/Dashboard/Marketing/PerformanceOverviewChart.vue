<template>
  <v-card
    class="performance-overview-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Performance Overview</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu d-inline-block border-radius"
            >
              Last Week
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Last 60 Days
            </button>
            <button type="button" class="bg-transparent border-none">
              Last 90 Days
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div style="margin: -25px -10px -17px -17px">
      <apexchart
        v-if="isClient"
        type="bubble"
        height="351"
        :options="performanceOverview"
        :series="performance"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

interface DataPoint {
  name: string;
  data: Array<[number, number, number]>;
}

export default defineComponent({
  name: "PerformanceOverviewChart",
  setup() {
    const isClient = ref(false);

    const performance = ref<DataPoint[]>([
      {
        name: "Social Campaigns",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Email Newsletter",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "TV Campaign",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Google Ads",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Courses",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Radio",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ]);

    const performanceOverview = ref({
      chart: {
        type: "bubble",
        height: 351,
        toolbar: {
          show: false,
        },
      },
      colors: [
        "#757DFF",
        "#5DA8FF",
        "#BF85FB",
        "#1E8308",
        "#FE7A36",
        "#174EDE",
      ],
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 0.8,
      },
      grid: {
        borderColor: "#ECEEF2",
      },
      xaxis: {
        tickAmount: 10,
        type: "category",
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
        },
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 70,
        min: 0,
        labels: {
          formatter: (val: number) => {
            return "$" + val / 1 + "K";
          },
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          offsetX: -2,
          offsetY: -0.5,
          size: 7,
          shape: "diamond", // circle, square, line, plus, cross
          radius: 5,
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val + "k";
          },
        },
      },
    });

    function generateData(
      baseval: number,
      count: number,
      yrange: { min: number; max: number }
    ): Array<[number, number, number]> {
      const series: Array<[number, number, number]> = [];
      for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        const y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        series.push([x, y, z]);
        baseval += 86400000;
      }
      return series;
    }

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      performance,
      performanceOverview,
    };
  },
});
</script>
