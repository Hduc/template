<template>
  <CommonPageTitle pageTitle="Room Details" subTitle="Hotel" />

  <PagesHotelRoomDetails />
  <div class="mb-25"></div>
  <PagesHotelRoomDetailsReviews />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RoomDetailsPage",
});
</script>
