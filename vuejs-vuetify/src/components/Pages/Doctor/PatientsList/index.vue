<template>
  <v-card
    class="patients-list-card trezo-card bg-white border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search here.."
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>

      <RouterLink to="/doctor/add-patient" class="add-btn" type="button">
        <i class="material-symbols-outlined"> add </i>
        Add New Patient
      </RouterLink>
    </div>

    <div class="trezo-card-content">
      <div class="trezo-table basic-table table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col" class="fw-bold">Code</th>
              <th scope="col" class="fw-bold">Patient</th>
              <th scope="col" class="fw-bold">Email</th>
              <th scope="col" class="fw-bold">Phone No.</th>
              <th scope="col" class="fw-bold">Disease</th>
              <th scope="col" class="fw-bold">Appoint. Date</th>
              <th scope="col" class="fw-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="patient in paginatedPatients" :key="patient.id">
              <td>
                <div class="d-flex align-items-center ga-1">
                  <div class="form-check mb-0">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                  <span class="d-block fw-semibold text-body">
                    {{ patient.code }}
                  </span>
                </div>
              </td>
              <td>
                <div class="employee-info d-flex align-items-center">
                  <div class="img rounded-circle">
                    <v-img
                      :src="patient.image"
                      alt="user-image"
                      class="rounded-circle"
                    />
                  </div>
                  <span class="d-block fw-semibold">
                    {{ patient.name }}
                  </span>
                </div>
              </td>
              <td class="fw-semibold text-primary">
                {{ patient.email }}
              </td>
              <td class="fw-semibold text-body">
                {{ patient.phone }}
              </td>
              <td class="fw-semibold text-body">
                {{ patient.disease }}
              </td>
              <td class="fw-semibold text-body">
                {{ patient.appointmentDate }}
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
          {{ patients.length }} Results
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

interface Patient {
  id: number;
  code: string;
  image: string;
  name: string;
  email: string;
  phone: string;
  disease: string;
  appointmentDate: string;
}

export default defineComponent({
  name: "PatientsList",
  setup() {
    const patients = ref<Patient[]>([
      {
        id: 1,
        code: "#001",
        image: require("@/assets/images/users/user33.jpg"),
        name: "Johhna Loren",
        email: "lorenjohna@gmail.com",
        phone: "+1 555-225-4488",
        disease: "Heart Attack",
        appointmentDate: "05 Nov, 2025",
      },
      {
        id: 2,
        code: "#002",
        image: require("@/assets/images/users/user34.jpg"),
        name: "Skyler White",
        email: "skylerwhite@gmail.com",
        phone: "+1 555-123-4567",
        disease: "HBP",
        appointmentDate: "04 Nov, 2025",
      },
      {
        id: 3,
        code: "#003",
        image: require("@/assets/images/users/user35.jpg"),
        name: "Jonathon Watson",
        email: "jonathonwatson@gmail.com",
        phone: "+1 555-987-6543",
        disease: "Chest Pain",
        appointmentDate: "03 Nov, 2025",
      },
      {
        id: 4,
        code: "#004",
        image: require("@/assets/images/users/user36.jpg"),
        name: "Walter White",
        email: "walterwhite@gmail.com",
        phone: "+1 555-456-7890",
        disease: "Breathing Problem",
        appointmentDate: "03 Nov, 2025",
      },
      {
        id: 5,
        code: "#005",
        image: require("@/assets/images/users/user37.jpg"),
        name: "David Carlen",
        email: "davidcarlen@gmail.com",
        phone: "+1 555-369-7878",
        disease: "Minor Heart Attack",
        appointmentDate: "02 Nov, 2025",
      },
      {
        id: 6,
        code: "#006",
        image: require("@/assets/images/users/user36.jpg"),
        name: "Jenny Loren",
        email: "jennyloren@gmail.com",
        phone: "+1 555-658-4488",
        disease: "Artery Blockage",
        appointmentDate: "02 Nov, 2025",
      },
      {
        id: 7,
        code: "#007",
        image: require("@/assets/images/users/user32.jpg"),
        name: "Bradly Smith",
        email: "bradlysmith@gmail.com",
        phone: "+1 555-558-9966",
        disease: "Chest Pain",
        appointmentDate: "01 Nov, 2025",
      },
      {
        id: 8,
        code: "#008",
        image: require("@/assets/images/users/user31.jpg"),
        name: "Victor James",
        email: "victorjames@gmail.com",
        phone: "+1 555-357-5888",
        disease: "Heart Attack",
        appointmentDate: "01 Nov, 2025",
      },
      {
        id: 9,
        code: "#009",
        image: require("@/assets/images/users/user30.jpg"),
        name: "Jenny Carla",
        email: "jennycarla@gmail.com",
        phone: "+1 555-456-8877",
        disease: "Breathing Problem",
        appointmentDate: "01 Nov, 2025",
      },
      {
        id: 10,
        code: "#010",
        image: require("@/assets/images/users/user29.jpg"),
        name: "Jane Ronan",
        email: "janeronan@gmail.com",
        phone: "+1 555-622-4488",
        disease: "HBP",
        appointmentDate: "30 Oct, 2025",
      },
      {
        id: 11,
        code: "#006",
        image: require("@/assets/images/users/user36.jpg"),
        name: "Jenny Loren",
        email: "jennyloren@gmail.com",
        phone: "+1 555-658-4488",
        disease: "Artery Blockage",
        appointmentDate: "02 Nov, 2025",
      },
      {
        id: 12,
        code: "#007",
        image: require("@/assets/images/users/user32.jpg"),
        name: "Bradly Smith",
        email: "bradlysmith@gmail.com",
        phone: "+1 555-558-9966",
        disease: "Chest Pain",
        appointmentDate: "01 Nov, 2025",
      },
      {
        id: 13,
        code: "#008",
        image: require("@/assets/images/users/user31.jpg"),
        name: "Victor James",
        email: "victorjames@gmail.com",
        phone: "+1 555-357-5888",
        disease: "Heart Attack",
        appointmentDate: "01 Nov, 2025",
      },
    ]);

    const currentPage = ref(1);
    const itemsPerPage = ref(10);

    const totalPages = computed(() =>
      Math.ceil(patients.value.length / itemsPerPage.value)
    );

    const paginatedPatients = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return patients.value.slice(start, end);
    });

    const startIndex = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endIndex = computed(() =>
      Math.min(currentPage.value * itemsPerPage.value, patients.value.length)
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
      patients,
      paginatedPatients,
      currentPage,
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
.patients-list-card {
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
                bottom: 12px;
                top: 0;
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
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
                top: 12px;
                bottom: 12px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .form-check {
                .form-check-input {
                  margin-top: 0px;
                  width: 14px;
                  height: 14px;
                }
              }
              .employee-info {
                gap: 10px;

                .img {
                  width: 35px;
                }
                span {
                  font-size: var(--fontSize);
                }
              }
              &.text-primary {
                color: var(--primaryColor) !important;
              }
              &:first-child {
                padding-left: 0 !important;
              }
              &:last-child {
                padding-right: 0 !important;
                text-align: end;
              }
            }
            &:last-child,
            &:nth-child(4) {
              td {
                .action-dropdown-menu {
                  .dropdown-menu {
                    top: auto;
                    bottom: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
