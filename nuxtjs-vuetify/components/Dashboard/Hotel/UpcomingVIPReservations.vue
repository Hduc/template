<template>
  <v-card
    class="upcoming-vip-reservations-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Upcoming VIP Reservations</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius border-0 bg-gray"
          >
            Monthly
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
      <div class="basic-table table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col" class="fw-bold">Code</th>
              <th scope="col" class="fw-bold">Room</th>
              <th scope="col" class="fw-bold">Customer</th>
              <th scope="col" class="fw-bold">Duration</th>
              <th scope="col" class="fw-bold"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in paginatedData" :key="reservation.code">
              <td class="fw-semibold text-body">TRZ-32</td>
              <td class="fw-semibold">
                <RouterLink to="/hotel/room-details" class="title">
                  {{ reservation.room }}
                </RouterLink>
              </td>
              <td class="fw-semibold text-body">
                {{ reservation.customer }}
              </td>
              <td>
                <span class="trezo-badge">
                  {{ reservation.duration }}
                </span>
              </td>
              <td>
                <div
                  class="action-buttons d-flex justify-content-end align-items-center"
                >
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                  >
                    <i class="material-symbols-outlined"> visibility </i>
                  </button>
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                  >
                    <i class="material-symbols-outlined"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
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
        class="d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
      >
        <span class="fs-12 fw-medium">
          Showing {{ paginatedData.length }} of
          {{ reservations.length }} Results
        </span>

        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <button
                class="page-link icon"
                aria-label="Previous"
                @click="goToPage(currentPage - 1)"
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
                @click="goToPage(currentPage + 1)"
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

<script lang="ts" setup>
import { ref, computed } from "vue";

interface Reservation {
  code: string;
  room: string;
  customer: string;
  duration: string;
}

const reservations = ref<Reservation[]>([
  {
    code: "TRZ-32",
    room: "Duluxe Room - G - 3215",
    customer: "Angela Carter",
    duration: "10 Dec - 15 Dec",
  },
  {
    code: "TRZ-34",
    room: "Sweet Suite - S - 1265",
    customer: "Walter White",
    duration: "12 Dec - 16 Dec",
  },
  {
    code: "TRZ-42",
    room: "The Queensland - Q32",
    customer: "Zennifer Loren",
    duration: "15 Dec - 20 Dec",
  },
  {
    code: "TRZ-15",
    room: "Sweet Suite - S - 3214",
    customer: "Johna Mandala",
    duration: "11 Dec - 14 Dec",
  },
  {
    code: "TRZ-29",
    room: "Duluxe Room - F - 7213",
    customer: "Viktor James",
    duration: "10 Dec - 15 Dec",
  },
  {
    code: "TRZ-55",
    room: "Presidential Suite - P - 9000",
    customer: "Bruce Wayne",
    duration: "20 Dec - 25 Dec",
  },
  {
    code: "TRZ-61",
    room: "Garden View - G - 3301",
    customer: "Clark Kent",
    duration: "13 Dec - 17 Dec",
  },
]);

const currentPage = ref(1);
const itemsPerPage = 5;

const totalPages = computed(() =>
  Math.ceil(reservations.value.length / itemsPerPage)
);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return reservations.value.slice(start, start + itemsPerPage);
});

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
</script>

<style scoped lang="scss">
.upcoming-vip-reservations-card {
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
                bottom: 10px;
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
                top: 10px;
                bottom: 10px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .title {
                font-size: var(--fontSize);
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
      }
    }
  }
}
</style>
