<template>
  <v-card
    class="new-bookings-card trezo-card border-radius d-block bg-primary-100 border-0 shadow-none p-20"
  >
    <div
      class="trezo-card-content d-flex d-md-block align-items-center justify-content-between"
    >
      <div>
        <span class="d-block text-body">New Bookings</span>
        <h1 class="lh-1">1540</h1>
        <span class="trezo-status-badge with-border cancelled"> -4.15% </span>
      </div>
      <div
        class="icon bg-white rounded-circle d-flex align-items-center justify-content-end"
      >
        <v-img src="@/assets/images/add-event2.svg" alt="add-event2" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewBookings",
});
</script>

<style lang="scss" scoped>
.new-bookings-card {
  padding: 20px;

  .trezo-card-content {
    h1 {
      font: {
        size: 28px;
        weight: 900;
      }
      margin: {
        top: 6px;
        bottom: 11px;
      }
    }
    .trezo-status-badge {
      border-radius: 30px;
    }
    .icon {
      width: 79px;
      height: 79px;
      margin: {
        left: auto;
        top: -15px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .new-bookings-card {
    padding: 17px;

    .trezo-card-content {
      h1 {
        font-size: 26px;
        margin-top: 5px;
      }
      .icon {
        margin-top: 0;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .new-bookings-card {
    padding: 20px;
  }
}
</style>
