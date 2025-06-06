<template>
  <v-card
    class="recent-appointments-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Appointments</h5>

      <div class="date-menu-btn d-inline-block border-radius border-0 bg-gray">
        <span class="d-block position-relative">{{ formattedDate }}</span>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="calendar">
            <div
              class="header d-flex align-items-center justify-content-between"
            >
              <button
                @click="previousMonth"
                class="p-0 border-0 d-flex align-items-center justify-content-center rounded-circle transition"
              >
                <i class="material-symbols-outlined">chevron_left</i>
              </button>
              <span class="fw-medium text-black">
                {{ monthNames[currentMonth] }} {{ currentYear }}
              </span>
              <button
                @click="nextMonth"
                class="p-0 border-0 d-flex align-items-center justify-content-center rounded-circle transition"
              >
                <i class="material-symbols-outlined">chevron_right</i>
              </button>
            </div>
            <div class="weekdays text-center">
              <div v-for="day in weekdays" :key="day">{{ day }}</div>
            </div>
            <div class="days text-center">
              <div
                v-for="(day, index) in daysInMonth"
                :key="index"
                class="card border-0 mx-auto text-black fw-medium border-radius"
                :class="{ 'current-day': day.isToday }"
              >
                <span v-if="day.day !== null">{{ day.day }}</span>
                <span v-else class="blank-day">&nbsp;</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="appointments-list position-relative scrollbar">
            <div
              v-for="(appointment, index) in appointments"
              :key="index"
              class="appointment-item card border-0 position-relative border-radius"
            >
              <div class="icon">
                <v-img
                  :src="appointment.status === 'Done' ? doneIcon : notDoneIcon"
                  alt="status"
                />
              </div>
              <div class="d-flex justify-content-between">
                <div class="info">
                  <span class="d-block text-black fw-medium">
                    {{ appointment.time }}
                  </span>
                  <span class="title d-block text-primary fw-semibold">
                    {{ appointment.title }}
                  </span>
                </div>
                <div class="status">
                  <span
                    :class="`trezo-badge ${appointment.status.toLowerCase()}`"
                  >
                    {{ appointment.status }}
                  </span>
                </div>
              </div>
              <div
                class="user-info d-sm-flex d-lg-block d-xxl-flex justify-content-between"
              >
                <div class="user d-flex align-items-center">
                  <v-img
                    :src="appointment.client.image"
                    class="rounded-circle"
                    alt="user-image"
                  />
                  <div>
                    <span class="d-block text-xs">Client</span>
                    <span class="d-block text-black fw-semibold">
                      {{ appointment.client.name }}
                    </span>
                  </div>
                </div>
                <div class="user d-flex align-items-center">
                  <v-img
                    :src="appointment.servedBy.image"
                    class="rounded-circle"
                    alt="user-image"
                  />
                  <div>
                    <span class="d-block text-xs">Served by</span>
                    <span class="d-block text-black fw-semibold">
                      {{ appointment.servedBy.name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "@/assets/images/users/user36.jpg";
import image2 from "@/assets/images/users/user37.jpg";
import image3 from "@/assets/images/users/user38.jpg";
import image4 from "@/assets/images/users/user40.jpg";
import doneIcon from "@/assets/images/icons/done.svg";
import notDoneIcon from "@/assets/images/icons/not-done.svg";

export default defineComponent({
  name: "RecentAppointments",
  setup() {
    const currentDate = ref(new Date());
    const currentMonth = ref(currentDate.value.getMonth());
    const currentYear = ref(currentDate.value.getFullYear());

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    interface Appointment {
      time: string;
      title: string;
      status: string;
      client: {
        name: string;
        image: string;
      };
      servedBy: {
        name: string;
        image: string;
      };
    }

    interface CalendarDay {
      day: number | null;
      isToday: boolean;
    }

    const appointments = ref<Appointment[]>([
      {
        time: "10:00 AM",
        title: "Pedicure Treatment",
        status: "Done",
        client: {
          name: "Jonathon Ronan",
          image: image1,
        },
        servedBy: {
          name: "Zinia Andy",
          image: image2,
        },
      },
      {
        time: "11:00 AM",
        title: "Facial Treatment",
        status: "Upcoming",
        client: {
          name: "Angela Carter",
          image: image3,
        },
        servedBy: {
          name: "Skyler White",
          image: image4,
        },
      },
      {
        time: "10:00 AM",
        title: "Pedicure Treatment",
        status: "Upcoming",
        client: {
          name: "Jonathon Ronan",
          image: image1,
        },
        servedBy: {
          name: "Zinia Andy",
          image: image2,
        },
      },
      {
        time: "11:00 AM",
        title: "Facial Treatment",
        status: "Upcoming",
        client: {
          name: "Angela Carter",
          image: image3,
        },
        servedBy: {
          name: "Skyler White",
          image: image4,
        },
      },
    ]);

    const daysInMonth = computed(() => {
      const year = currentYear.value;
      const month = currentMonth.value;
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const days: CalendarDay[] = [];

      for (let i = 0; i < firstDay.getDay(); i++) {
        days.push({ day: null, isToday: false });
      }

      for (let i = 1; i <= lastDay.getDate(); i++) {
        const day = new Date(year, month, i);
        days.push({
          day: i,
          isToday: day.toDateString() === new Date().toDateString(),
        });
      }

      return days;
    });

    const formattedDate = computed(() => {
      return currentDate.value.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    });

    const previousMonth = () => {
      if (currentMonth.value === 0) {
        currentMonth.value = 11;
        currentYear.value--;
      } else {
        currentMonth.value--;
      }
    };

    const nextMonth = () => {
      if (currentMonth.value === 11) {
        currentMonth.value = 0;
        currentYear.value++;
      } else {
        currentMonth.value++;
      }
    };

    return {
      currentMonth,
      currentYear,
      monthNames,
      weekdays,
      daysInMonth,
      formattedDate,
      appointments,
      previousMonth,
      nextMonth,
      doneIcon,
      notDoneIcon,
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-appointments-card {
  .v-card-header {
    .date-menu-btn {
      padding: 6.5px 19px;
      span {
        padding-right: 22px;
        &::before {
          top: 50%;
          right: -3px;
          content: "\eb21";
          position: absolute;
          transform: translateY(-50%);
          font-size: 18px;
          font-family: remixicon;
        }
      }
    }
  }
  .trezo-card-content {
    .calendar {
      margin-right: 25px;

      .header {
        margin-bottom: 12px;
        display: none !important;

        button {
          background-color: #e6eff2;
          color: var(--blackColor);
          height: 30px;
          width: 30px;

          i {
            font-size: 22px;
          }
          &:hover {
            background-color: var(--primaryColor);
            color: var(--whiteColor);
          }
        }
      }
      .weekdays {
        margin-bottom: 10px;
        font-size: 12px;
      }
      .weekdays,
      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
      }
      .days {
        gap: 2px;

        div {
          width: 100%;
          height: 51px;
          cursor: pointer;
          line-height: 51px;
          background-color: #e6eff2;

          &:has(.blank-day) {
            background-color: transparent;
          }
        }
        .current-day {
          span {
            background-color: var(--primaryColor);
            color: var(--whiteColor);
            display: inline-block;
            border-radius: 50%;
            line-height: 30px;
            height: 30px;
            width: 30px;
            margin: auto;
          }
        }
      }
    }
    .appointments-list {
      height: 292px;
      margin-left: -25px;
      margin-right: -25px;

      .appointment-item {
        padding: 20px;
        background-color: #dde4ff;
        margin: {
          top: 20px;
          left: 40px;
          right: 20px;
        }
        .icon {
          top: 50%;
          left: -39px;
          position: absolute;
          transform: translateY(-50%);
        }
        .info {
          .title {
            margin-top: 4px;
          }
        }
        .status {
          .trezo-badge {
            border-radius: 30px;
            padding: 0 10px;
          }
        }
        .user-info {
          margin-top: 15px;

          .user {
            gap: 8px;

            .v-img {
              width: 35px;
              border: 1px solid var(--whiteColor);
            }
            span {
              font-size: 13px;

              &.text-xs {
                font-size: 12px;
                margin-bottom: -2px;
              }
            }
          }
        }
        &:first-child {
          margin-top: 0;

          &::before {
            margin-top: 0;
          }
        }
        &::before {
          top: 0;
          bottom: 0;
          width: 1px;
          content: "";
          left: -28px;
          margin-top: -20px;
          position: absolute;
          background: var(--borderColor);
        }
        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(6) {
          background-color: #f3e8ff;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .recent-appointments-card {
    .trezo-card-header {
      .trezo-card-subtitle {
        margin-top: 12px;
      }
    }
    .trezo-card-content {
      .calendar {
        margin: {
          right: 0;
          bottom: 17px;
        }
      }
      .appointments-list {
        margin-left: 0;
        margin-right: -17px;

        .appointment-item {
          padding: 17px;
          margin: {
            top: 17px;
            left: 17px;
          }
          .icon {
            left: -28px;
          }
          .info {
            .title {
              margin-top: 4px;
            }
          }
          .user-info {
            margin-top: 0;

            .user {
              margin-top: 10px;
            }
          }
          &::before {
            left: -17px;
            margin-top: -17px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .recent-appointments-card {
    .trezo-card-header {
      .trezo-card-subtitle {
        margin-top: 0;
      }
    }
    .trezo-card-content {
      .calendar {
        margin-bottom: 20px;
      }
      .appointments-list {
        margin-right: -20px;
        .appointment-item {
          padding: 20px;
          margin: {
            top: 20px;
            left: 20px;
          }
          .icon {
            left: -31px;
          }
          &::before {
            left: -20px;
            margin-top: -20px;
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .recent-appointments-card {
    .trezo-card-content {
      .appointments-list {
        .appointment-item {
          .user-info {
            margin-top: 0;

            .user {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .recent-appointments-card {
    .trezo-card-content {
      .appointments-list {
        .appointment-item {
          .user-info {
            margin-top: 0;

            .user {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
