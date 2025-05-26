<template>
  <v-dialog max-width="550">
    <template v-slot:activator="{ props: activatorProps }">
      <button v-bind="activatorProps" class="add-new-card-btn">
        View Details
      </button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h5 class="mb-0">Schedule Details</h5>
          <button
            class="close-btn bg-transparent p-0 border-none"
            @click="isActive.value = false"
          >
            <i class="ri-close-fill"></i>
          </button>
        </div>

        <div class="schedule-details-content">
          <ul class="p-0 m-0 list-unstyled">
            <li class="fw-medium text-black">
              <span class="d-block fw-normal text-body"> Date </span>
              07 Nov, 2025
            </li>
            <li class="time text-black">
              <span class="d-block fw-normal text-body"> Time </span>
              10:00 AM
            </li>
            <li class="fw-medium text-black">
              <span class="d-block fw-normal text-body">
                Schedule Description
              </span>
              Appointment With Cardiac Patient
            </li>
            <li class="fw-medium text-black">
              <span class="d-block fw-normal text-body"> Patient Name </span>
              <div class="patient-name d-flex align-items-center">
                <v-img
                  src="@/assets/images/users/user32.jpg"
                  alt="patient-image"
                  class="rounded-circle"
                />
                <span> Jonathon Ronan </span>
              </div>
            </li>
            <li>
              <span class="d-block fw-normal"> Schedule Status </span>
              <span class="trezo-status-badge finished fw-normal">
                completed
              </span>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScheduleDetails",
  data() {
    return {
      favorites: [],
      teamMembers: [
        "Sarah Johnson",
        "Michael Smith",
        "Emily Brown",
        "Jason Lee",
        "Ashley Davis",
        "Mark Thompson",
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.add-new-card-btn {
  height: auto;
  min-width: auto;
  font-weight: 500;
  padding: 8px 15px;
  position: relative;
  border-radius: 7px;
  display: inline-block;
  color: var(--primaryColor);
  background-color: var(--whiteColor);
}

.schedule-details-content {
  padding: 25px;
  ul {
    li {
      font-size: 16px;
      margin-bottom: 25px;

      span {
        font-size: var(--fontSize);
        margin-bottom: 4px;
      }
      &.time {
        font: {
          size: 28px;
          weight: 900;
        }
      }
      .patient-name {
        gap: 8px;

        .v-img {
          width: 24px;
        }
        span {
          font-size: 16px;
        }
      }
      .trezo-status-badge {
        border-radius: 30px;
        padding: 1px 10px;
        font-size: 12px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .schedule-details-content {
    ul {
      li {
        font-size: 15px;
        margin-bottom: 20px;

        &.time {
          font-size: 24px;
        }
        .patient-name {
          span {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
