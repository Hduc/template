<template>
  <div
    class="trezo-card bg-purple-100 dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between border-b border-gray-200 dark:border-[#172036] pb-[8px] -mx-[20px] md:-mx-[25px] px-[20px] md:px-[25px]"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Exchange</h5>
      </div>
      <div class="trezo-card-subtitle">
        <button
          type="button"
          class="inline-block leading-none text-black dark:text-white transition-all hover:text-primary-500"
        >
          <i class="material-symbols-outlined"> refresh </i>
        </button>
      </div>
    </div>
    <div class="trezo-card-content pb-[13px]">
      <div class="mb-[20px] md:mb-[25px]">
        <div class="flex items-center justify-between mb-[12px]">
          <span class="block uppercase"> Selling </span>
          <span class="block uppercase"> Max 4,238 </span>
        </div>
        <div class="cryptocurrency-types relative">
          <button
            type="button"
            :class="{
              'block w-full relative text-black dark:text-white text-md uppercase font-medium text-sm md:text-base': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span class="flex items-center">
              <img
                src="@/assets/images/cryptocurrencies/big-ethereum.svg"
                class="ltr:mr-[10px] rtl:ml-[10px]"
                alt="ethereum"
              />
              Ethereum
              <span
                class="ltr:ml-[5px] rtl:mr-[5px] font-normal text-gray-500 dark:text-gray-400"
              >
                (ETH)
              </span>
            </span>
            <i
              class="ri-arrow-down-s-line absolute ltr:-right-[4px] rtl:-left-[4px] text-[22px] top-1/2 -translate-y-1/2"
            ></i>
          </button>
          <ul
            class="trezo-card-dropdown-menu mt-[10px] transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:left-0 rtl:right-0 w-full z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="flex items-center w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                <img
                  src="@/assets/images/cryptocurrencies/ethereum.svg"
                  class="w-[22px] ltr:mr-[8px] rtl:ml-[8px]"
                  alt="ethereum"
                />
                Ethereum
                <span
                  class="font-normal ltr:ml-[3px] rtl:mr-[3px] text-gray-500 dark:text-gray-400"
                >
                  (ETH)
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex items-center w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                <img
                  src="@/assets/images/cryptocurrencies/bitcoin.svg"
                  class="w-[22px] ltr:mr-[8px] rtl:ml-[8px]"
                  alt="bitcoin"
                />
                Bitcoin
                <span
                  class="font-normal ltr:ml-[3px] rtl:mr-[3px] text-gray-500 dark:text-gray-400"
                >
                  (BTC)
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex items-center w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                <img
                  src="@/assets/images/cryptocurrencies/solana.svg"
                  class="w-[22px] ltr:mr-[8px] rtl:ml-[8px]"
                  alt="solana"
                />
                Solana
                <span
                  class="font-normal ltr:ml-[3px] rtl:mr-[3px] text-gray-500 dark:text-gray-400"
                >
                  (SOL)
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex items-center w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                <img
                  src="@/assets/images/cryptocurrencies/cardano.png"
                  class="w-[22px] ltr:mr-[8px] rtl:ml-[8px]"
                  alt="cardano"
                />
                Cardano
                <span
                  class="font-normal ltr:ml-[3px] rtl:mr-[3px] text-gray-500 dark:text-gray-400"
                >
                  (ADA)
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex items-center w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                <img
                  src="@/assets/images/cryptocurrencies/binance.svg"
                  class="w-[22px] ltr:mr-[8px] rtl:ml-[8px]"
                  alt="binance"
                />
                Binance
                <span
                  class="font-normal ltr:ml-[3px] rtl:mr-[3px] text-gray-500 dark:text-gray-400"
                >
                  (BNB)
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div class="relative mt-[15px]">
          <label
            class="absolute ltr:left-[20px] rtl:right-[20px] text-xs top-[8px]"
          >
            ETH
          </label>
          <input
            type="text"
            class="block w-full bg-white dark:bg-[#0c1427] border border-white dark:border-[#0c1427] rounded-md font-bold text-black dark:text-white px-[20px] h-[50px] pt-[16px] outline-0"
            value="1"
          />
          <span
            class="absolute ltr:right-[20px] rtl:left-[20px] inline-block top-1/2 -translate-y-1/2"
          >
            $1750
          </span>
        </div>
      </div>
      <div class="mb-[20px] md:mb-[25px]">
        <div class="flex items-center justify-between mb-[12px]">
          <span class="block uppercase"> Buying </span>
        </div>
        <div class="cryptocurrency-types relative">
          <button
            type="button"
            :class="{
              'block w-full relative text-black dark:text-white text-md uppercase font-medium text-sm md:text-base': true,
              active: isActive2,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive2"
          >
            <span class="flex items-center">
              <img
                src="@/assets/images/cryptocurrencies/big-solana.svg"
                class="ltr:mr-[10px] rtl:ml-[10px]"
                alt="solana"
              />
              Solana
              <span
                class="ltr:ml-[5px] rtl:mr-[5px] font-normal text-gray-500 dark:text-gray-400"
              >
                (SOL)
              </span>
            </span>
            <i
              class="ri-arrow-down-s-line absolute ltr:-right-[4px] rtl:-left-[4px] text-[22px] top-1/2 -translate-y-1/2"
            ></i>
          </button>
          <ul
            class="trezo-card-dropdown-menu mt-[10px] transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:left-0 rtl:right-0 w-full z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="flex items-center w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                <img
                  src="@/assets/images/cryptocurrencies/ethereum.svg"
                  class="w-[22px] ltr:mr-[8px] rtl:ml-[8px]"
                  alt="ethereum"
                />
                Ethereum
                <span
                  class="font-normal ltr:ml-[3px] rtl:mr-[3px] text-gray-500 dark:text-gray-400"
                >
                  (ETH)
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex items-center w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                <img
                  src="@/assets/images/cryptocurrencies/bitcoin.svg"
                  class="w-[22px] ltr:mr-[8px] rtl:ml-[8px]"
                  alt="bitcoin"
                />
                Bitcoin
                <span
                  class="font-normal ltr:ml-[3px] rtl:mr-[3px] text-gray-500 dark:text-gray-400"
                >
                  (BTC)
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex items-center w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                <img
                  src="@/assets/images/cryptocurrencies/solana.svg"
                  class="w-[22px] ltr:mr-[8px] rtl:ml-[8px]"
                  alt="solana"
                />
                Solana
                <span
                  class="font-normal ltr:ml-[3px] rtl:mr-[3px] text-gray-500 dark:text-gray-400"
                >
                  (SOL)
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex items-center w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                <img
                  src="@/assets/images/cryptocurrencies/cardano.png"
                  class="w-[22px] ltr:mr-[8px] rtl:ml-[8px]"
                  alt="cardano"
                />
                Cardano
                <span
                  class="font-normal ltr:ml-[3px] rtl:mr-[3px] text-gray-500 dark:text-gray-400"
                >
                  (ADA)
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="flex items-center w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                <img
                  src="@/assets/images/cryptocurrencies/binance.svg"
                  class="w-[22px] ltr:mr-[8px] rtl:ml-[8px]"
                  alt="binance"
                />
                Binance
                <span
                  class="font-normal ltr:ml-[3px] rtl:mr-[3px] text-gray-500 dark:text-gray-400"
                >
                  (BNB)
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div class="relative mt-[15px]">
          <label
            class="absolute ltr:left-[20px] rtl:right-[20px] text-xs top-[8px]"
          >
            SOL
          </label>
          <input
            type="text"
            class="block w-full bg-white dark:bg-[#0c1427] border border-white dark:border-[#0c1427] rounded-md font-bold text-black dark:text-white px-[20px] h-[50px] pt-[16px] outline-0"
            value="75"
          />
          <span
            class="absolute ltr:right-[20px] rtl:left-[20px] inline-block top-1/2 -translate-y-1/2"
          >
            $35
          </span>
        </div>
      </div>
      <button
        class="py-[11px] px-[30px] block w-full text-center font-medium md:text-md rounded-md bg-primary-500 text-white transition-all hover:bg-primary-400"
        type="button"
      >
        Exchange
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "ExchangeCoin",
  setup() {
    const { isActive, isActive2, toggleActive, toggleActive2 } =
      useClickOutside("dropdownToggle");

    return {
      isActive,
      isActive2,
      toggleActive,
      toggleActive2,
    };
  },
});
</script>
