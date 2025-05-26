<template>
  <v-card
    class="tickets-card trezo-card bg-white border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Tickets</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-2-fill"></i>
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

    <div class="trezo-card-content">
      <div class="basic-table table-responsive">
        <table class="table mb-0">
          <tbody>
            <tr v-for="ticket in tickets.slice(0, 7)" :key="ticket.id">
              <td class="fw-semibold text-body">{{ ticket.id }}</td>
              <td class="reviews">
                <span class="ticket-title d-block fw-semibold">
                  {{ ticket.title }}
                </span>
                <p>Updated on: {{ ticket.updatedOn }}</p>
              </td>
              <td>
                <span :class="`trezo-status-badge ${ticket.statusClass}`">
                  {{ ticket.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tickets",
  setup() {
    const tickets = ref([
      {
        id: "#3242",
        title: "Order delayed for 5 mins",
        updatedOn: "10 Nov, 2025",
        status: "Solved",
        statusClass: "finished",
      },
      {
        id: "#3243",
        title: "Provide rotten Burger",
        updatedOn: "10 Nov, 2025",
        status: "Pending",
        statusClass: "pPending",
      },
      {
        id: "#3244",
        title: "Too much salt in pizza",
        updatedOn: "10 Nov, 2025",
        status: "Solved",
        statusClass: "finished",
      },
      {
        id: "#3245",
        title: "Order delayed for 5 mins",
        updatedOn: "10 Nov, 2025",
        status: "Solved",
        statusClass: "finished",
      },
      {
        id: "#3246",
        title: "Delivery man misbehaved",
        updatedOn: "10 Nov, 2025",
        status: "Pending",
        statusClass: "pPending",
      },
      {
        id: "#3247",
        title: "App doesn’t work",
        updatedOn: "10 Nov, 2025",
        status: "Solved",
        statusClass: "finished",
      },
      {
        id: "#3248",
        title: "Missing items in order",
        updatedOn: "9 Nov, 2025",
        status: "Pending",
        statusClass: "pPending",
      },
    ]);

    return {
      tickets,
    };
  },
});
</script>

<style lang="scss" scoped>
.tickets-card {
  .trezo-card-content {
    margin-bottom: -15px;

    .basic-table {
      table,
      .table {
        thead {
          tr {
            th {
              font-size: 10px;
              letter-spacing: 1px;
              color: var(--bodyColor);
              text-transform: uppercase;
              background-color: transparent;
              padding: {
                bottom: 15px;
                top: 0;
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              vertical-align: top;
              font-size: 12px;
              padding: {
                top: 10px;
                bottom: 10px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .ticket-title {
                font-size: var(--fontSize);
                margin: {
                  top: -1px;
                }
              }
              .trezo-status-badge {
                border-radius: 30px;
                padding: 1px 10px;
              }
              &:first-child {
                padding-left: 0 !important;
              }
              &:last-child {
                text-align: end;
                padding-right: 0 !important;
              }
            }
            &:first-child {
              td {
                border-top-width: 0;
                padding-top: 0;
              }
            }
            &:last-child {
              td {
                border-bottom-width: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
