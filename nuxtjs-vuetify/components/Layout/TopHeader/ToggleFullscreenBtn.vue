<template>
  <button class="fullscreen-btn" @click="toggleFullscreen">
    <i class="material-symbols-outlined">fullscreen</i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToggleFullscreenBtn",
  methods: {
    toggleFullscreen() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const element = document.documentElement as any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const doc = document as any;

      if (!doc.fullscreenElement) {
        // Enter fullscreen mode
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        }
      } else {
        // Exit fullscreen mode
        if (doc.exitFullscreen) {
          doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen();
        }
      }
    },
  },
});
</script>
