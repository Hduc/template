<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Most Popular Sellers</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 bg-gray-100 dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Monthly
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
              ></i>
            </span>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Weekly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Monthly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Yearly
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Sellers
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Deliveries
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Earnings
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Ratings
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                View
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user58.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Johhna Loren
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      Queensland
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  6240
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  624 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center leading-none gap-[2px]">
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <span
                    class="block relative top-px text-xs text-gray-500 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >
                    5.0
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <i class="ri-arrow-right-line"></i>
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user53.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Skyler White
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      Neverdies
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  5135
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  597 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center leading-none gap-[2px]">
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-half-fill text-orange-500"></i>
                  <span
                    class="block relative top-px text-xs text-gray-500 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >
                    4.5
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <i class="ri-arrow-right-line"></i>
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user37.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Jonathon Watson
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      Emoticons
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  4321
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  413 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center leading-none gap-[2px]">
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-line text-orange-500"></i>
                  <span
                    class="block relative top-px text-xs text-gray-500 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >
                    4.0
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <i class="ri-arrow-right-line"></i>
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user36.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Walter White
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      Puzzleworld
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  3124
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  321 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center leading-none gap-[2px]">
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-half-fill text-orange-500"></i>
                  <i class="ri-star-line text-orange-500"></i>
                  <span
                    class="block relative top-px text-xs text-gray-500 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >
                    3.5
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <i class="ri-arrow-right-line"></i>
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user30.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      David Carlen
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      Liveslong
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  2137
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  246 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center leading-none gap-[2px]">
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <i class="ri-star-fill text-orange-500"></i>
                  <span
                    class="block relative top-px text-xs text-gray-500 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >
                    5.0
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <i class="ri-arrow-right-line"></i>
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination items="5" total="30" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "MostPopularSellers",
  components: {
    Pagination,
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
