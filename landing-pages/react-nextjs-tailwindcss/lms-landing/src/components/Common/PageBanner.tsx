"use client";

import React from "react";
import Link from "next/link";

interface PageBannerProps {
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  pageTitle,
  homePageUrl,
  homePageText,
}) => {
  return (
    <>
      <div className="pt-[115px] pb-[60px] md:pt-[140px] md:pb-[80px] lg:pt-[175px] lg:pb-[110px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center">
            <h1 className="!text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl md:-tracking-[1px] !text-gray-800 dark:!text-gray-100 !mb-[15px] md:!mb-[20px] lg:!mb-[25px]">
              {pageTitle}
            </h1>

            <div className="inline-block">
              <ul className="flex items-center justify-center gap-[5px] md:gap-[10px] py-[5px] px-[18px] bg-[#ffef99] dark:bg-[#0a0e19] rounded-[100px]">
                <li>
                  <Link
                    href={homePageUrl}
                    className="transition-all text-gray-900 dark:text-gray-200 hover:text-primary-500"
                  >
                    {homePageText}
                  </Link>
                </li>
                <li className="text-gray-900 dark:text-gray-200 text-[20px] leading-none rtl:-scale-x-100">
                  <i className="ri-arrow-right-s-line"></i>
                </li>
                <li className="text-gray-900 dark:text-gray-200">
                  {pageTitle}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
