<template>
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <EmailSidebar />
    </div>
    <div class="lg:col-span-2">
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[15px] md:pb-[19px]"
        >
          <div class="trezo-card-title">
            <h5 class="mb-0 text-md font-semibold">Sales Review Meeting</h5>
          </div>
          <div
            class="trezo-card-subtitle flex items-center gap-[10px] md:gap-[15px] mt-[12px] sm:mt-0"
          >
            <button
              type="button"
              class="transition-all hover:text-primary-500 relative top-px"
            >
              <i class="material-symbols-outlined !text-[20px]"> archive </i>
            </button>
            <button
              type="button"
              class="transition-all hover:text-primary-500 relative top-px"
            >
              <i class="material-symbols-outlined !text-[20px]">
                help_clinic
              </i>
            </button>
            <button
              type="button"
              class="transition-all hover:text-primary-500 relative top-px"
            >
              <i class="material-symbols-outlined !text-[20px]"> delete </i>
            </button>
            <div class="trezo-card-dropdown relative">
              <button
                type="button"
                :class="{
                  'trezo-card-dropdown-btn inline-block transition-all text-[26px] leading-none text-black dark:text-white hover:text-primary-500': true,
                  active: isActive,
                }"
                id="dropdownToggle"
                @click.stop="toggleActive"
              >
                <i class="material-symbols-outlined !text-[20px]">
                  more_vert
                </i>
              </button>

              <ul
                class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
              >
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    <span
                      class="inline-block relative ltr:pl-[27px] rtl:pr-[27px]"
                    >
                      <i
                        class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-[20px]"
                      >
                        reply
                      </i>
                      Reply
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    <span
                      class="inline-block relative ltr:pl-[27px] rtl:pr-[27px]"
                    >
                      <i
                        class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-[20px]"
                      >
                        redo
                      </i>
                      Forward
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    <span
                      class="inline-block relative ltr:pl-[27px] rtl:pr-[27px]"
                    >
                      <i
                        class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-[20px]"
                      >
                        print
                      </i>
                      Print
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    <span
                      class="inline-block relative ltr:pl-[27px] rtl:pr-[27px]"
                    >
                      <i
                        class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-[20px]"
                      >
                        download
                      </i>
                      Download
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    <span
                      class="inline-block relative ltr:pl-[27px] rtl:pr-[27px]"
                    >
                      <i
                        class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-[20px]"
                      >
                        mark_email_unread
                      </i>
                      Mark as unread
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    <span
                      class="inline-block relative ltr:pl-[27px] rtl:pr-[27px]"
                    >
                      <i
                        class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-[20px]"
                      >
                        info
                      </i>
                      Report Spam
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    <span
                      class="inline-block relative ltr:pl-[27px] rtl:pr-[27px]"
                    >
                      <i
                        class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-[20px]"
                      >
                        delete
                      </i>
                      Delete
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    <span
                      class="inline-block relative ltr:pl-[27px] rtl:pr-[27px]"
                    >
                      <i
                        class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-[20px]"
                      >
                        block
                      </i>
                      Block Sarah
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="trezo-card-content">
          <div
            class="sm:flex items-center justify-between mb-[20px] md:mb-[25px]"
          >
            <div class="flex items-center">
              <img
                src="@/assets/images/users/user31.jpg"
                alt="user-image"
                class="rounded-full w-[45px]"
              />
              <div class="ltr:ml-[12px] rtl:mr-[12px]">
                <span class="block text-black dark:text-white font-semibold">
                  Sarah Smith
                </span>
                <span class="block text-xs mt-[2px]"> sarah@trezo.com </span>
              </div>
            </div>
            <div class="flex items-center mt-[15px] sm:mt-0">
              <button
                type="button"
                class="inline-block relative sm:top-px leading-none ltr:mr-[10px] rtl:ml-[10px] transition-all hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-[20px]"> grade </i>
              </button>
              <span class="block"> 26 March 2024 </span>
            </div>
          </div>
          <div class="md:ltr:pl-[57px] md:rtl:pr-[57px]">
            <span
              class="mb-[20px] md:mb-[25px] font-semibold text-black dark:text-white block"
            >
              Subject: Re: Quarterly Sales Review Meeting
            </span>
            <span
              class="text-black dark:text-white block font-medium mb-[20px] md:mb-[25px]"
            >
              Hi Smith,
            </span>
            <p class="mb-[20px] last:mb-0">
              Great, I'll go ahead and send out the calendar invite shortly.
            </p>
            <p class="mb-[20px] last:mb-0">
              Regarding the agenda, I think your suggestions are spot on. I'll
              add them to the agenda and circulate it to everyone before the
              meeting so they can come prepared.
            </p>
            <p class="mb-[20px] last:mb-0">
              In addition to our current initiatives, I believe it would be
              advantageous to have a concise yet comprehensive update on any new
              products or promotions that are scheduled to launch in the next
              quarter. This information will not only keep us informed but also
              assist in aligning our strategies with upcoming opportunities.
            </p>
            <p class="mb-[20px] last:mb-0">
              Let me know if you think that's a valuable addition to the agenda.
            </p>
            <div class="mt-[50px]">
              <span
                class="block text-black dark:text-white font-medium mb-[5px]"
              >
                Best regards,
              </span>
              <span class="block text-black dark:text-white font-medium">
                Olivia Parker
              </span>
            </div>
          </div>
          <div
            class="border-t border-gray-100 mt-[20px] md:mt-[25px] pt-[20px] md:pt-[25px] md:ltr:pl-[57px] md:rtl:pr-[57px]"
          >
            <button
              class="inline-block font-semibold md:text-md py-[7px] px-[25px] border border-primary-500 ltr:mr-[15px] rtl:ml-[15px] transition-all rounded-md text-white bg-primary-500 hover:bg-primary-400 hover:border-primary-400"
              type="submit"
            >
              Reply
            </button>
            <button
              class="inline-block font-semibold md:text-md py-[7px] px-[25px] border border-primary-500 ltr:mr-[15px] rtl:ml-[15px] transition-all rounded-md text-primary-500 hover:bg-primary-500 hover:text-white"
              type="submit"
            >
              Forward
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";
import EmailSidebar from "../../Email/EmailSidebar.vue";

export default defineComponent({
  name: "ReadEmail",
  components: {
    EmailSidebar,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
