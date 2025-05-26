"use client";

import React from "react";
import Image from "next/image";

const Reviews: React.FC = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-[25px]">
          <div className="md:col-span-1">
            <div className="text-center bg-white dark:bg-[#0a0e19] rounded-md px-[20px] md:px-[25px] py-[25px] md:py-[55px] ltr:xl:mr-[15px] rtl:xl:ml-[15px]">
              <h3 className="!mb-[7px] !leading-none !text-xl !text-primary-500">
                4.7
              </h3>
              <div className="flex items-center justify-center mb-[5px] text-orange-400 text-[20px] gap-[2px]">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>
              <span className="block md:text-md lg:text-lg">10 ratings</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center relative gap-[20px] mb-[10px] ltr:pr-[30px] rtl:pl-[30px] last:mb-0">
              <div className="flex items-center justify-center text-orange-400 text-[15px] gap-[2px]">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <div className="flex w-full h-[4px] overflow-hidden rounded-md bg-[#D5D9E2] dark:bg-[#172036]">
                <div
                  className="flex flex-col justify-center overflow-hidden bg-[#FFC444] rounded-md"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span className="text-gray-700 dark:text-gray-200 absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2">
                5
              </span>
            </div>

            <div className="flex items-center relative gap-[20px] mb-[10px] ltr:pr-[30px] rtl:pl-[30px] last:mb-0">
              <div className="flex items-center justify-center text-orange-400 text-[15px] gap-[2px]">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line text-[#f6f5f3] dark:text-[#0e1321]"></i>
              </div>
              <div className="flex w-full h-[4px] overflow-hidden rounded-md bg-[#D5D9E2] dark:bg-[#172036]">
                <div
                  className="flex flex-col justify-center overflow-hidden bg-[#FFC444] rounded-md"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span className="text-gray-700 dark:text-gray-200 absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2">
                2
              </span>
            </div>

            <div className="flex items-center relative gap-[20px] mb-[10px] ltr:pr-[30px] rtl:pl-[30px] last:mb-0">
              <div className="flex items-center justify-center text-orange-400 text-[15px] gap-[2px]">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line text-[#f6f5f3] dark:text-[#0e1321]"></i>
                <i className="ri-star-line text-[#f6f5f3] dark:text-[#0e1321]"></i>
              </div>
              <div className="flex w-full h-[4px] overflow-hidden rounded-md bg-[#D5D9E2] dark:bg-[#172036]">
                <div
                  className="flex flex-col justify-center overflow-hidden bg-[#FFC444] rounded-md"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span className="text-gray-700 dark:text-gray-200 absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2">
                1
              </span>
            </div>

            <div className="flex items-center relative gap-[20px] mb-[10px] ltr:pr-[30px] rtl:pl-[30px] last:mb-0">
              <div className="flex items-center justify-center text-orange-400 text-[15px] gap-[2px]">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line text-[#f6f5f3] dark:text-[#0e1321]"></i>
                <i className="ri-star-line text-[#f6f5f3] dark:text-[#0e1321]"></i>
                <i className="ri-star-line text-[#f6f5f3] dark:text-[#0e1321]"></i>
              </div>
              <div className="flex w-full h-[4px] overflow-hidden rounded-md bg-[#D5D9E2] dark:bg-[#172036]">
                <div
                  className="flex flex-col justify-center overflow-hidden bg-[#FFC444] rounded-md"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span className="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2">
                0
              </span>
            </div>

            <div className="flex items-center relative gap-[20px] mb-[10px] ltr:pr-[30px] rtl:pl-[30px] last:mb-0">
              <div className="flex items-center justify-center text-orange-400 text-[15px] gap-[2px]">
                <i className="ri-star-fill"></i>
                <i className="ri-star-line text-[#f6f5f3] dark:text-[#0e1321]"></i>
                <i className="ri-star-line text-[#f6f5f3] dark:text-[#0e1321]"></i>
                <i className="ri-star-line text-[#f6f5f3] dark:text-[#0e1321]"></i>
                <i className="ri-star-line text-[#f6f5f3] dark:text-[#0e1321]"></i>
              </div>
              <div className="flex w-full h-[4px] overflow-hidden rounded-md bg-[#D5D9E2] dark:bg-[#172036]">
                <div
                  className="flex flex-col justify-center overflow-hidden bg-[#FFC444] rounded-md"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span className="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2">
                0
              </span>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-gray-200 dark:bg-[#172036] my-[25px] md:my-[35px] lg:my-[45px] xl:my-[60px]"></div>

        <div className="flex items-center gap-[15px] md:gap-[20px] lg:gap-[25px] xl:gap-[30px]">
          <Image
            src="/images/users/user6.jpg"
            className="rounded-full w-[120px]"
            alt="user-image"
            width={120}
            height={120}
          />
          <div>
            <h3 className="!text-md md:!text-lg lg:!text-[20px] !text-gray-700 dark:!text-gray-100 !mb-[8px]">
              David Mercer
            </h3>
            <span className="md:text-[15px] lg:text-md block mb-[8px]">
              Senior Full-Stack Engineer | Tech Educator | Mentor
            </span>
            <div className="flex items-center text-orange-400 text-md gap-[2px]">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
