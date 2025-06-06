<template>
    <v-card
        class="reviews-card trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <form class="search-box position-relative" @submit.prevent>
                <input
                    type="text"
                    class="input-search d-block"
                    placeholder="Search review here....."
                    v-model="searchTerm"
                />
                <button type="submit">
                    <i class="material-symbols-outlined">search</i>
                </button>
            </form>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <button
                        type="button"
                        v-bind="props"
                        class="card-header-menu d-inline-block border-radius"
                    >
                        This Week
                    </button>
                </template>
                <v-list class="menu-content">
                    <button type="button" class="bg-transparent border-none">
                        This Day
                    </button>
                    <button type="button" class="bg-transparent border-none">
                        This Week
                    </button>
                    <button type="button" class="bg-transparent border-none">
                        This Month
                    </button>
                    <button type="button" class="bg-transparent border-none">
                        This Year
                    </button>
                </v-list>
            </v-menu>
        </div>
        <div class="trezo-table-content">
            <div class="trezo-table">
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-start">ID</th>
                            <th class="text-start">Reviewer</th>
                            <th class="text-start">Review</th>
                            <th class="text-start">Product</th>
                            <th class="text-start">Date</th>
                            <th class="text-start">Status</th>
                            <th class="text-start">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="item in filteredItems.slice(0, 10)"
                            :key="item.id"
                        >
                            <td class="text-body">
                                {{ item.id }}
                            </td>
                            <td>
                                <div
                                    class="user-info d-flex align-items-center"
                                >
                                    <div class="image">
                                        <v-img
                                            :src="item.reviewer.image"
                                            class="rounded-circle"
                                            alt="reviewer-image"
                                        />
                                    </div>
                                    <div class="info">
                                        <span class="fw-medium d-block">
                                            {{ item.reviewer.name }}
                                        </span>
                                        <span class="email d-block text-body">
                                            {{ item.reviewer.email }}
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td style="white-space: normal">
                                <div class="review">
                                    <div class="ratings lh-1">
                                        <i
                                            v-for="content in item.ratings
                                                .stars"
                                            :key="content"
                                            :class="content.star"
                                        ></i>
                                    </div>
                                    <p class="text-black">
                                        {{ item.ratings.review }}
                                    </p>
                                </div>
                            </td>
                            <td class="text-body">
                                <div
                                    class="product-info d-flex align-items-center"
                                >
                                    <div class="image">
                                        <v-img
                                            :src="item.product.image"
                                            alt="product-image"
                                        />
                                    </div>
                                    <div class="info">
                                        <RouterLink
                                            to="/ecommerce/product-details"
                                            class="fw-medium d-inline-block"
                                        >
                                            {{ item.product.title }}
                                        </RouterLink>
                                    </div>
                                </div>
                            </td>
                            <td class="text-body">
                                <span class="d-block">
                                    {{ item.date.date }}
                                </span>
                                <span class="d-block">
                                    {{ item.date.time }}
                                </span>
                            </td>
                            <td>
                                <span
                                    class="trezo-status-badge"
                                    :class="computeClass(item.status)"
                                >
                                    {{ item.status }}
                                </span>
                            </td>
                            <td>
                                <div
                                    class="action-buttons d-flex align-items-center"
                                >
                                    <button type="button">
                                        <i class="material-symbols-outlined">
                                            {{ item.action.approved }}
                                        </i>
                                    </button>
                                    <button type="button">
                                        <i class="material-symbols-outlined">
                                            {{ item.action.reply }}
                                        </i>
                                    </button>
                                    <button type="button">
                                        <i class="material-symbols-outlined">
                                            {{ item.action.delete }}
                                        </i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
                <PaginationTwo items="10" />
            </div>
        </div>
    </v-card>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import PaginationTwo from "../../../Common/PaginationTwo.vue";

import user6 from "../../../../../public/images/users/user6.jpg";
import user7 from "../../../../../public/images/users/user7.jpg";
import user8 from "../../../../../public/images/users/user8.jpg";
import user9 from "../../../../../public/images/users/user9.jpg";
import user10 from "../../../../../public/images/users/user10.jpg";
import user11 from "../../../../../public/images/users/user11.jpg";
import user12 from "../../../../../public/images/users/user12.jpg";
import user13 from "../../../../../public/images/users/user13.jpg";
import user14 from "../../../../../public/images/users/user14.jpg";
import user15 from "../../../../../public/images/users/user15.jpg";

import product1 from "../../../../../public/images/products/product1.jpg";
import product2 from "../../../../../public/images/products/product2.jpg";
import product3 from "../../../../../public/images/products/product3.jpg";
import product4 from "../../../../../public/images/products/product4.jpg";
import product5 from "../../../../../public/images/products/product5.jpg";
import product6 from "../../../../../public/images/products/product6.jpg";
import product7 from "../../../../../public/images/products/product7.jpg";
import product8 from "../../../../../public/images/products/product8.jpg";

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Reviews",
    components: {
        PaginationTwo,
    },
    setup() {
        const items = ref([
            {
                id: "#999",
                reviewer: {
                    image: user6,
                    name: "Olivia Clark",
                    email: "olivia@trezo.com",
                },
                ratings: {
                    stars: [
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                    ],
                    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                },
                product: {
                    image: product1,
                    title: "Smart Band",
                },
                date: {
                    date: "17 Dec 2024",
                    time: "08:30 PM",
                },
                status: "Pending",
                action: {
                    approved: "download_done",
                    delete: "delete",
                    reply: "reply",
                },
            },
            {
                id: "#998",
                reviewer: {
                    image: user7,
                    name: "Zephyr Zing",
                    email: "zephyr@trezo.com",
                },
                ratings: {
                    stars: [
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-half-fill",
                        },
                    ],
                    review: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
                },
                product: {
                    image: product2,
                    title: "Headphone",
                },
                date: {
                    date: "17 Dec 2024",
                    time: "08:30 PM",
                },
                status: "Pending",
                action: {
                    approved: "download_done",
                    delete: "delete",
                    reply: "reply",
                },
            },
            {
                id: "#997",
                reviewer: {
                    image: user8,
                    name: "Nova Nectar",
                    email: "nova@trezo.com",
                },
                ratings: {
                    stars: [
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-line",
                        },
                    ],
                    review: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
                },
                product: {
                    image: product3,
                    title: "iPhone 15 Plus",
                },
                date: {
                    date: "17 Dec 2024",
                    time: "08:30 PM",
                },
                status: "Pending",
                action: {
                    approved: "download_done",
                    delete: "delete",
                    reply: "reply",
                },
            },
            {
                id: "#996",
                reviewer: {
                    image: user9,
                    name: "Isabella Chang",
                    email: "isabella@trezo.com",
                },
                ratings: {
                    stars: [
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-half-fill",
                        },
                        {
                            star: "ri-star-line",
                        },
                    ],
                    review: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.`,
                },
                product: {
                    image: product4,
                    title: "Bluetooth Speaker",
                },
                date: {
                    date: "17 Dec 2024",
                    time: "08:30 PM",
                },
                status: "Pending",
                action: {
                    approved: "download_done",
                    delete: "delete",
                    reply: "reply",
                },
            },
            {
                id: "#995",
                reviewer: {
                    image: user10,
                    name: "Alina Bennett",
                    email: "alina@trezo.com",
                },
                ratings: {
                    stars: [
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                    ],
                    review: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
                },
                product: {
                    image: product5,
                    title: "Airbuds 2nd Gen",
                },
                date: {
                    date: "17 Dec 2024",
                    time: "08:30 PM",
                },
                status: "Published",
                action: {
                    approved: "download_done",
                    delete: "delete",
                    reply: "reply",
                },
            },
            {
                id: "#994",
                reviewer: {
                    image: user11,
                    name: "Marcia Baker",
                    email: "marcia@trezo.com",
                },
                ratings: {
                    stars: [
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                    ],
                    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                },
                product: {
                    image: product1,
                    title: "Smart Band",
                },
                date: {
                    date: "17 Dec 2024",
                    time: "08:30 PM",
                },
                status: "Pending",
                action: {
                    approved: "download_done",
                    delete: "delete",
                    reply: "reply",
                },
            },
            {
                id: "#993",
                reviewer: {
                    image: user12,
                    name: "Carolyn Barnes",
                    email: "carolyn@trezo.com",
                },
                ratings: {
                    stars: [
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-half-fill",
                        },
                    ],
                    review: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
                },
                product: {
                    image: product2,
                    title: "Headphone",
                },
                date: {
                    date: "17 Dec 2024",
                    time: "08:30 PM",
                },
                status: "Pending",
                action: {
                    approved: "download_done",
                    delete: "delete",
                    reply: "reply",
                },
            },
            {
                id: "#992",
                reviewer: {
                    image: user13,
                    name: "Donna Miller",
                    email: "donna@trezo.com",
                },
                ratings: {
                    stars: [
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-line",
                        },
                    ],
                    review: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
                },
                product: {
                    image: product3,
                    title: "iPhone 15 Plus",
                },
                date: {
                    date: "17 Dec 2024",
                    time: "08:30 PM",
                },
                status: "Pending",
                action: {
                    approved: "download_done",
                    delete: "delete",
                    reply: "reply",
                },
            },
            {
                id: "#991",
                reviewer: {
                    image: user14,
                    name: "Barbara Cross",
                    email: "barbara@trezo.com",
                },
                ratings: {
                    stars: [
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-half-fill",
                        },
                        {
                            star: "ri-star-line",
                        },
                    ],
                    review: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.`,
                },
                product: {
                    image: product4,
                    title: "Bluetooth Speaker",
                },
                date: {
                    date: "17 Dec 2024",
                    time: "08:30 PM",
                },
                status: "Pending",
                action: {
                    approved: "download_done",
                    delete: "delete",
                    reply: "reply",
                },
            },
            {
                id: "#990",
                reviewer: {
                    image: user15,
                    name: "Rebecca Block",
                    email: "rebecca@trezo.com",
                },
                ratings: {
                    stars: [
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                        {
                            star: "ri-star-fill",
                        },
                    ],
                    review: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
                },
                product: {
                    image: product5,
                    title: "Airbuds 2nd Gen",
                },
                date: {
                    date: "17 Dec 2024",
                    time: "08:30 PM",
                },
                status: "Pending",
                action: {
                    approved: "download_done",
                    delete: "delete",
                    reply: "reply",
                },
            },
        ]);

        const searchTerm = ref("");

        const matchesSearch = (text) =>
            text?.toLowerCase().includes(searchTerm.value.toLowerCase()) ??
            false;

        const filteredItems = computed(() => {
            if (!searchTerm.value.trim()) return items.value;

            return items.value.filter((item) => {
                return (
                    matchesSearch(item.id) ||
                    matchesSearch(item.reviewer?.name) ||
                    matchesSearch(item.reviewer?.email) ||
                    matchesSearch(item.product?.title) ||
                    matchesSearch(item.date?.date) ||
                    matchesSearch(item.status)
                );
            });
        });

        const wordPending = ref("Pending");
        const wordPublished = ref("Published");

        const computeClass = (classValue) => {
            return {
                published: wordPending.value === classValue,
                warning: wordPublished.value === classValue,
            };
        };

        return {
            items,
            searchTerm,
            filteredItems,
            computeClass,
        };
    },
});
</script>

<style lang="scss" scoped>
.reviews-card {
    .trezo-table-content {
        .trezo-table {
            .pagination-content {
                margin-top: 0;
                padding: 15px 20px;
                border-radius: 0 0 7px 7px;
                color: var(--blackColor) !important;
                background-color: transparent !important;
                border-left: 1px solid #eceef2;
                border-right: 1px solid #eceef2;
                border-bottom: 1px solid #eceef2;
            }
        }
    }
}
</style>
