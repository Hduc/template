<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Project Overview</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
        <div>
          <div
            class="bg-primary-50 dark:bg-[#15203c] rounded-md py-[22px] px-[20px]"
          >
            <div class="flex items-center">
              <div
                class="text-primary-500 leading-none ltr:mr-[10px] rtl:ml-[10px]"
              >
                <i class="material-symbols-outlined !text-5xl">
                  history_toggle_off
                </i>
              </div>
              <div>
                <span class="block"> Total Hours </span>
                <h5 class="mb-0 text-[20px] mt-[2px]">102</h5>
              </div>
            </div>
            <div
              class="mt-[15px] sm:mt-[25px] flex items-center justify-between"
            >
              <span class="block text-sm"> Hours this week </span>
              <span
                class="inline-block text-sm text-success-700 py-[1px] px-[8.3px] border border-success-300 bg-success-100 rounded-xl"
              >
                +10%
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            class="bg-orange-50 dark:bg-[#15203c] rounded-md py-[22px] px-[20px]"
          >
            <div class="flex items-center">
              <div
                class="text-orange-500 leading-none ltr:mr-[10px] rtl:ml-[10px]"
              >
                <i class="material-symbols-outlined !text-5xl"> local_cafe </i>
              </div>
              <div>
                <span class="block"> Total Cup of Coffee </span>
                <h5 class="mb-0 text-[20px] mt-[2px]">89</h5>
              </div>
            </div>
            <div
              class="mt-[15px] sm:mt-[25px] flex items-center justify-between"
            >
              <span class="block text-sm"> Coffee this week </span>
              <span
                class="inline-block text-sm text-success-700 py-[1px] px-[8.3px] border border-success-300 bg-success-100 rounded-xl"
              >
                +5.75%
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            class="bg-success-50 dark:bg-[#15203c] rounded-md py-[22px] px-[20px]"
          >
            <div class="flex items-center">
              <div
                class="text-success-500 leading-none ltr:mr-[10px] rtl:ml-[10px]"
              >
                <i class="material-symbols-outlined !text-5xl"> door_open </i>
              </div>
              <div>
                <span class="block"> Total Days </span>
                <h5 class="mb-0 text-[20px] mt-[2px]">54</h5>
              </div>
            </div>
            <div
              class="mt-[15px] sm:mt-[25px] flex items-center justify-between"
            >
              <span class="block text-sm"> Days this week </span>
              <span
                class="inline-block text-sm text-danger-700 py-[1px] px-[8.3px] border border-danger-300 bg-danger-100 rounded-xl"
              >
                -15%
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            class="bg-purple-50 dark:bg-[#15203c] rounded-md py-[22px] px-[20px]"
          >
            <div class="flex items-center">
              <div
                class="text-purple-500 leading-none ltr:mr-[10px] rtl:ml-[10px]"
              >
                <i class="material-symbols-outlined !text-5xl"> group </i>
              </div>
              <div>
                <span class="block"> Team Members </span>
                <h5 class="mb-0 text-[20px] mt-[2px]">55+</h5>
              </div>
            </div>
            <div class="mt-[14px] flex items-center justify-between">
              <span class="block text-sm"> Hard Worker </span>
              <div class="flex items-center">
                <img
                  src="@/assets/images/users/user15.jpg"
                  class="rounded-full inline-block w-[34px] h-[34px] ltr:-mr-[14px] rtl:-ml-[14px] border border-white"
                  alt="user-image"
                />
                <img
                  src="@/assets/images/users/user14.jpg"
                  class="rounded-full inline-block w-[34px] h-[34px] ltr:-mr-[14px] rtl:-ml-[14px] border border-white"
                  alt="user-image"
                />
                <img
                  src="@/assets/images/users/user13.jpg"
                  class="rounded-full inline-block w-[34px] h-[34px] ltr:-mr-[14px] rtl:-ml-[14px] border border-white"
                  alt="user-image"
                />
                <img
                  src="@/assets/images/users/user12.jpg"
                  class="rounded-full inline-block w-[34px] h-[34px] ltr:-mr-[14px] rtl:-ml-[14px] border border-white"
                  alt="user-image"
                />
                <span
                  class="inline-block w-[34px] h-[34px] rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center text-xs"
                >
                  +55
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsOverview",
});
</script>
