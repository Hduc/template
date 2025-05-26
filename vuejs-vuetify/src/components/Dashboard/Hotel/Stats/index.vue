<template>
  <div
    class="hotel-stats-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="trezo-card-content">
      <div class="row">
        <div class="col-md-4">
          <NewBookings />
        </div>
        <div class="col-md-4">
          <CheckIn />
        </div>
        <div class="col-md-4">
          <CheckOut />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewBookings from "./NewBookings.vue";
import CheckIn from "./CheckIn.vue";
import CheckOut from "./CheckOut.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Stats",
  components: {
    NewBookings,
    CheckIn,
    CheckOut,
  },
});
</script>

<style lang="scss" scoped>
.hotel-stats-card {
  padding: 10px;

  .trezo-card-content {
    .row {
      margin: {
        left: -5px;
        right: -5px;
      }
      .col-md-4 {
        padding: {
          left: 5px;
          right: 5px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .hotel-stats-card {
    .trezo-card-content {
      margin-bottom: -10px;

      .row {
        .col-md-4 {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
