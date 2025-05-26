<template>
  <v-row>
    <v-col lg="6">
      <v-row>
        <v-col lg="4" md="6" sm="6">
          <InstagramFollowers />
        </v-col>
        <v-col lg="4" md="6" sm="6">
          <LinkedInFollowers />
        </v-col>
        <v-col lg="4" md="6" sm="6">
          <TikTokFollowers />
        </v-col>
        <v-col lg="4" md="6" sm="6">
          <FacebookFollowers />
        </v-col>
        <v-col lg="4" md="6" sm="6">
          <XFollowers />
        </v-col>
        <v-col lg="4" md="6" sm="6">
          <YouTubeSubscribers />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="6">
      <LinkedInNetFollowersChart />
    </v-col>
    <v-col lg="4" md="6">
      <Suggestions />
    </v-col>
    <v-col lg="4" md="6">
      <FollowersByGenderChart />
    </v-col>
    <v-col lg="4" md="12">
      <RecentInstagramFollowers />
    </v-col>
    <v-col lg="8">
      <FacebookCampaignOverviewChart />
    </v-col>
    <v-col lg="4">
      <UpgradePlan />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InstagramFollowers from "@/components/Dashboard/SocialMedia/InstagramFollowers.vue";
import LinkedInFollowers from "@/components/Dashboard/SocialMedia/LinkedInFollowers.vue";
import TikTokFollowers from "@/components/Dashboard/SocialMedia/TikTokFollowers.vue";
import FacebookFollowers from "@/components/Dashboard/SocialMedia/FacebookFollowers.vue";
import XFollowers from "@/components/Dashboard/SocialMedia/XFollowers.vue";
import YouTubeSubscribers from "@/components/Dashboard/SocialMedia/YouTubeSubscribers.vue";
import LinkedInNetFollowersChart from "@/components/Dashboard/SocialMedia/LinkedInNetFollowersChart.vue";
import Suggestions from "@/components/Dashboard/SocialMedia/Suggestions.vue";
import FollowersByGenderChart from "@/components/Dashboard/SocialMedia/FollowersByGenderChart.vue";
import RecentInstagramFollowers from "@/components/Dashboard/SocialMedia/RecentInstagramFollowers.vue";
import FacebookCampaignOverviewChart from "@/components/Dashboard/SocialMedia/FacebookCampaignOverviewChart.vue";
import UpgradePlan from "@/components/Dashboard/SocialMedia/UpgradePlan.vue";

export default defineComponent({
  name: "SocialMediaPage",
  components: {
    InstagramFollowers,
    LinkedInFollowers,
    TikTokFollowers,
    FacebookFollowers,
    XFollowers,
    YouTubeSubscribers,
    LinkedInNetFollowersChart,
    Suggestions,
    FollowersByGenderChart,
    RecentInstagramFollowers,
    FacebookCampaignOverviewChart,
    UpgradePlan,
  },
});
</script>
