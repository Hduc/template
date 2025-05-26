<template>
  <v-row>
    <v-col lg="6">
      <RestaurantStatsToday />

      <v-row>
        <v-col lg="6">
          <TotalOrdersChart />
        </v-col>
        <v-col lg="6">
          <PendingOrdersChart />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="6">
      <v-row>
        <v-col lg="6">
          <Revenue />
        </v-col>
        <v-col lg="6">
          <Expense />
        </v-col>
      </v-row>

      <TopSellingItems />
    </v-col>
    <v-col lg="12">
      <RecentOrdersList />
    </v-col>
    <v-col lg="3">
      <OrderSummaryChart />
    </v-col>
    <v-col lg="6">
      <RevenueExpenseChart />
    </v-col>
    <v-col lg="3" md="6">
      <LowStockAlerts />
    </v-col>
    <v-col lg="4" md="6">
      <StaffPerformanceScores />
    </v-col>
    <v-col lg="4" md="6">
      <RevenueByBranches />
    </v-col>
    <v-col lg="4" md="6">
      <Tickets />
    </v-col>
    <v-col lg="12">
      <CustomerRatings />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RestaurantStatsToday from "@/components/Dashboard/Restaurant/RestaurantStatsToday.vue";
import TotalOrdersChart from "@/components/Dashboard/Restaurant/TotalOrdersChart.vue";
import PendingOrdersChart from "@/components/Dashboard/Restaurant/PendingOrdersChart.vue";
import Revenue from "@/components/Dashboard/Restaurant/Revenue.vue";
import Expense from "@/components/Dashboard/Restaurant/Expense.vue";
import TopSellingItems from "@/components/Dashboard/Restaurant/TopSellingItems.vue";
import RecentOrdersList from "@/components/Dashboard/Restaurant/RecentOrdersList.vue";
import OrderSummaryChart from "@/components/Dashboard/Restaurant/OrderSummaryChart.vue";
import RevenueExpenseChart from "@/components/Dashboard/Restaurant/RevenueExpenseChart.vue";
import LowStockAlerts from "@/components/Dashboard/Restaurant/LowStockAlerts.vue";
import StaffPerformanceScores from "@/components/Dashboard/Restaurant/StaffPerformanceScores.vue";
import RevenueByBranches from "@/components/Dashboard/Restaurant/RevenueByBranches.vue";
import Tickets from "@/components/Dashboard/Restaurant/Tickets.vue";
import CustomerRatings from "@/components/Dashboard/Restaurant/CustomerRatings.vue";

export default defineComponent({
  name: "RestaurantPage",
  components: {
    RestaurantStatsToday,
    TotalOrdersChart,
    PendingOrdersChart,
    Revenue,
    Expense,
    TopSellingItems,
    RecentOrdersList,
    OrderSummaryChart,
    RevenueExpenseChart,
    LowStockAlerts,
    StaffPerformanceScores,
    RevenueByBranches,
    Tickets,
    CustomerRatings,
  },
});
</script>
