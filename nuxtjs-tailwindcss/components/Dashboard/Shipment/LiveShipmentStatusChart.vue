<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <span class="block"> Live Shipment Status </span>
      </div>
      <div class="trezo-card-subtitle">
        <span class="block"> Last 7 days </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mb-[22px] -mt-[22px]">
        <apexchart
          v-if="isClient"
          type="line"
          height="180"
          :options="liveShipmentStatus"
          :series="status"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "LiveShipmentStatusChart",
  setup() {
    const isClient = ref(false);
    const status = ref([
      {
        name: "In Transit",
        data: [70, 60, 40, 40, 35, 30, 40],
      },
      {
        name: "Delivered",
        data: [30, 45, 50, 55, 60, 70, 65],
      },
      {
        name: "Delayed",
        data: [15, 20, 25, 30, 25, 20, 15],
      },
      {
        name: "Canceled",
        data: [5, 10, 15, 20, 15, 10, 5],
      },
    ]);
    const liveShipmentStatus = ref({
      chart: {
        height: 180,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#3584FC", "#37D80A", "#FD5812", "#EE3E08"],
      stroke: {
        curve: "straight",
        width: 2,
      },
      grid: {
        show: true,
        strokeDashArray: 5,
        borderColor: "#EEF1FF",
      },
      markers: {
        size: 3,
        shape: ["circle", "circle"],
        strokeDashArray: 0,
        strokeWidth: 2,
        hover: {
          size: 4,
        },
      },
      xaxis: {
        categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7"],
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
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        max: 80,
        min: 0,
        labels: {
          style: {
            colors: "#64748B",
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
        position: "left",
        fontSize: "12px",
        horizontalAlign: "bottom",
        offsetX: -26,
        offsetY: 0,
        itemMargin: {
          horizontal: 0,
          vertical: 5,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 6,
          offsetX: -2,
          offsetY: 0.5,
          shape: "square",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      status,
      liveShipmentStatus,
    };
  },
});
</script>
