<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Icon Tabs</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="trezo-tabs" id="trezo-tabs">
        <ul
          class="navs mb-[20px] border-b border-gray-100 dark:border-[#172036]"
        >
          <li class="nav-item inline-block ltr:mr-[20px] rtl:ml-[20px]">
            <button
              type="button"
              :class="[
                'nav-link flex items-center gap-[4px] pb-[8px] transition-all relative font-medium',
                { active: activeTab === 'iconTab1' },
              ]"
              @click="setActiveTab('iconTab1')"
            >
              <i class="material-symbols-outlined !text-[20px]"> home </i>
              Tab 1
            </button>
          </li>
          <li class="nav-item inline-block ltr:mr-[20px] rtl:ml-[20px]">
            <button
              type="button"
              :class="[
                'nav-link flex items-center gap-[4px] pb-[8px] transition-all relative font-medium',
                { active: activeTab === 'iconTab2' },
              ]"
              @click="setActiveTab('iconTab2')"
            >
              <i class="material-symbols-outlined !text-[20px]"> home </i>
              Tab 2
            </button>
          </li>
          <li class="nav-item inline-block ltr:mr-[20px] rtl:ml-[20px]">
            <button
              type="button"
              :class="[
                'nav-link flex items-center gap-[4px] pb-[8px] transition-all relative font-medium',
                { active: activeTab === 'iconTab3' },
              ]"
              @click="setActiveTab('iconTab3')"
            >
              <i class="material-symbols-outlined !text-[20px]"> home </i>
              Tab 3
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane" v-show="activeTab === 'iconTab1'">
            <p>Icon Tab 1 - Hello World!</p>
          </div>
          <div class="tab-pane" v-show="activeTab === 'iconTab2'">
            <p>Icon Tab 2 - Hello World!</p>
          </div>
          <div class="tab-pane" v-show="activeTab === 'iconTab3'">
            <p>Icon Tab 3 - Hello World!</p>
          </div>
        </div>
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
  &lt;template&gt;
  &lt;div class=&quot;trezo-tabs&quot; id=&quot;trezo-tabs&quot;&gt;
    &lt;ul
      class=&quot;navs mb-[20px] border-b border-gray-100 dark:border-[#172036]&quot;
    &gt;
      &lt;li class=&quot;nav-item inline-block ltr:mr-[20px] rtl:ml-[20px]&quot;&gt;
        &lt;button
          type=&quot;button&quot;
          :class=&quot;[
            &#39;nav-link flex items-center gap-[4px] pb-[8px] transition-all relative font-medium&#39;,
            { active: activeTab === &#39;iconTab1&#39; },
          ]&quot;
          @click=&quot;setActiveTab(&#39;iconTab1&#39;)&quot;
        &gt;
          &lt;i class=&quot;material-symbols-outlined !text-[20px]&quot;&gt; home &lt;/i&gt;
          Tab 1
        &lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item inline-block ltr:mr-[20px] rtl:ml-[20px]&quot;&gt;
        &lt;button
          type=&quot;button&quot;
          :class=&quot;[
            &#39;nav-link flex items-center gap-[4px] pb-[8px] transition-all relative font-medium&#39;,
            { active: activeTab === &#39;iconTab2&#39; },
          ]&quot;
          @click=&quot;setActiveTab(&#39;iconTab2&#39;)&quot;
        &gt;
          &lt;i class=&quot;material-symbols-outlined !text-[20px]&quot;&gt; home &lt;/i&gt;
          Tab 2
        &lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item inline-block ltr:mr-[20px] rtl:ml-[20px]&quot;&gt;
        &lt;button
          type=&quot;button&quot;
          :class=&quot;[
            &#39;nav-link flex items-center gap-[4px] pb-[8px] transition-all relative font-medium&#39;,
            { active: activeTab === &#39;iconTab3&#39; },
          ]&quot;
          @click=&quot;setActiveTab(&#39;iconTab3&#39;)&quot;
        &gt;
          &lt;i class=&quot;material-symbols-outlined !text-[20px]&quot;&gt; home &lt;/i&gt;
          Tab 3
        &lt;/button&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;tab-content&quot;&gt;
      &lt;div class=&quot;tab-pane&quot; v-show=&quot;activeTab === &#39;iconTab1&#39;&quot;&gt;
        &lt;p&gt;Icon Tab 1 - Hello World!&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class=&quot;tab-pane&quot; v-show=&quot;activeTab === &#39;iconTab2&#39;&quot;&gt;
        &lt;p&gt;Icon Tab 2 - Hello World!&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class=&quot;tab-pane&quot; v-show=&quot;activeTab === &#39;iconTab3&#39;&quot;&gt;
        &lt;p&gt;Icon Tab 3 - Hello World!&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent, ref } from &quot;vue&quot;;

export default defineComponent({
  name: &quot;IconTabs&quot;,
  setup() {
    const activeTab = ref(&quot;iconTab1&quot;);

    const setActiveTab = (tab: string) =&gt; {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
});
&lt;/script&gt;
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
  name: "IconTabs",
  setup() {
    const showCode = ref(false);
    const activeTab = ref("iconTab1");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

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
      activeTab,
      setActiveTab,
    };
  },
});
</script>
