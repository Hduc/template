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
import { defineComponent, ref, computed } from "vue";
import AddWallet from "./AddWallet.vue";

import image1 from "@/assets/images/bitcoin.png";
import image2 from "@/assets/images/ethereum-2.png";
import image3 from "@/assets/images/binance-2.png";
import image4 from "@/assets/images/tether.png";
import image5 from "@/assets/images/xrp.png";
import image6 from "@/assets/images/solana-2.png";
import image7 from "@/assets/images/usdc.png";
import image8 from "@/assets/images/tron.png";
import image9 from "@/assets/images/avalanche.png";
import image10 from "@/assets/images/chainlink.png";

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
  setup() {
    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const isEditing = ref(false);
    const currentWalletId = ref<number | null>(null);

    const form = ref({
      name: "",
      address: "",
      asset: "",
      balance: 0,
      lastTransaction: new Date().toISOString().split("T")[0],
      status: "Active" as WalletStatus,
    });

    const wallets = ref<Wallet[]>([
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
    ]);

    const cryptoAssets = ref<CryptoAsset[]>([
      { symbol: "BTC", name: "Bitcoin", image: image1 },
      { symbol: "ETH", name: "Ethereum", image: image2 },
      { symbol: "BNB", name: "Binance", image: image3 },
      { symbol: "USDT", name: "Tether", image: image4 },
      { symbol: "XRP", name: "XRP", image: image5 },
      { symbol: "SOL", name: "Solana", image: image6 },
      { symbol: "USDC", name: "USDC", image: image7 },
      { symbol: "TRX", name: "Tron", image: image8 },
      { symbol: "AVAX", name: "Avalanche", image: image9 },
      { symbol: "LINK", name: "Chainlink", image: image10 },
    ]);

    const filteredWallets = computed(() => {
      if (!searchQuery.value) return wallets.value;
      const query = searchQuery.value.toLowerCase();
      return wallets.value.filter(
        (wallet: {
          name: string;
          address: string;
          asset: string;
          status: string;
        }) =>
          wallet.name.toLowerCase().includes(query) ||
          wallet.address.toLowerCase().includes(query) ||
          wallet.asset.toLowerCase().includes(query) ||
          wallet.status.toLowerCase().includes(query)
      );
    });

    const paginatedWallets = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredWallets.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredWallets.value.length / itemsPerPage.value);
    });

    const showingStart = computed(() => {
      return (currentPage.value - 1) * itemsPerPage.value + 1;
    });

    const showingEnd = computed(() => {
      const end = currentPage.value * itemsPerPage.value;
      return end > filteredWallets.value.length
        ? filteredWallets.value.length
        : end;
    });

    const filterWallets = () => {
      currentPage.value = 1;
    };

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const shortenAddress = (address: string): string => {
      return `${address.substring(0, 6)}...${address.substring(
        address.length - 4
      )}`;
    };

    const getAssetImage = (asset: string): string => {
      const found = cryptoAssets.value.find(
        (a: { symbol: string }) => a.symbol === asset
      );
      return found ? found.image : "";
    };

    const getAssetName = (asset: string): string => {
      const found = cryptoAssets.value.find(
        (a: { symbol: string }) => a.symbol === asset
      );
      return found ? found.name : asset;
    };

    const formatDate = (date: string): string => {
      return new Date(date).toLocaleDateString();
    };

    const resetForm = () => {
      form.value = {
        name: "",
        address: "",
        asset: "",
        balance: 0,
        lastTransaction: new Date().toISOString().split("T")[0],
        status: "Active",
      };
      isEditing.value = false;
      currentWalletId.value = null;
    };

    const editWallet = (wallet: Wallet) => {
      form.value = {
        name: wallet.name,
        address: wallet.address,
        asset: wallet.asset,
        balance: wallet.balance,
        lastTransaction: wallet.lastTransaction,
        status: wallet.status,
      };
      isEditing.value = true;
      currentWalletId.value = wallet.id;
    };

    const submitForm = () => {
      if (isEditing.value && currentWalletId.value) {
        // Update existing wallet
        const index = wallets.value.findIndex(
          (w: { id: any }) => w.id === currentWalletId.value
        );
        if (index !== -1) {
          wallets.value[index] = {
            id: currentWalletId.value,
            ...form.value,
          };
          // Trigger reactivity by creating new array
          wallets.value = [...wallets.value];
        }
      } else {
        // Add new wallet
        const newId =
          Math.max(...wallets.value.map((w: { id: any }) => w.id), 0) + 1;
        wallets.value.push({
          id: newId,
          ...form.value,
        });
      }

      resetForm();
    };

    const confirmDelete = (id: number) => {
      if (confirm("Are you sure you want to delete this wallet?")) {
        wallets.value = wallets.value.filter(
          (wallet: { id: number }) => wallet.id !== id
        );
        if (paginatedWallets.value.length === 0 && currentPage.value > 1) {
          currentPage.value--;
        }
      }
    };

    return {
      searchQuery,
      currentPage,
      itemsPerPage,
      isEditing,
      currentWalletId,
      form,
      wallets,
      cryptoAssets,
      filteredWallets,
      paginatedWallets,
      totalPages,
      showingStart,
      showingEnd,
      filterWallets,
      prevPage,
      nextPage,
      goToPage,
      shortenAddress,
      getAssetImage,
      getAssetName,
      formatDate,
      resetForm,
      editWallet,
      submitForm,
      confirmDelete,
    };
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
