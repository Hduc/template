<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Disabled</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="mb-[20px] md:mb-[25px] last:mb-0">
        <input
          type="text"
          class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500 disabled:bg-gray-50 dark:disabled:bg-dark"
          placeholder="Disabled input"
          disabled
        />
      </div>
      <div class="mt-[15px] md:mt-[20px]"></div>
      <button
        type="button"
        class="clickToSeeCodeBtn inline-block text-black dark:text-white font-semibold"
        @click="toggleCode"
      >
        {{ showCode ? "Click to Hide Code:" : "Click to See Code:" }}
      </button>
      <div class="relative click-to-show-hide-code" v-show="showCode">
        <button
          class="absolute text-lg ltr:right-[20px] rtl:left-[20px] top-[20px] transition-all text-primary-500 copy-btn w-[35px] h-[35px] inline-block border border-primary-500 bg-white rounded-sm dark:bg-[#0c1427]"
          @click="copyCode"
          type="button"
        >
          <i class="ri-file-copy-line"></i>
        </button>
        <pre
          class="line-numbers !mt-[15px] !py-0 !px-[20px] md:!px-[25px] mb-0"
        >
<code class="language-markup" id="copyCodes">
&lt;input type=&quot;text&quot; class=&quot;h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500 disabled:bg-gray-50 dark:disabled:bg-dark&quot; placeholder=&quot;Disabled input&quot; disabled&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "DisabledInput",
  setup() {
    const showCode = ref(false);

    const toggleCode = () => {
      showCode.value = !showCode.value;
    };

    const copyCode = async () => {
      const codeElement = document.getElementById("copyCodes");
      if (codeElement) {
        try {
          await navigator.clipboard.writeText(codeElement.innerText);
          alert("Code copied to clipboard!");
        } catch (err) {
          console.error("Failed to copy code: ", err);
        }
      }
    };

    onMounted(() => {
      Prism.highlightAll();
    });

    return {
      showCode,
      toggleCode,
      copyCode,
    };
  },
});
</script>
