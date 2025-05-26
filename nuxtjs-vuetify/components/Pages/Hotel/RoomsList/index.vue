<template>
  <v-card
    class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative">
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search task here....."
          v-model="searchQuery"
          @input="filterRooms"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>

      <AddNewRoom />
    </div>

    <div class="trezo-card-content">
      <div class="basic-table table-responsive">
        <table class="table mb-0" border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th scope="col" class="d-flex align-items-center fw-medium">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="selectAll"
                    @change="toggleSelectAll"
                  />
                </div>
                Code
              </th>
              <th scope="col" class="fw-medium">Room Name</th>
              <th scope="col" class="fw-medium">Bed Type</th>
              <th scope="col" class="fw-medium">Floor</th>
              <th scope="col" class="fw-medium">Facilities</th>
              <th scope="col" class="fw-medium">Rate</th>
              <th scope="col" class="fw-medium">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="room in paginatedRooms" :key="room.id">
              <td>
                <div class="d-flex align-items-center gap-5">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="selectedRooms"
                      :value="room.id"
                    />
                  </div>
                  {{ room.code }}
                </div>
              </td>
              <td>
                <div class="product-info d-flex align-items-center">
                  <div class="image">
                    <v-img :src="room.image" :alt="room.name" />
                  </div>
                  <div class="info">
                    <RouterLink
                      to="/hotel/room-details"
                      class="fw-medium d-inline-block"
                    >
                      {{ room.name }}
                    </RouterLink>
                    <span class="d-block text-body">
                      {{ room.hotel }}
                    </span>
                  </div>
                </div>
              </td>
              <td>{{ room.bedType }}</td>
              <td>{{ room.floor }}</td>
              <td class="facilities">
                <p>
                  {{ room.facilities.join(", ") }}
                </p>
              </td>
              <td>${{ room.rate }}/night</td>
              <td>
                <span
                  :class="`trezo-badge with-border border-radius py-0 ${
                    room.status === 'Available' ? 'finished' : 'rejected'
                  }`"
                >
                  {{ room.status }}
                </span>
              </td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <RouterLink
                    to="/hotel/room-details"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                  >
                    <i class="material-symbols-outlined"> visibility </i>
                  </RouterLink>
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                  >
                    <i class="material-symbols-outlined"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                    @click="deleteRoom(room.id)"
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
        class="trezo-card-pagination d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap border p-3"
      >
        <span class="fs-12 fw-medium">
          Showing {{ showingFrom }}-{{ showingTo }} of
          {{ filteredRooms.length }} Results
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
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import AddNewRoom from "@/components/Pages/Hotel/RoomsList/AddNewRoom.vue";

import image1 from "@/assets/images/room-5.jpg";
import image2 from "@/assets/images/room-6.jpg";
import image3 from "@/assets/images/room-7.jpg";
import image4 from "@/assets/images/room-8.jpg";
import image5 from "@/assets/images/room-9.jpg";
import image6 from "@/assets/images/room-1.jpg";
import image7 from "@/assets/images/room-2.jpg";
import image8 from "@/assets/images/room-3.jpg";
import image9 from "@/assets/images/room-4.jpg";

interface Room {
  id: number;
  code: string;
  name: string;
  hotel: string;
  bedType: string;
  floor: string;
  facilities: string[];
  rate: number;
  status: string;
  image: string;
}

export default defineComponent({
  name: "RoomsList",
  components: {
    AddNewRoom,
  },
  setup() {
    const rooms = ref<Room[]>([
      {
        id: 1,
        code: "TRZ-32",
        name: "Serenity Suite",
        hotel: "Elysian Grand",
        bedType: "Double Bed",
        floor: "G-02",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 157,
        status: "Available",
        image: image1,
      },
      {
        id: 2,
        code: "TRZ-35",
        name: "Cozy Book Nook",
        hotel: "Celestial Haven",
        bedType: "Single Bed",
        floor: "G-01",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 146,
        status: "Available",
        image: image2,
      },
      {
        id: 3,
        code: "TRZ-36",
        name: "Velvet Orchid",
        hotel: "Opulent Orchid",
        bedType: "Master Bed",
        floor: "L1-15",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 125,
        status: "Available",
        image: image3,
      },
      {
        id: 4,
        code: "TRZ-37",
        name: "Vintage Studio",
        hotel: "The Aurelia",
        bedType: "Double Bed",
        floor: "L1-17",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 159,
        status: "Not Available",
        image: image4,
      },
      {
        id: 5,
        code: "TRZ-39",
        name: "Blissful Dream",
        hotel: "Regal Horizon",
        bedType: "Master Bed",
        floor: "L2-22",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 120,
        status: "Available",
        image: image5,
      },
      {
        id: 6,
        code: "TRZ-42",
        name: "Rustic Hearth",
        hotel: "Velvet Vista",
        bedType: "Single Bed",
        floor: "L2-24",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 100,
        status: "Available",
        image: image6,
      },
      {
        id: 7,
        code: "TRZ-46",
        name: "Enchanted Forest",
        hotel: "The Ember Nest",
        bedType: "Double Bed",
        floor: "L2-28",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 145,
        status: "Not Available",
        image: image7,
      },
      {
        id: 8,
        code: "TRZ-32",
        name: "Serenity Suite",
        hotel: "Azure Retreat",
        bedType: "Double Bed",
        floor: "G-02",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 157,
        status: "Available",
        image: image8,
      },
      {
        id: 9,
        code: "TRZ-32",
        name: "Serenity Suite",
        hotel: "Nocturne Haven",
        bedType: "Double Bed",
        floor: "G-02",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 157,
        status: "Available",
        image: image9,
      },
      {
        id: 10,
        code: "TRZ-32",
        name: "Serenity Suite",
        hotel: "Luna Essence",
        bedType: "Double Bed",
        floor: "G-02",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 157,
        status: "Available",
        image: image1,
      },
    ]);

    const filteredRooms = ref<Room[]>([]);
    const selectedRooms = ref<number[]>([]);
    const selectAll = ref(false);
    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(8);

    const form = ref({
      id: 0,
      code: "",
      name: "",
      hotel: "",
      bedType: "Double Bed",
      floor: "",
      facilitiesText: "",
      rate: 0,
      status: "Available",
      image: "",
    });

    // Computed properties
    const paginatedRooms = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredRooms.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredRooms.value.length / itemsPerPage.value);
    });

    const showingFrom = computed(() => {
      return (currentPage.value - 1) * itemsPerPage.value + 1;
    });

    const showingTo = computed(() => {
      const end = currentPage.value * itemsPerPage.value;
      return end > filteredRooms.value.length
        ? filteredRooms.value.length
        : end;
    });

    // Methods
    const filterRooms = () => {
      if (!searchQuery.value) {
        filteredRooms.value = [...rooms.value];
        return;
      }

      const query = searchQuery.value.toLowerCase();
      filteredRooms.value = rooms.value.filter(
        (room: {
          code: string;
          name: string;
          hotel: string;
          floor: string;
          bedType: string;
          status: string;
          facilities: any[];
          rate: { toString: () => string | any[] };
        }) =>
          room.code.toLowerCase().includes(query) ||
          room.name.toLowerCase().includes(query) ||
          room.hotel.toLowerCase().includes(query) ||
          room.floor.toLowerCase().includes(query) ||
          room.bedType.toLowerCase().includes(query) ||
          room.status.toLowerCase().includes(query) ||
          room.facilities.some((f) => f.toLowerCase().includes(query)) ||
          room.rate.toString().includes(query)
      );

      currentPage.value = 1;
    };

    const toggleSelectAll = () => {
      if (selectAll.value) {
        selectedRooms.value = paginatedRooms.value.map(
          (room: { id: any }) => room.id
        );
      } else {
        selectedRooms.value = [];
      }
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

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const deleteRoom = (id: number) => {
      if (confirm("Are you sure you want to delete this room?")) {
        rooms.value = rooms.value.filter(
          (room: { id: number }) => room.id !== id
        );
        filterRooms();
      }
    };

    // Initialize
    onMounted(() => {
      filteredRooms.value = [...rooms.value];
    });

    // Return everything that should be available in the template
    return {
      rooms,
      filteredRooms,
      selectedRooms,
      selectAll,
      searchQuery,
      currentPage,
      itemsPerPage,
      form,
      paginatedRooms,
      totalPages,
      showingFrom,
      showingTo,
      filterRooms,
      toggleSelectAll,
      prevPage,
      nextPage,
      goToPage,
      deleteRoom,
    };
  },
});
</script>

<style lang="scss" scoped>
.trezo-card {
  .trezo-card-content {
    .basic-table {
      table,
      .table {
        thead {
          tr {
            text-align: left;
            th {
              .form-check {
                .form-check-input {
                  margin-top: 5px;
                }
              }
              &.d-flex {
                gap: 5px;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              .form-check {
                .form-check-input {
                  margin-top: 5px;
                }
              }
              .gap-5 {
                gap: 5px !important;
              }
              &.facilities {
                p {
                  white-space: normal;
                  width: 300px;
                }
              }
              .product-info {
                .image {
                  width: 60px;
                }
                .info {
                  span {
                    margin-top: 3px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .trezo-card-pagination {
      border-top: 0 !important;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  }
}
</style>
