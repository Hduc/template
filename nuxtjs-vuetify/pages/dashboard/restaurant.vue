<template>
  <v-row>
    <v-col lg="6">
      <DashboardRestaurantStatsToday />

      <v-row>
        <v-col lg="6">
          <DashboardRestaurantTotalOrdersChart />
        </v-col>
        <v-col lg="6">
          <DashboardRestaurantPendingOrdersChart />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="6">
      <v-row>
        <v-col lg="6">
          <DashboardRestaurantRevenue />
        </v-col>
        <v-col lg="6">
          <DashboardRestaurantExpense />
        </v-col>
      </v-row>

      <DashboardRestaurantTopSellingItems />
    </v-col>
    <v-col lg="12">
      <DashboardRestaurantRecentOrdersList />
    </v-col>
    <v-col lg="3">
      <DashboardRestaurantOrderSummaryChart />
    </v-col>
    <v-col lg="6">
      <DashboardRestaurantRevenueExpenseChart />
    </v-col>
    <v-col lg="3" md="6">
      <DashboardRestaurantLowStockAlerts />
    </v-col>
    <v-col lg="4" md="6">
      <DashboardRestaurantStaffPerformanceScores />
    </v-col>
    <v-col lg="4" md="6">
      <DashboardRestaurantRevenueByBranches />
    </v-col>
    <v-col lg="4" md="6">
      <DashboardRestaurantTickets />
    </v-col>
    <v-col lg="12">
      <DashboardRestaurantCustomerRatings />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RestaurantPage",
});
</script>
