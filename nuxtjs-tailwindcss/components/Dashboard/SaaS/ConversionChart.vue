<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <span class="block mb-[5px]"> Conversion </span>
      <h3 class="leading-none text-lg md:text-xl mb-[8px]">32.5%</h3>
      <span
        class="inline-block text-xs px-[9px] text-success-700 border border-success-300 bg-success-100 text-sm rounded-[100px]"
      >
        +1.4%
      </span>
      <div
        class="absolute max-w-[115px] ltr:-right-[10px] rtl:-left-[10px] top-1/2 -translate-y-1/2"
      >
        <apexchart
          v-if="isClient"
          type="bar"
          height="130"
          :options="conversionChart"
          :series="conversion"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ConversionChart",
  setup() {
    const isClient = ref(false);
    const conversion = ref([
      {
        name: "Up",
        data: [70, 42, 70, 120, 40, 70],
      },
      {
        name: "Down",
        data: [-70, -44, -70, -120, -40, -70],
      },
    ]);
    const conversionChart = ref({
      chart: {
        type: "bar",
        height: 130,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["#BF85FB", "#5DA8FF"],
      plotOptions: {
        bar: {
          borderRadius: 2,
          columnWidth: "4px",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 7,
        borderColor: "#ECEEF2",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        show: false,
        position: "top",
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
          size: 6,
          offsetX: -2,
          offsetY: -0.5,
          shape: "square",
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        show: false,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
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
      tooltip: {
        y: {
          formatter: function (value: number) {
            return `${Math.abs(value).toFixed(2)}%`; // Ensure that negative values appear as positive in the tooltip
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      conversion,
      conversionChart,
    };
  },
});
</script>
