<template>
    <v-card
        class="top-collections-card trezo-card border-radius d-block border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0">Top Collections</h5>
            <a href="#" class="text-decoration-none text-primary fs-12">
                View More
            </a>
        </div>

        <Swiper
            :slidesPerView="1"
            :spaceBetween="25"
            :centeredSlides="false"
            :preventClicks="true"
            :loop="false"
            :autoplay="{
                delay: 8000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }"
            :pagination="{
                clickable: true,
                el: '.swiper-pagination-top-collections',
            }"
            :modules="modules"
            class="top-collections-slide"
        >
            <SwiperSlide v-for="nft in nftItem" :key="nft.id">
                <div class="position-relative z-1">
                    <a href="#" class="d-block position-relative">
                        <v-img
                            :src="nft.image"
                            class="rounded-3"
                            alt="collections"
                        />
                    </a>
                    <div
                        class="position-absolute bottom-0 start-50 translate-middle-x w-100 p-2"
                    >
                        <div
                            class="rounded-3 p-3 d-flex justify-content-between align-items-center"
                            style="
                                background: rgba(35, 39, 46, 0.7);
                                backdrop-filter: blur(6px);
                            "
                        >
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 position-relative">
                                    <v-img
                                        :src="nft.creator.image"
                                        class="rounded-circle"
                                        style="width: 27px; height: 27px"
                                        alt="user"
                                    />
                                    <v-img
                                        src="/images/verify-2.svg"
                                        style="width: 15px"
                                        class="position-absolute top-100 start-100 translate-middle"
                                        alt="verify"
                                    />
                                </div>
                                <div
                                    class="flex-grow-1 ms-4 position-relative top-2"
                                >
                                    <h4
                                        class="fs-14 fw-semibold mb-0 text-white"
                                    >
                                        {{ nft.creator.name }}
                                    </h4>
                                    <span class="fs-12" style="color: #b1bbc8">
                                        {{ nft.creator.items }} Items
                                    </span>
                                </div>
                            </div>
                            <a
                                href="#"
                                class="d-inline-block text-center rounded-circle text-decoration-none fs-16 hover-bg"
                                style="
                                    width: 30px;
                                    height: 30px;
                                    line-height: 30px;
                                    background-color: #8695aa;
                                "
                            >
                                <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination-top-collections text-center mt-2"></div>
    </v-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import collections from "../../../../public/images/collections.png";
import collections2 from "../../../../public/images/collections-2.png";
import collections3 from "../../../../public/images/collections-3.png";
import user76 from "../../../../public/images/user-76.gif";

export default defineComponent({
    name: "TopCollections",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const nftItem = ref([
            {
                id: 1,
                image: collections,
                creator: {
                    image: user76,
                    name: "Christmas Eve",
                    items: "3250",
                },
            },
            {
                id: 2,
                image: collections2,
                creator: {
                    image: user76,
                    name: "Christmas Eve",
                    items: "2230",
                },
            },
            {
                id: 3,
                image: collections3,
                creator: {
                    image: user76,
                    name: "Christmas Eve",
                    items: "8536",
                },
            },
        ]);
        return {
            modules: [Autoplay, Pagination],
            nftItem,
        };
    },
});
</script>
