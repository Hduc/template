<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <form class="relative mb-[20px]">
        <label
          class="absolute ltr:left-[13px] rtl:right-[13px] mt-[2px] text-black dark:text-white top-1/2 -translate-y-1/2"
        >
          <i class="material-symbols-outlined !text-lg"> search </i>
        </label>
        <input
          type="text"
          class="block w-full rounded-md text-black dark:text-white bg-gray-50 dark:bg-[#15203c] border border-gray-50 dark:border-[#15203c] focus:border-primary-500 h-[40px] outline-0 transition-all text-xs placeholder:text-gray-500 dark:placeholder:text-gray-400 ltr:pl-[39px] rtl:pr-[39px] ltr:pr-[15px] rtl:pl-[15px]"
          placeholder="Search"
        />
      </form>
      <NuxtLink
        to="/apps/email/compose"
        class="block w-full bg-primary-500 text-white rounded-md md:text-md px-[22px] py-[12px] text-center font-medium transition-all hover:bg-primary-600"
      >
        <span class="inline-block ltr:pl-[29px] rtl:pr-[29px] relative">
          <i
            class="material-symbols-outlined absolute !text-[20px] ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
          >
            edit
          </i>
          Compose
        </span>
      </NuxtLink>

      <ul class="my-[20px] md:my-[25px]">
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-primary-500 dark:text-white transition-all hover:text-primary-500 font-medium"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              inbox
            </i>
            Inbox
            <span
              class="block font-normal text-xs text-gray-500 dark:text-gray-400"
            >
              10
            </span>
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              star_rate
            </i>
            Starred
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              alarm
            </i>
            Snoozed
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              send
            </i>
            Sent
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              draft
            </i>
            Drafts
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              bookmark
            </i>
            Important
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              auto_read_pause
            </i>
            Chats
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              schedule_send
            </i>
            Scheduled
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              forward_to_inbox
            </i>
            All Mail
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              live_help
            </i>
            Spam
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              delete
            </i>
            Trash
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              account_circle
            </i>
            Personal
          </a>
        </li>
        <li class="mb-[13px] md:mb-[17px] last:mb-0">
          <a
            href="#"
            class="flex items-center justify-between relative ltr:pl-[30px] rtl:pr-[30px] text-black dark:text-white transition-all hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
            >
              trip
            </i>
            Company
          </a>
        </li>
      </ul>

      <button
        type="button"
        class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
      >
        <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
          >
            add
          </i>
          Add New Label
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailSidebar",
});
</script>
