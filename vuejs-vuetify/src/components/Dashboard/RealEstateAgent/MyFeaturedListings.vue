<template>
  <v-card
    class="my-featured-listings-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">My Featured Listings</h5>

      <div class="">
        <div class="swiper-pagination-my-featured-listings"></div>
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
          el: '.swiper-pagination-my-featured-listings',
          clickable: true,
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 2,
          },
          1850: {
            slidesPerView: 2,
          },
        }"
        :modules="modules"
        class="my-featured-listings-slide"
      >
        <SwiperSlide
          v-for="(property, index) in featuredProperties"
          :key="index"
        >
          <div
            class="image position-relative"
            :style="{
              'background-image': `url(${property.image})`,
            }"
          >
            <span class="trezo-badge rejected">
              {{ property.type }}
            </span>
          </div>
          <div class="content bg-white">
            <h6 class="fw-semibold">
              <RouterLink to="/real-estate-agent/property-details">
                {{ property.title }}
              </RouterLink>
            </h6>
            <span class="d-block text-body">
              {{ property.location }}
            </span>
            <ul
              class="p-0 mb-0 list-unstyled d-flex align-items-center justify-content-between"
            >
              <li class="text-xs text-black position-relative">
                <i class="material-symbols-outlined"> open_run </i>
                {{ property.area }} Sft
              </li>
              <li class="text-xs text-black position-relative">
                <i class="material-symbols-outlined"> bed </i>
                {{ property.bedrooms }} Bed
              </li>
              <li class="text-xs text-black position-relative">
                <i class="material-symbols-outlined"> bathtub </i>
                {{ property.bathrooms }} Bath
              </li>
            </ul>
            <div class="info d-flex align-items-center justify-content-between">
              <div class="price lh-1 fw-bold text-black">
                ${{ property.price }}/m
              </div>
              <RouterLink
                to="/real-estate-agent/property-details"
                class="link-btn d-flex align-items-center justify-content-center rounded-circle"
              >
                <i class="ri-arrow-right-line"></i>
              </RouterLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

interface Property {
  id: number;
  image: string;
  type: string;
  title: string;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
}

export default defineComponent({
  name: "MyFeaturedListings",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const featuredProperties = ref<Property[]>([
      {
        id: 1,
        image: require("@/assets/images/property-1.jpg"),
        type: "For Rent",
        title: "Luxury Comfort Villa",
        location: "London, United Kingdom",
        area: 425,
        bedrooms: 3,
        bathrooms: 2,
        price: 4274,
      },
      {
        id: 2,
        image: require("@/assets/images/property-2.jpg"),
        type: "For Rent",
        title: "White House Villa",
        location: "New Castle, United Kingdom",
        area: 321,
        bedrooms: 2,
        bathrooms: 1,
        price: 4274,
      },
      {
        id: 3,
        image: require("@/assets/images/property-1.jpg"),
        type: "For Rent",
        title: "Luxury Comfort Villa",
        location: "London, United Kingdom",
        area: 425,
        bedrooms: 3,
        bathrooms: 2,
        price: 4274,
      },
      {
        id: 4,
        image: require("@/assets/images/property-2.jpg"),
        type: "For Rent",
        title: "White House Villa",
        location: "New Castle, United Kingdom",
        area: 321,
        bedrooms: 2,
        bathrooms: 1,
        price: 4274,
      },
    ]);

    return {
      modules: [Autoplay, Pagination],
      featuredProperties,
    };
  },
});
</script>

<style scoped lang="scss">
.my-featured-listings-card {
  &.v-card {
    &.trezo-card {
      background-color: #ffe8d4 !important;
    }
  }

  .trezo-card-content {
    .image {
      height: 202px;
      border-radius: 7px 7px 0 0;
      background: {
        position: center center;
        repeat: no-repeat;
        size: cover;
      }
      .trezo-badge {
        top: 10px;
        left: 10px;
        position: absolute;
      }
    }
    .content {
      padding: 20px;
      border-radius: 0 0 7px 7px;

      h6 {
        font-size: 16px;
        margin-bottom: 5px;
      }
      ul {
        margin-top: 13px;

        li {
          padding-left: 23px;

          i {
            left: 0;
            top: 50%;
            font-size: 18px;
            position: absolute;
            color: var(--bodyColor);
            transform: translateY(-50%);
          }
        }
      }
      .info {
        border-top: 1px solid var(--borderColor);
        padding-top: 13px;
        margin-top: 13px;

        .price {
          font-size: 16px;
        }
        .link-btn {
          width: 30px;
          height: 30px;
          color: var(--bodyColor);
          background-color: var(--borderColor);

          &:hover {
            color: var(--whiteColor);
            background-color: var(--primaryColor);
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .my-featured-listings-card {
    .trezo-card-content {
      .content {
        padding: 17px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .my-featured-listings-card {
    .trezo-card-content {
      .content {
        padding: 20px;
      }
    }
  }
}
</style>
