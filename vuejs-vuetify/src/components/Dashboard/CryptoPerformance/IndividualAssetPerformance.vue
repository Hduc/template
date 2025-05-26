<template>
  <v-card
    class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Individual Asset Performance</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius"
          >
            {{ selectedTimeRange }}
          </button>
        </template>
        <v-list class="menu-content">
          <v-list-item v-for="range in timeRanges" :key="range">
            <v-list-item-title
              @click="changeTimeRange(range)"
              style="cursor: pointer"
            >
              {{ range }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="table-style-two">
        <div class="basic-table table-responsive">
          <table class="table mb-0" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th scope="col" class="fw-medium">Asset</th>
                <th scope="col" class="fw-medium">Allocation %</th>
                <th scope="col" class="fw-medium">ROI</th>
                <th scope="col" class="fw-medium">Current Value</th>
                <th scope="col" class="fw-medium">Net Gain/Los</th>
                <th scope="col" class="fw-medium">1D Change</th>
                <th scope="col" class="fw-medium">7D Change</th>
                <th scope="col" class="fw-medium">Sparkline</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="asset in paginatedAssets" :key="asset.symbol">
                <td>
                  <div class="customer-info d-flex align-items-center">
                    <div class="img rounded-0">
                      <v-img
                        :src="asset.image"
                        class="rounded-0"
                        :alt="asset.name"
                      />
                    </div>
                    <span class="d-block fw-medium m-0">
                      {{ asset.name }}
                      <span class="text-body fw-normal text-xs m-0">
                        ({{ asset.symbol }})
                      </span>
                    </span>
                  </div>
                </td>
                <td>{{ asset.allocation }}%</td>
                <td>{{ formatPercentage(asset.roi) }}</td>
                <td>{{ formatCurrency(asset.currentValue) }}</td>
                <td>{{ formatCurrency(asset.netGain) }}</td>
                <td :class="getChangeClass(asset.oneDayChange)">
                  {{ formatPercentage(asset.oneDayChange) }}
                </td>
                <td :class="getChangeClass(asset.sevenDayChange)">
                  {{ formatPercentage(asset.sevenDayChange) }}
                </td>
                <td class="overflow-hidden">
                  <div class="position-relative" style="top: 9px">
                    <apexchart
                      v-if="isClient"
                      type="line"
                      height="50"
                      width="112"
                      :options="getChartOptions(asset)"
                      :series="getChartSeries(asset)"
                    ></apexchart>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="trezo-card-pagination d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
        >
          <span class="fs-12 fw-medium">
            Showing {{ showingRange }} of {{ assets.length }} results
          </span>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item">
                <button
                  class="page-link icon"
                  aria-label="Previous"
                  @click="prevPage"
                  :disabled="currentPage === 1"
                >
                  <i class="material-symbols-outlined">keyboard_arrow_left</i>
                </button>
              </li>
              <li class="page-item" v-for="page in totalPages" :key="page">
                <button
                  class="page-link"
                  :class="{ active: currentPage === page }"
                  @click="goToPage(page)"
                >
                  {{ page }}
                </button>
              </li>
              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
                <button
                  class="page-link icon"
                  aria-label="Next"
                  @click="nextPage"
                  :disabled="currentPage === totalPages"
                >
                  <i class="material-symbols-outlined">keyboard_arrow_right</i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

interface Asset {
  id: string;
  name: string;
  symbol: string;
  image: string;
  allocation: number;
  roi: number;
  currentValue: number;
  netGain: number;
  oneDayChange: number;
  sevenDayChange: number;
  sparklineData: number[];
}

export default defineComponent({
  name: "IndividualAssetPerformance",
  setup() {
    const isClient = ref(false);
    const currentPage = ref(1);
    const itemsPerPage = ref(5);
    const selectedTimeRange = ref("Last 30 Days");
    const timeRanges = ref([
      "Last 7 Days",
      "Last 15 Days",
      "Last 30 Days",
      "Last 90 Days",
    ]);

    // Sample data - in a real app, this would come from an API
    const assets = ref<Asset[]>([
      {
        id: "1",
        name: "Bitcoin",
        symbol: "BTC",
        image: require("@/assets/images/cardano.png"),
        allocation: 35,
        roi: 120,
        currentValue: 35000,
        netGain: 15000,
        oneDayChange: 0.5,
        sevenDayChange: 3.0,
        sparklineData: [60, 40, 80, 70, 50, 90, 60, 85, 55, 75, 65, 95],
      },
      {
        id: "2",
        name: "Ethereum",
        symbol: "ETH",
        image: require("@/assets/images/ethereum-2.png"),
        allocation: 25,
        roi: 80,
        currentValue: 25000,
        netGain: 8000,
        oneDayChange: -1.0,
        sevenDayChange: 1.5,
        sparklineData: [50, 60, 40, 70, 50, 80, 60, 90, 70, 50, 60, 55],
      },
      {
        id: "3",
        name: "Binance",
        symbol: "BNB",
        image: require("@/assets/images/binance-2.png"),
        allocation: 15,
        roi: 30,
        currentValue: 7500,
        netGain: 1500,
        oneDayChange: -2.5,
        sevenDayChange: -5.0,
        sparklineData: [60, 40, 80, 70, 50, 90, 60, 85, 55, 75, 65, 95],
      },
      {
        id: "4",
        name: "Tether",
        symbol: "USDT",
        image: require("@/assets/images/tether.png"),
        allocation: 10,
        roi: 45,
        currentValue: 4500,
        netGain: 1000,
        oneDayChange: 0.2,
        sevenDayChange: 2.0,
        sparklineData: [45, 50, 40, 55, 50, 60, 55, 65, 60, 70, 65, 70],
      },
      {
        id: "5",
        name: "XRP",
        symbol: "XRP",
        image: require("@/assets/images/xrp.png"),
        allocation: 5,
        roi: 60,
        currentValue: 3000,
        netGain: 1200,
        oneDayChange: 1.5,
        sevenDayChange: 4.5,
        sparklineData: [50, 60, 40, 70, 50, 80, 60, 90, 70, 50, 60, 55],
      },
      {
        id: "6",
        name: "Binance",
        symbol: "BNB",
        image: require("@/assets/images/binance-2.png"),
        allocation: 15,
        roi: 30,
        currentValue: 7500,
        netGain: 1500,
        oneDayChange: -2.5,
        sevenDayChange: -5.0,
        sparklineData: [60, 40, 80, 70, 50, 90, 60, 85, 55, 75, 65, 95],
      },
      {
        id: "7",
        name: "Tether",
        symbol: "USDT",
        image: require("@/assets/images/tether.png"),
        allocation: 10,
        roi: 45,
        currentValue: 4500,
        netGain: 1000,
        oneDayChange: 0.2,
        sevenDayChange: 2.0,
        sparklineData: [45, 50, 40, 55, 50, 60, 55, 65, 60, 70, 65, 70],
      },
    ]);

    // Computed properties
    const totalPages = computed(() =>
      Math.ceil(assets.value.length / itemsPerPage.value)
    );
    const paginatedAssets = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return assets.value.slice(start, end);
    });
    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage.value,
        assets.value.length
      );
      return `${start}-${end}`;
    });

    // Methods
    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(value);
    };

    const formatPercentage = (value: number) => {
      return `${value > 0 ? "+" : ""}${value.toFixed(1)}%`;
    };

    const getChangeClass = (value: number) => {
      return value >= 0 ? "text-success" : "text-danger";
    };

    const getChartOptions = (asset: Asset) => {
      return {
        chart: {
          type: "line",
          height: 50,
          width: 112,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "monotoneCubic",
          width: 1,
        },
        colors: [asset.sevenDayChange >= 0 ? "#25b003" : "#ff3f23"],
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          marker: {
            show: false,
          },
        },
      };
    };

    const getChartSeries = (asset: Asset) => {
      return [
        {
          name: "Price",
          data: asset.sparklineData,
        },
      ];
    };

    const changeTimeRange = (range: string) => {
      selectedTimeRange.value = range;
      // Here you would typically fetch new data based on the selected time range
      // For now, we'll just reset to the first page
      currentPage.value = 1;
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      assets,
      paginatedAssets,
      currentPage,
      totalPages,
      showingRange,
      selectedTimeRange,
      timeRanges,
      formatCurrency,
      formatPercentage,
      getChangeClass,
      getChartOptions,
      getChartSeries,
      changeTimeRange,
      goToPage,
      prevPage,
      nextPage,
    };
  },
});
</script>

<style scoped lang="scss">
.basic-table {
  table,
  .table {
    tbody {
      tr {
        td {
          padding: {
            bottom: 8px;
            top: 8px;
          }
          .customer-info {
            gap: 3px;

            .img {
              .v-img {
                width: 22px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
