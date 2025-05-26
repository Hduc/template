<template>
  <DashboardRealEstateAgentWelcomeRealEstateAgent />

  <div class="real-estate-agent-content">
    <DashboardRealEstateAgentStats />
    <v-row>
      <v-col cols="12" lg="8">
        <DashboardRealEstateAgentTotalRevenueChart />
      </v-col>
      <v-col cols="12" lg="4">
        <DashboardRealEstateAgentTopChannels />
      </v-col>
      <v-col cols="12" lg="4">
        <DashboardRealEstateAgentRecentClients />
      </v-col>
      <v-col cols="12" lg="8">
        <DashboardRealEstateAgentMyFeaturedListings />
      </v-col>
      <v-col cols="12" lg="8">
        <DashboardRealEstateAgentRevenueGoalProgress />
      </v-col>
      <v-col cols="12" lg="4">
        <DashboardRealEstateAgentSalesByCountry />
      </v-col>
      <v-col cols="12" lg="3">
        <DashboardRealEstateAgentDownloadApp />
      </v-col>
      <v-col cols="12" lg="9">
        <DashboardRealEstateAgentLatestTransactions />
      </v-col>
    </v-row>

    <DashboardRealEstateAgentClientRatings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RealEstateAgentPage",
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
