<template>
  <PageTitle pageTitle="Products Grid" subTitle="eCommerce" />
  <ProductsFilter />
  <ProductsGrid />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ProductsFilter from "@/components/Pages/Ecommerce/ProductsGrid/ProductsFilter.vue";
import ProductsGrid from "@/components/Pages/Ecommerce/ProductsGrid/index.vue";

export default defineComponent({
  name: "ProductsGridPage",
  components: {
    PageTitle,
    ProductsFilter,
    ProductsGrid,
  },
});
</script>
