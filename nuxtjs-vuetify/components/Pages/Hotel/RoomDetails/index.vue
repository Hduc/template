<template>
  <div class="row">
    <div class="col-lg-4">
      <div
        class="bg-white border-0 rounded-3 mb-3 bg-for-dark-room-details"
        style="padding: 13px"
      >
        <Swiper
          :spaceBetween="15"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="room-details-slide2"
        >
          <SwiperSlide>
            <v-img
              src="@/assets/images/room-10.jpg"
              class="rounded-3 w-100"
              alt="room"
            />
          </SwiperSlide>
          <SwiperSlide>
            <v-img
              src="@/assets/images/room-11.jpg"
              class="rounded-3 w-100"
              alt="room"
            />
          </SwiperSlide>
          <SwiperSlide>
            <v-img
              src="@/assets/images/room-12.jpg"
              class="rounded-3 w-100"
              alt="room"
            />
          </SwiperSlide>
          <SwiperSlide>
            <v-img
              src="@/assets/images/room-13.jpg"
              class="rounded-3 w-100"
              alt="room"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <Swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="15"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="room-details-slide thumb"
      >
        <SwiperSlide>
          <v-img
            src="@/assets/images/room-10.jpg"
            class="rounded-3"
            alt="room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <v-img
            src="@/assets/images/room-11.jpg"
            class="rounded-3"
            alt="room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <v-img
            src="@/assets/images/room-12.jpg"
            class="rounded-3"
            alt="room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <v-img
            src="@/assets/images/room-13.jpg"
            class="rounded-3"
            alt="room"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="col-lg-8">
      <v-card
        class="room-details-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="trezo-card-content">
          <div class="author-info d-md-flex align-items-center">
            <v-img
              src="@/assets/images/user-190.jpg"
              class="rounded-circle"
              alt="user"
            />
            <div>
              <span class="d-block text-xs"> Code: TRZ-32 </span>
              <h3>Serenity Suite</h3>
              <ul class="p-0 m-0 list-unstyled">
                <li class="d-inline-block position-relative">
                  <i class="ri-phone-fill"></i>
                  +321 1245 6457
                </li>
                <li class="d-inline-block position-relative">
                  <i class="ri-mail-line"></i>
                  anderson350&#64;gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div class="border-top"></div>
          <div class="check-in-out-info d-md-flex">
            <div class="date d-flex align-items-center">
              <v-img src="@/assets/images/schedule.svg" alt="schedule" />
              <div>
                <span class="d-block text-xs"> Check In </span>
                <span class="d-block text-black fw-semibold">
                  23 June 2025, 15:12 AM
                </span>
              </div>
            </div>
            <div class="date d-flex align-items-center">
              <v-img src="@/assets/images/schedule.svg" alt="schedule" />
              <div>
                <span class="d-block text-xs"> Check Out </span>
                <span class="d-block text-black fw-semibold">
                  25 June 2025, 14:20 PM
                </span>
              </div>
            </div>
          </div>
          <div class="border-top"></div>
          <h4>Room Info</h4>
          <div class="room-info">
            <div class="row g-0">
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Room Code </span>
                  <span class="d-block">
                    <span class="text-black">L1-15</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Room Name </span>
                  <span class="d-block">
                    <span class="text-black">Moonlight</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Air Conditioner </span>
                  <span class="d-block">
                    <span class="text-black">Yes</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Rate </span>
                  <span class="d-block">
                    <span class="text-black">$156</span>/night
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Free WiFi </span>
                  <span class="d-block">
                    <span class="text-black">Yes</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Bathroom </span>
                  <span class="d-block">
                    <span class="text-black">2</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Bed </span>
                  <span class="d-block">
                    <span class="text-black">2</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Heater </span>
                  <span class="d-block">
                    <span class="text-black">No</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h4>Description</h4>
          <p>
            This room captures the essence of boundless potential, symbolized by
            a surreal landscape where the sky meets the earth in a dazzling
            fusion of colors. The intricate design features flowing lines that
            blend together, representing the limitless paths we can take in
            life.
          </p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs } from "swiper/modules";

export default defineComponent({
  name: "RoomDetails",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper: any) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Thumbs],
    };
  },
});
</script>

<style scoped lang="scss">
.room-details-card {
  height: 100%;

  .trezo-card-content {
    .author-info {
      gap: 15px;

      .v-img {
        width: 85px;
      }
      h3 {
        font-size: 24px;
        margin: {
          top: 6px;
          bottom: 10px;
        }
      }
      ul {
        li {
          margin-right: 20px;
          padding-left: 25px;

          i {
            left: 0;
            top: 50%;
            font-size: 18px;
            position: absolute;
            color: var(--orangeColor);
            transform: translateY(-50%);
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .check-in-out-info {
      gap: 40px;

      .date {
        gap: 10px;
      }
    }
    .border-top {
      border-color: var(--borderColor) !important;
      margin: {
        top: 25px;
        bottom: 25px;
      }
    }
    h4 {
      font-size: 18px;
      margin-bottom: 12px;
    }
    .room-info {
      margin: {
        bottom: 25px;
        top: 15px;
      }
      .item {
        padding: 10px 20px;
        border: 1px solid var(--borderColor);
      }
      .col-md-6 {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6) {
          .item {
            border-bottom-width: 0;
          }
        }
        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(5),
        &:nth-child(7),
        &:nth-child(9),
        &:nth-child(11) {
          .item {
            border-right-width: 0;
          }
        }
      }
    }
  }
}
.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .room-details-card {
    height: auto;
    margin-top: 25px;

    .trezo-card-content {
      .author-info {
        img {
          margin-bottom: 15px;
        }
        h3 {
          font-size: 20px;
          margin: {
            top: 5px;
            bottom: 8px;
          }
        }
        ul {
          li {
            margin: 8px 0 0;
            display: block !important;
          }
        }
      }
      .check-in-out-info {
        .date {
          margin-bottom: 15px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .border-top {
        margin: {
          top: 17px;
          bottom: 17px;
        }
      }
      h4 {
        font-size: 16px;
      }
      .room-info {
        margin: {
          bottom: 17px;
          top: 15px;
        }
        .item {
          padding: 10px 15px;
        }
        .col-md-6 {
          &:nth-child(7) {
            .item {
              border-bottom-width: 0;
            }
          }
          &:nth-child(1),
          &:nth-child(3),
          &:nth-child(5),
          &:nth-child(7),
          &:nth-child(9),
          &:nth-child(11) {
            .item {
              border-right-width: 1px;
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .room-details-card {
    .trezo-card-content {
      .border-top {
        margin: {
          top: 20px;
          bottom: 20px;
        }
      }
      .room-info {
        margin-bottom: 20px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .room-details-card {
    height: auto;
    margin-top: 25px;

    .trezo-card-content {
      h4 {
        font-size: 17px;
      }
    }
  }
}
</style>
