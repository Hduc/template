<template>
    <v-card class="mb-25 trezo-card">
        <div class="v-card-header mb-4">
            <h5 class="mb-0">Responsive Breakpoints</h5>
        </div>
        <Carousel
            v-bind="settings"
            :autoplay="5000"
            :wrap-around="true"
            :breakpoints="breakpoints"
        >
            <Slide v-for="slide in items" :key="slide.id">
                <v-img
                    :src="slide.image"
                    class="border-radius"
                    alt="course-image"
                />
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import gallery1 from "../../../../../public/images/gallery/gallery3.jpg";
import gallery2 from "../../../../../public/images/gallery/gallery2.jpg";
import gallery3 from "../../../../../public/images/gallery/gallery1.jpg";
import gallery4 from "../../../../../public/images/gallery/gallery4.jpg";
import gallery5 from "../../../../../public/images/gallery/gallery5.jpg";
import gallery6 from "../../../../../public/images/gallery/gallery6.jpg";

export default defineComponent({
    name: "ResponsiveBreakpointsControl",
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: "center",
        },
        items: [
            {
                id: 1,
                image: gallery1,
            },
            {
                id: 2,
                image: gallery2,
            },
            {
                id: 3,
                image: gallery3,
            },
            {
                id: 4,
                image: gallery4,
            },
            {
                id: 5,
                image: gallery5,
            },
            {
                id: 6,
                image: gallery6,
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: "start",
            },
            576: {
                itemsToShow: 2,
                snapAlign: "center",
            },
            768: {
                itemsToShow: 3,
                snapAlign: "center",
            },
            1200: {
                itemsToShow: 4,
                snapAlign: "start",
            },
        },
    }),
});
</script>
