<template>
  <v-card
    class="client-ratings-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Client Ratings</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius bg-gray border-0"
          >
            {{ currentFilter }}
          </button>
        </template>
        <v-list class="menu-content">
          <v-list-item v-for="filter in filters" :key="filter">
            <v-list-item-title
              @click="changeFilter(filter)"
              style="cursor: pointer"
            >
              {{ filter }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
          el: '.swiper-pagination-client-ratings',
          clickable: true,
        }"
        :breakpoints="{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
          1850: { slidesPerView: 3 },
        }"
        :modules="modules"
        class="client-ratings-slide"
      >
        <SwiperSlide v-for="(rating, index) in filteredRatings" :key="index">
          <div :class="`item border-radius ${rating.bgColor}`">
            <div class="user-info d-flex align-items-center">
              <v-img
                :src="rating.avatar"
                style="width: 38px; height: 38px; top: -2px"
                class="rounded-circle"
                :alt="rating.name"
              />
              <div>
                <h6 class="fw-semibold">
                  {{ rating.name }}
                </h6>
                <span class="d-block text-xs">
                  {{ rating.location }}
                </span>
              </div>
            </div>
            <p class="text-black">{{ rating.comment }}”</p>
            <div class="info d-flex align-items-center justify-content-between">
              <div class="ratings lh-1 d-flex align-items-center">
                <i
                  v-for="star in 5"
                  :key="star"
                  :class="getStarClass(star, rating.rating)"
                  class="lh-1"
                ></i>
                <span class="number text-body position-relative">
                  {{ rating.rating.toFixed(1) }}
                </span>
              </div>
              <div class="icon text-white lh-1">
                <i class="ri-double-quotes-r"></i>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="swiper-pagination-client-ratings text-center mt-4 lh-1"></div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

interface Rating {
  id: number;
  name: string;
  location: string;
  avatar: string;
  comment: string;
  rating: number;
  date: string;
  bgColor: string;
}

export default defineComponent({
  name: "ClientRatings",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const currentFilter = ref<string>("Top Rated");
    const filters = ["Top Rated", "Latest", "Oldest"];

    const ratings = ref<Rating[]>([
      {
        id: 1,
        name: "David Carlen",
        location: "New Castle, United Kingdom",
        avatar: require("@/assets/images/user-182.jpg"),
        comment:
          "Working with William was an absolute pleasure. His market knowledge and attention to detail helped us sell our home quickly and at a great price.",
        rating: 5.0,
        date: "2023-10-15",
        bgColor: "bg-primary-50",
      },
      {
        id: 2,
        name: "Zinia Anderson",
        location: "New Brunchwick, Canada",
        avatar: require("@/assets/images/user-183.jpg"),
        comment:
          "William's professionalism and responsiveness set him apart from other agents. He listened, and delivered outstanding results.",
        rating: 4.9,
        date: "2023-11-02",
        bgColor: "bg-orange-50",
      },
      {
        id: 3,
        name: "Walter White",
        location: "New York, USA",
        avatar: require("@/assets/images/user-184.jpg"),
        comment:
          "Thanks to William, I felt confident every step of the way during my first home purchase. His friendly demeanor and expert advice helped us.",
        rating: 4.5,
        date: "2023-09-20",
        bgColor: "bg-success-50",
      },
      {
        id: 4,
        name: "Sarah Johnson",
        location: "Los Angeles, USA",
        avatar: require("@/assets/images/user-183.jpg"),
        comment:
          "Exceptional service! William went above and beyond to find us the perfect home. His negotiation skills saved us thousands.",
        rating: 4.2,
        date: "2023-12-05",
        bgColor: "bg-primary-50",
      },
      {
        id: 5,
        name: "Michael Brown",
        location: "Chicago, USA",
        avatar: require("@/assets/images/user-182.jpg"),
        comment:
          "As a first-time seller, I was nervous, but William made the process smooth and stress-free. Highly recommend!",
        rating: 4.0,
        date: "2023-08-14",
        bgColor: "bg-orange-50",
      },
      {
        id: 6,
        name: "Walter White",
        location: "New York, USA",
        avatar: require("@/assets/images/user-184.jpg"),
        comment:
          "Thanks to William, I felt confident every step of the way during my first home purchase. His friendly demeanor and expert advice helped us.",
        rating: 3.9,
        date: "2023-09-20",
        bgColor: "bg-success-50",
      },
    ]);

    const filteredRatings = computed(() => {
      const sorted = [...ratings.value];
      switch (currentFilter.value) {
        case "Top Rated":
          return sorted.sort((a, b) => b.rating - a.rating);
        case "Latest":
          return sorted.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        case "Oldest":
          return sorted.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );
        default:
          return sorted;
      }
    });

    const changeFilter = (filter: string) => {
      currentFilter.value = filter;
    };

    const getStarClass = (star: number, rating: number) => {
      if (star <= rating) {
        return "ri-star-fill text-danger";
      }
      if (star - 0.5 <= rating) {
        return "ri-star-half-line text-danger";
      }
      return "ri-star-line text-danger";
    };

    return {
      modules: [Autoplay, Pagination],
      currentFilter,
      filters,
      filteredRatings,
      changeFilter,
      getStarClass,
    };
  },
});
</script>

<style scoped lang="scss">
.client-ratings-card {
  .trezo-card-content {
    .item {
      padding: 25px;

      .user-info {
        gap: 12px;
        margin-bottom: 25px;

        img {
          width: 38px;
        }
        h6 {
          font-size: var(--fontSize);
          margin-bottom: 3px;
        }
      }
      p {
        font-size: 16px;
        line-height: 1.5;
      }
      .info {
        margin-top: 20px;

        .ratings {
          gap: 1px;
          color: #fd5812;

          .number {
            top: 1.7px;
            font-size: 12px;
            margin-left: 2px;
          }
        }
        .icon {
          font-size: 30px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .client-ratings-card {
    .trezo-card-content {
      .item {
        padding: 17px;

        .user-info {
          margin-bottom: 17px;
        }
        p {
          font-size: 14px;
        }
        .info {
          margin-top: 12px;

          .icon {
            font-size: 25px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .client-ratings-card {
    .trezo-card-content {
      .item {
        padding: 20px;
      }
    }
  }
}
</style>
