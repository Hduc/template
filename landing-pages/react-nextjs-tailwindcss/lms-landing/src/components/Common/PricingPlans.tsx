"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PricingPlans: React.FC = () => {
  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
            <div className="lg:max-w-[475px]">
              <div className="md:text-[15px] lg:text-md py-[4px] px-[17px] md:px-[18px] bg-[#ffef99] dark:bg-[#0a0e19] rounded-[100px] text-gray-900 dark:text-gray-200 inline-block">
                <div className="flex items-center gap-[8px] md:gap-[10px]">
                  <Image
                    src="/images/ico.svg"
                    alt="ico"
                    width={20}
                    height={20}
                  />
                  Pricing Plans
                </div>
              </div>

              <h2 className="!text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl md:-tracking-[1px] mt-[15px] !mb-[20px] md:!mb-[25px] lg:!mb-[12px] !text-gray-800 dark:!text-gray-100">
                Flexible Plans for Every Learner
              </h2>

              <div className="max-w-[436px] ltr:text-right rtl:text-left mb-[50px] hidden lg:block">
                <Image
                  src="/images/shapes/shape2.png"
                  className="inline-block"
                  alt="shape2"
                  width={129}
                  height={142}
                />
              </div>

              <Link
                href="#"
                className="inline-block py-[10px] md:py-[12px] px-[17px] md:px-[20px] bg-primary-600 hover:bg-primary-500 text-white md:text-[15px] lg:text-md font-medium rounded-md transition-all"
              >
                <span className="block relative ltr:pl-[30px] rtl:pr-[30px] ltr:md:pl-[34px] rtl:md:pr-[34px]">
                  <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 !text-[22px] md:!text-[24px]">
                    school
                  </i>
                  Start Free Trial
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px] md:gap-[40px]">
              <div className="bg-white dark:bg-[#0a0e19] rounded-[25px] border border-gray-200 dark:border-[#202c4b] text-center px-[20px] py-[30px] md:py-[55px] md:mt-[70px] md:mb-[70px] first:mb-0 last:mt-0">
                <div className="leading-none text-gray-700 dark:text-gray-100 text-3xl md:text-5xl">
                  $0
                  <span className="text-base md:text-[15px] lg:text-md font-normal text-gray-500 dark:text-gray-400">
                    /monthly
                  </span>
                </div>
                <span className="block text-md md:text-lg font-medium text-primary-500 mt-[20px] mb-[20px] md:mb-[30px]">
                  Free Plan
                </span>
                <p className="md:text-[15px] lg:text-md !leading-[1.6]">
                  Access to limited courses
                </p>

                <Link
                  href="#"
                  className="inline-block text-purple-600 lg:text-[15px] xl:text-[16px] py-[11px] px-[17px] rounded-md transition-all font-medium border border-purple-600 hover:text-white hover:bg-purple-500 hover:border-purple-500 mt-[10px] md:mt-[25px]"
                >
                  <span className="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]">
                    <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]">
                      person
                    </i>
                    Get Started
                  </span>
                </Link>
              </div>

              <div className="bg-white dark:bg-[#0a0e19] rounded-[25px] border border-gray-200 dark:border-[#202c4b] text-center px-[20px] py-[30px] md:py-[55px] md:mt-[70px] md:mb-[70px] first:mb-0 last:mt-0">
                <div className="leading-none text-gray-700 dark:text-gray-100 text-3xl md:text-5xl">
                  $29
                  <span className="text-base md:text-[15px] lg:text-md font-normal text-gray-500 dark:text-gray-400">
                    /monthly
                  </span>
                </div>
                <span className="block text-md md:text-lg font-medium text-primary-500 mt-[20px] mb-[20px] md:mb-[30px]">
                  Pro Plan
                </span>
                <p className="md:text-[15px] lg:text-md !leading-[1.6]">
                  Unlimited access to all courses
                </p>

                <Link
                  href="#"
                  className="inline-block text-purple-600 lg:text-[15px] xl:text-[16px] py-[11px] px-[17px] rounded-md transition-all font-medium border border-purple-600 hover:text-white hover:bg-purple-500 hover:border-purple-500 mt-[10px] md:mt-[25px]"
                >
                  <span className="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]">
                    <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]">
                      person
                    </i>
                    Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
