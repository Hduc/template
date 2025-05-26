<template>
    <v-card
        class="group-lessons-card trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0">Group Lessons</h5>
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
                    <tbody>
                        <tr v-for="item in items.slice(0, 6)" :key="item.id">
                            <td>
                                <div
                                    class="group-lesson d-flex align-items-center"
                                >
                                    <div
                                        class="users d-flex align-items-center"
                                    >
                                        <div
                                            class="rounded-circle"
                                            v-for="image in item.group.images"
                                            :key="image.id"
                                        >
                                            <v-img
                                                :src="image.image"
                                                class="rounded-circle"
                                                alt="user-image"
                                            />
                                        </div>
                                    </div>
                                    <div class="info">
                                        <span class="fw-medium d-block">
                                            {{ item.group.name }}
                                        </span>
                                        <span
                                            class="date text-body fw-medium d-block"
                                        >
                                            {{ item.group.date }}
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a
                                    href="#"
                                    class="link-btn d-inline-block rounded-circle position-relative"
                                >
                                    <i class="material-symbols-outlined">
                                        {{ item.link }}
                                    </i>
                                </a>
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
import PaginationTwo from "../../../Common/PaginationTwo.vue";

import user6 from "../../../../../public/images/users/user6.jpg";
import user7 from "../../../../../public/images/users/user7.jpg";
import user8 from "../../../../../public/images/users/user8.jpg";
import user9 from "../../../../../public/images/users/user9.jpg";
import user10 from "../../../../../public/images/users/user10.jpg";

export default defineComponent({
    name: "GroupLessons",
    components: {
        PaginationTwo,
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    group: {
                        images: [
                            {
                                id: 1,
                                image: user6,
                            },
                            {
                                id: 2,
                                image: user7,
                            },
                            {
                                id: 3,
                                image: user8,
                            },
                        ],
                        name: "Digital Marketing",
                        date: "15 March, 2024",
                    },
                    link: "arrow_outward",
                },
                {
                    id: 2,
                    group: {
                        images: [
                            {
                                id: 1,
                                image: user9,
                            },
                            {
                                id: 2,
                                image: user10,
                            },
                            {
                                id: 3,
                                image: user6,
                            },
                        ],
                        name: "Web Development",
                        date: "10 March, 2024",
                    },
                    link: "arrow_outward",
                },
                {
                    id: 3,
                    group: {
                        images: [
                            {
                                id: 1,
                                image: user7,
                            },
                            {
                                id: 2,
                                image: user8,
                            },
                            {
                                id: 3,
                                image: user9,
                            },
                        ],
                        name: "UX/UI Design",
                        date: "05 March, 2024",
                    },
                    link: "arrow_outward",
                },
                {
                    id: 4,
                    group: {
                        images: [
                            {
                                id: 1,
                                image: user10,
                            },
                            {
                                id: 2,
                                image: user6,
                            },
                            {
                                id: 3,
                                image: user7,
                            },
                        ],
                        name: "Content Writer",
                        date: "02 March, 2024",
                    },
                    link: "arrow_outward",
                },
            ],
        };
    },
});
</script>

<style lang="scss" scoped>
.group-lessons-card {
    .trezo-table-content {
        .trezo-table {
            .v-table {
                table {
                    tbody {
                        tr {
                            td {
                                padding: 18px 0 !important;
                                &:first-child {
                                    padding-left: 0;
                                    border-left-width: 0 !important;
                                }
                                &:last-child {
                                    text-align: end;
                                    padding-right: 0;
                                    border-right-width: 0 !important;
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
