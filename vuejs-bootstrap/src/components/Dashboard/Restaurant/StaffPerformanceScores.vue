<template>
  <div
    class="staff-performance-scores-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-2 mb-lg-20"
      >
        <h5 class="mb-0">Staff Performance Scores</h5>
        <div class="dropdown action-opt">
          <button
            class="btn bg-transparent p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="ri-more-2-fill"></i>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
          >
            <li>
              <button class="dropdown-item">This Day</button>
            </li>
            <li>
              <button class="dropdown-item">This Week</button>
            </li>
            <li>
              <button class="dropdown-item">This Month</button>
            </li>
            <li>
              <button class="dropdown-item">This Year</button>
            </li>
          </ul>
        </div>
      </div>

      <div class="trezo-card-content">
        <div class="basic-table table-responsive">
          <table class="table mb-0">
            <tbody>
              <tr v-for="(employee, index) in employees" :key="index">
                <td>
                  <div class="employee-info d-flex align-items-center">
                    <div class="img rounded-circle">
                      <img
                        :alt="employee.name"
                        :src="employee.image"
                        class="rounded-circle"
                      />
                    </div>
                    <div>
                      <span class="d-block fw-medium">{{ employee.name }}</span>
                    </div>
                  </div>
                </td>
                <td class="text-body">{{ employee.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StaffPerformanceScores",
  setup() {
    const employees = [
      {
        name: "Joanna Watson",
        image: require("@/assets/images/users/user58.jpg"),
        score: 98,
      },
      {
        name: "Angela Carter",
        image: require("@/assets/images/users/user59.jpg"),
        score: 97,
      },
      {
        name: "Walter White",
        image: require("@/assets/images/users/user60.jpg"),
        score: 96,
      },
      {
        name: "Gary Simon",
        image: require("@/assets/images/users/user61.jpg"),
        score: 88,
      },
      {
        name: "Zinia Anderson",
        image: require("@/assets/images/users/user62.jpg"),
        score: 85,
      },
      {
        name: "Loren Walter",
        image: require("@/assets/images/users/user63.jpg"),
        score: 82,
      },
      {
        name: "Jessy Pinkman",
        image: require("@/assets/images/users/user64.jpg"),
        score: 80,
      },
      {
        name: "Handy Curter",
        image: require("@/assets/images/users/user65.jpg"),
        score: 77,
      },
      {
        name: "Skyler Lorensa",
        image: require("@/assets/images/users/user66.jpg"),
        score: 75,
      },
    ];

    return {
      employees,
    };
  },
});
</script>

<style lang="scss" scoped>
.staff-performance-scores-card {
  .trezo-card-content {
    margin-bottom: -10px;

    .basic-table {
      table,
      .table {
        thead {
          tr {
            th {
              letter-spacing: 1px;
              color: var(--bodyColor);
              text-transform: uppercase;
              background-color: transparent;
              padding: {
                bottom: 13px;
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
              padding: {
                top: 10px;
                bottom: 10px;
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
                span {
                  &:nth-child(1) {
                    margin-bottom: 1px;
                    font-size: var(--fontSize);
                  }
                }
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
                text-align: end;
              }
            }
            &:first-child {
              td {
                padding-top: 0;
                border-top-width: 0;
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
