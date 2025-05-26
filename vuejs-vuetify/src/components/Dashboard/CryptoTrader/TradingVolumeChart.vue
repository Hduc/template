<template>
  <v-card
    class="trading-volume-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="trezo-card-content">
      <div class="d-flex align-items-center justify-content-between">
        <div class="inner d-flex align-items-center">
          <div>
            <span class="d-block"> Trading Volume </span>
            <h3 class="mb-0 lh-1">$117,950</h3>
          </div>
          <span class="trezo-badge with-border border-radius finished">
            +7.6%
          </span>
        </div>
        <span class="d-block"> Last 7 days </span>
      </div>

      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="200"
          :options="tradingVolume"
          :series="trading"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TradingVolumeChart",
  setup() {
    const isClient = ref(false);
    const trading = ref([
      {
        name: "Volume",
        data: [130, 200, 160, 80, 70, 120, 140],
      },
    ]);
    const tradingVolume = ref({
      chart: {
        type: "bar",
        height: 200,
        toolbar: {
          show: false,
        },
      },
      colors: ["#757DFF"],
      plotOptions: {
        bar: {
          columnWidth: "15px",
          colors: {
            backgroundBarColors: ["#DDE4FF"],
            backgroundBarOpacity: 0.2,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#F6F7F9",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: true,
          color: "#64748B",
        },
        axisBorder: {
          show: true,
          color: "#64748B",
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
        max: 200,
        min: 0,
        labels: {
          formatter: function (val: string) {
            return "$" + val;
          },
          style: {
            colors: "#3A4252",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
        axisBorder: {
          show: false,
          color: "#64748B",
        },
        axisTicks: {
          show: false,
          color: "#64748B",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val + "k";
          },
        },
      },
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        fontFamily: "Inter",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      trading,
      tradingVolume,
    };
  },
});
</script>

<style scoped lang="scss">
.trading-volume-card {
  .trezo-card-content {
    .inner {
      gap: 15px;

      h3 {
        font-size: 20px;
        margin-top: 5px;
      }
    }
    .chart {
      margin-bottom: -25px;
    }
  }
}
</style>
