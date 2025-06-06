<template>
    <v-card
        class="top-selling-products-card trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0">Top Selling Products</h5>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <button
                        type="button"
                        v-bind="props"
                        class="card-header-menu d-inline-block border-radius"
                    >
                        Today
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
                            <th class="text-start">Product</th>
                            <th class="text-start">Price</th>
                            <th class="text-start">Order</th>
                            <th class="text-start">Stock</th>
                            <th class="text-start">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items.slice(0, 5)" :key="item.id">
                            <td class="text-start">
                                <div
                                    class="product-info d-flex align-items-center"
                                >
                                    <div class="image">
                                        <v-img
                                            :src="item.product.image"
                                            alt="product"
                                        />
                                    </div>
                                    <div class="info">
                                        <RouterLink
                                            class="fw-medium d-inline-block"
                                            to="/ecommerce/product-details"
                                        >
                                            {{ item.product.name }}
                                        </RouterLink>
                                        <span class="d-block text-body">
                                            {{ item.product.date }}
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>${{ item.price }}</td>
                            <td>{{ item.order }}</td>
                            <td :class="computeClass(item.stock)">
                                {{ item.stock }}
                            </td>
                            <td>${{ item.amount }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
        </div>
    </v-card>
</template>

<script>
import { defineComponent, ref } from "vue";

import product1 from "../../../../../public/images/products/product1.jpg";
import product2 from "../../../../../public/images/products/product2.jpg";
import product3 from "../../../../../public/images/products/product3.jpg";
import product4 from "../../../../../public/images/products/product4.jpg";
import product5 from "../../../../../public/images/products/product5.jpg";

export default defineComponent({
    name: "TopSellingProducts",
    data() {
        return {
            items: [
                {
                    id: 1,
                    product: {
                        image: product1,
                        name: "Smart Band",
                        date: "15 Jun 2024",
                    },
                    price: "35.00",
                    order: 75,
                    stock: 750,
                    amount: "2,625",
                },
                {
                    id: 2,
                    product: {
                        image: product2,
                        name: "Headphone",
                        date: "14 Jun 2024",
                    },
                    price: "49.00",
                    order: 25,
                    stock: 825,
                    amount: "1,225",
                },
                {
                    id: 3,
                    product: {
                        image: product3,
                        name: "iPhone 15 Plus",
                        date: "13 Jun 2024",
                    },
                    price: "99.00",
                    order: 55,
                    stock: "Stock Out",
                    amount: "5,445",
                },
                {
                    id: 4,
                    product: {
                        image: product4,
                        name: "Bluetooth Speaker",
                        date: "12 Jun 2024",
                    },
                    price: "59.00",
                    order: 40,
                    stock: 535,
                    amount: "2,360",
                },
                {
                    id: 5,
                    product: {
                        image: product5,
                        name: "Airbuds 2nd Gen",
                        date: "11 Jun 2024",
                    },
                    price: "79.00",
                    order: 56,
                    stock: 460,
                    amount: "4,424",
                },
                {
                    id: 6,
                    product: {
                        image: product2,
                        name: "Headphone",
                        date: "10 Jun 2024",
                    },
                    price: "49.00",
                    order: 25,
                    stock: 825,
                    amount: "1,225",
                },
            ],
        };
    },
    setup() {
        const wordOutOfStock = ref("Stock Out");

        const computeClass = (stock) => {
            return {
                "out-of-stock-class": stock === wordOutOfStock.value,
            };
        };

        return {
            wordOutOfStock,
            computeClass,
        };
    },
});
</script>

<style lang="scss" scoped>
.out-of-stock-class {
    color: #ff6d57 !important;
}
</style>
