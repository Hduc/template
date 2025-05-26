<template>
  <div
    class="breadcrumb-card border-radius mb-25 d-md-flex align-items-center justify-content-between"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <h5 class="mb-0 text-white">Crypto Performance</h5>
    <ol class="breadcrumb list-unstyled mt-0 mb-0 p-0">
      <li class="breadcrumb-item d-inline-block position-relative text-white">
        <RouterLink
          to="/dashboard"
          class="d-inline-block position-relative text-white"
          exact
        >
          <i class="material-symbols-outlined text-white"> home </i>
          Dashboard
        </RouterLink>
      </li>
      <li class="breadcrumb-item d-inline-block position-relative text-white">
        Crypto Performance
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import bgImage from "@/assets/images/sparkline-bg.jpg";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Breadcrumb",
  data() {
    return {
      bgImage,
    };
  },
});
</script>

<style scoped lang="scss">
.breadcrumb-card {
  padding: 25px;
  background: {
    position: center center;
    repeat: no-repeat;
    size: cover;
  }
  .breadcrumb-item {
    a {
      color: var(--whiteColor);

      i {
        color: var(--whiteColor);
      }
      &:hover {
        opacity: 0.7;
      }
    }
    &::before {
      color: var(--whiteColor);
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .breadcrumb-card {
    padding: 17px;
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .breadcrumb-card {
    padding: 20px;
  }
}
</style>
