<template>
  <v-card
    class="popular-rooms-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Popular Rooms</h5>
      <div class="">
        <div class="swiper-pagination-popular-rooms"></div>
      </div>
    </div>

    <div class="trezo-card-content">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :centeredSlides="false"
        :preventClicks="true"
        :loop="false"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :pagination="{
          el: '.swiper-pagination-popular-rooms',
          clickable: true,
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 4,
          },
          1850: {
            slidesPerView: 4,
          },
        }"
        :modules="modules"
        class="popular-rooms-slide"
      >
        <SwiperSlide v-for="(room, index) in rooms" :key="index">
          <div class="image position-relative">
            <RouterLink to="/hotel/room-details" class="d-block border-radius">
              <v-img :src="room.image" class="border-radius" :alt="room.name" />
            </RouterLink>
            <span :class="`trezo-badge with-border ${room.status.class}`">
              {{ room.status.text }}
            </span>
          </div>
          <h6 class="fw-semibold">
            <RouterLink to="/hotel/room-details">
              {{ room.name }}
            </RouterLink>
          </h6>
          <span class="d-block">
            Code
            <strong class="fw-semibold">{{ room.code }}</strong>
          </span>
        </SwiperSlide>
      </Swiper>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

export default defineComponent({
  name: "PopularRooms",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const rooms = [
      {
        id: 1,
        name: "The Velvet - F - 32045",
        code: "SJ-32056",
        image: require("@/assets/images/room-1.jpg"),
        status: {
          text: "Booked",
          class: "cancelled",
        },
      },
      {
        id: 2,
        name: "Duluxe Room - G - 3215",
        code: "SJ-32057",
        image: require("@/assets/images/room-2.jpg"),
        status: {
          text: "Available",
          class: "finished",
        },
      },
      {
        id: 3,
        name: "The Garden Suite 101",
        code: "SJ-32058",
        image: require("@/assets/images/room-3.jpg"),
        status: {
          text: "Booked",
          class: "cancelled",
        },
      },
      {
        id: 4,
        name: "The Tranquil S-02",
        code: "SJ-32059",
        image: require("@/assets/images/room-4.jpg"),
        status: {
          text: "Available",
          class: "finished",
        },
      },
      {
        id: 5,
        name: "The Velvet - F - 32045",
        code: "SJ-32056",
        image: require("@/assets/images/room-1.jpg"),
        status: {
          text: "Booked",
          class: "cancelled",
        },
      },
      {
        id: 6,
        name: "Duluxe Room - G - 3215",
        code: "SJ-32057",
        image: require("@/assets/images/room-2.jpg"),
        status: {
          text: "Available",
          class: "finished",
        },
      },
      {
        id: 7,
        name: "The Garden Suite 101",
        code: "SJ-32058",
        image: require("@/assets/images/room-3.jpg"),
        status: {
          text: "Booked",
          class: "cancelled",
        },
      },
      {
        id: 8,
        name: "The Tranquil S-02",
        code: "SJ-32059",
        image: require("@/assets/images/room-4.jpg"),
        status: {
          text: "Available",
          class: "finished",
        },
      },
    ];

    return {
      modules: [Autoplay, Pagination],
      rooms,
    };
  },
});
</script>

<style scoped lang="scss">
.popular-rooms-card {
  .trezo-card-content {
    .image {
      .trezo-badge {
        top: 10px;
        right: 10px;
        position: absolute;
        border-radius: 30px;
      }
    }
    h6 {
      font-size: 16px;
      margin: {
        top: 18px;
        bottom: 6px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .popular-rooms-card {
    .trezo-card-content {
      h6 {
        font-size: 15px;
        margin-top: 15px;
      }
    }
  }
}
</style>
