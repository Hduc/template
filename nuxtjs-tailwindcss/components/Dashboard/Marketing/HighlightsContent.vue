<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Highlights</h5>
      </div>
      <div class="trezo-card-subtitle">
        <span class="block"> Last 7 days </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <ul>
        <li
          class="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[14px] mb-[14px] last:border-none last:mb-0 last:pb-0"
        >
          <div class="relative ltr:pl-[23px] rtl:pr-[23px]">
            <img
              src="@/assets/images/icons/star.svg"
              class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
              alt="star"
            />
            Average Client Rating
          </div>
          <span
            class="block relative font-medium text-black dark:text-white ltr:pl-[20px] rtl:pr-[20px]"
          >
            <i
              class="material-symbols-outlined text-success-600 !text-[18px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              arrow_upward
            </i>
            4.9/5.0
          </span>
        </li>
        <li
          class="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[14px] mb-[14px] last:border-none last:mb-0 last:pb-0"
        >
          <div class="relative ltr:pl-[23px] rtl:pr-[23px]">
            <img
              src="@/assets/images/icons/instagram.svg"
              class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
              alt="instagram"
            />
            Instagram Followers
          </div>
          <span
            class="block relative font-medium text-black dark:text-white ltr:pl-[20px] rtl:pr-[20px]"
          >
            <i
              class="material-symbols-outlined text-orange-600 !text-[18px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              arrow_downward
            </i>
            630K
          </span>
        </li>
        <li
          class="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[14px] mb-[14px] last:border-none last:mb-0 last:pb-0"
        >
          <div class="relative ltr:pl-[23px] rtl:pr-[23px]">
            <img
              src="@/assets/images/icons/google2.svg"
              class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
              alt="google2"
            />
            Google Ads CPC
          </div>
          <span
            class="block relative font-medium text-black dark:text-white ltr:pl-[20px] rtl:pr-[20px]"
          >
            <i
              class="material-symbols-outlined text-success-600 !text-[18px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              arrow_upward
            </i>
            $3.58
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HighlightsContent",
});
</script>
