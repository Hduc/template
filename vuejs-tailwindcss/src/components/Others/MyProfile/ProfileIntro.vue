<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Profile Intro</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="flex items-center">
        <img
          src="@/assets/images/admin.png"
          alt="user-image"
          class="rounded-full w-[75px]"
        />
        <div class="ltr:ml-[15px] rtl:mr-[15px]">
          <span
            class="block text-black dark:text-white text-[17px] font-semibold"
          >
            Olivia John
          </span>
          <span class="block mt-px"> Marketing Manager </span>
        </div>
      </div>
      <span
        class="text-black dark:text-white font-semibold block mb-[5px] mt-[16px]"
      >
        About Me
      </span>
      <p>
        Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit
        mauris placerat nisi placerat. Pellentesque viverra lorem malesuada nunc
        tristique sapien. Imperdiet sit hendrerit tincidunt bibendum donec
        adipiscing.
      </p>
      <span class="text-black dark:text-white font-semibold block mb-[11px]">
        Social Profile
      </span>
      <div class="flex items-center gap-[7px]">
        <a
          href="#"
          class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
          target="_blank"
        >
          <i
            class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
          ></i>
        </a>
        <a
          href="#"
          class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
          target="_blank"
        >
          <i
            class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
          ></i>
        </a>
        <a
          href="#"
          class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
          target="_blank"
        >
          <i
            class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
          ></i>
        </a>
        <a
          href="#"
          class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
          target="_blank"
        >
          <i
            class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
          ></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileIntro",
});
</script>
