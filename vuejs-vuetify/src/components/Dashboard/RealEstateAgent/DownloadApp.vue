<template>
  <v-card
    class="mobile-app-card trezo-card mb-25 border-radius d-block border-0 shadow-none"
  >
    <div class="trezo-card-content mx-auto">
      <h3>Manage Your Dashboard From Your Mobile</h3>
      <a href="#" target="_blank" class="link-btn"> Download App </a>
      <v-img
        src="@/assets/images/saas.png"
        alt="saas"
        class="d-block mx-auto"
      />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DownloadApp",
});
</script>

<style scoped lang="scss">
.mobile-app-card {
  &.v-card {
    &.trezo-card {
      background-color: #b2ff97 !important;
    }
  }

  .trezo-card-content {
    max-width: 210px;
    padding: {
      top: 26px;
      bottom: 26px;
    }
    h3 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    .link-btn {
      padding: 7px 17.5px;
      margin-bottom: 31px;
      display: inline-block;
      border-radius: 0.375rem;
      color: var(--whiteColor);
      background-color: #1a5710;
      font: {
        size: 16px;
        weight: 500;
      }
      &:hover {
        color: var(--whiteColor);
        background-color: var(--successColor);
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .mobile-app-card {
    .trezo-card-content {
      padding: {
        top: 10px;
        bottom: 10px;
      }
      h3 {
        font-size: 20px;
        margin-bottom: 17px;
      }
      .link-btn {
        font-size: 14px;
        margin-bottom: 20px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .mobile-app-card {
    .trezo-card-content {
      padding: {
        top: 20px;
        bottom: 20px;
      }
      h3 {
        font-size: 22px;
        margin-bottom: 20px;
      }
      .link-btn {
        font-size: 15px;
        margin-bottom: 25px;
      }
    }
  }
}
</style>
