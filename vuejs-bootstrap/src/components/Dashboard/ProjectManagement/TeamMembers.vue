<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0 pb-4">
      <div class="p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <h3 class="mb-0">Team Members</h3>
          <div class="dropdown action-opt">
            <button
              class="btn bg-transparent p-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i data-feather="more-horizontal"></i>
            </button>

            <ul
              class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
            >
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="clock"></i>
                  Today
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="pie-chart"></i>
                  Last 7 Days
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="rotate-cw"></i>
                  Last Month
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="calendar"></i>
                  Last 1 Year
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="bar-chart"></i>
                  All Time
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="eye"></i>
                  View
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="trash"></i>
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="default-table-area style-two team-members">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Tasks</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items.slice(0, 5)" :key="item.id">
                <td class="border-0 py-4 pb-0">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        :src="item.user.image"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">
                        {{ item.user.name }}
                      </h6>
                      <span class="fs-12">
                        {{ item.user.email }}
                      </span>
                    </div>
                  </div>
                </td>
                <td class="border-0 py-3 pb-0">
                  {{ item.tasks }}
                </td>
                <td class="border-0 py-3 pb-0">
                  <div
                    :class="['progress bg-opacity-10', item.status.class]"
                    role="progressbar"
                    aria-label="Example with label"
                    :aria-valuenow="item.status.percentage"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="height: 5px"
                  >
                    <div
                      :class="['progress-bar rounded-pill', item.status.class]"
                      :style="{
                        width: item.status.percentage + '%',
                        height: '5px',
                      }"
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "TeamMembers",
  data() {
    return {
      items: [
        {
          id: 1,
          user: {
            image: require("@/assets/images/user-6.jpg"),
            name: "Alex Davis",
            email: "alex@trezo.com",
          },
          tasks: 55,
          status: {
            percentage: 55,
            class: "bg-primary",
          },
        },
        {
          id: 2,
          user: {
            image: require("@/assets/images/user-7.jpg"),
            name: "Laura Martinez",
            email: "laura@trezo.com",
          },
          tasks: 125,
          status: {
            percentage: 70,
            class: "bg-success",
          },
        },
        {
          id: 3,
          user: {
            image: require("@/assets/images/user-8.jpg"),
            name: "Mark Thompson",
            email: "mark@trezo.com",
          },
          tasks: 78,
          status: {
            percentage: 30,
            class: "bg-primary-div",
          },
        },
        {
          id: 4,
          user: {
            image: require("@/assets/images/user-9.jpg"),
            name: "Rachel White",
            email: "rachel@trezo.com",
          },
          tasks: 95,
          status: {
            percentage: 90,
            class: "bg-danger",
          },
        },
        {
          id: 5,
          user: {
            image: require("@/assets/images/user-10.jpg"),
            name: "Kevin Lee",
            email: "kevin@trezo.com",
          },
          tasks: 134,
          status: {
            percentage: 50,
            class: "bg-primary",
          },
        },
        {
          id: 6,
          user: {
            image: require("@/assets/images/user-6.jpg"),
            name: "Alex Davis",
            email: "alex@trezo.com",
          },
          tasks: 70,
          status: {
            percentage: 70,
            class: "bg-success",
          },
        },
      ],
    };
  },
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>

<style lang="scss" scoped>
.progress {
  .progress-bar {
    &.bg-primary-div {
      --bs-bg-opacity: 1;
      background-color: rgba(
        var(--bs-primary-div-rgb),
        var(--bs-bg-opacity)
      ) !important;
    }
  }
}
</style>
