<template>
  <div class="row">
    <div class="col-lg-4">
      <div
        class="property-details-images-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="trezo-card-content position-relative">
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

          <span class="trezo-badge z-1"> For Sale </span>
        </div>
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
      <div class="mb-25"></div>
    </div>
    <div class="col-lg-8">
      <v-card
        class="property-details-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="trezo-card-content">
          <div class="d-md-flex align-items-center justify-content-between">
            <div>
              <span class="d-block text-xs"> Code: TRZ-32 </span>
              <h3>The Golden Haven</h3>
              <span class="location fw-semibold d-block position-relative">
                <i class="ri-map-pin-line"></i>
                123 Sunshine Boulevard, Vancouver, BC
              </span>
            </div>
            <div class="ratings lh-1">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <span class="d-inline-block lh-1 text-xs text-body"> 5.0 </span>
            </div>
          </div>
          <div
            class="info d-sm-flex align-items-center justify-content-between"
          >
            <ul class="m-0 list-unstyled p-0">
              <li class="d-inline-block position-relative">
                <i class="material-symbols-outlined"> open_run </i>
                425 sft
              </li>
              <li class="d-inline-block position-relative">
                <i class="material-symbols-outlined"> bed </i>
                3 Beds
              </li>
              <li class="d-inline-block position-relative">
                <i class="material-symbols-outlined"> bathtub </i>
                2 Baths
              </li>
            </ul>
            <div class="price fw-bold text-black">$4,274/m</div>
          </div>
          <h4>Property Description</h4>
          <p>
            Nestled in a serene neighborhood, this modern 3-bedroom home boasts
            an open-concept layout with abundant natural light. The chef’s
            kitchen features state-of-the-art appliances and a spacious island
            for entertaining.
          </p>
          <p>
            Enjoy the tranquility of a private backyard oasis with a patio and
            lush landscaping. Located minutes from top-rated schools, shopping,
            and parks, it offers convenience and comfort. This home is the
            perfect blend of style and functionality.
          </p>
          <div class="mb-25"></div>
          <h4>Property Details</h4>
          <div class="property-details-info">
            <div class="row g-0">
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Beds </span>
                  <span class="d-block">
                    <span class="text-black">03</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Ceiling Height </span>
                  <span class="d-block">
                    <span class="text-black">3.20</span> m
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Baths </span>
                  <span class="d-block">
                    <span class="text-black">02</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Property Type </span>
                  <span class="d-block">
                    <span class="text-black">Villa</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Floor </span>
                  <span class="d-block">
                    <span class="text-black">Ground</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Year Built </span>
                  <span class="d-block">
                    <span class="text-black">2010</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Garage </span>
                  <span class="d-block">
                    <span class="text-black">Yes</span>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Status </span>
                  <span class="d-block">
                    <span class="text-black">For Sale</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h4>Amenities</h4>
          <div class="amenities-list">
            <div class="row">
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  A/C & Heating
                </div>
              </div>
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  Parking
                </div>
              </div>
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  WiFi
                </div>
              </div>
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  Pet Friendly
                </div>
              </div>
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  Furniture
                </div>
              </div>
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  Ceiling Height
                </div>
              </div>
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  Play Ground
                </div>
              </div>
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  Elevator
                </div>
              </div>
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  Garage
                </div>
              </div>
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  Fireplace
                </div>
              </div>
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  Garden
                </div>
              </div>
              <div class="col-md-3 col-6 col-sm-4">
                <div class="item position-relative">
                  <i class="ri-check-line"></i>
                  Disabled Access
                </div>
              </div>
            </div>
          </div>
          <div class="mb-25"></div>
          <h4>Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.94539481518!2d-74.26675559025065!3d40.69739290398433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1678355274384!5m2!1sen!2sbd"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
  name: "PropertyDetails",
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
.property-details-images-card {
  padding: 13px;
  margin-bottom: 15px;

  .trezo-card-content {
    .trezo-badge {
      top: 15px;
      right: 15px;
      position: absolute;
    }
  }
}
.property-details-card {
  .trezo-card-content {
    h3 {
      font-size: 24px;
      margin: {
        top: 8px;
        bottom: 11px;
      }
    }
    .location {
      padding-left: 23px;

      i {
        left: 0;
        top: 50%;
        font-size: 17px;
        position: absolute;
        font-weight: normal;
        color: var(--primaryColor);
        transform: translateY(-50%);
      }
    }
    .ratings {
      font-size: 15px;
      color: #fe7a36;

      i {
        margin-right: 2px;

        &:last-child {
          margin-right: 0;
        }
      }
      span {
        &.text-xs {
          margin-left: 2px;
        }
      }
    }
    .info {
      margin: {
        top: 25px;
        bottom: 25px;
      }
      border: {
        top: 1px solid var(--borderColor);
        bottom: 1px solid var(--borderColor);
      }
      padding: {
        top: 12px;
        bottom: 12px;
      }
      ul {
        li {
          padding-left: 24px;
          margin-right: 25px;

          i {
            left: 0;
            top: 50%;
            font-size: 18px;
            position: absolute;
            transform: translateY(-50%);
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .price {
        font-size: 18px;
      }
    }
    h4 {
      font-size: 18px;
      margin-bottom: 15px;
    }
    .property-details-info {
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
    iframe {
      border-radius: 7px;
      border-width: 0;
      height: 250px;
      width: 100%;
    }
    .amenities-list {
      margin-bottom: -12px;

      .item {
        padding-left: 22px;
        margin-bottom: 12px;

        i {
          top: 50%;
          left: -3px;
          font-size: 18px;
          position: absolute;
          color: var(--primaryColor);
          transform: translateY(-50%);
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
  .property-details-card {
    .trezo-card-content {
      h3 {
        font-size: 20px;
        margin: {
          top: 8px;
          bottom: 10px;
        }
      }
      .ratings {
        margin-top: 12px;
      }
      .check-in-out-info {
        .date {
          margin-bottom: 15px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .info {
        margin: {
          top: 17px;
          bottom: 17px;
        }
        .price {
          margin-top: 12px;
        }
      }
      h4 {
        font-size: 16px;
      }
      .property-details-info {
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
      .mb-25 {
        margin-bottom: 17px !important;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .property-details-card {
    .trezo-card-content {
      .info {
        margin: {
          top: 20px;
          bottom: 20px;
        }
      }
      .property-details-info {
        margin-bottom: 20px;
      }
      .mb-25 {
        margin-bottom: 20px !important;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .property-details-card {
    .trezo-card-content {
      h4 {
        font-size: 17px;
      }
    }
  }
}
</style>
