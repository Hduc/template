<template>
    <v-card
        class="top-instructors-card trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0">Top Instructors</h5>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <button
                        type="button"
                        v-bind="props"
                        class="position-relative dot-btn p-0 bg-transparent border-none"
                    >
                        <i class="ri-more-fill"></i>
                    </button>
                </template>
                <v-list class="menu-content">
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
                            <th>Name</th>
                            <th>Courses</th>
                            <th>Ratings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items.slice(0, 4)" :key="item.id">
                            <td class="text-start">
                                <div
                                    class="user-info d-flex align-items-center"
                                >
                                    <div class="image">
                                        <v-img
                                            :src="item.user.image"
                                            alt="user-image"
                                        />
                                    </div>
                                    <div class="info">
                                        <span class="fw-medium d-block">
                                            {{ item.user.name }}
                                        </span>
                                        <span class="email d-block text-body">
                                            {{ item.user.email }}
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="text-body">{{ item.courses }}</td>
                            <td class="text-body">
                                <div class="ratings lh-1">
                                    <i
                                        v-for="rating in item.ratings"
                                        :key="rating.id"
                                        :class="rating.star"
                                    ></i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
            <PaginationTwo items="4" />
        </div>
    </v-card>
</template>

<script>
import { defineComponent } from "vue";
import PaginationTwo from "../../Common/PaginationTwo.vue";

import user13 from "../../../../public/images/users/user13.jpg";
import user15 from "../../../../public/images/users/user15.jpg";
import user16 from "../../../../public/images/users/user16.jpg";
import user17 from "../../../../public/images/users/user17.jpg";
import user18 from "../../../../public/images/users/user18.jpg";

export default defineComponent({
    name: "TopInstructors",
    components: {
        PaginationTwo,
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    user: {
                        image: user13,
                        name: "Olivia Clark",
                        email: "Big Data",
                    },
                    courses: 55,
                    ratings: [
                        {
                            id: 1,
                            star: "ri-star-fill",
                        },
                        {
                            id: 2,
                            star: "ri-star-fill",
                        },
                        {
                            id: 3,
                            star: "ri-star-fill",
                        },
                        {
                            id: 4,
                            star: "ri-star-fill",
                        },
                        {
                            id: 5,
                            star: "ri-star-fill",
                        },
                    ],
                },
                {
                    id: 2,
                    user: {
                        image: user16,
                        name: "Ava Turner",
                        email: "UX/UI",
                    },
                    courses: 120,
                    ratings: [
                        {
                            id: 1,
                            star: "ri-star-fill",
                        },
                        {
                            id: 2,
                            star: "ri-star-fill",
                        },
                        {
                            id: 3,
                            star: "ri-star-fill",
                        },
                        {
                            id: 4,
                            star: "ri-star-fill",
                        },
                        {
                            id: 5,
                            star: "ri-star-half-fill",
                        },
                    ],
                },
                {
                    id: 3,
                    user: {
                        image: user17,
                        name: "Lucas Morgan",
                        email: "Developer",
                    },
                    courses: 86,
                    ratings: [
                        {
                            id: 1,
                            star: "ri-star-fill",
                        },
                        {
                            id: 2,
                            star: "ri-star-fill",
                        },
                        {
                            id: 3,
                            star: "ri-star-fill",
                        },
                        {
                            id: 4,
                            star: "ri-star-fill",
                        },
                        {
                            id: 5,
                            star: "ri-star-line",
                        },
                    ],
                },
                {
                    id: 4,
                    user: {
                        image: user18,
                        name: "Isabella Cooper",
                        email: "Designer",
                    },
                    courses: 75,
                    ratings: [
                        {
                            id: 1,
                            star: "ri-star-fill",
                        },
                        {
                            id: 2,
                            star: "ri-star-fill",
                        },
                        {
                            id: 3,
                            star: "ri-star-fill",
                        },
                        {
                            id: 4,
                            star: "ri-star-fill",
                        },
                        {
                            id: 5,
                            star: "ri-star-half-fill",
                        },
                    ],
                },
                {
                    id: 5,
                    user: {
                        image: user15,
                        name: "Isabella Cooper",
                        email: "Designer",
                    },
                    courses: 75,
                    ratings: [
                        {
                            id: 1,
                            star: "ri-star-fill",
                        },
                        {
                            id: 2,
                            star: "ri-star-fill",
                        },
                        {
                            id: 3,
                            star: "ri-star-fill",
                        },
                        {
                            id: 4,
                            star: "ri-star-fill",
                        },
                        {
                            id: 5,
                            star: "ri-star-half-fill",
                        },
                    ],
                },
                {
                    id: 6,
                    user: {
                        image: user13,
                        name: "Lucas Morgan",
                        email: "Developer",
                    },
                    courses: 86,
                    ratings: [
                        {
                            id: 1,
                            star: "ri-star-fill",
                        },
                        {
                            id: 2,
                            star: "ri-star-fill",
                        },
                        {
                            id: 3,
                            star: "ri-star-fill",
                        },
                        {
                            id: 4,
                            star: "ri-star-fill",
                        },
                        {
                            id: 5,
                            star: "ri-star-line",
                        },
                    ],
                },
                {
                    id: 7,
                    user: {
                        image: user16,
                        name: "Ava Turner",
                        email: "UX/UI",
                    },
                    courses: 120,
                    ratings: [
                        {
                            id: 1,
                            star: "ri-star-fill",
                        },
                        {
                            id: 2,
                            star: "ri-star-fill",
                        },
                        {
                            id: 3,
                            star: "ri-star-fill",
                        },
                        {
                            id: 4,
                            star: "ri-star-fill",
                        },
                        {
                            id: 5,
                            star: "ri-star-half-fill",
                        },
                    ],
                },
                {
                    id: 8,
                    user: {
                        image: user17,
                        name: "Olivia Clark",
                        email: "Big Data",
                    },
                    courses: 55,
                    ratings: [
                        {
                            id: 1,
                            star: "ri-star-fill",
                        },
                        {
                            id: 2,
                            star: "ri-star-fill",
                        },
                        {
                            id: 3,
                            star: "ri-star-fill",
                        },
                        {
                            id: 4,
                            star: "ri-star-fill",
                        },
                        {
                            id: 5,
                            star: "ri-star-fill",
                        },
                    ],
                },
            ],
        };
    },
});
</script>

<style lang="scss" scoped>
.top-instructors-card {
    .trezo-table-content {
        .trezo-table {
            margin: {
                left: -25px;
                right: -25px;
            }
            .v-table {
                table {
                    thead {
                        tr {
                            th {
                                background-color: #ecf0ff !important;

                                &:first-child {
                                    border-top-left-radius: 0 !important;
                                    padding-left: 25px;
                                }
                                &:last-child {
                                    border-top-right-radius: 0 !important;
                                    padding-right: 25px;
                                }
                            }
                        }
                    }
                    tbody {
                        tr {
                            td {
                                &:first-child {
                                    border-left-width: 0 !important;
                                    padding-left: 25px;
                                }
                                &:last-child {
                                    padding-right: 25px;
                                    border-right-width: 0 !important;
                                }
                                .user-info {
                                    .image {
                                        width: 44px;
                                        height: 44px;
                                        margin-right: 12px;
                                    }
                                }
                            }
                            &:first-child {
                                td {
                                    border-top-width: 0 !important;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
