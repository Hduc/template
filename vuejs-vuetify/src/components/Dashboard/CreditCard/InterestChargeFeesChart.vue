<template>
  <v-card
    class="interest-charge-fees-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Interest Charge & Fees</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-fill"></i>
          </button>
        </template>

        <v-list class="menu-content">
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('day')"
          >
            This Day
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('week')"
          >
            This Week
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('month')"
          >
            This Month
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('year')"
          >
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="300"
          :options="interestChargeFees"
          :series="interest"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "InterestChargeFeesChart",
  setup() {
    const isClient = ref(false);
    const currentPeriod = ref("year");

    const chartData = {
      day: {
        categories: ["12AM", "6AM", "12PM", "6PM"],
        interest: [10, 15, 12, 8],
        fees: [2, 3, 4, 1],
      },
      week: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        interest: [15, 12, 18, 14, 16, 10, 8],
        fees: [3, 2, 4, 3, 5, 2, 1],
      },
      month: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        interest: [28, 32, 25, 30],
        fees: [5, 7, 6, 8],
      },
      year: {
        categories: ["2022", "2023", "2024", "2025"],
        interest: [28, 15, 18, 25],
        fees: [5, 8, 8, 9],
      },
    };

    const interest = ref([
      {
        name: "Interest Charge",
        data: chartData.year.interest,
      },
      {
        name: "Fees",
        data: chartData.year.fees,
      },
    ]);

    const categories = ref(chartData.year.categories);

    const interestChargeFees = ref({
      chart: {
        type: "bar",
        height: 300,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#FF4023"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: categories.value,
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
        max: 40,
        min: 0,
        labels: {
          formatter: function (val: string) {
            return val + "%";
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
        show: true,
        position: "bottom",
        fontSize: "12px",
        fontFamily: "Inter",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 10,
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
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
    });

    const updateChartData = (period: string) => {
      currentPeriod.value = period;
      const data = chartData[period as keyof typeof chartData];

      // Update the series data
      interest.value = [
        {
          name: "Interest Charge",
          data: data.interest,
        },
        {
          name: "Fees",
          data: data.fees,
        },
      ];

      // Update the categories in the chart options
      interestChargeFees.value = {
        ...interestChargeFees.value,
        xaxis: {
          ...interestChargeFees.value.xaxis,
          categories: data.categories,
        },
      };
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      interest,
      interestChargeFees,
      updateChartData,
    };
  },
});
</script>

<style scoped lang="scss">
.interest-charge-fees-card {
  .trezo-card-content {
    .chart {
      margin: {
        top: -20px;
        bottom: -18px;
      }
    }
  }
}
</style>
