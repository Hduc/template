<template>
    <v-card
        class="customers-list trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <form class="search-box position-relative" @submit.prevent>
                <input
                    type="text"
                    class="input-search d-block"
                    placeholder="Search customer here....."
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
                        class="card-header-menu border-none d-inline-block border-radius"
                    >
                        Last Month
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
                            <th class="text-start">Customer</th>
                            <th class="text-start">Email</th>
                            <th class="text-start">Phone</th>
                            <th class="text-start">Last Login</th>
                            <th class="text-start">Total Spend</th>
                            <th class="text-start">Total Orders</th>
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
                                    class="customer-info d-flex align-items-center"
                                >
                                    <div class="img">
                                        <v-img
                                            :src="item.customer.image"
                                            alt="customer-image"
                                        />
                                    </div>
                                    <span class="d-block text-black fw-medium">
                                        {{ item.customer.name }}
                                    </span>
                                </div>
                            </td>
                            <td class="text-body">{{ item.email }}</td>
                            <td class="text-body">{{ item.phone }}</td>
                            <td class="text-body">{{ item.lastLogin }}</td>
                            <td class="text-body">{{ item.totalSpend }}</td>
                            <td class="text-body">{{ item.totalOrders }}</td>
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
import PaginationTwo from "../../../../components/Common/PaginationTwo.vue";

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

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Customers",
    components: {
        PaginationTwo,
    },
    setup() {
        const items = ref([
            {
                id: "#JAN-854",
                customer: {
                    image: user6,
                    name: "Oliver Khan",
                },
                email: "oliver@trezo.com",
                phone: "+1 555-123-4567",
                lastLogin: "10 Oct 2024",
                totalSpend: "$6,855.00",
                totalOrders: 125,
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: "#JAN-853",
                customer: {
                    image: user7,
                    name: "Carolyn Barnes",
                },
                email: "carolyn@trezo.com",
                phone: "+1 555-987-6543",
                lastLogin: "11 Sep 2024",
                totalSpend: "$2,800.00",
                totalOrders: 99,
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: "#JAN-852",
                customer: {
                    image: user8,
                    name: "Donna Miller",
                },
                email: "donna@trezo.com",
                phone: "+1 555-456-7890",
                lastLogin: "12 Aug 2024",
                totalSpend: "$258.00",
                totalOrders: 145,
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: "#JAN-851",
                customer: {
                    image: user9,
                    name: "Barbara Cross",
                },
                email: "barbara@trezo.com",
                phone: "+1 555-369-7878",
                lastLogin: "13 Jul 2024",
                totalSpend: "$3,890.00",
                totalOrders: 279,
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: "#JAN-850",
                customer: {
                    image: user10,
                    name: "Rebecca Block",
                },
                email: "rebecca@trezo.com",
                phone: "+1 555-658-4488",
                lastLogin: "14 Jun 2024",
                totalSpend: "$2,500.00",
                totalOrders: 169,
                status: "Deactive",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: "#JAN-849",
                customer: {
                    image: user11,
                    name: "Ramiro McCarty",
                },
                email: "ramiro@trezo.com",
                phone: "+1 555-558-9966",
                lastLogin: "15 May 2024",
                totalSpend: "$8,200.00",
                totalOrders: 46,
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: "#JAN-848",
                customer: {
                    image: user12,
                    name: "Robert Fairweather",
                },
                email: "robert@trezo.com",
                phone: "+1 555-357-5888",
                lastLogin: "16 Apr 2024",
                totalSpend: "$640.00",
                totalOrders: 184,
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: "#JAN-847",
                customer: {
                    image: user13,
                    name: "Marcelino Haddock",
                },
                email: "marcelino@trezo.com",
                phone: "+1 555-456-8877",
                lastLogin: "17 Mar 2024",
                totalSpend: "$9,100.00",
                totalOrders: 166,
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: "#JAN-846",
                customer: {
                    image: user14,
                    name: "Thomas Wilson",
                },
                email: "thomas@trezo.com",
                phone: "+1 555-622-4488",
                lastLogin: "18 Feb 2024",
                totalSpend: "$7,300.00",
                totalOrders: 75,
                status: "Active",
                action: {
                    view: "visibility",
                    edit: "edit",
                    delete: "delete",
                },
            },
            {
                id: "#JAN-845",
                customer: {
                    image: user15,
                    name: "Nathaniel Hulsey",
                },
                email: "nathaniel@trezo.com",
                phone: "+1 555-225-4488",
                lastLogin: "19 Jan 2024",
                totalSpend: "$6,600.00",
                totalOrders: 55,
                status: "Deactive",
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
                    item.id
                        .toLowerCase()
                        .includes(searchTerm.value.toLowerCase()) ||
                    item.customer.name
                        .toLowerCase()
                        .includes(searchTerm.value.toLowerCase()) ||
                    item.email
                        .toLowerCase()
                        .includes(searchTerm.value.toLowerCase()) ||
                    item.phone
                        .toLowerCase()
                        .includes(searchTerm.value.toLowerCase()) ||
                    item.lastLogin
                        .toLowerCase()
                        .includes(searchTerm.value.toLowerCase()) ||
                    item.totalSpend
                        .toLowerCase()
                        .includes(searchTerm.value.toLowerCase()) ||
                    item.status
                        .toLowerCase()
                        .includes(searchTerm.value.toLowerCase())
            );
        });

        const wordActive = ref("Active");
        const wordDeactive = ref("Deactive");

        const computeClass = (classValue) => {
            return {
                published: wordActive.value === classValue,
                warning: wordDeactive.value === classValue,
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
.customers-list {
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
