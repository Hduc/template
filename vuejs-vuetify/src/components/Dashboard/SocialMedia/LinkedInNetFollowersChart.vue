<template>
  <v-card
    class="linkedin-net-followers-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <div class="header-title">
        <h5 class="mb-0">LinkedIn Net Followers</h5>
        <p class="fw-normal">
          Net followers growth: <span class="text-primary">+275</span>
        </p>
      </div>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius"
          >
            Last Week
          </button>
        </template>
        <v-list class="menu-content">
          <v-list-item
            v-for="(item, index) in timeRanges"
            :key="index"
            @click="handleTimeRangeChange(item)"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <ul
        class="funfacts-list d-sm-flex align-items-center p-0 m-0 list-unstyled"
      >
        <li>
          <span class="fw-medium text-black"> 56,100 </span>
          <span class="d-block text-xs"> Starting Followers </span>
        </li>
        <li>
          <span class="fw-medium text-black"> 300 </span>
          <span class="d-block text-xs"> New Followers </span>
        </li>
        <li>
          <span class="fw-medium text-black"> 25 </span>
          <span class="d-block text-xs"> Unfollows </span>
        </li>
        <li>
          <span class="fw-medium text-black"> 56,375 </span>
          <span class="d-block text-xs"> Ending Followers </span>
        </li>
      </ul>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="area"
          height="285"
          :options="netFollowers"
          :series="followers"
          ref="chart"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "LinkedInNetFollowersChart",
  setup() {
    const isClient = ref(false);
    const followers = ref<{ name: string; data: number[] }[]>([
      {
        name: "Followers",
        data: [],
      },
    ]);
    const categories = ref<string[]>([]);
    const chart = ref<any>(null);
    const timeRanges = ref([
      "Last Day",
      "Last Week",
      "Last Month",
      "Last Year",
    ]);

    const netFollowers = ref({
      chart: {
        type: "area",
        height: 285,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        dropShadow: {
          top: 5,
          left: 5,
          blur: 3,
          opacity: 0.6,
          enabled: true,
          color: "#605DFF",
          enabledOnSeries: [0],
        },
      },
      colors: ["#605DFF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: [1],
      },
      grid: {
        borderColor: "#ECEEF2",
        strokeDashArray: 8,
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.0,
        },
      },
      xaxis: {
        categories: categories.value,
        show: false,
        axisBorder: {
          show: true,
          color: "#D5D9E2",
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
        min: 0,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        axisTicks: {
          show: false,
          color: "#D5D9E2",
        },
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

    const getCategoriesAndData = (timeRange: string) => {
      let newCategories: string[] = [];
      let newData: number[] = [];

      switch (timeRange) {
        case "Last Day":
          newCategories = ["Today"];
          newData = [Math.floor(Math.random() * 1000)]; // Random data for today
          break;
        case "Last Week":
          newCategories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
          newData = Array.from({ length: 7 }, () =>
            Math.floor(Math.random() * 1000)
          ); // Random data for the week
          break;
        case "Last Month":
          newCategories = Array.from({ length: 30 }, (_, i) =>
            (i + 1).toString()
          ); // Days 1 to 30
          newData = Array.from({ length: 30 }, () =>
            Math.floor(Math.random() * 1000)
          ); // Random data for the month
          break;
        case "Last Year":
          newCategories = [
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
          ];
          newData = Array.from({ length: 12 }, () =>
            Math.floor(Math.random() * 1000)
          ); // Random data for the year
          break;
        default:
          newCategories = [];
          newData = [];
      }

      return { newCategories, newData };
    };

    const handleTimeRangeChange = (selectedValue: string) => {
      const { newCategories, newData } = getCategoriesAndData(selectedValue);

      // Update categories and followers data
      categories.value = newCategories;
      followers.value = [
        {
          name: "Followers",
          data: newData,
        },
      ];

      // Explicitly update the chart
      if (chart.value) {
        chart.value.updateOptions({
          xaxis: {
            categories: newCategories,
          },
        });
        chart.value.updateSeries([
          {
            name: "Followers",
            data: newData,
          },
        ]);
      }
    };

    // Initialize with default data (Last Week)
    onMounted(() => {
      isClient.value = true;
      const { newCategories, newData } = getCategoriesAndData("Last Week");
      categories.value = newCategories;
      followers.value = [
        {
          name: "Followers",
          data: newData,
        },
      ];
    });

    return {
      isClient,
      followers,
      netFollowers,
      handleTimeRangeChange,
      chart,
      timeRanges,
    };
  },
});
</script>

<style lang="scss" scoped>
.linkedin-net-followers-card {
  .v-card-header {
    margin-bottom: 15px;

    .header-title {
      h5 {
        font-size: 20px;
      }
      p {
        color: #8695aa;
      }
    }
  }
  .trezo-card-content {
    .funfacts-list {
      gap: 50px;

      li {
        span {
          &.text-xs {
            margin-top: 1px;
            font-size: 12px;
          }
        }
      }
    }
    .chart {
      margin: {
        left: -15px;
        right: -10px;
        bottom: -25px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .linkedin-net-followers-card {
    .v-card-header {
      margin-bottom: 0;

      .header-title {
        margin-bottom: 8px;

        h5 {
          font-size: 16px;
        }
        p {
          margin-top: 2px;
        }
      }
    }
    .trezo-card-content {
      .funfacts-list {
        gap: 30px;

        li {
          display: inline-block;
          margin: {
            top: 15px;
            right: 15px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .linkedin-net-followers-card {
    .trezo-card-content {
      .funfacts-list {
        li {
          margin-right: 0;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .linkedin-net-followers-card {
    .v-card-header {
      .header-title {
        h5 {
          font-size: 18px;
        }
        p {
          margin-top: 1px;
        }
      }
    }
    .trezo-card-content {
      .funfacts-list {
        gap: 40px;
      }
    }
  }
}
</style>
