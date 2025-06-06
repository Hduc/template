<template>
  <div class="border-0 rounded-3 mb-4 bg-primary-div bg-opacity-10 p-4">
    <div class="d-flex align-items-center">
      <div class="flex-shrink-0">
        <img
          src="~/assets/images/ethereum.png"
          class="rounded-circle"
          style="width: 48px; height: 48px"
          alt="ethereum"
        />
      </div>
      <div class="flex-grow-1 ms-2">
        <span class="mb-1 d-block fw-medium text-secondary">
          ETHEREUM
          <span class="text-body fw-normal">(BTC)</span>
        </span>
        <div class="d-flex">
          <h3 class="mb-0 fs-20 fw-semibold me-1">$1,750</h3>
          <i
            class="material-symbols-outlined fs-16 position-relative top-3 text-danger"
          >
            trending_down
          </i>
          <span class="text-danger">-1.2%</span>
        </div>
      </div>
    </div>

    <div style="margin: -11px 0; max-width: 325px; margin: auto">
      <apexchart
        v-if="isClient"
        type="area"
        height="120"
        :options="ethereumChart"
        :series="ethereum"
      ></apexchart>
    </div>

    <div class="d-flex justify-content-between align-items-center">
      <div>
        <span class="fs-12 fw-medium d-block mb-1">Market Cap:</span>
        <h4 class="fs-12 fw-semibold mb-0">$210B</h4>
      </div>
      <div>
        <span class="fs-12 fw-medium d-block mb-1">Volume (24h):</span>
        <h4 class="fs-12 fw-semibold mb-0">$20B</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "EthereumChart",
  setup() {
    const isClient = ref(false);

    const ethereum = ref([
      {
        name: "Price",
        data: [90, 130, 140, 110, 120, 95, 85, 170],
      },
    ]);
    const ethereumChart = ref({
      chart: {
        type: "area",
        height: 120,
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
      colors: ["#AD63F6"],
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
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
        ],
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
        max: 170,
        min: 0,
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
          formatter: (val: string) => {
            return "$" + val + "K";
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      ethereum,
      ethereumChart,
    };
  },
});
</script>
