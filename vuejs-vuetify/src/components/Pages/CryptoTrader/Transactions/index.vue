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
import { defineComponent } from "vue";
import AddTransaction from "./AddTransaction.vue";

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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Transactions",
  components: {
    AddTransaction,
  },
  data() {
    return {
      transactions: [] as Transaction[],
      filteredTransactions: [] as Transaction[],
      formData: {
        id: 0,
        date: "",
        asset: "Bitcoin",
        type: "Buy" as "Buy" | "Sell",
        amount: 0,
        price: 0,
        totalValue: 0,
        status: "Done" as "Done" | "Pending" | "Failed",
      },
      isEditing: false,
      searchQuery: "",
      timeRange: "Last 30 Days",
      timeRanges: ["Last 7 Days", "Last 15 Days", "Last 30 Days", "All Time"],
      assets: [
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
      ],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    paginatedTransactions(): Transaction[] {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredTransactions.slice(start, end);
    },
    totalPages(): number {
      return Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
    },
    showingFrom(): number {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    showingTo(): number {
      const end = this.currentPage * this.itemsPerPage;
      return end > this.filteredTransactions.length
        ? this.filteredTransactions.length
        : end;
    },
  },
  created() {
    this.generateSampleData();
    this.filteredTransactions = [...this.transactions];
  },
  methods: {
    generateSampleData() {
      const assets = this.assets;
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

        const asset = assets[Math.floor(Math.random() * assets.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const amount = parseFloat((Math.random() * 10).toFixed(6));
        const price = parseFloat((Math.random() * 50000).toFixed(2));
        const totalValue = parseFloat((amount * price).toFixed(2));
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        this.transactions.push({
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
      this.transactions.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    },
    filterTransactions() {
      if (!this.searchQuery) {
        this.filteredTransactions = [...this.transactions];
        return;
      }

      const query = this.searchQuery.toLowerCase();
      this.filteredTransactions = this.transactions.filter(
        (transaction) =>
          transaction.asset.toLowerCase().includes(query) ||
          transaction.type.toLowerCase().includes(query) ||
          transaction.status.toLowerCase().includes(query) ||
          transaction.date.includes(query)
      );

      this.currentPage = 1;
    },
    filterByTimeRange(range: string) {
      this.timeRange = range;
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
          this.filteredTransactions = [...this.transactions];
          this.currentPage = 1;
          return;
      }

      this.filteredTransactions = this.transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= startDate && transactionDate <= today;
      });

      this.currentPage = 1;
    },
    formatDate(date: string): string {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
    formatPrice(price: number): string {
      return price.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
    getAssetSymbol(asset: string): string {
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
    },
    getStatusClass(status: string): string {
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
    },
    calculateTotalValue() {
      this.formData.totalValue = parseFloat(
        (this.formData.amount * this.formData.price).toFixed(2)
      );
    },
    resetForm() {
      this.formData = {
        id: 0,
        date: new Date().toISOString().split("T")[0],
        asset: "Bitcoin",
        type: "Buy",
        amount: 0,
        price: 0,
        totalValue: 0,
        status: "Done",
      };
      this.isEditing = false;
    },
    editTransaction(transaction: Transaction) {
      this.formData = { ...transaction };
      this.isEditing = true;
    },
    submitForm() {
      if (this.isEditing) {
        const index = this.transactions.findIndex(
          (t) => t.id === this.formData.id
        );
        if (index !== -1) {
          this.transactions[index] = { ...this.formData };
        }
      } else {
        const newId = Math.max(...this.transactions.map((t) => t.id)) + 1;
        this.transactions.unshift({
          ...this.formData,
          id: newId,
        });
      }

      this.filterTransactions();
    },
    confirmDelete(id: number) {
      if (confirm("Are you sure you want to delete this transaction?")) {
        this.transactions = this.transactions.filter((t) => t.id !== id);
        this.filterTransactions();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page: number) {
      this.currentPage = page;
    },
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
