<template>
  <v-card
    class="recent-orders-list-card trezo-card bg-white border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Orders List</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius bg-gray border-0"
          >
            Weekly
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Weekly
          </button>
          <button type="button" class="bg-transparent border-none">
            Monthly
          </button>
          <button type="button" class="bg-transparent border-none">
            Yearly
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="trezo-table basic-table table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col" class="fw-bold">Code</th>
              <th scope="col" class="fw-bold">Item</th>
              <th scope="col" class="fw-bold">Quantity</th>
              <th scope="col" class="fw-bold">Customer</th>
              <th scope="col" class="fw-bold">Location</th>
              <th scope="col" class="fw-bold">Delivery Time</th>
              <th scope="col" class="fw-bold">Price</th>
              <th scope="col" class="fw-bold">Status</th>
              <th scope="col" class="fw-bold"></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="order in paginatedOrders" :key="order.code">
              <td class="fw-semibold text-body">{{ order.code }}</td>
              <td>
                <div class="employee-info d-flex align-items-center">
                  <div class="img rounded-circle">
                    <v-img
                      :src="order.image"
                      alt="user-image"
                      class="rounded-circle"
                    />
                  </div>
                  <div>
                    <RouterLink
                      to="/restaurant/dish-details"
                      class="d-block fw-semibold"
                    >
                      {{ order.item }}
                    </RouterLink>
                  </div>
                </div>
              </td>
              <td class="fw-semibold text-body">{{ order.quantity }}</td>
              <td class="fw-semibold text-body">{{ order.customer }}</td>
              <td class="fw-semibold text-body">{{ order.location }}</td>
              <td class="fw-semibold text-body">{{ order.deliveryTime }}</td>
              <td class="fw-semibold text-body">{{ order.price }}</td>
              <td>
                <span
                  :class="`trezo-status-badge ${order.status.toLowerCase()}`"
                >
                  {{ order.status }}
                </span>
              </td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <button type="button">
                    <i class="material-symbols-outlined"> visibility </i>
                  </button>
                  <button type="button">
                    <i class="material-symbols-outlined"> edit </i>
                  </button>
                  <button type="button">
                    <i class="material-symbols-outlined"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
      >
        <span class="fs-12 fw-medium">
          Showing {{ startIndex + 1 }} to {{ endIndex }} of
          {{ orders.length }} Results
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
                :class="{ active: page === currentPage }"
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
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "RecentOrdersList",
  setup() {
    const currentPage = ref(1);
    const itemsPerPage = ref(5);

    const orders = ref([
      {
        code: "#001",
        image: require("@/assets/images/restaurant/order1.jpg"),
        item: "Fish Cutlet",
        quantity: 5,
        customer: "Johnna Loren",
        location: "Washington, D.C.",
        deliveryTime: "10:05 AM",
        price: "$ 35.75",
        status: "Delivered",
      },
      {
        code: "#002",
        image: require("@/assets/images/restaurant/order2.jpg"),
        item: "Pea Creamy Soup",
        quantity: 1,
        customer: "Skyler White",
        location: "Los Angeles, CA",
        deliveryTime: "11:15 AM",
        price: "$ 24.30",
        status: "Processing",
      },
      {
        code: "#003",
        image: require("@/assets/images/restaurant/order3.jpg"),
        item: "Macaroon 02",
        quantity: 2,
        customer: "Jonathon Watson",
        location: "New York, NY",
        deliveryTime: "11:30 AM",
        price: "$ 21.15",
        status: "Cancelled",
      },
      {
        code: "#004",
        image: require("@/assets/images/restaurant/order4.jpg"),
        item: "Healthy Salad Bowl",
        quantity: 1,
        customer: "Walter White",
        location: "San Jose, CA",
        deliveryTime: "11:52 AM",
        price: "$ 12.20",
        status: "Delivered",
      },
      {
        code: "#005",
        image: require("@/assets/images/restaurant/order5.jpg"),
        item: "Macaroon",
        quantity: 1,
        customer: "David Carlen",
        location: "Redmond, WA",
        deliveryTime: "12:05 PM",
        price: "$ 21.50",
        status: "Processing",
      },
      {
        code: "#006",
        image: require("@/assets/images/restaurant/order2.jpg"),
        item: "Pea Creamy Soup",
        quantity: 1,
        customer: "Skyler White",
        location: "Los Angeles, CA",
        deliveryTime: "11:15 AM",
        price: "$ 24.30",
        status: "Processing",
      },
      {
        code: "#007",
        image: require("@/assets/images/restaurant/order3.jpg"),
        item: "Macaroon 02",
        quantity: 2,
        customer: "Jonathon Watson",
        location: "New York, NY",
        deliveryTime: "11:30 AM",
        price: "$ 21.15",
        status: "Cancelled",
      },
      {
        code: "#008",
        image: require("@/assets/images/restaurant/order4.jpg"),
        item: "Healthy Salad Bowl",
        quantity: 1,
        customer: "Walter White",
        location: "San Jose, CA",
        deliveryTime: "11:52 AM",
        price: "$ 12.20",
        status: "Delivered",
      },
    ]);

    const totalPages = computed(() =>
      Math.ceil(orders.value.length / itemsPerPage.value)
    );

    const paginatedOrders = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return orders.value.slice(start, end);
    });

    const startIndex = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endIndex = computed(() =>
      Math.min(currentPage.value * itemsPerPage.value, orders.value.length)
    );

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

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

    return {
      currentPage,
      itemsPerPage,
      orders,
      paginatedOrders,
      totalPages,
      startIndex,
      endIndex,
      goToPage,
      nextPage,
      prevPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-orders-list-card {
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
              text-align: start;
              padding: {
                bottom: 13px;
                top: 0;
              }
              &:first-child {
                padding-left: 0 !important;
              }
              &:last-child {
                padding-right: 0 !important;
                text-align: end;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              font-size: 12px;
              padding: {
                top: 13px !important;
                bottom: 13px !important;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .employee-info {
                gap: 10px;

                .img {
                  width: 30px;
                }
                a {
                  font-size: var(--fontSize);
                }
              }
              .trezo-status-badge {
                border-radius: 30px;
                padding: 1px 10px;
              }
              .action-buttons {
                justify-content: end;
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
    .trezo-card-pagination {
      border-width: 0;
      border-radius: 0;
      padding: {
        left: 0;
        right: 0;
        bottom: 0;
        top: 13px;
      }
      p {
        font: {
          size: 12px;
          weight: 500;
        }
      }
    }
  }
}
</style>
