<template>
  <v-card
    class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Transactions</h5>

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
          <v-list-item v-for="option in timeOptions" :key="option">
            <v-list-item-title
              @click="changeTimeRange(option)"
              style="cursor: pointer"
            >
              {{ option }}
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
                    :class="[
                      'trezo-badge',
                      transaction.type === 'Buy' ? 'finished' : 'rejected',
                    ]"
                  >
                    {{ transaction.type }}
                  </span>
                </td>
                <td>{{ transaction.amount }} {{ transaction.assetSymbol }}</td>
                <td>${{ formatNumber(transaction.price) }}</td>
                <td>${{ formatNumber(transaction.totalValue) }}</td>
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
            Showing {{ showingFrom }}-{{ showingTo }} of
            {{ filteredTransactions.length }} results
          </span>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
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

interface Transaction {
  id: number;
  date: Date;
  asset: string;
  assetSymbol: string;
  type: "Buy" | "Sell";
  amount: number;
  price: number;
  totalValue: number;
  status: "Done" | "Pending" | "Failed";
}

export default defineComponent({
  name: "RecentTransactions",
  data() {
    return {
      timeRange: "Last 30 Days",
      timeOptions: [
        "Last 7 Days",
        "Last 15 Days",
        "Last 30 Days",
        "Last 90 Days",
      ],
      transactions: [] as Transaction[],
      itemsPerPage: 6,
      currentPage: 1,
    };
  },
  computed: {
    filteredTransactions(): Transaction[] {
      const days = parseInt(this.timeRange.split(" ")[1]);
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - days);

      return this.transactions
        .filter((tx) => new Date(tx.date) >= cutoffDate)
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    },
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
  methods: {
    changeTimeRange(range: string) {
      this.timeRange = range;
      this.currentPage = 1; // Reset to first page when changing time range
    },
    formatDate(date: Date): string {
      return new Date(date).toISOString().split("T")[0];
    },
    formatNumber(num: number): string {
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
      });
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
    goToPage(page: number) {
      this.currentPage = page;
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
    generateMockTransactions(count: number): Transaction[] {
      const assets = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Tether", symbol: "USDT" },
        { name: "USD Coin", symbol: "USDC" },
        { name: "Cardano", symbol: "ADA" },
        { name: "Tron", symbol: "TRX" },
        { name: "Solana", symbol: "SOL" },
        { name: "Polygon", symbol: "MATIC" },
      ];

      const types: ("Buy" | "Sell")[] = ["Buy", "Sell"];
      const statuses: ("Done" | "Pending" | "Failed")[] = [
        "Done",
        "Pending",
        "Failed",
      ];

      return Array.from({ length: count }, (_, i) => {
        const asset = assets[Math.floor(Math.random() * assets.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const price =
          type === "Buy"
            ? Math.random() * 10000 + 100
            : Math.random() * 10000 + 100;
        const amount =
          type === "Buy" ? Math.random() * 10 + 0.1 : Math.random() * 100 + 1;

        return {
          id: i + 1,
          date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000),
          asset: asset.name,
          assetSymbol: asset.symbol,
          type,
          amount: parseFloat(amount.toFixed(6)),
          price: parseFloat(price.toFixed(2)),
          totalValue: parseFloat((amount * price).toFixed(2)),
          status: statuses[Math.floor(Math.random() * statuses.length)],
        };
      });
    },
  },
  created() {
    // Generate mock data - in a real app, you would fetch this from an API
    this.transactions = this.generateMockTransactions(36);
  },
});
</script>
