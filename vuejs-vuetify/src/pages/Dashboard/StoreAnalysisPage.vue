<template>
  <v-row>
    <v-col lg="9">
      <SAWelcome />

      <Stats />
    </v-col>
    <v-col lg="3">
      <CustomerVisits />
    </v-col>
    <v-col lg="4">
      <TopSellingProducts />
    </v-col>
    <v-col lg="8">
      <GrossRevenue />
    </v-col>
    <v-col lg="9">
      <RecentSales />
    </v-col>
    <v-col lg="3">
      <v-row>
        <v-col lg="12" sm="6">
          <SalesByGenderChart />
        </v-col>
        <v-col lg="12" sm="6">
          <SalesThisMonthChart />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="4">
      <SalesByCategoryChart />
    </v-col>
    <v-col lg="8">
      <StockAlerts />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SAWelcome from "@/components/Dashboard/StoreAnalysis/SAWelcome.vue";
import Stats from "@/components/Dashboard/StoreAnalysis/Stats.vue";
import CustomerVisits from "@/components/Dashboard/StoreAnalysis/CustomerVisits.vue";
import TopSellingProducts from "@/components/Dashboard/StoreAnalysis/TopSellingProducts.vue";
import GrossRevenue from "@/components/Dashboard/StoreAnalysis/GrossRevenue.vue";
import RecentSales from "@/components/Dashboard/StoreAnalysis/RecentSales.vue";
import SalesByGenderChart from "@/components/Dashboard/StoreAnalysis/SalesByGenderChart.vue";
import SalesThisMonthChart from "@/components/Dashboard/StoreAnalysis/SalesThisMonthChart.vue";
import SalesByCategoryChart from "@/components/Dashboard/StoreAnalysis/SalesByCategoryChart.vue";
import StockAlerts from "@/components/Dashboard/StoreAnalysis/StockAlerts.vue";

export default defineComponent({
  name: "StoreAnalysisPage",
  components: {
    SAWelcome,
    Stats,
    CustomerVisits,
    TopSellingProducts,
    GrossRevenue,
    RecentSales,
    SalesByGenderChart,
    SalesThisMonthChart,
    SalesByCategoryChart,
    StockAlerts,
  },
});
</script>
