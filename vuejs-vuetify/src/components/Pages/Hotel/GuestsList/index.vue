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
          @input="filterGuests"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>

      <AddNewGuest />
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
              <th scope="col" class="fw-medium">Guest Name</th>
              <th scope="col" class="fw-medium">Check In</th>
              <th scope="col" class="fw-medium">Check Out</th>
              <th scope="col" class="fw-medium">Room</th>
              <th scope="col" class="fw-medium">Total Bill</th>
              <th scope="col" class="fw-medium">Payment Status</th>
              <th scope="col" class="fw-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="guest in paginatedGuests" :key="guest.id">
              <td>
                <div class="d-flex align-items-center gap-5">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="selectedGuests"
                      :value="guest.id"
                    />
                  </div>
                  #{{ guest.id.toString().padStart(3, "0") }}
                </div>
              </td>
              <td>
                <div class="employee-info d-flex align-items-center">
                  <div class="img rounded-circle">
                    <v-img
                      :src="guest.avatar"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <span class="d-block fw-semibold">
                    {{ guest.name }}
                  </span>
                </div>
              </td>
              <td>
                {{ formatDate(guest.checkIn) }}
              </td>
              <td>
                {{ formatDate(guest.checkOut) }}
              </td>
              <td>
                {{ guest.room }}
              </td>
              <td>${{ guest.totalBill.toFixed(2) }}</td>
              <td>
                <span
                  class="trezo-badge with-border border-radius py-0"
                  :class="getStatusClass(guest.paymentStatus)"
                >
                  {{ guest.paymentStatus }}
                </span>
              </td>
              <td>
                <div class="action-buttons d-flex align-items-center">
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
                    @click="deleteGuest(guest.id)"
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
          Showing {{ paginatedGuests.length }} of
          {{ filteredGuests.length }} Results
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
import { defineComponent, ref, computed } from "vue";
import AddNewGuest from "./AddNewGuest.vue";

interface Guest {
  id: number;
  name: string;
  code: string; // Added the 'code' property
  avatar: string;
  checkIn: string;
  checkOut: string;
  room: string;
  totalBill: number;
  paymentStatus: "Completed" | "Pending" | "Failed";
}

interface FormData {
  id: number;
  code: string;
  name: string;
  avatar: string;
  avatarPreview?: string;
  checkIn: string;
  checkOut: string;
  room: string;
  totalBill: number;
  paymentStatus: "Completed" | "Pending" | "Failed";
}

export default defineComponent({
  name: "GuestsList",
  components: {
    AddNewGuest,
  },
  setup() {
    const guests = ref<Guest[]>([
      {
        id: 1,
        code: "#001",
        name: "Joanna Watson",
        avatar: require("@/assets/images/users/user1.jpg"),
        checkIn: "2025-11-01T09:42:00",
        checkOut: "2025-11-03T09:42:00",
        room: "G0-12",
        totalBill: 166.0,
        paymentStatus: "Completed",
      },
      {
        id: 2,
        code: "#002",
        name: "Orion Vale",
        avatar: require("@/assets/images/users/user2.jpg"),
        checkIn: "2025-11-02T10:08:00",
        checkOut: "2025-11-05T10:08:00",
        room: "L1-15",
        totalBill: 158.5,
        paymentStatus: "Pending",
      },
      {
        id: 3,
        code: "#003",
        name: "Seraphina Nyx",
        avatar: require("@/assets/images/users/user3.jpg"),
        checkIn: "2025-11-03T11:12:00",
        checkOut: "2025-11-07T11:12:00",
        room: "L2-27",
        totalBill: 250.5,
        paymentStatus: "Failed",
      },
      {
        id: 4,
        code: "#004",
        name: "Cassian Rhys",
        avatar: require("@/assets/images/users/user4.jpg"),
        checkIn: "2025-10-30T10:32:00",
        checkOut: "2025-11-01T10:32:00",
        room: "G0-15",
        totalBill: 313.99,
        paymentStatus: "Completed",
      },
      {
        id: 5,
        code: "#005",
        name: "Aurelia Dawn",
        avatar: require("@/assets/images/users/user5.jpg"),
        checkIn: "2025-10-27T13:15:00",
        checkOut: "2025-10-30T13:15:00",
        room: "L3-32",
        totalBill: 514.75,
        paymentStatus: "Completed",
      },
      {
        id: 6,
        code: "#006",
        name: "Lucien Drake",
        avatar: require("@/assets/images/user-185.jpg"),
        checkIn: "2025-10-18T12:18:00",
        checkOut: "2025-10-21T12:18:00",
        room: "G0-17",
        totalBill: 215.99,
        paymentStatus: "Completed",
      },
      {
        id: 7,
        code: "#007",
        name: "Elara Quinn",
        avatar: require("@/assets/images/user-186.jpg"),
        checkIn: "2025-10-15T20:23:00",
        checkOut: "2025-10-20T20:23:00",
        room: "L1-19",
        totalBill: 216.5,
        paymentStatus: "Pending",
      },
      {
        id: 8,
        code: "#008",
        name: "Evander Cole",
        avatar: require("@/assets/images/user-187.jpg"),
        checkIn: "2025-10-14T21:14:00",
        checkOut: "2025-10-18T21:14:00",
        room: "G0-11",
        totalBill: 112.99,
        paymentStatus: "Failed",
      },
      {
        id: 9,
        code: "#009",
        name: "Isolde Faye",
        avatar: require("@/assets/images/user-188.jpg"),
        checkIn: "2025-09-05T19:37:00",
        checkOut: "2025-09-10T19:37:00",
        room: "L2-24",
        totalBill: 513.5,
        paymentStatus: "Completed",
      },
      {
        id: 10,
        code: "#010",
        name: "Theo Alistair",
        avatar: require("@/assets/images/user-189.jpg"),
        checkIn: "2025-09-01T09:42:00",
        checkOut: "2025-09-02T09:42:00",
        room: "L3-30",
        totalBill: 115.25,
        paymentStatus: "Completed",
      },
    ]);

    // Form state
    const formData = ref<FormData>({
      id: 0,
      name: "",
      code: "",
      avatar: "",
      checkIn: "",
      checkOut: "",
      room: "",
      totalBill: 0,
      paymentStatus: "Completed",
    });

    const isEditing = ref(false);
    const searchQuery = ref("");
    const selectedGuests = ref<number[]>([]);
    const selectAll = ref(false);
    const currentPage = ref(1);
    const itemsPerPage = 8;

    // Computed properties
    const filteredGuests = computed(() => {
      if (!searchQuery.value) return guests.value;
      return guests.value.filter(
        (guest) =>
          guest.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          guest.room.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          guest.paymentStatus
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase())
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredGuests.value.length / itemsPerPage)
    );

    const paginatedGuests = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredGuests.value.slice(start, end);
    });

    // Methods
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    const getStatusClass = (status: string) => {
      switch (status) {
        case "Completed":
          return "finished";
        case "Pending":
          return "pPending";
        case "Failed":
          return "rejected";
        default:
          return "";
      }
    };

    const filterGuests = () => {
      currentPage.value = 1; // Reset to first page when filtering
    };

    const toggleSelectAll = () => {
      if (selectAll.value) {
        selectedGuests.value = paginatedGuests.value.map((guest) => guest.id);
      } else {
        selectedGuests.value = [];
      }
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

    const openAddModal = () => {
      resetForm();
      isEditing.value = false;
    };

    const viewGuest = (id: number) => {
      const guest = guests.value.find((g) => g.id === id);
      if (guest) {
        // Implement view logic or open a view-only modal
        console.log("Viewing guest:", guest);
      }
    };

    const editGuest = (id: number) => {
      const guest = guests.value.find((g) => g.id === id);
      if (guest) {
        formData.value = {
          ...guest,
          code: guest.code, // Ensure the 'code' property is included
          avatarPreview: guest.avatar,
        };
        isEditing.value = true;
      }
    };

    const deleteGuest = (id: number) => {
      if (confirm("Are you sure you want to delete this guest?")) {
        guests.value = guests.value.filter((guest) => guest.id !== id);
      }
    };

    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          formData.value.avatarPreview = e.target?.result as string;
          // In a real app, you would upload the file to a server here
          // For demo purposes, we'll just store the preview
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    const submitForm = () => {
      if (isEditing.value) {
        // Update existing guest
        const index = guests.value.findIndex((g) => g.id === formData.value.id);
        if (index !== -1) {
          guests.value[index] = {
            ...formData.value,
            avatar: formData.value.avatarPreview || formData.value.avatar,
          };
        }
      } else {
        // Add new guest
        const newId = Math.max(...guests.value.map((g) => g.id), 0) + 1;
        guests.value.push({
          ...formData.value,
          id: newId,
          avatar: formData.value.avatarPreview || "",
        });
      }

      resetForm();
    };

    const resetForm = () => {
      formData.value = {
        id: 0,
        code: "",
        name: "",
        avatar: "",
        checkIn: "",
        checkOut: "",
        room: "",
        totalBill: 0,
        paymentStatus: "Completed",
      };
      isEditing.value = false;
    };

    return {
      guests,
      formData,
      isEditing,
      searchQuery,
      selectedGuests,
      selectAll,
      currentPage,
      filteredGuests,
      paginatedGuests,
      totalPages,
      formatDate,
      getStatusClass,
      filterGuests,
      toggleSelectAll,
      prevPage,
      nextPage,
      goToPage,
      openAddModal,
      viewGuest,
      editGuest,
      deleteGuest,
      handleFileUpload,
      submitForm,
      resetForm,
    };
  },
});
</script>

<style scoped lang="scss">
.trezo-card {
  .trezo-card-content {
    .basic-table {
      table,
      .table {
        thead {
          tr {
            th {
              text-align: left;
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
