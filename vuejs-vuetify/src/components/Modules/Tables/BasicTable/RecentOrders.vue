<template>
  <v-card
    class="recent-orders-card mb-25 trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Orders</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu d-inline-block border-radius"
            >
              Show All
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              This Day
            </button>
            <button type="button" class="bg-transparent border-none">
              This Week
            </button>
            <button type="button" class="bg-transparent border-none">
              This Month
            </button>
            <button type="button" class="bg-transparent border-none">
              This Year
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">Order ID</th>
              <th class="text-start">Customer</th>
              <th class="text-start">Created</th>
              <th class="text-start">Total</th>
              <th class="text-start">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems.slice(0, 5)" :key="item.orderID">
              <td>{{ item.orderID }}</td>
              <td class="text-start">
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img :src="item.customer.image" alt="customer" />
                  </div>
                  <span class="d-block text-black fw-medium">{{
                    item.customer.name
                  }}</span>
                </div>
              </td>
              <td>{{ item.created }}</td>
              <td>${{ item.total }}</td>
              <td>
                <span
                  class="trezo-status-badge"
                  :class="computeClass(item.status)"
                >
                  {{ item.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

interface Customer {
  image: string;
  name: string;
}

interface Item {
  orderID: string;
  customer: Customer;
  created: string;
  total: string;
  status: string;
}

export default defineComponent({
  name: "RecentOrders",
  setup() {
    const items = ref<Item[]>([
      {
        orderID: "#JAN-2345",
        customer: {
          image: require("@/assets/images/users/user1.jpg"),
          name: "Sarah Johnson",
        },
        created: "20 Jun, 2024",
        total: "10,490",
        status: "Shipped",
      },
      {
        orderID: "#JAN-1323",
        customer: {
          image: require("@/assets/images/users/user2.jpg"),
          name: "Michael Smith",
        },
        created: "19 Jun, 2024",
        total: "6,575",
        status: "Confirmed",
      },
      {
        orderID: "#DEC-1234",
        customer: {
          image: require("@/assets/images/users/user3.jpg"),
          name: "Emily Brown",
        },
        created: "18 Jun, 2024",
        total: "12,870",
        status: "Pending",
      },
      {
        orderID: "#DEC-3567",
        customer: {
          image: require("@/assets/images/users/user4.jpg"),
          name: "Jason Lee",
        },
        created: "17 Jun, 2024",
        total: "7,895",
        status: "Shipped",
      },
      {
        orderID: "#DEC-1098",
        customer: {
          image: require("@/assets/images/users/user5.jpg"),
          name: "Ashley Davis",
        },
        created: "16 Jun, 2024",
        total: "4,680",
        status: "Rejected",
      },
      {
        orderID: "#DEC-3567",
        customer: {
          image: require("@/assets/images/users/user4.jpg"),
          name: "Jason Lee",
        },
        created: "17 Jun, 2024",
        total: "7,895",
        status: "Shipped",
      },
      {
        orderID: "#DEC-1098",
        customer: {
          image: require("@/assets/images/users/user5.jpg"),
          name: "Ashley Davis",
        },
        created: "16 Jun, 2024",
        total: "4,680",
        status: "Rejected",
      },
      {
        orderID: "#JAN-2345",
        customer: {
          image: require("@/assets/images/users/user5.jpg"),
          name: "Sarah Johnson",
        },
        created: "20 Jun, 2024",
        total: "10,490",
        status: "Shipped",
      },
      {
        orderID: "#JAN-1323",
        customer: {
          image: require("@/assets/images/users/user4.jpg"),
          name: "Michael Smith",
        },
        created: "19 Jun, 2024",
        total: "6,575",
        status: "Confirmed",
      },
      {
        orderID: "#DEC-1234",
        customer: {
          image: require("@/assets/images/users/user3.jpg"),
          name: "Emily Brown",
        },
        created: "18 Jun, 2024",
        total: "12,870",
        status: "Pending",
      },
      {
        orderID: "#DEC-3567",
        customer: {
          image: require("@/assets/images/users/user2.jpg"),
          name: "Jason Lee",
        },
        created: "17 Jun, 2024",
        total: "7,895",
        status: "Shipped",
      },
      {
        orderID: "#DEC-1098",
        customer: {
          image: require("@/assets/images/users/user1.jpg"),
          name: "Ashley Davis",
        },
        created: "16 Jun, 2024",
        total: "4,680",
        status: "Rejected",
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          orderID: string;
          customer: { name: string };
          created: string;
          total: string;
          status: string;
        }) =>
          item.orderID.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.customer.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.created.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.total.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const wordConfirmed = ref("Confirmed");
    const wordShipped = ref("Shipped");
    const wordPending = ref("Pending");
    const wordRejected = ref("Rejected");

    const computeClass = (classValue: string) => {
      return {
        confirmed: wordConfirmed.value === classValue,
        shipped: wordShipped.value === classValue,
        pending: wordPending.value === classValue,
        rejected: wordRejected.value === classValue,
      };
    };

    return {
      searchTerm,
      filteredItems,
      computeClass,
    };
  },
});
</script>
