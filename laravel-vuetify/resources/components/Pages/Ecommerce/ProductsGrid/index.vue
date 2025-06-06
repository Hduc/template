<template>
    <v-row>
        <v-col
            cols="12"
            lg="4"
            sm="6"
            v-for="product in products"
            :key="product.id"
        >
            <div class="single-product-item">
                <div class="image position-relative">
                    <RouterLink
                        :to="product.link"
                        class="d-block border-radius"
                    >
                        <v-img
                            :src="product.imageUrl"
                            class="border-radius"
                            :alt="product.name"
                        />
                    </RouterLink>
                    <button type="button">
                        <i class="material-symbols-outlined"> shopping_cart </i>
                    </button>
                </div>
                <div class="content">
                    <h6 class="fw-normal">
                        <RouterLink :to="product.link">
                            {{ product.name }}
                        </RouterLink>
                    </h6>
                    <div
                        class="info d-flex align-items-center justify-space-between"
                    >
                        <div class="price d-flex align-items-center">
                            <span class="d-block fw-bold text-black">
                                ${{ product.price }}
                            </span>
                            <span class="d-block">
                                ${{ product.oldPrice }}
                            </span>
                        </div>
                        <div class="ratings">
                            <i
                                v-for="star in 5"
                                :key="star"
                                class="ri"
                                :class="starClass(star, product.ratings)"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>

    <Pagination
        class="pagination-content border-radius d-block bg-white border-0 shadow-none"
    />
</template>

<script>
import { defineComponent, ref } from "vue";
import Pagination from "../../../Common/Pagination.vue";

import product6 from "../../../../../public/images/products/product6.jpg";
import product7 from "../../../../../public/images/products/product7.jpg";
import product8 from "../../../../../public/images/products/product8.jpg";
import product9 from "../../../../../public/images/products/product9.jpg";
import product10 from "../../../../../public/images/products/product10.jpg";
import product11 from "../../../../../public/images/products/product11.jpg";
import product12 from "../../../../../public/images/products/product12.jpg";
import product13 from "../../../../../public/images/products/product13.jpg";
import product14 from "../../../../../public/images/products/product14.jpg";

export default defineComponent({
    name: "ProductsGrid",
    components: {
        Pagination,
    },
    setup() {
        const products = ref([
            {
                id: 1,
                name: 'Apple MacBook Pro 16.2" with M3 Pro Chip',
                imageUrl: product6,
                price: 3479,
                oldPrice: 3599,
                ratings: 5,
                link: "/ecommerce/product-details",
            },
            {
                id: 2,
                name: "SAMSUNG Galaxy Tab A9+ Tablet 11”",
                imageUrl: product7,
                price: 549,
                oldPrice: 649,
                ratings: 4.5,
                link: "/ecommerce/product-details",
            },
            {
                id: 3,
                name: "Apple iPhone 15 Pro Max (512 GB)",
                imageUrl: product8,
                price: 1479,
                oldPrice: 1599,
                ratings: 4,
                link: "/ecommerce/product-details",
            },
            {
                id: 4,
                name: "Gildan Men's Crew T-Shirts, Multipack",
                imageUrl: product9,
                price: 79,
                oldPrice: 89,
                ratings: 3.5,
                link: "/ecommerce/product-details",
            },
            {
                id: 5,
                name: "Skechers Men's Summits High Range",
                imageUrl: product10,
                price: 849,
                oldPrice: 999,
                ratings: 4.5,
                link: "/ecommerce/product-details",
            },
            {
                id: 6,
                name: "Amazfit GTR 3 Smart Watch for Men",
                imageUrl: product11,
                price: 49,
                oldPrice: 69,
                ratings: 3,
                link: "/ecommerce/product-details",
            },
            {
                id: 7,
                name: "SOJOS Small Round Polarized Sunglasses",
                imageUrl: product12,
                price: 39,
                oldPrice: 49,
                ratings: 4.5,
                link: "/ecommerce/product-details",
            },
            {
                id: 8,
                name: "Nautical Clock Ship Table Clock Brass Desk",
                imageUrl: product13,
                price: 25,
                oldPrice: 39,
                ratings: 5,
                link: "/ecommerce/product-details",
            },
            {
                id: 9,
                name: "Carhartt, Durable, Adjustable Crossbody Bag",
                imageUrl: product14,
                price: 149,
                oldPrice: 299,
                ratings: 4,
                link: "/ecommerce/product-details",
            },
        ]);

        const starClass = (star, ratings) => {
            if (star <= ratings) {
                return "ri-star-fill";
            } else if (star - ratings < 1) {
                return "ri-star-half-fill";
            } else {
                return "ri-star-line";
            }
        };
        return {
            products,
            starClass,
        };
    },
});
</script>

<style lang="scss" scoped>
.single-product-item {
    margin-bottom: 20px;
    .image {
        a {
            .v-img {
                margin-bottom: -3px;
            }
        }
        button {
            right: 0;
            bottom: 0;
            padding: 0;
            z-index: 2;
            width: 60px;
            height: 60px;
            min-width: auto;
            position: absolute;
            border-radius: 7px;
            display: inline-block;
            color: var(--whiteColor);
            background-color: var(--primaryColor);

            i {
                left: 0;
                right: 0;
                top: 50%;
                display: block;
                margin-top: 1px;
                position: absolute;
                transform: translateY(-50%);
            }
        }
        &::before {
            right: 0;
            bottom: 0;
            width: 65px;
            content: "";
            height: 65px;
            position: absolute;
            border-radius: 7px 0 7px 0;
            background: var(--whiteColor);
            z-index: 1;
        }
    }
    .content {
        margin-top: 20px;

        h6 {
            font-size: 16px;
        }
        .info {
            margin-top: 30px;

            .price {
                span {
                    font-size: 20px;

                    &:nth-child(2) {
                        font-size: 16px;
                        color: #8695aa;
                        margin-left: 7px;
                    }
                }
            }
            .ratings {
                i {
                    color: #fe7a36;
                    margin-right: 2px;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .single-product-item {
        margin-bottom: 25px;

        .image {
            button {
                width: 50px;
                height: 50px;
            }
            &::before {
                width: 55px;
                height: 55px;
            }
        }
        .content {
            margin-top: 18px;

            h6 {
                font-size: 14px;
            }
            .info {
                margin-top: 15px;

                .price {
                    span {
                        font-size: 17px;

                        &:nth-child(2) {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .single-product-item {
        margin-bottom: 25px;

        .image {
            button {
                width: 55px;
                height: 55px;
            }
            &::before {
                width: 60px;
                height: 60px;
            }
        }
        .content {
            h6 {
                font-size: 15px;
            }
            .info {
                margin-top: 15px;

                .price {
                    span {
                        font-size: 18px;

                        &:nth-child(2) {
                            font-size: 15px;
                        }
                    }
                }
            }
        }
    }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .single-product-item {
        margin-bottom: 35px;

        .content {
            .info {
                margin-top: 20px;

                .price {
                    span {
                        font-size: 19px;
                    }
                }
            }
        }
    }
}
</style>
