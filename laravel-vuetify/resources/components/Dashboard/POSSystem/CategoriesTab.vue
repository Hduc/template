<template>
    <h3 class="fs-20 fw-medium mb-4">Categories</h3>
    <ul
        class="nav nav-tabs border-0 mb-4 ga-3 categories-tabs"
        id="myTab"
        role="tablist"
    >
        <li class="nav-item" v-for="category in categories" :key="category.id">
            <button
                class="nav-link border-2 bg-transparent rounded-3"
                style="width: 125px; padding: 20px; padding-bottom: 16px"
                :class="['tab', { active: category.id === activeCategory }]"
                @click="setActiveCategory(category.id)"
                type="button"
            >
                <div class="d-flex align-items-center justify-content-center">
                    <v-img
                        :src="category.icon"
                        class="mb-3"
                        :alt="`${category.name}-icon`"
                    />
                </div>
                <h4 class="fs-16 fw-medium d-block mb-0">
                    {{ category.name }}
                </h4>
                <span class="fs-12 fw-medium text-body">
                    {{ categoryCounts[category.id] }}
                    <span class="d-none">Products</span>
                </span>
            </button>
        </li>
    </ul>

    <div class="tab-content">
        <div
            class="tab-pane fade show"
            v-for="category in categories"
            :key="category.id"
            v-show="category.id === activeCategory"
        >
            <v-row>
                <v-col
                    lg="4"
                    sm="6"
                    v-for="product in getProductsByCategory(category.id)"
                    :key="product.id"
                >
                    <div
                        class="card custom-shadow rounded-3 border bg-white p-20"
                    >
                        <div class="pb-1">
                            <RouterLink
                                to="/ecommerce/product-details"
                                class="d-block text-decoration-none mb-2"
                            >
                                <v-img
                                    :src="product.image"
                                    class="rounded-2 mb-3"
                                    :alt="product.name"
                                />
                                <h3 class="fs-20 fw-medium mb-1">
                                    {{ product.name }}
                                </h3>
                                <span class="text-body">{{
                                    product.category
                                }}</span>
                            </RouterLink>
                            <div
                                class="d-flex justify-content-between align-items-end"
                            >
                                <span
                                    class="fs-24 fw-medium text-success lh-1 position-relative top-3"
                                >
                                    ${{ product.price }}
                                </span>
                                <button
                                    class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                                    style="
                                        background-color: #dde4ff;
                                        width: 35px;
                                        height: 35px;
                                        line-height: 35px;
                                    "
                                >
                                    <i class="ri-shopping-cart-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <div
                class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap ga-2 showing-wrap custom-shadow for-dark-rounded-bg rounded-3 border bg-white px-4 mb-4 mt-4"
                style="padding-top: 11px; padding-bottom: 11px"
            >
                <span class="fs-12 fw-medium">Showing 9 of 30 Results</span>

                <nav aria-label="Page navigation example">
                    <ul class="pagination mb-0 justify-content-center">
                        <li class="page-item">
                            <button
                                class="page-link icon hover-bg"
                                aria-label="Previous"
                            >
                                <i class="material-symbols-outlined"
                                    >keyboard_arrow_left</i
                                >
                            </button>
                        </li>
                        <li class="page-item">
                            <button class="page-link active">1</button>
                        </li>
                        <li class="page-item">
                            <button class="page-link">2</button>
                        </li>
                        <li class="page-item">
                            <button class="page-link">3</button>
                        </li>
                        <li class="page-item"><a class="page-link">4</a></li>
                        <li class="page-item">
                            <button
                                class="page-link icon hover-bg"
                                aria-label="Next"
                            >
                                <i class="material-symbols-outlined"
                                    >keyboard_arrow_right</i
                                >
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

import allIcon from "../../../../public/images/all-icon.svg";
import electronicsIcon2 from "../../../../public/images/electronics-icon2.svg";
import clothingIcon2 from "../../../../public/images/clothing-icon2.svg";
import beautyIcon from "../../../../public/images/beauty-icon.svg";
import foodsIcon from "../../../../public/images/foods-icon.svg";

import product36 from "../../../../public/images/product-36.png";
import product37 from "../../../../public/images/product-37.png";
import product38 from "../../../../public/images/product-38.png";
import product39 from "../../../../public/images/product-39.png";
import product40 from "../../../../public/images/product-40.png";
import product41 from "../../../../public/images/product-41.png";
import product42 from "../../../../public/images/product-42.png";
import product43 from "../../../../public/images/product-43.png";
import product44 from "../../../../public/images/product-44.png";

export default defineComponent({
    name: "CategoriesTab",
    setup() {
        const activeCategory = ref("all");

        const categories = [
            {
                id: "all",
                name: "All",
                icon: allIcon,
            },
            {
                id: "electronics",
                name: "Electronics",
                icon: electronicsIcon2,
            },
            {
                id: "clothing",
                name: "Clothing",
                icon: clothingIcon2,
            },
            {
                id: "beauty",
                name: "Beauty",
                icon: beautyIcon,
            },
            {
                id: "foods",
                name: "Foods",
                icon: foodsIcon,
            },
        ];
        const products = [
            {
                id: "1",
                name: "Apple iPhone 16",
                image: product36,
                category: "electronics",
                price: 799,
            },
            {
                id: "2",
                name: "Levi's 501",
                image: product37,
                category: "clothing",
                price: 89,
            },
            {
                id: "3",
                name: "Maybelline Lash",
                image: product38,
                category: "beauty",
                price: 29,
            },
            {
                id: "4",
                name: "Quaker Oats",
                image: product39,
                category: "foods",
                price: 99,
            },
            {
                id: "5",
                name: "Fitbit Charge",
                image: product40,
                category: "electronics",
                price: 179,
            },
            {
                id: "6",
                name: "Adidas Women",
                image: product41,
                category: "clothing",
                price: 85,
            },
            {
                id: "7",
                name: "Galaxy Tab",
                image: product42,
                category: "electronics",
                price: 649,
            },
            {
                id: "8",
                name: "H&M Basic",
                image: product43,
                category: "clothing",
                price: 20,
            },
            {
                id: "9",
                name: "L'Oréal Paris",
                image: product44,
                category: "beauty",
                price: 69,
            },
        ];

        // Compute dynamic product counts
        const categoryCounts = computed(() => {
            const countMap = {};

            // Initialize count for each category
            categories.forEach((category) => {
                countMap[category.id] = 0;
            });

            // Count products per category
            products.forEach((product) => {
                if (countMap[product.category] !== undefined) {
                    countMap[product.category]++;
                }
            });

            // Set 'All' category count
            countMap["all"] = products.length;

            return countMap;
        });

        const setActiveCategory = (categoryId) => {
            activeCategory.value = categoryId;
        };

        const getProductsByCategory = (categoryId) => {
            if (categoryId === "all") {
                return products;
            }
            return products.filter(
                (product) => product.category === categoryId
            );
        };

        return {
            activeCategory,
            categories,
            products,
            setActiveCategory,
            getProductsByCategory,
            categoryCounts,
        };
    },
});
</script>

<style lang="scss" scoped>
.categories-tabs {
    .nav-item {
        .nav-link {
            border: 2px solid #eceef2;
            &.active {
                border: 2px solid #605dff;
                span {
                    .d-none {
                        display: inline-block !important;
                    }
                }
            }
        }
    }
}
</style>
