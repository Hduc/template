<template>
  <v-card
    class="latest-transactions-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Latest Transactions</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius bg-gray border-0"
          >
            {{ selectedPeriod }}
          </button>
        </template>
        <v-list class="menu-content">
          <v-list-item
            v-for="period in timePeriods"
            :key="period"
            @click="selectedPeriod = period"
          >
            <v-list-item-title>{{ period }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="basic-table table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col" class="fw-semibold">Client</th>
              <th scope="col" class="fw-semibold">Email</th>
              <th scope="col" class="fw-semibold">Amount</th>
              <th scope="col" class="fw-semibold">Payment Method</th>
              <th scope="col" class="fw-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="transaction in paginatedTransactions"
              :key="transaction.id"
            >
              <td>
                <div class="employee-info d-flex align-items-center">
                  <v-img
                    :src="transaction.avatar"
                    class="rounded-circle"
                    alt="user"
                  />
                  <span class="d-block fw-semibold">
                    {{ transaction.name }}
                  </span>
                </div>
              </td>
              <td class="fw-medium text-body">
                {{ transaction.email }}
              </td>
              <td class="fw-semibold">
                {{ formatCurrency(transaction.amount) }}
              </td>
              <td>
                <div class="payment-method-info d-flex align-items-center">
                  <v-img
                    :src="transaction.paymentMethod.icon"
                    :alt="transaction.paymentMethod.name"
                  />
                  <span class="d-block fw-semibold">
                    {{ transaction.paymentMethod.name }}
                  </span>
                </div>
              </td>
              <td>
                <span
                  class="trezo-badge with-border border-radius"
                  :class="statusClasses(transaction.status)"
                >
                  {{ transaction.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
      >
        <span class="fs-12 fw-medium">
          Showing {{ showingFrom }}-{{ showingTo }} of
          {{ transactions.length }} Results
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
                @click="currentPage = page"
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
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

interface PaymentMethod {
  name: string;
  icon: string;
}

interface Transaction {
  id: number;
  name: string;
  email: string;
  avatar: string;
  amount: number;
  paymentMethod: PaymentMethod;
  status: "Completed" | "Pending" | "Failed";
  date: string;
}

export default defineComponent({
  name: "LatestTransactions",
  setup() {
    const timePeriods = ["Daily", "Weekly", "Monthly", "Yearly"];
    const selectedPeriod = ref("Monthly");

    const transactions = ref<Transaction[]>([
      {
        id: 1,
        name: "Johhna Loren",
        email: "loren123@gmail.com",
        avatar: require("@/assets/images/user-166.png"),
        amount: 6240,
        paymentMethod: {
          name: "Paypal",
          icon: require("@/assets/images/paypal.png"),
        },
        status: "Completed",
        date: "2023-05-15",
      },
      {
        id: 2,
        name: "Skyler Queen",
        email: "skyqueen@gmail.com",
        avatar: require("@/assets/images/user-170.png"),
        amount: 5135,
        paymentMethod: {
          name: "Wise",
          icon: require("@/assets/images/wise.png"),
        },
        status: "Pending",
        date: "2023-05-14",
      },
      {
        id: 3,
        name: "Jonathon Watson",
        email: "jona2134@gmail.com",
        avatar: require("@/assets/images/user-172.png"),
        amount: 4321,
        paymentMethod: {
          name: "Bank",
          icon: require("@/assets/images/bank.png"),
        },
        status: "Failed",
        date: "2023-05-13",
      },
      {
        id: 4,
        name: "Walter White",
        email: "puzzleworld@gmail.com",
        avatar: require("@/assets/images/user-171.png"),
        amount: 3124,
        paymentMethod: {
          name: "Paypal",
          icon: require("@/assets/images/paypal.png"),
        },
        status: "Completed",
        date: "2023-05-12",
      },
      {
        id: 5,
        name: "David Carlen",
        email: "liveslong@gmail.com",
        avatar: require("@/assets/images/user-166.png"),
        amount: 2137,
        paymentMethod: {
          name: "Skrill",
          icon: require("@/assets/images/skrill.png"),
        },
        status: "Pending",
        date: "2023-05-11",
      },
      {
        id: 6,
        name: "Walter White",
        email: "puzzleworld@gmail.com",
        avatar: require("@/assets/images/user-171.png"),
        amount: 3124,
        paymentMethod: {
          name: "Paypal",
          icon: require("@/assets/images/paypal.png"),
        },
        status: "Completed",
        date: "2023-05-12",
      },
      {
        id: 7,
        name: "Skyler Queen",
        email: "skyqueen@gmail.com",
        avatar: require("@/assets/images/user-170.png"),
        amount: 5135,
        paymentMethod: {
          name: "Wise",
          icon: require("@/assets/images/wise.png"),
        },
        status: "Pending",
        date: "2023-05-14",
      },
    ]);

    // Pagination
    const itemsPerPage = 5;
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(transactions.value.length / itemsPerPage)
    );
    const paginatedTransactions = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return transactions.value.slice(start, end);
    });

    const showingFrom = computed(
      () => (currentPage.value - 1) * itemsPerPage + 1
    );
    const showingTo = computed(() => {
      const end = currentPage.value * itemsPerPage;
      return end > transactions.value.length ? transactions.value.length : end;
    });

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

    // Helper functions
    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(amount);
    };

    const statusClasses = (status: string) => {
      const classes: Record<string, string> = {
        Completed: "finished",
        Pending: "sPending",
        Failed: "rejected",
      };
      return classes[status] || "";
    };

    return {
      timePeriods,
      selectedPeriod,
      transactions,
      paginatedTransactions,
      currentPage,
      totalPages,
      showingFrom,
      showingTo,
      nextPage,
      prevPage,
      formatCurrency,
      statusClasses,
    };
  },
});
</script>

<style lang="scss" scoped>
.latest-transactions-card {
  .trezo-card-content {
    .basic-table {
      table,
      .table {
        thead {
          tr {
            background-color: transparent !important;
            th {
              font-size: 10px;
              letter-spacing: 1px;
              color: var(--bodyColor);
              text-transform: uppercase;
              background-color: transparent;
              text-align: left;
              padding: {
                bottom: 12px;
                top: 0;
              }
              &:first-child {
                padding-left: 0 !important;
              }
              &:last-child {
                padding-right: 0 !important;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              font-size: 12px;
              padding: {
                top: 10px;
                bottom: 11px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .employee-info {
                gap: 10px;

                .v-img {
                  width: 32px;
                }
                span {
                  font-size: var(--fontSize);
                }
              }
              .payment-method-info {
                gap: 8px;
              }
              .trezo-badge {
                padding: 1px 10px;
              }
              &:first-child {
                padding-left: 0 !important;
              }
              &:last-child {
                padding-right: 0 !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
