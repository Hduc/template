<template>
  <v-card
    class="monthly-spending-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Monthly Spending</h5>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="line"
          height="203"
          :options="monthlySpending"
          :series="spending"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MonthlySpendingChart",
  setup() {
    const isClient = ref(false);
    const spending = ref([
      {
        name: "Spend",
        data: [0, 51, 45, 75, 70],
      },
    ]);
    const monthlySpending = ref({
      chart: {
        height: 203,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#5C61F2"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
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
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val;
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      spending,
      monthlySpending,
    };
  },
});
</script>

<style scoped lang="scss">
.monthly-spending-card {
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
