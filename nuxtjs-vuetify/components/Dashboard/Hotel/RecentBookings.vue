<template>
  <v-card
    class="recent-bookings-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="fs-18 fw-bold mb-0">Recent Bookings</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius border-0 bg-gray"
          >
            {{ formattedDate }}
          </button>
        </template>
      </v-menu>
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
          <div v-for="day in weekdays" :key="day">{{ day }}</div>
        </div>
        <div class="days text-center">
          <div
            v-for="(day, index) in daysInMonth"
            :key="index"
            class="card border-0 mx-auto text-black fw-medium border-radius"
            :class="{ 'current-day': isToday(day) }"
          >
            <span v-if="day !== null">{{ day }}</span>
            <span v-else class="blank-day">&nbsp;</span>
          </div>
        </div>
      </div>

      <div class="bookings-list scrollbar">
        <div
          class="room-item position-relative d-flex align-items-center"
          v-for="(booking, index) in bookings"
          :key="index"
        >
          <RouterLink to="/hotel/room-details" class="image d-block">
            <v-img :src="booking.image" alt="room" />
          </RouterLink>
          <div class="content">
            <h6 class="fw-semibold">
              <RouterLink to="/hotel/room-details">
                {{ booking.roomName }}
              </RouterLink>
            </h6>
            <span class="d-block text-xs">
              Booked by
              <strong class="fw-semibold">{{ booking.guestName }}</strong>
            </span>
            <span class="trezo-badge">
              {{ formatBookingDates(booking.checkIn, booking.checkOut) }}
            </span>
          </div>
          <RouterLink
            to="/hotel/room-details"
            class="link-btn d-flex align-items-center justify-content-center rounded-circle"
          >
            <i class="ri-arrow-right-line"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";

import image1 from "@/assets/images/room-5.jpg";
import image2 from "@/assets/images/room-6.jpg";
import image3 from "@/assets/images/room-7.jpg";
import image4 from "@/assets/images/room-8.jpg";

interface Booking {
  id: number;
  roomName: string;
  guestName: string;
  checkIn: Date;
  checkOut: Date;
  image: string;
}

export default defineComponent({
  name: "RecentBookings",
  setup() {
    const currentDate = ref(new Date());
    const currentMonth = ref(currentDate.value.getMonth());
    const currentYear = ref(currentDate.value.getFullYear());
    const currentDay = ref<number>(0);
    const today = ref<{ year: number; month: number; day: number }>({
      year: 0,
      month: 0,
      day: 0,
    });
    const weekdays = ref<string[]>([
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ]);
    const monthNames = ref<string[]>([
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

    const bookings = ref<Booking[]>([
      {
        id: 1,
        roomName: "Deluxe Room - G - 3215",
        guestName: "Angela Carter",
        checkIn: new Date(2025, 11, 10),
        checkOut: new Date(2025, 11, 15),
        image: image1,
      },
      {
        id: 2,
        roomName: "The Garden Suite 101",
        guestName: "Jack Smith",
        checkIn: new Date(2025, 11, 12),
        checkOut: new Date(2025, 11, 16),
        image: image2,
      },
      {
        id: 3,
        roomName: "The Tranquil S-02",
        guestName: "Jennifer Anderson",
        checkIn: new Date(2025, 11, 15),
        checkOut: new Date(2025, 11, 20),
        image: image3,
      },
      {
        id: 4,
        roomName: "The Queen - X - 231",
        guestName: "Robert Johnson",
        checkIn: new Date(2025, 11, 11),
        checkOut: new Date(2025, 11, 14),
        image: image4,
      },
      {
        id: 5,
        roomName: "Executive Suite - A - 100",
        guestName: "Sarah Williams",
        checkIn: new Date(2025, 11, 18),
        checkOut: new Date(2025, 11, 22),
        image: image1,
      },
      {
        id: 6,
        roomName: "The Garden Suite 101",
        guestName: "Jack Smith",
        checkIn: new Date(2025, 11, 12),
        checkOut: new Date(2025, 11, 16),
        image: image2,
      },
      {
        id: 7,
        roomName: "The Tranquil S-02",
        guestName: "Jennifer Anderson",
        checkIn: new Date(2025, 11, 15),
        checkOut: new Date(2025, 11, 20),
        image: image3,
      },
      {
        id: 8,
        roomName: "The Queen - X - 231",
        guestName: "Robert Johnson",
        checkIn: new Date(2025, 11, 11),
        checkOut: new Date(2025, 11, 14),
        image: image4,
      },
    ]);

    // Initialize calendar
    const initializeCalendar = () => {
      const todayDate = new Date();
      currentMonth.value = todayDate.getMonth();
      currentYear.value = todayDate.getFullYear();
      currentDay.value = todayDate.getDate();
      today.value = {
        year: currentYear.value,
        month: currentMonth.value,
        day: currentDay.value,
      };
      generateCalendar();
    };

    // Generate calendar days
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

    // Navigate to previous month
    const previousMonth = () => {
      currentMonth.value--;
      if (currentMonth.value < 0) {
        currentMonth.value = 11;
        currentYear.value--;
      }
      generateCalendar();
    };

    // Navigate to next month
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

    const formattedDate = computed(() => {
      return currentDate.value.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    });

    const formatBookingDates = (checkIn: Date, checkOut: Date): string => {
      const formatOptions: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
      };
      return `${checkIn.toLocaleDateString(
        "en-US",
        formatOptions
      )} - ${checkOut.toLocaleDateString("en-US", formatOptions)}`;
    };

    // Initialize on component mount
    onMounted(() => {
      initializeCalendar();
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
      formattedDate,
      bookings,
      formatBookingDates,
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-bookings-card {
  &.v-card {
    &.trezo-card {
      .v-card-header {
        .card-header-menu {
          pointer-events: none;

          &::before {
            margin-top: 0;
            content: "\eb21";
          }
        }
      }
    }
  }
  .trezo-card-content {
    .calendar {
      .header {
        margin-bottom: 15px;

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
        margin-bottom: 12px;
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
          height: 50px;
          cursor: pointer;
          line-height: 50px;
          background-color: #e6eff2;

          &:has(.blank-day) {
            background-color: transparent;
          }
        }
        .current-day {
          line-height: initial;
          padding-top: 10px;

          span {
            background-color: var(--primaryColor);
            color: var(--whiteColor);
            display: inline-block;
            border-radius: 50%;
            line-height: 30px;
            height: 30px;
            width: 30px;
          }
        }
      }
    }
    .bookings-list {
      margin-top: 25px;
      height: 512px;

      .room-item {
        gap: 15px;
        margin-top: 15px;
        margin-right: 15px;
        padding-top: 15px;
        border-top: 1px solid var(--borderColor);

        .image {
          border-radius: 4px;

          .v-img {
            border-radius: 4px;
            width: 80px;
          }
        }
        .content {
          h6 {
            margin-bottom: 6px;
            font-size: var(--fontSize);
          }
          .trezo-badge {
            margin-top: 9px;
          }
        }
        .link-btn {
          right: 0;
          top: 50%;
          width: 30px;
          height: 30px;
          position: absolute;
          color: var(--bodyColor);
          background-color: #eceef2;
          transform: translateY(-50%);

          &:hover {
            color: var(--whiteColor);
            background-color: var(--primaryColor);
          }
        }
        &:first-child {
          margin-top: 0;
          padding-top: 0;
          border-top-width: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .recent-bookings-card {
    .trezo-card-content {
      .bookings-list {
        margin-top: 17px;
        height: 450px;

        .room-item {
          margin-top: 13px;
          padding-top: 13px;

          .image {
            .v-img {
              width: 70px;
            }
          }
        }
      }
    }
  }
  .recent-bookings-card {
    .trezo-card-content {
      .bookings-list {
        margin-right: -17px;

        .ng-scroll-content {
          padding-right: 17px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .recent-bookings-card {
    .trezo-card-content {
      .bookings-list {
        margin-right: -20px;

        .ng-scroll-content {
          padding-right: 20px;
        }
      }
    }
  }
}
</style>
