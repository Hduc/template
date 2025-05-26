<template>
  <v-card
    class="gainers-losers-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Gainers & Losers</h5>
      <div class="trezo-card-subtitle">Timeframe: 24h</div>
    </div>

    <div v-if="loading" class="text-center" aria-live="polite">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div
      v-else-if="error"
      class="text-center text-danger"
      aria-live="assertive"
    >
      {{ error }}
      <button @click="fetchData" class="btn btn-sm btn-outline-primary ms-2">
        Retry
      </button>
    </div>

    <div v-else-if="displayedCoins.length === 0" class="text-center">
      No market data available
    </div>

    <div v-else class="trezo-card-content">
      <div class="table-style-two">
        <div class="basic-table table-responsive">
          <table class="table mb-0">
            <tbody>
              <tr v-for="(coin, index) in displayedCoins" :key="coin.id">
                <td>
                  <div class="customer-info d-flex align-items-center">
                    <div class="img">
                      <v-img
                        :src="coin.image"
                        width="24"
                        height="24"
                        class="rounded-circle"
                        @error="handleImageError"
                        :title="coin.name"
                      />
                    </div>
                    <span class="d-block fw-medium m-0">
                      {{ coin.name }}
                      <span class="text-body fw-normal text-xs m-0">
                        ({{ coin.symbol.toUpperCase() }})
                      </span>
                    </span>
                  </div>
                </td>
                <td class="text-body">
                  ${{ formatPrice(coin.current_price) }}
                </td>
                <td
                  :class="{
                    'text-success': coin.price_change_percentage_24h > 0,
                    'text-danger': coin.price_change_percentage_24h < 0,
                    'border-0': index === displayedCoins.length - 1,
                  }"
                >
                  {{ formatPercentage(coin.price_change_percentage_24h) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

interface CryptoCoin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
  last_updated?: string;
  market_cap?: number;
}

const DEFAULT_IMAGE =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMCAyYzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4LTgtMy41ODItOC04IDMuNTgyLTggOC04eiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==";
const API_URL = "https://api.coingecko.com/api/v3/coins/markets";
const REFRESH_INTERVAL = 300000; // 5 minutes
const MAX_RETRIES = 3;

export default defineComponent({
  name: "GainersLosers",
  setup() {
    const loading = ref(false);
    const error = ref<string | null>(null);
    const coins = ref<CryptoCoin[]>([]);
    const retryCount = ref(0);

    const displayedCoins = computed(() => {
      if (coins.value.length === 0) return [];

      // Create a single sorted array to avoid multiple sorts
      const sorted = [...coins.value].sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      );

      return [
        ...sorted.slice(0, 3), // Top 3 gainers
        ...sorted.slice(-3).reverse(), // Top 3 losers (in correct order)
      ];
    });

    const fetchData = async (): Promise<void> => {
      try {
        loading.value = true;
        error.value = null;

        const params = new URLSearchParams({
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: "50",
          page: "1",
          sparkline: "false",
          price_change_percentage: "24h",
        });

        const response = await fetch(`${API_URL}?${params.toString()}`);

        if (!response.ok) {
          if (response.status === 429 && retryCount.value < MAX_RETRIES) {
            retryCount.value++;
            await new Promise((resolve) =>
              setTimeout(resolve, 1000 * retryCount.value)
            );
            return fetchData();
          }
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        // Enhanced data validation
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received from API");
        }

        // Process and validate each coin
        const validCoins = data.filter((coin: any) => {
          return (
            coin &&
            typeof coin.id === "string" &&
            typeof coin.name === "string" &&
            typeof coin.symbol === "string" &&
            typeof coin.current_price === "number" &&
            typeof coin.price_change_percentage_24h === "number" &&
            typeof coin.image === "string"
          );
        });

        if (validCoins.length === 0) {
          throw new Error("No valid coin data available");
        }

        coins.value = validCoins;
        retryCount.value = 0; // Reset retry counter on success
      } catch (err) {
        console.error("Error fetching crypto data:", err);
        error.value =
          err instanceof Error ? err.message : "Failed to load market data";
        coins.value = [];
      } finally {
        loading.value = false;
      }
    };

    const formatPrice = (price: number) => {
      if (price > 100)
        return price.toLocaleString(undefined, { maximumFractionDigits: 2 });
      if (price > 1)
        return price.toLocaleString(undefined, { maximumFractionDigits: 4 });
      return price.toLocaleString(undefined, { maximumFractionDigits: 6 });
    };

    const formatPercentage = (value: number) => {
      return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
    };

    const handleImageError = () => {
      const img = new Image();
      img.src = DEFAULT_IMAGE;
    };

    onMounted(() => {
      fetchData();
      const interval = setInterval(fetchData, REFRESH_INTERVAL);
      return () => clearInterval(interval);
    });

    return {
      loading,
      error,
      displayedCoins,
      fetchData,
      formatPrice,
      formatPercentage,
      handleImageError,
    };
  },
});
</script>

<style scoped lang="scss">
.gainers-losers-card {
  .trezo-card-content {
    .basic-table {
      margin-bottom: -12px;

      table {
        tbody {
          tr {
            td {
              text-align: center;
              font-size: 13px;
              padding: {
                top: 12px;
                bottom: 12px;
              }
              &:first-child {
                text-align: start !important;
              }
              &:last-child {
                text-align: end !important;
              }
            }
            &:first-child {
              td {
                padding-top: 0;
              }
            }
            &:last-child {
              td {
                border-bottom-width: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
