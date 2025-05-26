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
          @input="filterWallets"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>

      <AddWallet />
    </div>

    <div class="trezo-card-content">
      <div class="table-style-two">
        <div class="basic-table table-responsive">
          <table class="table mb-0" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th scope="col" class="fw-medium">Name</th>
                <th scope="col" class="fw-medium">Address</th>
                <th scope="col" class="fw-medium">Crypto Asset</th>
                <th scope="col" class="fw-medium">Balance</th>
                <th scope="col" class="fw-medium">Last Transaction Date</th>
                <th scope="col" class="fw-medium">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="wallet in paginatedWallets" :key="wallet.id">
                <td class="text-primary">
                  {{ wallet.name }}
                </td>
                <td>
                  {{ shortenAddress(wallet.address) }}
                </td>
                <td>
                  <div class="customer-info d-flex align-items-center">
                    <div class="img rounded-0">
                      <v-img
                        :src="getAssetImage(wallet.asset)"
                        class="rounded-0"
                        :alt="wallet.asset"
                      />
                    </div>
                    <span class="d-block fw-medium m-0">
                      {{ getAssetName(wallet.asset) }}
                      <span class="text-body fw-normal text-xs m-0">
                        ({{ wallet.asset }})
                      </span>
                    </span>
                  </div>
                </td>
                <td>{{ wallet.balance }} {{ wallet.asset }}</td>
                <td>
                  {{ formatDate(wallet.lastTransaction) }}
                </td>
                <td
                  :class="
                    wallet.status === 'Active' ? 'text-success' : 'text-danger'
                  "
                >
                  {{ wallet.status }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="trezo-card-pagination d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
        >
          <span class="fs-12 fw-medium">
            Showing {{ showingStart }}-{{ showingEnd }} of
            {{ filteredWallets.length }} results
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
import AddWallet from "./AddWallet.vue";

type WalletStatus = "Active" | "Inactive";

interface Wallet {
  id: number;
  name: string;
  address: string;
  asset: string;
  balance: number;
  lastTransaction: string;
  status: WalletStatus;
}

interface CryptoAsset {
  symbol: string;
  name: string;
  image: string;
}

export default defineComponent({
  name: "CTWallet",
  components: {
    AddWallet,
  },
  data() {
    return {
      searchQuery: "",
      currentPage: 1,
      itemsPerPage: 10,
      isEditing: false,
      currentWalletId: null as number | null,
      form: {
        name: "",
        address: "",
        asset: "",
        balance: 0,
        lastTransaction: new Date().toISOString().split("T")[0],
        status: "Active" as WalletStatus,
      },
      wallets: [
        {
          id: 1,
          name: "BTC Wallet",
          address: "3FZasd93cpjq2LkjuV5qJHunfnkLtktZc4",
          asset: "BTC",
          balance: 0.25,
          lastTransaction: "2025-10-01",
          status: "Active",
        },
        {
          id: 2,
          name: "ETH Wallet",
          address: "0x32Be343pjq2LkjuV5qJHunfnkLtktZc4",
          asset: "ETH",
          balance: 5.2,
          lastTransaction: "2025-10-02",
          status: "Active",
        },
        {
          id: 3,
          name: "BNB Wallet",
          address: "DdzFFzCqrh3cpjq2LkjuV5qJHunfnkLtktZc4",
          asset: "BNB",
          balance: 1000,
          lastTransaction: "2025-10-03",
          status: "Inactive",
        },
        {
          id: 4,
          name: "USDT Wallet",
          address: "Dsbeompjq2LkjuV5qJHunfnkLtktZc4",
          asset: "USDT",
          balance: 2500,
          lastTransaction: "2025-10-04",
          status: "Active",
        },
        {
          id: 5,
          name: "XRP Wallet",
          address: "4pN1bycd93cpjq2LkjuV5qJHunfnkLtktZc4",
          asset: "XRP",
          balance: 15,
          lastTransaction: "2025-10-05",
          status: "Active",
        },
        {
          id: 6,
          name: "SOL Wallet",
          address: "LZjTAtMjq2LkjuV5qJHunfnkLtktZc4",
          asset: "SOL",
          balance: 12,
          lastTransaction: "2025-10-06",
          status: "Active",
        },
        {
          id: 7,
          name: "USDC Wallet",
          address: "3FZasd93cpjq2LkjuV5qJHunfnkLtktZc4",
          asset: "USDC",
          balance: 0.5,
          lastTransaction: "2025-10-07",
          status: "Active",
        },
        {
          id: 8,
          name: "TRX Wallet",
          address: "3FZbc3cpjq2LkjuV5qJHunfnkLtktZc4",
          asset: "TRX",
          balance: 1500,
          lastTransaction: "2025-10-08",
          status: "Inactive",
        },
        {
          id: 9,
          name: "AVAX Wallet",
          address: "1FZbt93cpjq2LkjuV5qJHunfnkLtktZc4",
          asset: "AVAX",
          balance: 100,
          lastTransaction: "2025-10-09",
          status: "Active",
        },
        {
          id: 10,
          name: "LINK Wallet",
          address: "16cbfe2pjq2LkjuV5qJHunfnkLtktZc4",
          asset: "LINK",
          balance: 5000,
          lastTransaction: "2025-10-10",
          status: "Active",
        },
        {
          id: 11,
          name: "BNB Wallet",
          address: "DdzFFzCqrh3cpjq2LkjuV5qJHunfnkLtktZc4",
          asset: "BNB",
          balance: 1000,
          lastTransaction: "2025-10-03",
          status: "Inactive",
        },
        {
          id: 12,
          name: "USDT Wallet",
          address: "Dsbeompjq2LkjuV5qJHunfnkLtktZc4",
          asset: "USDT",
          balance: 2500,
          lastTransaction: "2025-10-04",
          status: "Active",
        },
        {
          id: 13,
          name: "XRP Wallet",
          address: "4pN1bycd93cpjq2LkjuV5qJHunfnkLtktZc4",
          asset: "XRP",
          balance: 15,
          lastTransaction: "2025-10-05",
          status: "Active",
        },
        {
          id: 14,
          name: "SOL Wallet",
          address: "LZjTAtMjq2LkjuV5qJHunfnkLtktZc4",
          asset: "SOL",
          balance: 12,
          lastTransaction: "2025-10-06",
          status: "Active",
        },
        {
          id: 15,
          name: "USDC Wallet",
          address: "3FZasd93cpjq2LkjuV5qJHunfnkLtktZc4",
          asset: "USDC",
          balance: 0.5,
          lastTransaction: "2025-10-07",
          status: "Active",
        },
      ] as Wallet[],
      cryptoAssets: [
        { symbol: "BTC", name: "Bitcoin", image: "bitcoin.png" },
        { symbol: "ETH", name: "Ethereum", image: "ethereum-2.png" },
        { symbol: "BNB", name: "Binance", image: "binance-2.png" },
        { symbol: "USDT", name: "Tether", image: "tether.png" },
        { symbol: "XRP", name: "XRP", image: "xrp.png" },
        { symbol: "SOL", name: "Solana", image: "solana-2.png" },
        { symbol: "USDC", name: "USDC", image: "usdc.png" },
        { symbol: "TRX", name: "Tron", image: "tron.png" },
        { symbol: "AVAX", name: "Avalanche", image: "avalanche.png" },
        { symbol: "LINK", name: "Chainlink", image: "chainlink.png" },
        { symbol: "BNB", name: "Binance", image: "binance-2.png" },
        { symbol: "USDT", name: "Tether", image: "tether.png" },
        { symbol: "XRP", name: "XRP", image: "xrp.png" },
        { symbol: "SOL", name: "Solana", image: "solana-2.png" },
        { symbol: "USDC", name: "USDC", image: "usdc.png" },
      ] as CryptoAsset[],
    };
  },
  computed: {
    filteredWallets(): Wallet[] {
      if (!this.searchQuery) return this.wallets;
      const query = this.searchQuery.toLowerCase();
      return this.wallets.filter(
        (wallet) =>
          wallet.name.toLowerCase().includes(query) ||
          wallet.address.toLowerCase().includes(query) ||
          wallet.asset.toLowerCase().includes(query) ||
          wallet.status.toLowerCase().includes(query)
      );
    },
    paginatedWallets(): Wallet[] {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredWallets.slice(start, end);
    },
    totalPages(): number {
      return Math.ceil(this.filteredWallets.length / this.itemsPerPage);
    },
    showingStart(): number {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    showingEnd(): number {
      const end = this.currentPage * this.itemsPerPage;
      return end > this.filteredWallets.length
        ? this.filteredWallets.length
        : end;
    },
  },
  methods: {
    filterWallets() {
      this.currentPage = 1;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    goToPage(page: number) {
      this.currentPage = page;
    },
    shortenAddress(address: string): string {
      return `${address.substring(0, 6)}...${address.substring(
        address.length - 4
      )}`;
    },
    getAssetImage(asset: string): string {
      const found = this.cryptoAssets.find((a) => a.symbol === asset);
      return found ? require(`@/assets/images/${found.image}`) : "";
    },
    getAssetName(asset: string): string {
      const found = this.cryptoAssets.find((a) => a.symbol === asset);
      return found ? found.name : asset;
    },
    formatDate(date: string): string {
      return new Date(date).toLocaleDateString();
    },
    resetForm() {
      this.form = {
        name: "",
        address: "",
        asset: "",
        balance: 0,
        lastTransaction: new Date().toISOString().split("T")[0],
        status: "Active",
      };
      this.isEditing = false;
      this.currentWalletId = null;
    },
    editWallet(wallet: Wallet) {
      this.form = {
        name: wallet.name,
        address: wallet.address,
        asset: wallet.asset,
        balance: wallet.balance,
        lastTransaction: wallet.lastTransaction,
        status: wallet.status,
      };
      this.isEditing = true;
      this.currentWalletId = wallet.id;
    },
    submitForm() {
      if (this.isEditing && this.currentWalletId) {
        // Update existing wallet
        const index = this.wallets.findIndex(
          (w) => w.id === this.currentWalletId
        );
        if (index !== -1) {
          this.wallets[index] = {
            id: this.currentWalletId,
            ...this.form,
          };
          // Trigger reactivity by creating new array
          this.wallets = [...this.wallets];
        }
      } else {
        // Add new wallet
        const newId = Math.max(...this.wallets.map((w) => w.id), 0) + 1;
        this.wallets.push({
          id: newId,
          ...this.form,
        });
      }

      this.resetForm();
    },
    confirmDelete(id: number) {
      if (confirm("Are you sure you want to delete this wallet?")) {
        this.wallets = this.wallets.filter((wallet) => wallet.id !== id);
        if (this.paginatedWallets.length === 0 && this.currentPage > 1) {
          this.currentPage--;
        }
      }
    },
  },
});
</script>

<style scoped lang="scss">
.text-primary {
  color: var(--primaryColor) !important;
}
.customer-info {
  gap: 8px;

  .img {
    width: 22px !important;
    .v-img {
      width: 22px !important;
    }
  }
}
</style>
