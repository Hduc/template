<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-3">
      <span>In Progress</span>
      <h3 class="mb-0 fs-20">1.35k</h3>
      <div style="margin: -11px 0">
        <apexchart
          v-if="isClient"
          type="area"
          height="130"
          :options="ticketsInProgress"
          :series="progress"
        ></apexchart>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <span class="fs-12">This Month</span>
        <i class="material-symbols-outlined text-danger">trending_down</i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TicketsInProgressChart",
  setup() {
    const isClient = ref(false);
    const progress = ref([
      {
        name: "Tickets In Progress",
        data: [30, 65, 50, 85, 65, 75, 60],
      },
    ]);
    const ticketsInProgress = ref({
      chart: {
        type: "area",
        height: 130,
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
      stroke: {
        curve: "straight",
        width: 2,
      },
      colors: ["#FD5812"],
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.9,
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        tickAmount: 5,
        show: false,
        max: 100,
        min: 0,
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
          radius: 2,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      progress,
      ticketsInProgress,
    };
  },
});
</script>
