<template>
    <Carousel v-bind="settings" :autoplay="5000" :wrap-around="true">
        <Slide v-for="slide in items" :key="slide.id">
            <v-img
                :src="slide.image"
                class="border-radius"
                alt="course-image"
            />
        </Slide>
    </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import gallery1 from "../../../../../public/images/gallery/gallery3.jpg";
import gallery2 from "../../../../../public/images/gallery/gallery2.jpg";
import gallery3 from "../../../../../public/images/gallery/gallery1.jpg";

export default defineComponent({
    name: "SlidesOnly",
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: "center",
        },
        items: [
            {
                id: 1,
                image: gallery3,
            },
            {
                id: 2,
                image: gallery2,
            },
            {
                id: 3,
                image: gallery1,
            },
        ],
    }),
});
</script>
