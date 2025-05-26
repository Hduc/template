<template>
  <v-row>
    <v-col lg="9">
      <DashboardStoreAnalysisSAWelcome />

      <DashboardStoreAnalysisStats />
    </v-col>
    <v-col lg="3">
      <DashboardStoreAnalysisCustomerVisits />
    </v-col>
    <v-col lg="4">
      <DashboardStoreAnalysisTopSellingProducts />
    </v-col>
    <v-col lg="8">
      <DashboardStoreAnalysisGrossRevenue />
    </v-col>
    <v-col lg="9">
      <DashboardStoreAnalysisRecentSales />
    </v-col>
    <v-col lg="3">
      <v-row>
        <v-col lg="12" sm="6">
          <DashboardStoreAnalysisSalesByGenderChart />
        </v-col>
        <v-col lg="12" sm="6">
          <DashboardStoreAnalysisSalesThisMonthChart />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="4">
      <DashboardStoreAnalysisSalesByCategoryChart />
    </v-col>
    <v-col lg="8">
      <DashboardStoreAnalysisStockAlerts />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StoreAnalysisPage",
});
</script>
