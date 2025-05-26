<template>
  <v-card
    class="check-out-card trezo-card border-radius d-block bg-purple-100 border-0 shadow-none p-20"
  >
    <div
      class="trezo-card-content d-flex d-md-block align-items-center justify-content-between"
    >
      <div>
        <span class="d-block"> Check Out </span>
        <h1 class="lh-1">315</h1>
        <span class="trezo-status-badge with-border cancelled"> -1.4% </span>
      </div>

      <div
        class="icon bg-white rounded-circle d-flex align-items-center justify-content-end"
      >
        <v-img src="@/assets/images/point.svg" alt="point" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CheckOut",
});
</script>

<style lang="scss" scoped>
.check-out-card {
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
  .check-out-card {
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
  .check-out-card {
    padding: 20px;
  }
}
</style>
