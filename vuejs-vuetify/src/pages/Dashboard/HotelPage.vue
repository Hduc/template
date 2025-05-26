<template>
  <v-row>
    <v-col cols="12" lg="8">
      <Stats />

      <v-row>
        <v-col cols="12" lg="6">
          <RoomsAvailabilityChart />
        </v-col>
        <v-col cols="12" lg="6">
          <GuestActivityChart />
        </v-col>
      </v-row>

      <UpcomingVIPReservations />
    </v-col>
    <v-col cols="12" lg="4">
      <RecentBookings />
    </v-col>
  </v-row>

  <PopularRooms />

  <CustomerReviews />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stats from "../../components/Dashboard/Hotel/Stats/index.vue";
import RoomsAvailabilityChart from "../../components/Dashboard/Hotel/RoomsAvailabilityChart.vue";
import GuestActivityChart from "../../components/Dashboard/Hotel/GuestActivityChart.vue";
import UpcomingVIPReservations from "../../components/Dashboard/Hotel/UpcomingVIPReservations.vue";
import RecentBookings from "../../components/Dashboard/Hotel/RecentBookings.vue";
import PopularRooms from "../../components/Dashboard/Hotel/PopularRooms.vue";
import CustomerReviews from "../../components/Dashboard/Hotel/CustomerReviews.vue";

export default defineComponent({
  name: "HotelPage",
  components: {
    Stats,
    RoomsAvailabilityChart,
    GuestActivityChart,
    UpcomingVIPReservations,
    RecentBookings,
    PopularRooms,
    CustomerReviews,
  },
});
</script>
