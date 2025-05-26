<template>
  <v-row>
    <v-col lg="6">
      <v-row>
        <v-col lg="4" md="6" sm="6">
          <DashboardSocialMediaInstagramFollowers />
        </v-col>
        <v-col lg="4" md="6" sm="6">
          <DashboardSocialMediaLinkedInFollowers />
        </v-col>
        <v-col lg="4" md="6" sm="6">
          <DashboardSocialMediaTikTokFollowers />
        </v-col>
        <v-col lg="4" md="6" sm="6">
          <DashboardSocialMediaFacebookFollowers />
        </v-col>
        <v-col lg="4" md="6" sm="6">
          <DashboardSocialMediaXFollowers />
        </v-col>
        <v-col lg="4" md="6" sm="6">
          <DashboardSocialMediaYouTubeSubscribers />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="6">
      <DashboardSocialMediaLinkedInNetFollowersChart />
    </v-col>
    <v-col lg="4" md="6">
      <DashboardSocialMediaSuggestions />
    </v-col>
    <v-col lg="4" md="6">
      <DashboardSocialMediaFollowersByGenderChart />
    </v-col>
    <v-col lg="4" md="12">
      <DashboardSocialMediaRecentInstagramFollowers />
    </v-col>
    <v-col lg="8">
      <DashboardSocialMediaFacebookCampaignOverviewChart />
    </v-col>
    <v-col lg="4">
      <DashboardSocialMediaUpgradePlan />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialMediaPage",
});
</script>
