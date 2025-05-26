<template>
  <v-card
    class="cards-with-amount-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Cards With Amount</h5>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="211"
          :options="cardsWithAmount"
          :series="amount"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CardsWithAmountChart",
  setup() {
    const isClient = ref(false);
    const amount = ref([
      {
        name: "Projects",
        data: [1870, 2000, 1490, 1410, 1680],
      },
    ]);
    const cardsWithAmount = ref({
      chart: {
        type: "bar",
        height: 211,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF"],
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "11px",
          fontFamily: "Inter",
          fontWeight: "normal",
        },
      },
      fill: {
        opacity: 1,
      },
      xaxis: {
        categories: [
          "Rewards Card",
          "Cashback Card",
          "Travel Card",
          "Student Card",
          "Business Card",
        ],
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "11px",
            fontFamily: "Inter",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "11px",
            fontFamily: "Inter",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      amount,
      cardsWithAmount,
    };
  },
});
</script>

<style scoped lang="scss">
.cards-with-amount-card {
  .trezo-card-content {
    .chart {
      margin: {
        top: -25px;
        left: -10px;
        bottom: -22px;
      }
    }
  }
}
</style>
