<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div class="p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <h3 class="mb-0">My Projects</h3>
          <select
            class="form-select month-select form-control p-0 h-auto border-0 w-90"
            style="background-position: right 0 center"
            aria-label="Default select example"
          >
            <option selected>This Week</option>
            <option value="1">This Month</option>
            <option value="2">This Year</option>
          </select>
        </div>
      </div>

      <div class="default-table-area style-two all-projects">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Project Name</th>
                <th scope="col">Client</th>
                <th scope="col">Assignees</th>
                <th scope="col">Budget</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items.slice(0, 5)" :key="item.id">
                <td class="text-body">
                  {{ item.id }}
                </td>
                <td>
                  <RouterLink to="/project-management/project-overview">
                    {{ item.projectName }}
                  </RouterLink>
                </td>
                <td>{{ item.client }}</td>
                <td>
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li
                      class="ms-m-15"
                      v-for="userImg in item.assignees.images"
                      :key="userImg.id"
                    >
                      <RouterLink to="/my-profile">
                        <img
                          :src="userImg.image"
                          class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>

                    <li class="ms-m-15">
                      <RouterLink
                        to="/users/users-list"
                        class="wh-34 lh-34 rounded-circle bg-primary d-block text-center text-decoration-none text-white fs-12 fw-medium border border-1 border-color-white"
                      >
                        {{ item.assignees.number }}
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="text-body">${{ item.budget }}</td>
                <td class="text-body">
                  {{ item.startDate }}
                </td>
                <td class="text-body">
                  {{ item.endDate }}
                </td>
                <td>
                  <span
                    class="badge bg-opacity-10 p-2 fs-12 fw-normal"
                    :class="computeClass(item.status)"
                  >
                    {{ item.status }}
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        {{ item.action.view }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        {{ item.action.edit }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        {{ item.action.delete }}
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-4 pt-lg-4">
          <Pagination items="05" :total="items.length" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "MyProjects",
  components: {
    Pagination,
  },
  data() {
    return {
      items: [
        {
          id: "#854",
          projectName: "Project CyberSphere",
          client: "NovaTech Solutions",
          assignees: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-15.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-11.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-6.jpg"),
              },
              {
                id: 4,
                image: require("@/assets/images/user-9.jpg"),
              },
            ],
            number: "+10",
          },
          budget: "4,500",
          startDate: "25 Mar 2024",
          endDate: "25 Apr 2024",
          status: "Finished",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#853",
          projectName: "Digital Oasis Initiative",
          client: "AlphaWave Innovations",
          assignees: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-7.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-8.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-9.jpg"),
              },
            ],
            number: "+04",
          },
          budget: "6,800",
          startDate: "20 Mar 2024",
          endDate: "20 Apr 2024",
          status: "In Progress",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#852",
          projectName: "CloudScape Evolution",
          client: "InnovateIQ Inc.",
          assignees: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-10.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-12.jpg"),
              },
            ],
            number: "+07",
          },
          budget: "2,500",
          startDate: "15 Mar 2024",
          endDate: "15 Apr 2024",
          status: "Pending",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#851",
          projectName: "Data Dynamo Drive",
          client: "BlueSky Technologies",
          assignees: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-13.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-14.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-15.jpg"),
              },
              {
                id: 4,
                image: require("@/assets/images/user-12.jpg"),
              },
            ],
            number: "+15",
          },
          budget: "7,500",
          startDate: "10 Mar 2024",
          endDate: "10 Apr 2024",
          status: "In Progress",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#849",
          projectName: "QuantumLeap Quest",
          client: "NexGen Systems",
          assignees: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-7.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-9.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-6.jpg"),
              },
            ],
            number: "+03",
          },
          budget: "3,400",
          startDate: "05 Mar 2024",
          endDate: "05 Apr 2024",
          status: "Finished",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#854",
          projectName: "Project CyberSphere",
          client: "NovaTech Solutions",
          assignees: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-15.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-11.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-6.jpg"),
              },
              {
                id: 4,
                image: require("@/assets/images/user-9.jpg"),
              },
            ],
            number: "+10",
          },
          budget: "4,500",
          startDate: "25 Mar 2024",
          endDate: "25 Apr 2024",
          status: "Finished",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#853",
          projectName: "Digital Oasis Initiative",
          client: "AlphaWave Innovations",
          assignees: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-7.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-8.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-9.jpg"),
              },
            ],
            number: "+04",
          },
          budget: "6,800",
          startDate: "20 Mar 2024",
          endDate: "20 Apr 2024",
          status: "In Progress",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#852",
          projectName: "CloudScape Evolution",
          client: "InnovateIQ Inc.",
          assignees: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-10.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-12.jpg"),
              },
            ],
            number: "+07",
          },
          budget: "2,500",
          startDate: "15 Mar 2024",
          endDate: "15 Apr 2024",
          status: "Pending",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#851",
          projectName: "Data Dynamo Drive",
          client: "BlueSky Technologies",
          assignees: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-13.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-14.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-15.jpg"),
              },
              {
                id: 4,
                image: require("@/assets/images/user-12.jpg"),
              },
            ],
            number: "+15",
          },
          budget: "7,500",
          startDate: "10 Mar 2024",
          endDate: "10 Apr 2024",
          status: "In Progress",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#849",
          projectName: "QuantumLeap Quest",
          client: "NexGen Systems",
          assignees: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-7.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-9.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-6.jpg"),
              },
            ],
            number: "+03",
          },
          budget: "3,400",
          startDate: "05 Mar 2024",
          endDate: "05 Apr 2024",
          status: "Finished",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
      ],
    };
  },
  setup() {
    const wordConfirmed = ref("Finished");
    const wordInProgress = ref("In Progress");
    const wordPending = ref("Pending");

    const computeClass = (classValue: string) => {
      return {
        published: wordConfirmed.value === classValue,
        inProgress: wordInProgress.value === classValue,
        pending: wordPending.value === classValue,
      };
    };

    return {
      computeClass,
    };
  },
});
</script>
