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
          @input="filterTransactions"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>

      <div>
        <AddTransaction />

        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu d-inline-block border-radius"
            >
              {{ timeRange }}
            </button>
          </template>
          <v-list class="menu-content">
            <v-list-item v-for="range in timeRanges" :key="range">
              <v-list-item-title
                @click="filterByTimeRange(range)"
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
                <th scope="col" class="fw-medium">Date</th>
                <th scope="col" class="fw-medium">Asset</th>
                <th scope="col" class="fw-medium">Type</th>
                <th scope="col" class="fw-medium">Amount</th>
                <th scope="col" class="fw-medium">Price</th>
                <th scope="col" class="fw-medium">Total Value</th>
                <th scope="col" class="fw-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="transaction in paginatedTransactions"
                :key="transaction.id"
              >
                <td>{{ formatDate(transaction.date) }}</td>
                <td class="fw-medium">{{ transaction.asset }}</td>
                <td>
                  <span
                    class="trezo-badge"
                    :class="
                      transaction.type === 'Buy' ? 'finished' : 'rejected'
                    "
                  >
                    {{ transaction.type }}
                  </span>
                </td>
                <td>
                  {{ transaction.amount }}
                  {{ getAssetSymbol(transaction.asset) }}
                </td>
                <td>${{ formatPrice(transaction.price) }}</td>
                <td>${{ formatPrice(transaction.totalValue) }}</td>
                <td>
                  <span
                    class="trezo-badge"
                    :class="getStatusClass(transaction.status)"
                  >
                    {{ transaction.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="trezo-card-pagination d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
        >
          <span class="fs-12 fw-medium">
            Showing {{ showingFrom }} to {{ showingTo }} of
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
import { defineComponent, ref, computed, onMounted } from "vue";

interface Transaction {
  id: number;
  date: string;
  asset: string;
  type: "Buy" | "Sell";
  amount: number;
  price: number;
  totalValue: number;
  status: "Done" | "Pending" | "Failed";
}

export default defineComponent({
  name: "Transactions",
  setup() {
    // Reactive data
    const transactions = ref<Transaction[]>([]);
    const filteredTransactions = ref<Transaction[]>([]);
    const formData = ref({
      id: 0,
      date: "",
      asset: "Bitcoin",
      type: "Buy" as "Buy" | "Sell",
      amount: 0,
      price: 0,
      totalValue: 0,
      status: "Done" as "Done" | "Pending" | "Failed",
    });
    const isEditing = ref(false);
    const searchQuery = ref("");
    const timeRange = ref("Last 30 Days");
    const timeRanges = ref([
      "Last 7 Days",
      "Last 15 Days",
      "Last 30 Days",
      "All Time",
    ]);
    const assets = ref([
      "Bitcoin",
      "Ethereum",
      "Tether",
      "USD Coin",
      "Cardano",
      "Tron",
      "Ondo",
      "Polkadot",
      "Pepe",
      "Mantle",
    ]);
    const currentPage = ref(1);
    const itemsPerPage = ref(10);

    // Computed properties
    const paginatedTransactions = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredTransactions.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredTransactions.value.length / itemsPerPage.value);
    });

    const showingFrom = computed(() => {
      return (currentPage.value - 1) * itemsPerPage.value + 1;
    });

    const showingTo = computed(() => {
      const end = currentPage.value * itemsPerPage.value;
      return end > filteredTransactions.value.length
        ? filteredTransactions.value.length
        : end;
    });

    // Methods
    const generateSampleData = () => {
      const types: ("Buy" | "Sell")[] = ["Buy", "Sell"];
      const statuses: ("Done" | "Pending" | "Failed")[] = [
        "Done",
        "Pending",
        "Failed",
      ];

      for (let i = 0; i < 36; i++) {
        const daysAgo = Math.floor(Math.random() * 30);
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);

        const asset =
          assets.value[Math.floor(Math.random() * assets.value.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const amount = parseFloat((Math.random() * 10).toFixed(6));
        const price = parseFloat((Math.random() * 50000).toFixed(2));
        const totalValue = parseFloat((amount * price).toFixed(2));
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        transactions.value.push({
          id: i + 1,
          date: date.toISOString().split("T")[0],
          asset,
          type,
          amount,
          price,
          totalValue,
          status,
        });
      }

      // Sort by date descending
      transactions.value.sort(
        (
          a: { date: string | number | Date },
          b: { date: string | number | Date }
        ) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    };

    const filterTransactions = () => {
      if (!searchQuery.value) {
        filteredTransactions.value = [...transactions.value];
        return;
      }

      const query = searchQuery.value.toLowerCase();
      filteredTransactions.value = transactions.value.filter(
        (transaction: {
          asset: string;
          type: string;
          status: string;
          date: string | any[];
        }) =>
          transaction.asset.toLowerCase().includes(query) ||
          transaction.type.toLowerCase().includes(query) ||
          transaction.status.toLowerCase().includes(query) ||
          transaction.date.includes(query)
      );

      currentPage.value = 1;
    };

    const filterByTimeRange = (range: string) => {
      timeRange.value = range;
      const today = new Date();
      let startDate = new Date();

      switch (range) {
        case "Last 7 Days":
          startDate.setDate(today.getDate() - 7);
          break;
        case "Last 15 Days":
          startDate.setDate(today.getDate() - 15);
          break;
        case "Last 30 Days":
          startDate.setDate(today.getDate() - 30);
          break;
        case "All Time":
          filteredTransactions.value = [...transactions.value];
          currentPage.value = 1;
          return;
      }

      filteredTransactions.value = transactions.value.filter(
        (transaction: { date: string | number | Date }) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= startDate && transactionDate <= today;
        }
      );

      currentPage.value = 1;
    };

    const formatDate = (date: string): string => {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    };

    const formatPrice = (price: number): string => {
      return price.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    };

    const getAssetSymbol = (asset: string): string => {
      const symbols: Record<string, string> = {
        Bitcoin: "BTC",
        Ethereum: "ETH",
        Tether: "USDT",
        "USD Coin": "USDC",
        Cardano: "ADA",
        Tron: "TRX",
        Ondo: "ONDO",
        Polkadot: "DOT",
        Pepe: "PEPE",
        Mantle: "MNT",
      };
      return symbols[asset] || "";
    };

    const getStatusClass = (status: string): string => {
      switch (status) {
        case "Done":
          return "finished";
        case "Pending":
          return "pending";
        case "Failed":
          return "rejected";
        default:
          return "";
      }
    };

    const calculateTotalValue = () => {
      formData.value.totalValue = parseFloat(
        (formData.value.amount * formData.value.price).toFixed(2)
      );
    };

    const resetForm = () => {
      formData.value = {
        id: 0,
        date: new Date().toISOString().split("T")[0],
        asset: "Bitcoin",
        type: "Buy",
        amount: 0,
        price: 0,
        totalValue: 0,
        status: "Done",
      };
      isEditing.value = false;
    };

    const editTransaction = (transaction: Transaction) => {
      formData.value = { ...transaction };
      isEditing.value = true;
    };

    const submitForm = () => {
      if (isEditing.value) {
        const index = transactions.value.findIndex(
          (t: { id: any }) => t.id === formData.value.id
        );
        if (index !== -1) {
          transactions.value[index] = { ...formData.value };
        }
      } else {
        const newId =
          Math.max(...transactions.value.map((t: { id: any }) => t.id)) + 1;
        transactions.value.unshift({
          ...formData.value,
          id: newId,
        });
      }

      filterTransactions();
    };

    const confirmDelete = (id: number) => {
      if (confirm("Are you sure you want to delete this transaction?")) {
        transactions.value = transactions.value.filter(
          (t: { id: number }) => t.id !== id
        );
        filterTransactions();
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

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    // Lifecycle hooks
    onMounted(() => {
      generateSampleData();
      filteredTransactions.value = [...transactions.value];
    });

    // Return everything that should be available in the template
    return {
      transactions,
      filteredTransactions,
      formData,
      isEditing,
      searchQuery,
      timeRange,
      timeRanges,
      assets,
      currentPage,
      itemsPerPage,
      paginatedTransactions,
      totalPages,
      showingFrom,
      showingTo,
      filterTransactions,
      filterByTimeRange,
      formatDate,
      formatPrice,
      getAssetSymbol,
      getStatusClass,
      calculateTotalValue,
      resetForm,
      editTransaction,
      submitForm,
      confirmDelete,
      prevPage,
      nextPage,
      goToPage,
    };
  },
});
</script>

<style scoped lang="scss">
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .trezo-card {
    .v-card-header {
      .trezo-card-subtitle {
        .trezo-card-header-menu {
          margin-top: 15px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .trezo-card {
    .v-card-header {
      .trezo-card-subtitle {
        .trezo-card-header-menu {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
