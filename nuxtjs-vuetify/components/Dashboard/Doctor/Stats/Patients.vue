<template>
  <v-card
    class="patients-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="trezo-card-content d-flex justify-content-between">
      <div class="title">
        <span class="d-block"> Patients </span>
        <h2>334</h2>
        <span class="info-badge d-inline-block"> +7% </span>
      </div>
      <div class="icon">
        <v-img src="@/assets/images/icons/examination.svg" alt="examination" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Patients",
});
</script>

<style lang="scss" scoped>
.patients-card {
  .trezo-card-content {
    .title {
      h2 {
        margin: {
          top: 5px;
          bottom: 8px;
        }
        font: {
          size: 28px;
          weight: 900;
        }
      }
      .info-badge {
        font-size: 12px;
        padding: 0 10px;
        color: #1e8308;
        border-radius: 100px;
        border: 1px solid #82fc5a;
        background-color: #d8ffc8;

        &.down {
          border-color: #ffaa72;
          color: var(--dangerColor);
          background-color: #ffe8d4;
        }
      }
    }
    .icon {
      margin-top: 5px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .patients-card {
    .trezo-card-content {
      .title {
        h2 {
          font-size: 22px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .patients-card {
    .trezo-card-content {
      .title {
        h2 {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
