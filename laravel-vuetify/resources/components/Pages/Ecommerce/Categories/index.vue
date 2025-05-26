<template>
    <v-card
        class="categories-card trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <form class="search-box position-relative" @submit.prevent>
                <input
                    type="text"
                    class="input-search d-block"
                    placeholder="Search categorie here....."
                    v-model="searchTerm"
                />
                <button type="submit">
                    <i class="material-symbols-outlined">search</i>
                </button>
            </form>
            <AddNewCategory />
        </div>
        <div class="trezo-table-content">
            <div class="trezo-table">
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-start">
                                <v-checkbox color="primary"></v-checkbox>
                            </th>
                            <th class="text-start">Image</th>
                            <th class="text-start">Name</th>
                            <th class="text-start">Total Products</th>
                            <th class="text-start">Slug</th>
                            <th class="text-start">Description</th>
                            <th class="text-start">Status</th>
                            <th class="text-start">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in filteredItems" :key="item.id">
                            <td><v-checkbox color="primary"></v-checkbox></td>
                            <td>
                                <v-img
                                    :src="item.image"
                                    width="50"
                                    class="rounded-circle"
                                    alt="product-image"
                                />
                            </td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.totalProducts }}</td>
                            <td>{{ item.slug }}</td>
                            <td>{{ item.description }}</td>
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
                                            {{ item.action.view }}
                                        </i>
                                    </button>
                                    <button type="button">
                                        <i class="material-symbols-outlined">
                                            {{ item.action.edit }}
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
import AddNewCategory from "./AddNewCategory.vue";
import PaginationTwo from "../../../Common/PaginationTwo.vue";

import product1 from "../../../../../public/images/products/product1.jpg";
import product2 from "../../../../../public/images/products/product2.jpg";
import product3 from "../../../../../public/images/products/product3.jpg";
import product4 from "../../../../../public/images/products/product4.jpg";
import product5 from "../../../../../public/images/products/product5.jpg";

export default defineComponent({
    name: "Categories",
    components: {
        AddNewCategory,
        PaginationTwo,
    },
    setup() {
        const items = ref([
            {
                id: 1,
                image: product1,
                name: "Watch",
                totalProducts: 54,
                slug: "watch",
                description: "What is lorem ipsum?",
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: 2,
                image: product2,
                name: "Headphone",
                totalProducts: 13,
                slug: "headphone",
                description: "Why do we use it?",
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: 3,
                image: product3,
                name: "Mobile",
                totalProducts: 42,
                slug: "mobile",
                description: "Where does it come from?",
                status: "Deactive",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: 4,
                image: product4,
                name: "Speaker",
                totalProducts: 32,
                slug: "speaker",
                description: "Where can I get some?",
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: 5,
                image: product5,
                name: "Electronics",
                totalProducts: 100,
                slug: "electronics",
                description: "Contrary to popular belief",
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
        ]);

        const searchTerm = ref("");

        const filteredItems = computed(() => {
            return items.value.filter(
                (item) =>
                    item.name
                        .toString()
                        .toLowerCase()
                        .includes(searchTerm.value.toLowerCase()) ||
                    item.totalProducts
                        .toString()
                        .includes(searchTerm.value.toLowerCase()) ||
                    item.slug
                        .toLowerCase()
                        .includes(searchTerm.value.toLowerCase()) ||
                    item.description
                        .toLowerCase()
                        .includes(searchTerm.value.toLowerCase())
            );
        });

        const wordActive = ref("Active");
        const wordDeactive = ref("Deactive");

        const computeClass = (classValue) => {
            return {
                active: wordActive.value === classValue,
                deactive: wordDeactive.value === classValue,
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
.categories-card {
    .trezo-table-content {
        .trezo-table {
            table {
                thead {
                    tr {
                        th {
                            &:first-child {
                                padding-right: 0;
                            }
                            &:nth-child(2) {
                                padding-left: 15px;
                            }
                            &:last-child {
                                text-align: end !important;
                            }
                            .v-checkbox.v-input {
                                margin: -27px -30px -30px -10px;
                            }
                            .v-input__details {
                                display: none !important;
                            }
                            .v-selection-control__input {
                                width: 0 !important;
                                height: 0 !important;
                            }
                        }
                    }
                }
                tbody {
                    tr {
                        td {
                            &:first-child {
                                padding-right: 0;
                            }
                            &:nth-child(2) {
                                padding-left: 15px;
                            }
                            &:last-child {
                                text-align: end;

                                .action-buttons {
                                    justify-content: end;
                                }
                            }
                            .v-checkbox.v-input {
                                margin: -27px -30px -30px -10px;
                            }
                            .v-input__details {
                                display: none !important;
                            }
                            .v-selection-control__input {
                                width: 0 !important;
                                height: 0 !important;
                            }
                        }
                    }
                }
            }
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
