<template>
  <WelcomeRealEstateAgent />

  <div class="real-estate-agent-content">
    <Stats />
    <v-row>
      <v-col cols="12" lg="8">
        <TotalRevenueChart />
      </v-col>
      <v-col cols="12" lg="4">
        <TopChannels />
      </v-col>
      <v-col cols="12" lg="4">
        <RecentClients />
      </v-col>
      <v-col cols="12" lg="8">
        <MyFeaturedListings />
      </v-col>
      <v-col cols="12" lg="8">
        <RevenueGoalProgress />
      </v-col>
      <v-col cols="12" lg="4">
        <SalesByCountry />
      </v-col>
      <v-col cols="12" lg="3">
        <DownloadApp />
      </v-col>
      <v-col cols="12" lg="9">
        <LatestTransactions />
      </v-col>
    </v-row>

    <ClientRatings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeRealEstateAgent from "../../components/Dashboard/RealEstateAgent/WelcomeRealEstateAgent.vue";
import Stats from "../../components/Dashboard/RealEstateAgent/Stats.vue";
import TotalRevenueChart from "../../components/Dashboard/RealEstateAgent/TotalRevenueChart.vue";
import TopChannels from "../../components/Dashboard/RealEstateAgent/TopChannels.vue";
import RecentClients from "../../components/Dashboard/RealEstateAgent/RecentClients.vue";
import MyFeaturedListings from "../../components/Dashboard/RealEstateAgent/MyFeaturedListings.vue";
import RevenueGoalProgress from "../../components/Dashboard/RealEstateAgent/RevenueGoalProgress.vue";
import SalesByCountry from "../../components/Dashboard/RealEstateAgent/SalesByCountry.vue";
import DownloadApp from "../../components/Dashboard/RealEstateAgent/DownloadApp.vue";
import LatestTransactions from "../../components/Dashboard/RealEstateAgent/LatestTransactions.vue";
import ClientRatings from "../../components/Dashboard/RealEstateAgent/ClientRatings.vue";

export default defineComponent({
  name: "RealEstateAgentPage",
  components: {
    WelcomeRealEstateAgent,
    Stats,
    TotalRevenueChart,
    TopChannels,
    RecentClients,
    MyFeaturedListings,
    RevenueGoalProgress,
    SalesByCountry,
    DownloadApp,
    LatestTransactions,
    ClientRatings,
  },
});
</script>

<style scoped lang="scss">
.real-estate-agent-content {
  margin-top: -67px;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .real-estate-agent-content {
    margin-top: 25px;
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .real-estate-agent-content {
    margin-top: 25px;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .real-estate-agent-content {
    margin-top: 25px;
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .real-estate-agent-content {
    margin-top: 25px;
  }
}
</style>
