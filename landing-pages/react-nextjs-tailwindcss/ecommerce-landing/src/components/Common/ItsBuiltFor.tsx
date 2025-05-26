"use client";

import React from "react";
import Image from "next/image";

const ItsBuiltFor: React.FC = () => {
  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px] relative z-[1]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center mb-[35px] md:mb-[45px] lg:mb-[55px] xl:mb-[65px]">
            <span className="inline-block py-[4.5px] px-[15px] text-primary-600 bg-primary-50 dark:bg-gray-900 rounded-[100px] mb-[12px]">
              It&apos;s Built For
            </span>
            <h2 className="!text-gray-900 dark:!text-white !font-medium md:-tracking-[1px] !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl lg:max-w-[480px] xl:max-w-[540px] mx-auto !leading-[1.2] !mb-[11px] md:!mb-[13px] lg:!mb-[15px]">
              Perfect for Every Kind of Online Seller
            </h2>
            <p className="!leading-[1.6]">
              Whether you&apos;re just starting or scaling big — Trezo fits your
              store.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[25px]">
            <div>
              <div className="text-center mx-auto lg:max-w-[195px] relative lg:mt-[50px] xl:mt-[95px]">
                <div className="absolute -top-[50px] ltr:-right-[158px] rtl:-left-[158px] rtl:-scale-x-100 hidden lg:block">
                  <Image
                    src="/images/arrow-top-right.svg"
                    alt="arrow-top-right"
                    width={188}
                    height={87}
                  />
                </div>
                <div className="w-[120px] h-[120px] mx-auto bg-gray-50 md:bg-white dark:bg-[#0a0e19] rounded-full flex items-center justify-center mb-[20px] md:mb-[25px] lg:mb-[28px]">
                  <Image
                    src="/images/icons/brand.svg"
                    className="inline-block"
                    alt="brand"
                    width={70}
                    height={70}
                  />
                </div>
                <h3 className="!font-medium !text-lg text-gray-900 dark:text-white !leading-[1.2] !mb-[10px]">
                  D2C Brands
                </h3>
                <p className="!leading-[1.6]">
                  Control the full customer journey and drive loyalty.
                </p>
              </div>
            </div>

            <div>
              <div className="text-center mx-auto lg:max-w-[195px] relative xl:mt-[25px]">
                <div className="absolute top-[80px] ltr:-right-[158px] rtl:-left-[158px] rtl:-scale-x-100 hidden lg:block">
                  <Image
                    src="/images/arrow-bottom-right.svg"
                    alt="arrow-bottom-right"
                    width={188}
                    height={87}
                  />
                </div>
                <div className="w-[120px] h-[120px] mx-auto bg-gray-50 md:bg-white dark:bg-[#0a0e19] rounded-full flex items-center justify-center mb-[20px] md:mb-[25px] lg:mb-[28px]">
                  <Image
                    src="/images/icons/shopify.svg"
                    className="inline-block"
                    alt="shopify"
                    width={70}
                    height={70}
                  />
                </div>
                <h3 className="!font-medium !text-lg text-gray-900 dark:text-white !leading-[1.2] !mb-[10px]">
                  Shopify Sellers
                </h3>
                <p className="!leading-[1.6]">
                  Plug Trezo into your existing setup and enhance capabilities.
                </p>
              </div>
            </div>

            <div>
              <div className="text-center mx-auto lg:max-w-[195px] relative lg:mt-[50px] xl:mt-[95px]">
                <div className="absolute -top-[50px] ltr:-right-[158px] rtl:-left-[158px] rtl:-scale-x-100 hidden lg:block">
                  <Image
                    src="/images/arrow-top-right.svg"
                    alt="arrow-top-right"
                    width={188}
                    height={87}
                  />
                </div>
                <div className="w-[120px] h-[120px] mx-auto bg-gray-50 md:bg-white dark:bg-[#0a0e19] rounded-full flex items-center justify-center mb-[20px] md:mb-[25px] lg:mb-[28px]">
                  <Image
                    src="/images/icons/industry.svg"
                    className="inline-block"
                    alt="shopify"
                    width={70}
                    height={70}
                  />
                </div>
                <h3 className="!font-medium !text-lg text-gray-900 dark:text-white !leading-[1.2] !mb-[10px]">
                  Niche Stores
                </h3>
                <p className="!leading-[1.6]">
                  Run smarter with insights tailored to your audience.
                </p>
              </div>
            </div>

            <div>
              <div className="text-center mx-auto lg:max-w-[195px] relative xl:mt-[25px]">
                <div className="w-[120px] h-[120px] mx-auto bg-gray-50 md:bg-white dark:bg-[#0a0e19] rounded-full flex items-center justify-center mb-[20px] md:mb-[25px] lg:mb-[28px]">
                  <Image
                    src="/images/icons/shopping-store.svg"
                    className="inline-block"
                    alt="shopping-store"
                    width={70}
                    height={70}
                  />
                </div>
                <h3 className="!font-medium !text-lg text-gray-900 dark:text-white !leading-[1.2] !mb-[10px]">
                  Multi-Channel Retailers
                </h3>
                <p className="!leading-[1.6]">
                  Track sales from all platforms, seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[20px] lg:top-0 xl:-top-[100px] 2xl:-top-[200px] left-0 right-0 -z-[1] hidden md:block">
          <Image
            src="/images/mesh-grad.png"
            alt="mesh-grad"
            width={1920}
            height={1566}
          />
        </div>
      </div>
    </>
  );
};

export default ItsBuiltFor;
