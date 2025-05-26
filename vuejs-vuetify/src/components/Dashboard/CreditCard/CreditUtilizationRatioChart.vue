<template>
  <v-card
    class="credit-utilization-ratio-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Credit Utilization Ratio</h5>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="203"
          :options="creditUtilizationRatio"
          :series="ratio"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CreditUtilizationRatioChart",
  setup() {
    const isClient = ref(false);
    const ratio = ref([
      {
        name: "Ratio",
        data: [30, 65, 85],
      },
    ]);
    const creditUtilizationRatio = ref({
      chart: {
        type: "bar",
        height: 203,
        toolbar: {
          show: false,
        },
      },
      colors: ["#37D80A", "#FE7A36", "#FF4023"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      xaxis: {
        categories: ["0-30%", "30-70%", "70%+"],
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
            colors: "#3A4252",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        max: 100,
        min: 0,
        labels: {
          style: {
            colors: "#3A4252",
            fontSize: "12px",
            fontFamily: "Inter",
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
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
      legend: {
        show: false,
        fontSize: "12px",
        fontFamily: "Inter",
        position: "bottom",
        horizontalAlign: "left",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      ratio,
      creditUtilizationRatio,
    };
  },
});
</script>

<style scoped lang="scss">
.credit-utilization-ratio-card {
  .trezo-card-content {
    .chart {
      margin: {
        top: -20px;
        bottom: -24px;
      }
    }
  }
}
</style>
