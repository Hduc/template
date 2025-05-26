<template>
  <v-card
    class="transactions-history-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Transactions History</h5>

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
            @click="filterByTime('day')"
          >
            Daily
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="filterByTime('week')"
          >
            Weekly
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="filterByTime('month')"
          >
            Monthly
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="filterByTime('year')"
          >
            Yearly
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="resetFilters"
          >
            Yearly
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="table-style-two">
        <div class="basic-table table-responsive">
          <table class="table mb-0">
            <tbody>
              <tr
                v-for="transaction in paginatedTransactions"
                :key="transaction.id"
              >
                <td>
                  <div class="customer-info d-flex align-items-center">
                    <div class="img rounded-0">
                      <v-img
                        :src="getImagePath(transaction.currency)"
                        class="rounded-0"
                        :alt="transaction.currency"
                      />
                    </div>
                    <span class="d-block fw-medium m-0">
                      {{ transaction.name }}
                      <span class="text-body fw-normal text-xs m-0">
                        ({{ transaction.symbol }})
                      </span>
                    </span>
                  </div>
                </td>
                <td>
                  <span
                    class="trezo-badge"
                    :class="getStatusClass(transaction.status)"
                  >
                    {{ transaction.status }}
                  </span>
                </td>
                <td class="text-body">
                  ${{ formatAmount(transaction.amount) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="trezo-card-pagination d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
        >
          <span class="fs-12 fw-medium">
            Showing {{ showingRange }} of
            {{ filteredTransactions.length }} results
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
import { defineComponent, ref, computed } from "vue";

interface Transaction {
  id: number;
  name: string;
  symbol: string;
  currency: string;
  status: "Sold" | "Withdraw" | "Deposit" | "Buy";
  amount: number;
  date: Date;
}

export default defineComponent({
  name: "TransactionsHistory",
  setup() {
    const transactions = ref<Transaction[]>([
      {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        currency: "bitcoin",
        status: "Sold",
        amount: 68848.92,
        date: new Date(),
      },
      {
        id: 2,
        name: "Ethereum",
        symbol: "ETH",
        currency: "ethereum",
        status: "Withdraw",
        amount: 2565.77,
        date: new Date(Date.now() - 86400000),
      },
      {
        id: 3,
        name: "Binance",
        symbol: "BNB",
        currency: "binance",
        status: "Sold",
        amount: 2565.77,
        date: new Date(Date.now() - 172800000),
      },
      {
        id: 4,
        name: "Tether",
        symbol: "USDT",
        currency: "tether",
        status: "Sold",
        amount: 1.0,
        date: new Date(Date.now() - 259200000),
      },
      {
        id: 5,
        name: "XRP",
        symbol: "XRP",
        currency: "xrp",
        status: "Withdraw",
        amount: 0.529105,
        date: new Date(Date.now() - 345600000),
      },
      {
        id: 6,
        name: "Cardano",
        symbol: "ADA",
        currency: "cardano",
        status: "Deposit",
        amount: 0.45,
        date: new Date(Date.now() - 432000000),
      },
      {
        id: 7,
        name: "Solana",
        symbol: "SOL",
        currency: "solana",
        status: "Buy",
        amount: 150.25,
        date: new Date(Date.now() - 518400000),
      },
      {
        id: 8,
        name: "Chainlink",
        symbol: "LINK",
        currency: "chainlink",
        status: "Sold",
        amount: 15.3,
        date: new Date(Date.now() - 950400000),
      },
    ]);

    const itemsPerPage = 5;
    const currentPage = ref(1);
    const timeFilter = ref<string | null>(null);

    // Filter transactions based on time filter
    const filteredTransactions = computed(() => {
      if (!timeFilter.value) return transactions.value;

      const now = new Date();
      let startDate = new Date();

      switch (timeFilter.value) {
        case "day":
          startDate.setDate(now.getDate() - 1);
          break;
        case "week":
          startDate.setDate(now.getDate() - 7);
          break;
        case "month":
          startDate.setMonth(now.getMonth() - 1);
          break;
        case "year":
          startDate.setFullYear(now.getFullYear() - 1);
          break;
        default:
          return transactions.value;
      }

      return transactions.value.filter(
        (transaction) => transaction.date >= startDate
      );
    });

    // Pagination logic
    const totalPages = computed(() =>
      Math.ceil(filteredTransactions.value.length / itemsPerPage)
    );

    const paginatedTransactions = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredTransactions.value.slice(start, end);
    });

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage,
        filteredTransactions.value.length
      );
      return `${start}-${end}`;
    });

    // Navigation methods
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    // Filter methods
    const filterByTime = (period: string) => {
      timeFilter.value = period;
      currentPage.value = 1; // Reset to first page when filtering
    };

    const resetFilters = () => {
      timeFilter.value = null;
      currentPage.value = 1;
    };

    // Helper methods
    const getImagePath = (currency: string) => {
      return require(`@/assets/images/${currency}.png`);
    };

    const getStatusClass = (status: string) => {
      switch (status) {
        case "Sold":
        case "Deposit":
          return "shipped";
        case "Withdraw":
          return "rejected";
        case "Buy":
          return "success";
        default:
          return "";
      }
    };

    const formatAmount = (amount: number) => {
      return amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
      });
    };

    return {
      transactions,
      filteredTransactions,
      paginatedTransactions,
      currentPage,
      totalPages,
      showingRange,
      nextPage,
      prevPage,
      goToPage,
      filterByTime,
      resetFilters,
      getImagePath,
      getStatusClass,
      formatAmount,
    };
  },
});
</script>

<style scoped lang="scss">
.transactions-history-card {
  .trezo-card-content {
    .basic-table {
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
              .customer-info {
                gap: 3px;

                .img {
                  .v-img {
                    width: 22px;
                  }
                }
              }
              .trezo-badge {
                padding: {
                  top: 2px;
                  bottom: 2px;
                }
              }
              &:first-child {
                text-align: start;
              }
              &:last-child {
                text-align: end;
              }
            }
            &:first-child {
              td {
                border-top-width: 1px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
