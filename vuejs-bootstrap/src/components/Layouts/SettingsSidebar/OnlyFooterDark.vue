<template>
  <div
    class="d-flex align-items-center position-relative settings-box-wrap for-footer-dark"
    style="gap: 25px"
  >
    <div class="cursor position-relative active-wrap2" @click="setLightMode">
      <div class="settings-box" :class="{ 'active-light': !isDarkMode }">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px">
        <i
          class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"
          :class="{ 'opacity-1': !isDarkMode, 'opacity-0': isDarkMode }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-0': !isDarkMode, 'opacity-1': isDarkMode }"
        ></i>
        <span class="fw-semibold">Light</span>
      </div>
    </div>

    <div class="cursor position-relative active-wrap1" @click="setDarkMode">
      <div class="settings-box" :class="{ 'active-dark': isDarkMode }">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px">
        <i
          class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"
          :class="{ 'opacity-1': isDarkMode, 'opacity-0': !isDarkMode }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-0': isDarkMode, 'opacity-1': !isDarkMode }"
        ></i>
        <span class="fw-semibold">Dark</span>
      </div>
    </div>

    <button
      class="footer-light-dark settings-btn"
      id="footer-light-dark"
      @click="toggleOnlyFooterDarkMode"
    ></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "OnlyFooterDark",
  setup() {
    const isDarkMode = ref(false);

    const toggleOnlyFooterDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      updateBodyClass();
      localStorage.setItem("footer-dark", String(isDarkMode.value));
    };

    const setDarkMode = () => {
      isDarkMode.value = true;
      updateBodyClass();
      localStorage.setItem("footer-dark", "true");
    };

    const setLightMode = () => {
      isDarkMode.value = false;
      updateBodyClass();
      localStorage.setItem("footer-dark", "false");
    };

    const updateBodyClass = () => {
      document.body.classList.toggle("footer-dark", isDarkMode.value);
    };

    onMounted(() => {
      isDarkMode.value = localStorage.getItem("footer-dark") === "true";
      updateBodyClass();
    });

    return {
      isDarkMode,
      toggleOnlyFooterDarkMode,
      setDarkMode,
      setLightMode,
    };
  },
});
</script>
