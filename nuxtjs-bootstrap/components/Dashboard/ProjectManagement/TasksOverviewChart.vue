<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Tasks Overview</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>Last 7 Days</option>
          <option value="1">This Month</option>
          <option value="2">This Year</option>
        </select>
      </div>

      <apexchart
        v-if="isClient"
        type="pie"
        height="385"
        :options="tasksOverview"
        :series="overview"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TasksOverviewChart",
  setup() {
    const isClient = ref(false);
    const overview = ref([55, 44, 30, 12, 22]);
    const tasksOverview = ref({
      chart: {
        height: 385,
        type: "pie",
      },
      labels: ["Completed", "In Progress", "Pending", "Active", "Cancelled"],
      colors: ["#37D80A", "#605DFF", "#AD63F6", "#3584FC", "#FD5812"],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 7,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          radius: 2,
          height: 9,
          offsetX: -2,
          offsetY: -0.1,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      overview,
      tasksOverview,
    };
  },
});
</script>

<style lang="scss" scoped>
.projects-analysis-card {
  .analysis-card-content {
    .chart {
      margin: {
        top: -5px;
        left: -12px;
        bottom: -20px;
      }
    }
    apx-chart {
      .apexcharts-tooltip-series-group {
        &.apexcharts-active {
          padding-bottom: 4px;
        }
      }
    }
  }
}
</style>
