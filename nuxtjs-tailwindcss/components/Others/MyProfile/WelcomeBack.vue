<template>
  <div
    class="trezo-card mb-[25px] p-[20px] md:p-[25px] rounded-md"
    style="background: linear-gradient(81deg, #605dff 3.39%, #9747ff 93.3%)"
  >
    <div
      class="trezo-card-content relative sm:ltr:pr-[250px] sm:rtl:pl-[250px]"
    >
      <div class="md:py-[25px]">
        <h5 class="mb-[5px] md:mb-px font-semibold text-white">
          Welcome Back, <span class="text-orange-100">Olivia!</span>
        </h5>
        <p class="text-white">Your progress this week is Awesome.</p>
        <div class="md:mt-[35px] md:flex items-center">
          <div
            class="mt-[20px] md:mt-0 flex items-center md:ltr:mr-[35px] md:rtl:ml-[35px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <div
              class="w-[42px] h-[42px] ltr:mr-[12px] rtl:ml-[12px] bg-danger-200 text-danger-500 rounded-md flex items-center justify-center"
            >
              <i class="material-symbols-outlined"> airplay </i>
            </div>
            <div>
              <span class="block font-semibold text-white text-md"> 75h </span>
              <span class="block text-gray-200"> Hours Spent </span>
            </div>
          </div>
          <div
            class="mt-[20px] md:mt-0 flex items-center md:ltr:mr-[35px] md:rtl:ml-[35px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <div
              class="w-[42px] h-[42px] ltr:mr-[12px] rtl:ml-[12px] bg-success-100 text-success-600 rounded-md flex items-center justify-center"
            >
              <i class="material-symbols-outlined"> local_library </i>
            </div>
            <div>
              <span class="block font-semibold text-white text-md"> 15 </span>
              <span class="block text-gray-200"> Courses Completed </span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:ltr:-right-[15px] sm:rtl:-left-[15px] sm:-mt-[8px] sm:max-w-[285px]"
      >
        <img
          src="@/assets/images/online-learning.gif"
          alt="online-learning-image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomeBack",
});
</script>
