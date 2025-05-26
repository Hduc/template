<template>
  <v-row>
    <v-col lg="6">
      <DashboardBeautySalonWelcomeBeautySalon />
    </v-col>
    <v-col lg="6">
      <v-row>
        <v-col lg="6" md="6" sm="12">
          <DashboardBeautySalonCustomerSatisfactionRateChart />
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <DashboardBeautySalonNewCustomers />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="8">
      <DashboardBeautySalonTopSellingProducts />
    </v-col>
    <v-col lg="4">
      <DashboardBeautySalonCustomersFromChannels />
    </v-col>
    <v-col lg="4">
      <DashboardBeautySalonFeaturedServices />
    </v-col>
    <v-col lg="8">
      <DashboardBeautySalonRecentAppointments />
    </v-col>
    <v-col lg="8">
      <DashboardBeautySalonRevenueByServicesChart />
    </v-col>
    <v-col lg="4">
      <DashboardBeautySalonTopStylistPerformance />
    </v-col>
  </v-row>

  <DashboardBeautySalonTopCustomers />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BeautySalonPage",
});
</script>
