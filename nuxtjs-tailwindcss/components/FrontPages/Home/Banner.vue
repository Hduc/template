<template>
  <div class="pt-[125px] md:pt-[145px] lg:pt-[185px]">
    <div class="container 2xl:max-w-[1320px] mx-auto px-[12px] relative z-[1]">
      <div
        class="text-center mx-auto xl:max-w-[935px] mb-[30px] md:mb-[45px] lg:mb-[60px]"
      >
        <h1
          class="text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] mb-[13px] md:mb-[22px] lg:mb-[25px] xl:mb-[30px] -tracking-[.5px] md:-tracking-[1px] xl:-tracking-[1.5px] leading-[1.2]"
        >
          Insights On-the-Go: Access Your Dashboard Anywhere, Anytime
        </h1>
        <p
          class="mx-auto leading-[1.6] md:text-[15px] lg:text-[16px] xl:text-[18px] md:max-w-[600px] lg:max-w-[650px] xl:max-w-[740px] xl:tracking-[.2px]"
        >
          Our intuitive interface transforms complex data into actionable
          insights, empowering you to make informed decisions with confidence.
        </p>
        <NuxtLink
          to="/dashboard"
          class="inline-block lg:text-[15px] xl:text-[16px] mt-[5px] md:mt-[12px] lg:mt-[20px] xl:mt-[25px] py-[12px] px-[17px] bg-primary-600 text-white rounded-md transition-all font-medium hover:bg-primary-500"
        >
          <span
            class="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]"
            >
              person
            </i>
            Get started - It is free
          </span>
        </NuxtLink>
      </div>
      <div class="text-center">
        <img
          src="@/assets/images/front-pages/dashboard.png"
          class="inline-block"
          alt="dashboard-image"
        />
      </div>
      <div
        class="absolute -z-[1] ltr:-right-[30px] rtl:-left-[30px] bottom-[50px] blur-[150px]"
      >
        <img src="@/assets/images/front-pages/shape3.png" alt="shape3" />
      </div>
      <div
        class="absolute -z-[1] ltr:left-[25px] rtl:right-[25px] -top-[210px] blur-[125px]"
      >
        <img src="@/assets/images/front-pages/shape2.png" alt="shape3" />
      </div>
      <div
        class="absolute -z-[1] ltr:right-[260px] rtl:left-[260px] -top-[125px] blur-[75px]"
      >
        <img src="@/assets/images/front-pages/shape4.png" alt="shape3" />
      </div>
      <div
        class="absolute -z-[1] ltr:-left-[50px] rtl:-right-[50px] bottom-0 blur-[75px]"
      >
        <img src="@/assets/images/front-pages/shape5.png" alt="shape3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Banner",
});
</script>
