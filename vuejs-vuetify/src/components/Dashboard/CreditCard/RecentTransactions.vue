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
            {{ selectedFilter }}
          </button>
        </template>
        <v-list class="menu-content">
          <v-list-item v-for="filter in dateFilters" :key="filter">
            <v-list-item-title
              @click="changeFilter(filter)"
              style="cursor: pointer"
            >
              {{ filter }}
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
                <th scope="col" class="fw-medium">Description</th>
                <th scope="col" class="fw-medium">Category</th>
                <th scope="col" class="fw-medium">Amount ($)</th>
                <th scope="col" class="fw-medium">Status</th>
                <th scope="col" class="fw-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="transaction in paginatedTransactions"
                :key="transaction.id"
              >
                <td class="text-body">{{ formatDate(transaction.date) }}</td>
                <td class="text-body">{{ transaction.description }}</td>
                <td class="text-body">{{ transaction.category }}</td>
                <td class="text-body">
                  ${{ transaction.amount.toLocaleString() }}
                </td>
                <td>
                  <span
                    class="trezo-badge py-0 with-border border-radius"
                    :class="statusClasses(transaction.status)"
                  >
                    {{ transaction.status }}
                  </span>
                </td>
                <td>
                  <div class="action-buttons d-flex align-items-center">
                    <button
                      type="button"
                      class="p-0 bg-transparent d-inline-block lh-1 border-0"
                      @click="viewTransaction(transaction)"
                    >
                      <i class="material-symbols-outlined"> visibility </i>
                    </button>
                    <button
                      type="button"
                      class="p-0 bg-transparent d-inline-block lh-1 border-0"
                      @click="editTransaction(transaction)"
                    >
                      <i class="material-symbols-outlined"> edit </i>
                    </button>
                    <button
                      type="button"
                      class="p-0 bg-transparent d-inline-block lh-1 border-0"
                      @click="deleteTransaction(transaction.id)"
                    >
                      <i class="material-symbols-outlined"> delete </i>
                    </button>
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
            Showing {{ showingRange }} of
            {{ filteredTransactions.length }} Results
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
import { defineComponent, ref, computed, onMounted } from "vue";

interface Transaction {
  id: number;
  date: Date;
  description: string;
  category: string;
  amount: number;
  status: "Completed" | "Pending" | "Cancelled" | "Rejected";
}

export default defineComponent({
  name: "RecentTransactions",
  setup() {
    const transactions = ref<Transaction[]>([]);
    const dateFilters = ["Last 7 Days", "Last 15 Days", "Last 30 Days"];
    const selectedFilter = ref("Last 15 Days");
    const itemsPerPage = 6;
    const currentPage = ref(1);

    // Generate mock transactions
    const generateTransactions = (count: number): Transaction[] => {
      const categories = [
        "Dining",
        "Groceries",
        "Transportation",
        "Utilities",
        "Entertainment",
        "Sports",
      ];
      const statuses: ("Completed" | "Pending" | "Cancelled" | "Rejected")[] = [
        "Completed",
        "Pending",
        "Cancelled",
        "Rejected",
      ];

      return Array.from({ length: count }, (_, i) => {
        const daysAgo = Math.floor(Math.random() * 30);
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);

        return {
          id: i + 1,
          date,
          description: `Transaction ${i + 1}`,
          category: categories[Math.floor(Math.random() * categories.length)],
          amount: parseFloat((Math.random() * 1000).toFixed(2)),
          status: statuses[Math.floor(Math.random() * statuses.length)],
        };
      });
    };

    // Filter transactions based on selected date range
    const filteredTransactions = computed(() => {
      const today = new Date();
      let cutoffDate = new Date();

      if (selectedFilter.value === "Last 7 Days") {
        cutoffDate.setDate(today.getDate() - 7);
      } else if (selectedFilter.value === "Last 15 Days") {
        cutoffDate.setDate(today.getDate() - 15);
      } else {
        // Last 30 Days
        cutoffDate.setDate(today.getDate() - 30);
      }

      return transactions.value
        .filter((t) => t.date >= cutoffDate)
        .sort((a, b) => b.date.getTime() - a.date.getTime());
    });

    // Pagination
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

    // Methods
    const changeFilter = (filter: string) => {
      selectedFilter.value = filter;
      currentPage.value = 1; // Reset to first page when filter changes
    };

    const formatDate = (date: Date) => {
      return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    };

    const statusClasses = (status: string) => {
      switch (status) {
        case "Completed":
          return "finished";
        case "Pending":
          return "sPending";
        case "Cancelled":
          return "cancelled";
        case "Rejected":
          return "rejected";
        default:
          return "";
      }
    };

    const viewTransaction = (transaction: Transaction) => {
      console.log("Viewing transaction:", transaction);
      // Implement view logic
    };

    const editTransaction = (transaction: Transaction) => {
      console.log("Editing transaction:", transaction);
      // Implement edit logic
    };

    const deleteTransaction = (id: number) => {
      if (confirm("Are you sure you want to delete this transaction?")) {
        transactions.value = transactions.value.filter((t) => t.id !== id);
      }
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

    // Initialize
    onMounted(() => {
      transactions.value = generateTransactions(36);
    });

    return {
      transactions,
      dateFilters,
      selectedFilter,
      currentPage,
      filteredTransactions,
      paginatedTransactions,
      totalPages,
      showingRange,
      changeFilter,
      formatDate,
      statusClasses,
      viewTransaction,
      editTransaction,
      deleteTransaction,
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
            bottom: 19px;
            top: 19px;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .basic-table {
    table,
    .table {
      tbody {
        tr {
          td {
            padding: {
              bottom: 15px;
              top: 15px;
            }
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .basic-table {
    table,
    .table {
      tbody {
        tr {
          td {
            padding: {
              bottom: 17px;
              top: 17px;
            }
          }
        }
      }
    }
  }
}
</style>
