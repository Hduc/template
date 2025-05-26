<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">With Dots Controls</h5>
    </div>
    <Carousel v-bind="config">
      <Slide v-for="slide in items" :key="slide.id">
        <v-img :src="slide.image" class="border-radius" alt="course-image" />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/carousel.css";

export default defineComponent({
  name: "DotsControls",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  setup() {
    const config = {
      itemsToShow: 1,
      autoplay: 3000,
      wrapAround: true,
      pauseAutoplayOnHover: true,
    };

    const items = [
      {
        id: 1,
        image: require("@/assets/images/gallery/gallery1.jpg"),
      },
      {
        id: 2,
        image: require("@/assets/images/gallery/gallery2.jpg"),
      },
      {
        id: 3,
        image: require("@/assets/images/gallery/gallery3.jpg"),
      },
    ];

    return {
      config,
      items,
    };
  },
});
</script>
