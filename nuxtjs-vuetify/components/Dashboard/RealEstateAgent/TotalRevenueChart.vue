<template>
  <v-card
    class="rea-total-revenue-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <div class="trezo-card-title">
        <span class="d-block"> Total Revenue </span>
        <div class="revenue d-flex align-items-center">
          <h3 class="mb-0 lh-1">$1,528</h3>
          <span class="trezo-badge with-border finished"> +5.4% </span>
        </div>
      </div>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius border-0 bg-gray"
          >
            {{ selectedPeriod }}
          </button>
        </template>

        <v-list class="menu-content">
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('Daily')"
          >
            Daily
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('Weekly')"
          >
            Weekly
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('Monthly')"
          >
            Monthly
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="updateChartData('Yearly')"
          >
            Yearly
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="320"
          :options="totalRevenue"
          :series="revenue"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalRevenueChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref<keyof typeof chartData>("Monthly");

    // Sample data for different time periods
    const chartData = {
      Daily: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [5, 8, 12, 7, 10, 15, 9],
      },
      Weekly: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [35, 42, 28, 45],
      },
      Monthly: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        data: [15, 11, 29, 54, 24, 37, 14, 29, 11, 14, 29, 48],
      },
      Yearly: {
        categories: ["2020", "2021", "2022", "2023", "2024", "2025"],
        data: [120, 145, 132, 168, 189, 210],
      },
    };

    const revenue = ref([
      {
        name: "Revenue",
        data: chartData[selectedPeriod.value].data,
      },
    ]);

    const totalRevenue = ref({
      chart: {
        type: "bar",
        height: 319,
        toolbar: {
          show: false,
        },
      },
      colors: ["#757DFF"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      fill: {
        opacity: 1,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: chartData[selectedPeriod.value].categories,
        axisTicks: {
          show: true,
          color: "#DDE4FF",
        },
        axisBorder: {
          show: true,
          color: "#DDE4FF",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
      },
      yaxis: {
        min: 0,
        labels: {
          formatter: (val: string) => "$" + val + "k",
          style: {
            colors: "#8695AA",
            fontSize: "12px",
            fontFamily: "Inter",
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
      tooltip: {
        y: {
          formatter: (val: string) => "$" + val + "k",
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
        borderColor: "#ECF0FF",
      },
    });

    const updateChartData = (
      period: "Daily" | "Weekly" | "Monthly" | "Yearly"
    ) => {
      selectedPeriod.value = period;
      revenue.value = [
        {
          name: "Revenue",
          data: chartData[period].data,
        },
      ];

      // Update x-axis categories
      totalRevenue.value = {
        ...totalRevenue.value,
        xaxis: {
          ...totalRevenue.value.xaxis,
          categories: chartData[period].categories,
        },
      };
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      revenue,
      totalRevenue,
      selectedPeriod,
      updateChartData,
    };
  },
});
</script>

<style scoped lang="scss">
.rea-total-revenue-card {
  .v-card-header {
    .trezo-card-title {
      h3 {
        font-size: 32px;
      }
      .revenue {
        gap: 10px;
        margin-top: 10px;
      }
      .trezo-badge {
        border-radius: 30px;
      }
    }
  }
  .trezo-card-content {
    .chart {
      margin: {
        top: -20px;
        left: -15px;
        bottom: -22px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .rea-total-revenue-card {
    .trezo-card-header {
      .trezo-card-title {
        h3 {
          font-size: 26px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rea-total-revenue-card {
    .trezo-card-header {
      .trezo-card-title {
        h3 {
          font-size: 28px;
        }
      }
    }
  }
}
</style>
