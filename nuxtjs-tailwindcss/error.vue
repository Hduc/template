<template>
  <div class="bg-white dark:bg-[#0a0e19] py-[30px] h-screen overflow-x-hidden">
    <div class="w-full h-full table">
      <div class="table-cell align-middle">
        <div class="mx-auto max-w-[960px] text-center">
          <img
            src="@/assets/images/error.png"
            class="inline-block"
            alt="error-image"
          />
          <h4
            class="text-[19px] md:text-[21px] mt-[25px] md:mt-[33px] mb-[13px]"
          >
            Looks like we did not find this page, please try again later.
          </h4>
          <p>
            But no worries! Our team is looking ever where while you wait
            safely.
          </p>
          <NuxtLink
            to="/dashboard"
            class="inline-block font-medium rounded-md md:text-md mt-[2px] md:mt-[10px] py-[12px] px-[25px] text-white bg-primary-500 transition-all hover:bg-primary-400"
          >
            Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorPage",
});
</script>
