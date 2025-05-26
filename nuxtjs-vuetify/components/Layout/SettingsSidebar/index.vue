<template>
  <div
    :class="[
      'settings-sidebar bg-white transition',
      { active: stateStoreInstance.settings },
    ]"
  >
    <div
      class="settings-header bg-gray d-flex align-items-center justify-space-between"
    >
      <div class="logo d-flex align-items-center">
        <h5 class="m-0 lh-1">Theme Settings</h5>
      </div>
      <button
        type="button"
        class="close-btn"
        @click="stateStoreInstance.settingsBtn"
      >
        <i class="material-symbols-outlined"> close </i>
      </button>
    </div>
    <div class="settings-body">
      <div class="p-20">
        <span class="title d-block text-black fw-medium"> RTL / LTR</span>
        <RTLModeSwitch />
      </div>
      <v-divider></v-divider>
      <div class="p-20">
        <span class="title d-block text-black fw-medium">
          Horizontal Layout
        </span>
        <HorizontalLayout />
      </div>
      <v-divider></v-divider>
      <div class="p-20">
        <span class="title d-block text-black fw-medium">
          Only Sidebar Light / Dark
        </span>
        <OnlySidebarDark />
      </div>
      <v-divider></v-divider>
      <div class="p-20">
        <span class="title d-block text-black fw-medium">
          Only Header Light / Dark
        </span>
        <OnlyHeaderDark />
      </div>
      <v-divider></v-divider>
      <div class="p-20">
        <span class="title d-block text-black fw-medium">
          Only Footer Light / Dark
        </span>
        <OnlyFooterDark />
      </div>
    </div>
  </div>

  <div
    :class="[
      'settings-sidebar-overlay',
      { active: stateStoreInstance.settings },
    ]"
    @click="stateStoreInstance.settingsBtn"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "@/utils/store";

import RTLModeSwitch from "./RTLModeSwitch.vue";
import HorizontalLayout from "./HorizontalLayout.vue";
import OnlySidebarDark from "./OnlySidebarDark.vue";
import OnlyHeaderDark from "./OnlyHeaderDark.vue";
import OnlyFooterDark from "./OnlyFooterDark.vue";

export default defineComponent({
  name: "SettingsSidebar",
  components: {
    RTLModeSwitch,
    HorizontalLayout,
    OnlySidebarDark,
    OnlyHeaderDark,
    OnlyFooterDark,
  },
  setup() {
    const stateStoreInstance = stateStore;
    return {
      stateStoreInstance,
    };
  },
});
</script>

<style lang="scss" scoped>
.settings-sidebar {
  bottom: 0;
  z-index: 99999;
  right: -100%;
  width: 350px;
  height: 100%;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  box-shadow: rgba(149 157 165 / 61%) 0px 0px 24px;
  .settings-body {
    padding-top: 80px;
    height: 100vh;
    overflow-y: scroll;
    .title {
      margin-bottom: 12px;
    }
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:vertical {
      width: 5px;
    }
    &::-webkit-scrollbar:horizontal {
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background-color: rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-track {
      background: var(--whiteColor);
    }
    .buy-trezo-btn {
      padding: 10px 24px;
      border-radius: 30px;
      display: inline-block;
    }
  }
  .settings-header {
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    padding: 20px;
    position: absolute;
    justify-content: space-between;
    .logo {
      .v-img {
        margin-right: 8px;
      }
    }
    .close-btn {
      padding: 0;
      height: auto;
      min-width: auto;
      border-radius: 0;
      color: var(--blackColor);
    }
  }
  &.active {
    right: 0;
    opacity: 1;
    visibility: visible;
  }
}
.settings-sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
  &.active {
    display: block;
  }
}

/* Max width 350px */
@media only screen and (max-width: 350px) {
  .settings-sidebar {
    width: 100%;
  }
  .settings-box {
    width: 130px !important;
  }
}
</style>
