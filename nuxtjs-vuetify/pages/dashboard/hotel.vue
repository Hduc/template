<template>
  <v-row>
    <v-col cols="12" lg="8">
      <DashboardHotelStats />

      <v-row>
        <v-col cols="12" lg="6">
          <DashboardHotelRoomsAvailabilityChart />
        </v-col>
        <v-col cols="12" lg="6">
          <DashboardHotelGuestActivityChart />
        </v-col>
      </v-row>

      <DashboardHotelUpcomingVIPReservations />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardHotelRecentBookings />
    </v-col>
  </v-row>

  <DashboardHotelPopularRooms />

  <DashboardHotelCustomerReviews />
</template>

<script>
export default {
  name: "HotelPage",
};
</script>
