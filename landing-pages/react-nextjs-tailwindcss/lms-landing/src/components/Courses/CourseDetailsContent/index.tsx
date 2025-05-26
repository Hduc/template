"use client";

import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import CourseOverview from "./CourseOverview";
import Curriculum from "./Curriculum";
import Instructor from "./Instructor";
import Reviews from "./Reviews";

const CourseDetailsContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      {/* Page Banner */}
      <div className="pt-[120px] pb-[60px] md:pt-[140px] md:pb-[80px] lg:pt-[175px] lg:pb-[110px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <h1 className="!text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl md:-tracking-[1px] !text-gray-800 dark:!text-gray-100 !mb-[15px] md:!mb-[20px]">
            Full-Stack Web Development
          </h1>

          <div className="inline-block">
            <ul className="flex items-center justify-center gap-[5px] md:gap-[10px] py-[5px] px-[18px] bg-[#ffef99] dark:bg-[#0a0e19] rounded-[100px]">
              <li>
                <Link
                  href="/"
                  className="transition-all text-gray-900 dark:text-gray-200 hover:text-primary-500"
                >
                  Home
                </Link>
              </li>
              <li className="text-gray-900 dark:text-gray-200 text-[20px] leading-none rtl:-scale-x-100">
                <i className="ri-arrow-right-s-line"></i>
              </li>
              <li className="text-gray-900 dark:text-gray-200">Courses</li>
              <li className="text-gray-900 dark:text-gray-200 text-[20px] leading-none rtl:-scale-x-100">
                <i className="ri-arrow-right-s-line"></i>
              </li>
              <li className="text-gray-900 dark:text-gray-200">
                Course Details
              </li>
            </ul>
          </div>

          <ul className="mt-[20px] md:mt-[30px] lg:mt-[40px] md:flex items-center gap-[20px] xl:gap-[25px]">
            <li className="relative text-[15px] md:text-md lg:text-lg text-gray-700 dark:text-gray-300 ltr:pl-[34px] ltr:md:pl-[38px] rtl:pr-[34px] rtl:md:pr-[38px] mt-[12px] first:mt-0 md:mt-0">
              <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 md:!text-[29px]">
                menu_book
              </i>
              By:{" "}
              <Link
                href="#"
                className="text-gray-800 dark:text-gray-200 transition-all hover:text-primary-500"
              >
                John
              </Link>
            </li>
            <li className="hidden md:block">
              <div className="w-[1px] h-[22.958px] bg-gray-200 dark:bg-gray-800"></div>
            </li>
            <li className="relative text-[15px] md:text-md lg:text-lg text-gray-700 dark:text-gray-300 ltr:pl-[34px] ltr:md:pl-[38px] rtl:pr-[34px] rtl:md:pr-[38px] mt-[12px] first:mt-0 md:mt-0">
              <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 md:!text-[29px]">
                group
              </i>
              6,300+ Enrolled
            </li>
            <li className="hidden md:block">
              <div className="w-[1px] h-[22.958px] bg-gray-200 dark:bg-gray-800"></div>
            </li>
            <li className="text-[15px] md:text-md lg:text-lg flex items-center gap-[5px] md:gap-[10px] mt-[12px] first:mt-0 md:mt-0">
              <div className="flex items-center text-orange-400 leading-none lg:text-md gap-[2px] relative -top-[3px]">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
              4.7 (980 ratings)
            </li>
          </ul>
        </div>
      </div>

      {/* Course Details */}
      <div className="bg-[#f6f5f3] dark:bg-[#0e1321] py-[70px] md:py-[90px] lg:py-[110px] xl:py-[140px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
            <div className="lg:col-span-2">
              <div className="trezo-tabs xl:max-w-[740px]">
                {/* Tab list  */}
                <ul className="navs mb-[30px] md:mb-[40px] lg:mb-[50px] -mt-[15px] border-b border-gray-200 dark:border-[#172036]">
                  <li className="nav-item inline-block mt-[15px] ltr:mr-[20px] rtl:ml-[20px] ltr:md:mr-[35px] rtl:md:ml-[35px] ltr:lg:mr-[50px] rtl:lg:ml-[50px] ltr:xl:mr-[65px] rtl:xl:ml-[65px] ltr:last:mr-0 rtl:last:ml-0">
                    <button
                      type="button"
                      onClick={() => handleTabClick(0)}
                      className={`nav-link block pb-[8px] md:pb-[10px] lg:pb-[15px] transition-all relative font-medium md:text-[15px] lg:text-md ${
                        activeTab === 0 ? "active" : ""
                      }`}
                    >
                      Overview
                    </button>
                  </li>
                  <li className="nav-item inline-block mt-[15px] ltr:mr-[20px] rtl:ml-[20px] ltr:md:mr-[35px] rtl:md:ml-[35px] ltr:lg:mr-[50px] rtl:lg:ml-[50px] ltr:xl:mr-[65px] rtl:xl:ml-[65px] ltr:last:mr-0 rtl:last:ml-0">
                    <button
                      type="button"
                      onClick={() => handleTabClick(1)}
                      className={`nav-link block pb-[8px] md:pb-[10px] lg:pb-[15px] transition-all relative font-medium md:text-[15px] lg:text-md ${
                        activeTab === 1 ? "active" : ""
                      }`}
                    >
                      Curriculum
                    </button>
                  </li>
                  <li className="nav-item inline-block mt-[15px] ltr:mr-[20px] rtl:ml-[20px] ltr:md:mr-[35px] rtl:md:ml-[35px] ltr:lg:mr-[50px] rtl:lg:ml-[50px] ltr:xl:mr-[65px] rtl:xl:ml-[65px] ltr:last:mr-0 rtl:last:ml-0">
                    <button
                      type="button"
                      onClick={() => handleTabClick(2)}
                      className={`nav-link block pb-[8px] md:pb-[10px] lg:pb-[15px] transition-all relative font-medium md:text-[15px] lg:text-md ${
                        activeTab === 2 ? "active" : ""
                      }`}
                    >
                      Instructor
                    </button>
                  </li>
                  <li className="nav-item inline-block mt-[15px] ltr:mr-[20px] rtl:ml-[20px] ltr:md:mr-[35px] rtl:md:ml-[35px] ltr:lg:mr-[50px] rtl:lg:ml-[50px] ltr:xl:mr-[65px] rtl:xl:ml-[65px] ltr:last:mr-0 rtl:last:ml-0">
                    <button
                      type="button"
                      onClick={() => handleTabClick(3)}
                      className={`nav-link block pb-[8px] md:pb-[10px] lg:pb-[15px] transition-all relative font-medium md:text-[15px] lg:text-md ${
                        activeTab === 3 ? "active" : ""
                      }`}
                    >
                      Reviews
                    </button>
                  </li>
                </ul>

                {/* Tab Content  */}
                <div>
                  {activeTab === 0 && <CourseOverview />}
                  {activeTab === 1 && <Curriculum />}
                  {activeTab === 2 && <Instructor />}
                  {activeTab === 3 && <Reviews />}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsContent;
