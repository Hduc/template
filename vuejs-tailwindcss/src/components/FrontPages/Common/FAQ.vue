<template>
  <div
    class="relative z-[1] pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[150px]"
  >
    <div class="container 2xl:max-w-[1320px] mx-auto px-[12px]">
      <div
        class="mx-auto text-center lg:max-w-[650px] lg:max-w-[810px] xl:max-w-[785px] mb-[35px] md:mb-[50px] lg:mb-[65px] xl:mb-[90px]"
      >
        <div class="inline-block relative mt-[10px] mb-[20px]">
          <span
            class="absolute top-[4.5px] w-[5px] h-[5px] ltr:-left-[3.6px] rtl:-right-[3.6px] bg-purple-600 -rotate-[6.536deg]"
          ></span>
          <span
            class="absolute -top-[9.5px] w-[5px] h-[5px] ltr:right-0 rtl:left-0 bg-purple-600 -rotate-[6.536deg]"
          ></span>
          <span
            class="inline-block relative text-purple-600 border border-purple-600 py-[5.5px] px-[17.2px] -rotate-[6.536deg]"
          >
            FAQ's
            <span
              class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-left-[3.5px] rtl:-right-[3.5px] bg-purple-600 -rotate-[6.536deg]"
            ></span>
            <span
              class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-right-[3.5px] rtl:-left-[3.5px] bg-purple-600 -rotate-[6.536deg]"
            ></span>
          </span>
        </div>
        <h2
          class="mb-0 text-[24px] md:text-[28px] lg:text-[34px] xl:text-[36px] -tracking-[.5px] md:-tracking-[.6px] lg:-tracking-[.8px] xl:-tracking-[1px] leading-[1.2]"
        >
          Do You Have Questions? We Have Answers (Well, Most of the Time!)
        </h2>
      </div>
      <div
        class="toc-accordion mx-auto md:max-w-[738px]"
        id="tablesOfContentAccordion"
      >
        <div
          class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0"
        >
          <button
            class="toc-accordion-button open text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative"
            type="button"
          >
            What is Trezo?
            <i
              class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"
            ></i>
          </button>
          <div
            class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px]"
            style="display: block"
          >
            <p class="text-gray-500 dark:text-gray-400 leading-[1.7]">
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </div>
        </div>
        <div
          class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0"
        >
          <button
            class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative"
            type="button"
          >
            What features does Trezo offer?
            <i
              class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"
            ></i>
          </button>
          <div
            class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden"
          >
            <p class="text-gray-500 dark:text-gray-400 leading-[1.7]">
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
            <ul class="list-disc ltr:pl-[17px] rtl:pr-[17px]">
              <li
                class="text-gray-500 dark:text-gray-400 leading-[1.6] mb-[7px] last:mb-0"
              >
                Pellentesque viverra lorem malesuada nunc tristique sapien.
              </li>
              <li
                class="text-gray-500 dark:text-gray-400 leading-[1.6] mb-[7px] last:mb-0"
              >
                Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
              </li>
              <li
                class="text-gray-500 dark:text-gray-400 leading-[1.6] mb-[7px] last:mb-0"
              >
                Tellus non morbi nascetur cursus etiam facilisis mi.
              </li>
              <li
                class="text-gray-500 dark:text-gray-400 leading-[1.6] mb-[7px] last:mb-0"
              >
                Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
              </li>
            </ul>
          </div>
        </div>
        <div
          class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0"
        >
          <button
            class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative"
            type="button"
          >
            How can Trezo benefit my team?
            <i
              class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"
            ></i>
          </button>
          <div
            class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden"
          >
            <p class="text-gray-500 dark:text-gray-400 leading-[1.7]">
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </div>
        </div>
        <div
          class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0"
        >
          <button
            class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative"
            type="button"
          >
            Is Trezo suitable for small businesses?
            <i
              class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"
            ></i>
          </button>
          <div
            class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden"
          >
            <p class="text-gray-500 dark:text-gray-400 leading-[1.7]">
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </div>
        </div>
        <div
          class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0"
        >
          <button
            class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative"
            type="button"
          >
            Can I customize Trezo to fit my team's specific needs?
            <i
              class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"
            ></i>
          </button>
          <div
            class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden"
          >
            <p class="text-gray-500 dark:text-gray-400 leading-[1.7]">
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </div>
        </div>
        <div
          class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0"
        >
          <button
            class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative"
            type="button"
          >
            Is Trezo cloud-based or on-premises?
            <i
              class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"
            ></i>
          </button>
          <div
            class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden"
          >
            <p class="text-gray-500 dark:text-gray-400 leading-[1.7]">
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </div>
        </div>
        <div
          class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0"
        >
          <button
            class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative"
            type="button"
          >
            Does Trezo integrate with other tools?
            <i
              class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"
            ></i>
          </button>
          <div
            class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden"
          >
            <p class="text-gray-500 dark:text-gray-400 leading-[1.7]">
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "FAQ",
  setup() {
    const initializeAccordions = () => {
      const accordions = document.querySelectorAll<HTMLElement>(
        ".toc-accordion-button"
      );
      accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
          const siblingAccordions = Array.from(
            this.closest(
              ".toc-accordion-collapse"
            )?.querySelectorAll<HTMLElement>(".toc-accordion-button") ||
              accordions
          );
          siblingAccordions.forEach((acc) => {
            if (acc !== accordion) {
              acc.classList.remove("open");
              acc.setAttribute("aria-expanded", "false");
              const nextSibling = acc.nextElementSibling as HTMLElement;
              if (nextSibling) nextSibling.style.display = "none";
            }
          });

          this.classList.toggle("open");
          const panel = this.nextElementSibling as HTMLElement;
          if (panel) {
            if (panel.style.display === "block") {
              panel.style.display = "none";
              this.setAttribute("aria-expanded", "false");
            } else {
              panel.style.display = "block";
              this.setAttribute("aria-expanded", "true");
            }
          }
        });
      });
    };

    onMounted(() => {
      initializeAccordions();
    });
  },
});
</script>
