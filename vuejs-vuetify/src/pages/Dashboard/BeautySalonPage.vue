<template>
  <v-row>
    <v-col lg="6">
      <WelcomeBeautySalon />
    </v-col>
    <v-col lg="6">
      <v-row>
        <v-col lg="6" md="6" sm="12">
          <CustomerSatisfactionRateChart />
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <NewCustomers />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="8">
      <TopSellingProducts />
    </v-col>
    <v-col lg="4">
      <CustomersFromChannels />
    </v-col>
    <v-col lg="4">
      <FeaturedServices />
    </v-col>
    <v-col lg="8">
      <RecentAppointments />
    </v-col>
    <v-col lg="8">
      <RevenueByServicesChart />
    </v-col>
    <v-col lg="4">
      <TopStylistPerformance />
    </v-col>
  </v-row>

  <TopCustomers />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeBeautySalon from "@/components/Dashboard/BeautySalon/WelcomeBeautySalon.vue";
import CustomerSatisfactionRateChart from "@/components/Dashboard/BeautySalon/CustomerSatisfactionRateChart.vue";
import NewCustomers from "@/components/Dashboard/BeautySalon/NewCustomers.vue";
import TopSellingProducts from "@/components/Dashboard/BeautySalon/TopSellingProducts.vue";
import CustomersFromChannels from "@/components/Dashboard/BeautySalon/CustomersFromChannels.vue";
import FeaturedServices from "@/components/Dashboard/BeautySalon/FeaturedServices.vue";
import RecentAppointments from "@/components/Dashboard/BeautySalon/RecentAppointments.vue";
import RevenueByServicesChart from "@/components/Dashboard/BeautySalon/RevenueByServicesChart.vue";
import TopStylistPerformance from "@/components/Dashboard/BeautySalon/TopStylistPerformance.vue";
import TopCustomers from "@/components/Dashboard/BeautySalon/TopCustomers.vue";

export default defineComponent({
  name: "BeautySalonPage",
  components: {
    WelcomeBeautySalon,
    CustomerSatisfactionRateChart,
    NewCustomers,
    TopSellingProducts,
    CustomersFromChannels,
    FeaturedServices,
    RecentAppointments,
    RevenueByServicesChart,
    TopStylistPerformance,
    TopCustomers,
  },
});
</script>
