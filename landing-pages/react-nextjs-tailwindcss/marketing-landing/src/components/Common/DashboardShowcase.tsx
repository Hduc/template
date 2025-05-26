"use client";

import React from "react";
import Image from "next/image";

const DashboardShowcase: React.FC = () => {
  return (
    <>
      <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
          <div className="xl:max-w-[521px]">
            <Image
              src="/images/dashboard.jpg"
              className="rounded-[25px]"
              alt="dashboard"
              width={1040}
              height={1030}
            />
          </div>

          <div>
            <span className="inline-block py-[4.5px] px-[15px] rounded-[100px] bg-orange-100 dark:bg-[#0a0e19] text-orange-700 mb-[12px]">
              Dashboard Showcase
            </span>

            <h2 className="!text-gray-900 dark:!text-white md:-tracking-[1px] !font-medium !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl xl:max-w-[545px] !leading-[1.2] !mb-[10px] lg:!mb-[17px]">
              Experience Trezo in Action — No Guesswork, Just Results
            </h2>

            <p className="!leading-[1.6]">
              Get a firsthand look at how Trezo transforms your marketing
              workflow. From real-time performance tracking to campaign
              management and team collaboration — our interactive dashboard puts
              the power of data and strategy at your fingertips.
            </p>

            <div className="my-[20px] md:my-[30px] xl:my-[40px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                <div className="flex items-center md:text-md xl:text-lg font-medium text-gray-700 dark:text-gray-100 gap-[10px] md:gap-[12px]">
                  <div className="rounded-full w-[23px] h-[23px] md:w-[29px] md:h-[29px] flex items-center justify-center bg-success-600 text-white">
                    <i className="ri-check-fill"></i>
                  </div>
                  Real-time analytics
                </div>
                
                <div className="flex items-center md:text-md xl:text-lg font-medium text-gray-700 dark:text-gray-100 gap-[10px] md:gap-[12px]">
                  <div className="rounded-full w-[23px] h-[23px] md:w-[29px] md:h-[29px] flex items-center justify-center bg-success-600 text-white">
                    <i className="ri-check-fill"></i>
                  </div>
                  Customizable widgets
                </div>

                <div className="flex items-center md:text-md xl:text-lg font-medium text-gray-700 dark:text-gray-100 gap-[10px] md:gap-[12px]">
                  <div className="rounded-full w-[23px] h-[23px] md:w-[29px] md:h-[29px] flex items-center justify-center bg-success-600 text-white">
                    <i className="ri-check-fill"></i>
                  </div>
                  Drag-and-drop simplicity
                </div>

                <div className="flex items-center md:text-md xl:text-lg font-medium text-gray-700 dark:text-gray-100 gap-[10px] md:gap-[12px]">
                  <div className="rounded-full w-[23px] h-[23px] md:w-[29px] md:h-[29px] flex items-center justify-center bg-success-600 text-white">
                    <i className="ri-check-fill"></i>
                  </div>
                  No setup required
                </div>
              </div>
            </div>

            <p className="!leading-[1.6] text-gray-900 dark:text-gray-100 font-medium md:text-[15px] lg:text-md">
              Try the live demo and see why marketers love Trezo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardShowcase;
