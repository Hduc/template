<template>
  <div
    class="youtube-subscribers-card card mb-4 border-0 border-radius d-block bg-white shadow-none"
  >
    <div class="card-body p-4">
      <div class="trezo-card-content">
        <img src="@/assets/images/icons/youtube.svg" alt="youtube" />
        <h3 class="fw-medium">84.7k</h3>
        <span class="d-block"> Subscribers </span>
        <div class="info d-flex align-items-center">
          <span class="d-block text-body"> This Month </span>
          <span class="info-badge down position-relative d-inline-block">
            <i class="ri-arrow-down-line"></i>
            5.2%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "YouTubeSubscribers",
});
</script>

<style lang="scss" scoped>
.youtube-subscribers-card {
  .trezo-card-content {
    margin: {
      left: -5px;
      right: -5px;
    }
    h3 {
      font-size: 36px;
      letter-spacing: -1px;
      margin: {
        top: 17px;
        bottom: -2px;
      }
    }
    span {
      color: #8695aa;
    }
    .info {
      gap: 5px;
      margin-top: 21px;

      span {
        font-size: 12px;
      }
      .info-badge {
        color: #1e8308;
        border-radius: 4px;
        padding: 0 5px 0 19px;
        background-color: #d8ffc8;

        i {
          top: 50%;
          left: 5px;
          position: absolute;
          transform: translateY(-50%);
        }
        &.down {
          color: #d71c00;
          background-color: #ffe1dd;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .youtube-subscribers-card {
    .trezo-card-content {
      margin: {
        left: 0;
        right: 0;
      }
      h3 {
        font-size: 28px;
      }
      .info {
        margin-top: 15px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .youtube-subscribers-card {
    .trezo-card-content {
      margin: {
        left: 0;
        right: 0;
      }
      h3 {
        font-size: 32px;
      }
      .info {
        margin-top: 20px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .youtube-subscribers-card {
    .trezo-card-content {
      margin: {
        left: 0;
        right: 0;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .youtube-subscribers-card {
    .trezo-card-content {
      margin: {
        left: 0;
        right: 0;
      }
    }
  }
}
</style>
