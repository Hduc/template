<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="flex justify-between">
        <div>
          <span
            class="inline-block px-[8.5px] text-success-600 border border-success-300 bg-success-100 text-sm rounded-[100px] text-xs"
          >
            +15%
          </span>
        </div>
        <div class="ltr:text-right rtl:text-left">
          <span class="block text-xs mb-px"> Last 30 days </span>
          <span class="block font-bold text-primary-500 text-xs"> +3k </span>
        </div>
      </div>
      <div class="mt-[20px] md:mt-[25px] flex items-end justify-between">
        <div>
          <span class="block mb-[4px]"> Total Customer </span>
          <h3 class="mb-0 text-[20px] text-black dark:text-white">29,554</h3>
        </div>
        <div
          class="w-[55px] lg:w-[60px] h-[55px] lg:h-[60px] flex items-center justify-center rounded-full text-white bg-primary-500"
        >
          <i class="material-symbols-outlined !text-[28px]"> group </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalCustomer",
});
</script>
