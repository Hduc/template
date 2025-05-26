<template>
  <v-card
    class="daily-limit-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none p-10"
  >
    <div class="trezo-card-content daily-limit bg-success-50 border-radius">
      <div class="d-flex justify-content-between">
        <div>
          <span class="d-block"> Daily Limit </span>
          <h5 class="mb-0">
            $5,000<span class="fw-normal text-body">/$2250</span>
          </h5>
        </div>
        <div>
          <span class="trezo-badge with-border border-radius rejected">
            -45.9%
          </span>
        </div>
      </div>
      <div
        class="progress success w-100"
        role="progressbar"
        aria-valuenow="85"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" style="width: 85%"></div>
      </div>
    </div>
    <div
      class="trezo-card-content get-platinum-card d-flex align-items-center bg-success border-radius position-relative z-1"
    >
      <v-img
        src="@/assets/images/avatar-with-laptop.png"
        alt="avatar-with-laptop"
      />
      <div>
        <span class="d-block text-white"> Get a Platinum Card </span>
        <h5 class="mb-0 text-white"><span class="fw-normal">For</span> Free</h5>
      </div>
      <div class="shape">
        <v-img src="@/assets/images/4dots.png" alt="4dots" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DailyLimit",
});
</script>

<style lang="scss" scoped>
.daily-limit-card {
  background-color: #37d80a;

  .trezo-card-content {
    margin-bottom: 10px;

    .progress {
      background-color: #b2ff97;
      height: 10px;
      margin-top: 15px;
      border-radius: 0.375rem;

      .progress-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        color: var(--bs-progress-bar-color);
        text-align: center;
        white-space: nowrap;
        height: 10px;
        background-color: var(--successColor);
        border-radius: 0.375rem;
        transition: var(--bs-progress-bar-transition);
      }
    }
    &.daily-limit {
      padding: 25px;

      h5 {
        font-size: 20px;
        margin-top: 5px;

        span {
          font-size: var(--fontSize);
        }
      }
    }
    &.get-platinum-card {
      padding: 18px 25px;
      gap: 10px;
      margin-bottom: 0;

      h5 {
        font-size: 20px;
        margin-top: 5px;

        span {
          font-size: var(--fontSize);
        }
      }
      .shape {
        right: 0;
        bottom: 0;
        z-index: -1;
        position: absolute;
        border-radius: 0 0 7px 0;
      }
    }
  }
}
.bg-success {
  background-color: var(--successColor) !important;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .daily-limit-card {
    .trezo-card-content {
      &:nth-child(1) {
        padding: 17px;
      }
      &:nth-child(2) {
        padding: 17px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .daily-limit-card {
    .trezo-card-content {
      &:nth-child(1) {
        padding: 20px;
      }
      &:nth-child(2) {
        padding: 20px;
      }
    }
  }
}
</style>
