<template>
  <Carousel v-bind="config">
    <Slide v-for="slide in items" :key="slide.id">
      <v-img :src="slide.image" class="border-radius" alt="course-image" />
    </Slide>
  </Carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/carousel.css";

export default defineComponent({
  name: "SlidesOnly",
  components: {
    Carousel,
    Slide,
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
        image: require("@/assets/images/gallery/gallery3.jpg"),
      },
      {
        id: 2,
        image: require("@/assets/images/gallery/gallery2.jpg"),
      },
      {
        id: 3,
        image: require("@/assets/images/gallery/gallery1.jpg"),
      },
    ];

    return {
      config,
      items,
    };
  },
});
</script>
