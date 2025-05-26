<template>
  <v-card
    class="todays-schedule-card trezo-card mb-25 bg-white border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Today's Schedule</h5>
    </div>

    <div class="trezo-card-content">
      <div class="calendar">
        <div class="header d-flex align-items-center justify-content-between">
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
          <div class="text-black fw-medium" v-for="day in weekdays" :key="day">
            {{ day }}
          </div>
        </div>
        <div class="days text-center">
          <div
            v-for="(day, index) in daysInMonth"
            :key="index"
            :class="{ 'current-day': isToday(day) }"
          >
            <span v-if="day !== null">{{ day }}</span>
            <span v-else>&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  </v-card>

  <AddASchedule />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import AddASchedule from "./AddASchedule.vue";

export default defineComponent({
  name: "TodaySchedule",
  components: {
    AddASchedule,
  },
  setup() {
    // Calendar State
    const currentMonth = ref(new Date().getMonth());
    const currentYear = ref(new Date().getFullYear());
    const currentDay = ref(new Date().getDate());
    const today = ref({
      year: currentYear.value,
      month: currentMonth.value,
      day: currentDay.value,
    });
    const weekdays = ref(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
    const monthNames = ref([
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
    ]);
    const daysInMonth = ref<(number | null)[]>([]);

    // Generate Calendar
    const generateCalendar = () => {
      daysInMonth.value = [];
      const firstDay = new Date(
        currentYear.value,
        currentMonth.value,
        1
      ).getDay();
      const numberOfDays = new Date(
        currentYear.value,
        currentMonth.value + 1,
        0
      ).getDate();
      for (let i = 0; i < firstDay; i++) {
        daysInMonth.value.push(null); // Placeholder for days before the first of the month
      }
      for (let i = 1; i <= numberOfDays; i++) {
        daysInMonth.value.push(i);
      }
    };

    // Previous Month
    const previousMonth = () => {
      currentMonth.value--;
      if (currentMonth.value < 0) {
        currentMonth.value = 11;
        currentYear.value--;
      }
      generateCalendar();
    };

    // Next Month
    const nextMonth = () => {
      currentMonth.value++;
      if (currentMonth.value > 11) {
        currentMonth.value = 0;
        currentYear.value++;
      }
      generateCalendar();
    };

    // Check if a day is today
    const isToday = (day: number | null): boolean => {
      if (day === null) return false;
      return (
        today.value.year === currentYear.value &&
        today.value.month === currentMonth.value &&
        today.value.day === day
      );
    };

    // Popup State
    const classApplied = ref(false);
    const toggleClass = () => {
      classApplied.value = !classApplied.value;
    };

    // Initialize Calendar
    onMounted(() => {
      generateCalendar();
    });

    return {
      currentMonth,
      currentYear,
      currentDay,
      today,
      weekdays,
      monthNames,
      daysInMonth,
      previousMonth,
      nextMonth,
      isToday,
      classApplied,
      toggleClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.todays-schedule-card {
  .trezo-card-content {
    .calendar {
      .header {
        margin-bottom: 20px;

        button {
          background-color: var(--borderColor);
          color: var(--blackColor);
          height: 30px;
          width: 30px;

          &:hover {
            background-color: var(--primaryColor);
            color: var(--whiteColor);
          }
        }
      }
      .weekdays {
        margin-bottom: 6px;
      }
      .weekdays,
      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
      }
      .days {
        div {
          width: 32px;
          height: 32px;
          cursor: pointer;
          line-height: 31px;
          border-radius: 50%;
          margin: {
            top: 7px;
            left: auto;
            bottom: 7px;
            right: auto;
          }
        }
        .current-day {
          background-color: var(--primaryColor);
          color: var(--whiteColor);
        }
      }
    }
  }
}

.add-btn {
  height: auto;
  min-width: auto;
  font-weight: 500;
  padding: 6px 13px 6px 35px;
  border-radius: 7px;
  display: inline-block;
  color: var(--whiteColor);
  border: 1px solid var(--primaryColor);
  background-color: var(--primaryColor);
  position: relative;

  i {
    top: 50%;
    left: 8px;
    font-size: 22px;
    position: absolute;
    transform: translateY(-50%);
  }
}

.add-new-popup {
  .popup-dialog {
    .trezo-card {
      .trezo-card-content {
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

              img {
                width: 24px;
              }
              span {
                font-size: 16px;
              }
            }
            .trezo-badge {
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
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .add-new-popup {
    .popup-dialog {
      .trezo-card {
        .trezo-card-content {
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
    }
  }
}
</style>
