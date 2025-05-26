<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative">
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search task here....."
          v-model="searchQuery"
          @input="filterAssets"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>

      <div>
        <AddCrypto />

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
    </div>

    <div class="trezo-card-content">
      <div class="table-style-two">
        <div class="basic-table table-responsive">
          <table class="table mb-0" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th scope="col" class="fw-medium" @click="sortBy('name')">
                  Name
                  <i
                    class="material-symbols-outlined sort-icon position-relative top-6"
                    v-if="sortColumn === 'name'"
                  >
                    {{
                      sortDirection === "asc"
                        ? "arrow_drop_up"
                        : "arrow_drop_down"
                    }}
                  </i>
                </th>
                <th
                  scope="col"
                  class="fw-medium"
                  @click="sortBy('currentPrice')"
                >
                  Price
                  <i
                    class="material-symbols-outlined sort-icon"
                    v-if="sortColumn === 'currentPrice'"
                  >
                    {{
                      sortDirection === "asc"
                        ? "arrow_drop_up"
                        : "arrow_drop_down"
                    }}
                  </i>
                </th>
                <th
                  scope="col"
                  class="fw-medium"
                  @click="sortBy('oneHourChange')"
                >
                  1h %
                  <i
                    class="material-symbols-outlined sort-icon"
                    v-if="sortColumn === 'oneHourChange'"
                  >
                    {{
                      sortDirection === "asc"
                        ? "arrow_drop_up"
                        : "arrow_drop_down"
                    }}
                  </i>
                </th>
                <th
                  scope="col"
                  class="fw-medium"
                  @click="sortBy('twentyFourHourChange')"
                >
                  24h %
                  <i
                    class="material-symbols-outlined sort-icon"
                    v-if="sortColumn === 'twentyFourHourChange'"
                  >
                    {{
                      sortDirection === "asc"
                        ? "arrow_drop_up"
                        : "arrow_drop_down"
                    }}
                  </i>
                </th>
                <th
                  scope="col"
                  class="fw-medium"
                  @click="sortBy('sevenDayChange')"
                >
                  7d %
                  <i
                    class="material-symbols-outlined sort-icon"
                    v-if="sortColumn === 'sevenDayChange'"
                  >
                    {{
                      sortDirection === "asc"
                        ? "arrow_drop_up"
                        : "arrow_drop_down"
                    }}
                  </i>
                </th>
                <th scope="col" class="fw-medium" @click="sortBy('marketCap')">
                  Market Cap
                  <i
                    class="material-symbols-outlined sort-icon"
                    v-if="sortColumn === 'marketCap'"
                  >
                    {{
                      sortDirection === "asc"
                        ? "arrow_drop_up"
                        : "arrow_drop_down"
                    }}
                  </i>
                </th>
                <th scope="col" class="fw-medium" @click="sortBy('volume24h')">
                  Volume (24h)
                  <i
                    class="material-symbols-outlined sort-icon"
                    v-if="sortColumn === 'volume24h'"
                  >
                    {{
                      sortDirection === "asc"
                        ? "arrow_drop_up"
                        : "arrow_drop_down"
                    }}
                  </i>
                </th>
                <th scope="col" class="fw-medium">Last 7 Days</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="asset in paginatedAssets" :key="asset.id">
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
                <td class="fw-medium">
                  {{ formatCurrency(asset.currentPrice) }}
                </td>
                <td
                  class="fw-medium"
                  :class="getChangeClass(asset.oneHourChange)"
                >
                  {{ formatPercentage(asset.oneHourChange) }}
                </td>
                <td
                  class="fw-medium"
                  :class="getChangeClass(asset.twentyFourHourChange)"
                >
                  {{ formatPercentage(asset.twentyFourHourChange) }}
                </td>
                <td
                  class="fw-medium"
                  :class="getChangeClass(asset.sevenDayChange)"
                >
                  {{ formatPercentage(asset.sevenDayChange) }}
                </td>
                <td class="fw-medium">
                  {{ formatLargeCurrency(asset.marketCap) }}
                </td>
                <td class="fw-medium">
                  {{ formatLargeCurrency(asset.volume24h) }}
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
              <tr v-if="filteredAssets.length === 0">
                <td colspan="8" class="text-center py-4 text-secondary">
                  No cryptocurrencies found
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="trezo-card-pagination d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
        >
          <span class="fs-12 fw-medium">
            {{ showingRange }}
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
              <li class="page-item">
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
import AddCrypto from "./AddCrypto.vue";

interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
  oneHourChange: number;
  twentyFourHourChange: number;
  sevenDayChange: number;
  marketCap: number;
  volume24h: number;
  sparklineData: number[];
}

export default defineComponent({
  name: "GainersLosers",
  components: {
    AddCrypto,
  },
  setup() {
    const isClient = ref(false);
    const currentPage = ref(1);
    const itemsPerPage = ref(8);
    const selectedTimeRange = ref("Last 30 Days");
    const timeRanges = ref([
      "Last 7 Days",
      "Last 15 Days",
      "Last 30 Days",
      "Last 90 Days",
    ]);
    const searchQuery = ref("");
    const sortColumn = ref<keyof CryptoAsset>("marketCap");
    const sortDirection = ref("desc");
    const filteredAssets = ref<CryptoAsset[]>([]);
    const imagePreview = ref("");

    // Form for adding new crypto
    const newCrypto = ref({
      name: "",
      symbol: "",
      currentPrice: 0,
      oneHourChange: 0,
      twentyFourHourChange: 0,
      sevenDayChange: 0,
      marketCap: 0,
      volume24h: 0,
      image: "",
      sparklineData: Array(12)
        .fill(0)
        .map(() => Math.random() * 100 + 50),
    });

    // Sample crypto data with realistic values
    const cryptoAssets = ref<CryptoAsset[]>([
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        image: require("@/assets/images/bitcoin.png"),
        currentPrice: 51827.34,
        oneHourChange: 0.47,
        twentyFourHourChange: 2.65,
        sevenDayChange: 3.01,
        marketCap: 1017022624136,
        volume24h: 37182010584,
        sparklineData: [
          50200, 50800, 51500, 51000, 51200, 51500, 51800, 51600, 51700, 51800,
          51900, 51827,
        ],
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        image: require("@/assets/images/ethereum.png"),
        currentPrice: 2993.88,
        oneHourChange: -1.03,
        twentyFourHourChange: 2.44,
        sevenDayChange: 5.59,
        marketCap: 240652882527,
        volume24h: 19913301026,
        sparklineData: [
          2850, 2900, 2930, 2950, 2920, 2960, 2980, 2975, 2985, 2990, 2995,
          2993,
        ],
      },
      {
        id: "binancecoin",
        name: "Binance Coin",
        symbol: "BNB",
        image: require("@/assets/images/binance.png"),
        currentPrice: 349.49,
        oneHourChange: 0.16,
        twentyFourHourChange: -0.75,
        sevenDayChange: 10.25,
        marketCap: 54187520169,
        volume24h: 10614863319,
        sparklineData: [
          320, 330, 340, 335, 338, 345, 348, 347, 348, 349, 350, 349,
        ],
      },
      {
        id: "tether",
        name: "Tether",
        symbol: "USDT",
        image: require("@/assets/images/tether.png"),
        currentPrice: 1.0,
        oneHourChange: 0.01,
        twentyFourHourChange: 0.04,
        sevenDayChange: -0.01,
        marketCap: 143685783527,
        volume24h: 78972924872,
        sparklineData: [
          1.1, 1.0, 0.7, 0.6, 0.5, 0.4, 0.9, 0.8, 0.3, 0.2, 0.1, 0.0,
        ],
      },
      {
        id: "solana",
        name: "Solana",
        symbol: "SOL",
        image: require("@/assets/images/solana.png"),
        currentPrice: 132.46,
        oneHourChange: 1.45,
        twentyFourHourChange: 4.79,
        sevenDayChange: 4.31,
        marketCap: 67541375453,
        volume24h: 3658703755,
        sparklineData: [
          127, 128, 129, 130, 129, 131, 132, 131, 132, 132, 133, 132,
        ],
      },
      {
        id: "xrp",
        name: "XRP",
        symbol: "XRP",
        image: require("@/assets/images/xrp.png"),
        currentPrice: 0.52838,
        oneHourChange: 0.96,
        twentyFourHourChange: 2.38,
        sevenDayChange: 8.31,
        marketCap: 28953408509,
        volume24h: 2236753285,
        sparklineData: [
          0.49, 0.5, 0.51, 0.52, 0.51, 0.52, 0.525, 0.527, 0.528, 0.529, 0.53,
          0.528,
        ],
      },
      {
        id: "usd-coin",
        name: "USDC",
        symbol: "USDC",
        image: require("@/assets/images/usdc.png"),
        currentPrice: 0.9999,
        oneHourChange: -0.01,
        twentyFourHourChange: -0.01,
        sevenDayChange: -0.01,
        marketCap: 59247883103,
        volume24h: 12917680329,
        sparklineData: [
          1.1, 1.0, 0.7, 0.9, 0.8, 0.3, 0.6, 0.5, 0.4, 0.2, 0.1, 0.0,
        ],
      },
      {
        id: "cardano",
        name: "Cardano",
        symbol: "ADA",
        image: require("@/assets/images/cardano.png"),
        currentPrice: 0.5263,
        oneHourChange: 1.03,
        twentyFourHourChange: 1.45,
        sevenDayChange: 0.45,
        marketCap: 18557902356,
        volume24h: 5121882828,
        sparklineData: [
          0.52, 0.521, 0.522, 0.523, 0.524, 0.525, 0.526, 0.525, 0.526, 0.527,
          0.526, 0.526,
        ],
      },
      {
        id: "avalanche",
        name: "Avalanche",
        symbol: "AVAX",
        image: require("@/assets/images/avalanche.png"),
        currentPrice: 38.84,
        oneHourChange: 1.3,
        twentyFourHourChange: -2.09,
        sevenDayChange: 0.22,
        marketCap: 12551094984,
        volume24h: 1367466333,
        sparklineData: [
          39.0, 39.5, 39.2, 39.1, 38.9, 38.8, 38.85, 38.8, 38.83, 38.85, 38.86,
          38.84,
        ],
      },
      {
        id: "chainlink",
        name: "Chainlink",
        symbol: "LINK",
        image: require("@/assets/images/chainlink.png"),
        currentPrice: 18.43,
        oneHourChange: 2.46,
        twentyFourHourChange: 6.89,
        sevenDayChange: 2.37,
        marketCap: 10765015406,
        volume24h: 342511153,
        sparklineData: [
          18.0, 18.1, 18.2, 18.3, 18.25, 18.3, 18.35, 18.4, 18.42, 18.43, 18.44,
          18.43,
        ],
      },
    ]);

    // Initialize filtered assets
    filteredAssets.value = [...cryptoAssets.value];

    // Computed properties
    const totalPages = computed(() =>
      Math.ceil(filteredAssets.value.length / itemsPerPage.value)
    );

    const paginatedAssets = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredAssets.value.slice(start, end);
    });

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage.value,
        filteredAssets.value.length
      );
      const total = filteredAssets.value.length;
      return `Showing ${start} to ${end} of ${total} entries`;
    });

    const visiblePages = computed(() => {
      const pages = [];
      const maxVisible = 5;
      let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2));
      let end = Math.min(totalPages.value, start + maxVisible - 1);

      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    });

    // Methods
    const formatCurrency = (value: number) => {
      if (value >= 1) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value);
      } else {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 4,
          maximumFractionDigits: 4,
        }).format(value);
      }
    };

    const formatLargeCurrency = (value: number) => {
      if (value >= 1000000000) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(value);
      } else {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(value);
      }
    };

    const formatPercentage = (value: number) => {
      return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
    };

    const getChangeClass = (value: number) => {
      return value >= 0 ? "text-success" : "text-danger";
    };

    const getChartOptions = (asset: CryptoAsset) => {
      return {
        chart: {
          type: "line",
          height: 50,
          width: 112,
          sparkline: {
            enabled: !0,
          },
        },
        stroke: {
          curve: "monotoneCubic",
          width: 1,
        },
        colors: [asset.sevenDayChange >= 0 ? "#25b003" : "#ff3f23"],
        tooltip: {
          fixed: {
            enabled: !1,
          },
          x: {
            show: !1,
          },
          marker: {
            show: !1,
          },
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      };
    };

    const getChartSeries = (asset: CryptoAsset) => {
      return [
        {
          name: "Price",
          data: asset.sparklineData,
        },
      ];
    };

    const filterAssets = () => {
      if (!searchQuery.value) {
        filteredAssets.value = [...cryptoAssets.value];
      } else {
        const query = searchQuery.value.toLowerCase();
        filteredAssets.value = cryptoAssets.value.filter(
          (asset) =>
            asset.name.toLowerCase().includes(query) ||
            asset.symbol.toLowerCase().includes(query)
        );
      }
      currentPage.value = 1;
      sortAssets();
    };

    const sortBy = (column: string) => {
      if (sortColumn.value === column) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
      } else {
        sortColumn.value = column as keyof CryptoAsset;
        sortDirection.value = "desc";
      }
      sortAssets();
    };

    const sortAssets = () => {
      filteredAssets.value.sort((a, b) => {
        const aValue = a[sortColumn.value as keyof CryptoAsset];
        const bValue = b[sortColumn.value as keyof CryptoAsset];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortDirection.value === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        } else {
          return sortDirection.value === "asc"
            ? (aValue as number) - (bValue as number)
            : (bValue as number) - (aValue as number);
        }
      });
    };

    const changeTimeRange = (range: string) => {
      selectedTimeRange.value = range;
      currentPage.value = 1;
    };

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
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

    const handleImageUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imagePreview.value = e.target?.result as string;
          newCrypto.value.image = imagePreview.value;
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    const addNewCrypto = () => {
      const newAsset: CryptoAsset = {
        id: newCrypto.value.name.toLowerCase().replace(/\s+/g, "-"),
        name: newCrypto.value.name,
        symbol: newCrypto.value.symbol.toUpperCase(),
        image: newCrypto.value.image || require("@/assets/images/binance.png"),
        currentPrice: newCrypto.value.currentPrice,
        oneHourChange: newCrypto.value.oneHourChange,
        twentyFourHourChange: newCrypto.value.twentyFourHourChange,
        sevenDayChange: newCrypto.value.sevenDayChange,
        marketCap: newCrypto.value.marketCap,
        volume24h: newCrypto.value.volume24h,
        sparklineData: newCrypto.value.sparklineData,
      };

      cryptoAssets.value.unshift(newAsset);
      filterAssets();

      // Reset form
      newCrypto.value = {
        name: "",
        symbol: "",
        currentPrice: 0,
        oneHourChange: 0,
        twentyFourHourChange: 0,
        sevenDayChange: 0,
        marketCap: 0,
        volume24h: 0,
        image: "",
        sparklineData: Array(12)
          .fill(0)
          .map(() => Math.random() * 100 + 50),
      };

      imagePreview.value = "";
    };

    onMounted(() => {
      isClient.value = true;
      sortAssets(); // Initial sort
    });

    return {
      isClient,
      paginatedAssets,
      currentPage,
      totalPages,
      showingRange,
      selectedTimeRange,
      timeRanges,
      searchQuery,
      sortColumn,
      sortDirection,
      visiblePages,
      newCrypto,
      imagePreview,
      formatCurrency,
      formatLargeCurrency,
      formatPercentage,
      getChangeClass,
      getChartOptions,
      getChartSeries,
      filterAssets,
      sortBy,
      changeTimeRange,
      goToPage,
      prevPage,
      nextPage,
      handleImageUpload,
      addNewCrypto,
      filteredAssets,
    };
  },
});
</script>

<style scoped lang="scss">
.customer-info {
  gap: 8px;

  .img {
    width: 22px !important;
    .v-img {
      width: 22px !important;
    }
  }
}
.table-style-two {
  .basic-table {
    .table {
      thead {
        tr {
          th {
            .sort-icon {
              position: relative;
              top: 6px;
              line-height: 0;
            }
          }
        }
      }
    }
  }
}
</style>
