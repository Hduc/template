<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Shopify Theme Development</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div
        class="bg-primary-500 rounded-md mb-[12px] pt-[20px] md:pt-[25px] px-[20px] md:px-[25px] pb-[18px]"
      >
        <div class="md:flex items-center justify-between">
          <div class="flex items-center mt-[15px] first:mt-0 md:mt-0">
            <div
              class="w-[45px] h-[45px] rounded-full bg-primary-600 text-white flex items-center justify-center"
            >
              <i class="material-symbols-outlined"> for_you </i>
            </div>
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span class="block text-white"> Client </span>
              <span class="font-semibold text-white block text-md">
                Innovatech
              </span>
            </div>
          </div>
          <div class="flex items-center mt-[15px] first:mt-0 md:mt-0">
            <div
              class="w-[45px] h-[45px] rounded-full bg-primary-600 text-white flex items-center justify-center"
            >
              <i class="material-symbols-outlined"> attach_money </i>
            </div>
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span class="block text-white"> Budget </span>
              <span class="font-semibold text-white block text-md">
                $25,500
              </span>
            </div>
          </div>
          <div class="flex items-center mt-[15px] first:mt-0 md:mt-0">
            <div
              class="w-[45px] h-[45px] rounded-full bg-primary-600 text-white flex items-center justify-center"
            >
              <i class="material-symbols-outlined"> pace </i>
            </div>
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span class="block text-white"> Duration </span>
              <span class="font-semibold text-white block text-md">
                360 hrs
              </span>
            </div>
          </div>
        </div>
        <div
          class="flex w-full h-[7px] overflow-hidden rounded-md bg-gray-200 mt-[20px] mb-[8px]"
        >
          <div
            class="flex flex-col justify-center overflow-hidden bg-orange-400 rounded-md"
            style="width: 60%"
          ></div>
        </div>
        <div class="flex items-center justify-between">
          <span class="block text-white"> Progress </span>
          <span class="block text-white"> 60% </span>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <span class="block"> Project Started: 01 Mar 2024 </span>
        <span class="block"> Project Deadline: 25 Jun 2024 </span>
      </div>
      <span
        class="block text-black dark:text-white mb-[8px] mt-[20px] font-bold"
      >
        Project Details
      </span>
      <p class="leading-[1.7]">
        Vestibulum euismod nisi vitae orci placerat, vitae vehicula eros dictum.
        Phasellus ut pharetra felis. Nulla facilisi. Nullam congue semper nunc,
        at sodales magna laoreet id. Nullam et lacus vitae ligula pretium
        suscipit. Fusce nec viverra enim. Sed feugiat gravida nibh sit amet
        suscipit. Integer tempor sapien eget metus lacinia, nec finibus lacus
        tincidunt. Sed sodales tellus nec metus aliquam, nec dignissim arcu
        lobortis.
      </p>
      <ul class="list-disc ltr:pl-[22px] rtl:pr-[22px]">
        <li class="leading-[1.7] mb-[4px] last:mb-0">
          Outline the boundaries and deliverables of the project.
        </li>
        <li class="leading-[1.7] mb-[4px] last:mb-0">
          List team members, their roles, and responsibilities.
        </li>
        <li class="leading-[1.7] mb-[4px] last:mb-0">
          Specify the technology stack and tools to be used for development.
        </li>
        <li class="leading-[1.7] mb-[4px] last:mb-0">
          Break down the project into manageable phases or sprints.
        </li>
        <li class="leading-[1.7] mb-[4px] last:mb-0">
          Outline the design phase, including wireframing, prototyping
        </li>
        <li class="leading-[1.7] mb-[4px] last:mb-0">
          Outline the boundaries and deliverables of the project.
        </li>
        <li class="leading-[1.7] mb-[4px] last:mb-0">
          Specify the technology stack and tools to be used for development.
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThemeDevelopment",
});
</script>
