"use client";

import React, { useState } from "react";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed p-3 inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-3xl p-4 bg-white rounded-lg dark:bg-[#0a0e19]">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute -top-2 -right-2 bg-[#000] p-1 rounded-full text-red-500 hover:text-red-400"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* YouTube Video Iframe */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" /* 16:9 Aspect Ratio */ }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/_ZppXdKk4c8?si=9IpWzVHI_uDyzL4n"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-[#0a0e19] rounded-[20px] border border-gray-200 dark:border-[#202c4b] p-[20px] md:p-[25px] xl:p-[30px] lg:-mt-[385px] xl:-mt-[420px]">
        <div className="relative rounded-[20px]">
          <Image
            src="/images/courses/course2.jpg"
            alt="course-image"
            className="rounded-[20px] inline-block"
            width={684}
            height={440}
          />

          <button
            type="button"
            onClick={toggleModal}
            className="flex items-center justify-center w-[55px] h-[55px] bg-white rounded-full absolute left-0 right-0 top-1/2 -translate-y-1/2 mx-auto text-[35px] text-primary-500 transition-all hover:bg-primary-500 hover:text-white"
            data-fslightbox="html5-youtube-videos"
          >
            <i className="ri-play-fill"></i>
          </button>
        </div>

        <div className="my-[25px] md:my-[30px] lg:my-[40px]">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
            <div className="relative ltr:pl-[34px] rtl:pr-[34px] md:text-[15px] lg:text-md text-gray-700 dark:text-gray-200">
              <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0">
                payments
              </i>
              Price:
            </div>
            <div className="text-[18px] md:text-[20px] font-bold text-primary-500">
              $69
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
            <div className="relative ltr:pl-[34px] rtl:pr-[34px] md:text-[15px] lg:text-md text-gray-700 dark:text-gray-200">
              <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0">
                school
              </i>
              Instructor:
            </div>
            <div className="md:text-[15px] lg:text-md font-semibold text-gray-600 dark:text-gray-300">
              John
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
            <div className="relative ltr:pl-[34px] rtl:pr-[34px] md:text-[15px] lg:text-md text-gray-700 dark:text-gray-200">
              <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0">
                calendar_month
              </i>
              Duration:
            </div>
            <div className="md:text-[15px] lg:text-md font-semibold text-gray-600 dark:text-gray-300">
              12 weeks
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
            <div className="relative ltr:pl-[34px] rtl:pr-[34px] md:text-[15px] lg:text-md text-gray-700 dark:text-gray-200">
              <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0">
                menu_book
              </i>
              Lessons:
            </div>
            <div className="md:text-[15px] lg:text-md font-semibold text-gray-600 dark:text-gray-300">
              22
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
            <div className="relative ltr:pl-[34px] rtl:pr-[34px] md:text-[15px] lg:text-md text-gray-700 dark:text-gray-200">
              <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0">
                group
              </i>
              Students:
            </div>
            <div className="md:text-[15px] lg:text-md font-semibold text-gray-600 dark:text-gray-300">
              6,300
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
            <div className="relative ltr:pl-[34px] rtl:pr-[34px] md:text-[15px] lg:text-md text-gray-700 dark:text-gray-200">
              <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0">
                language
              </i>
              Language:
            </div>
            <div className="md:text-[15px] lg:text-md font-semibold text-gray-600 dark:text-gray-300">
              English
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
            <div className="relative ltr:pl-[34px] rtl:pr-[34px] md:text-[15px] lg:text-md text-gray-700 dark:text-gray-200">
              <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0">
                workspace_premium
              </i>
              Certifications:
            </div>
            <div className="md:text-[15px] lg:text-md font-semibold text-gray-600 dark:text-gray-300">
              Yes
            </div>
          </div>
        </div>

        <button
          type="button"
          className="block w-full py-[10px] md:py-[12px] px-[17px] md:px-[20px] bg-primary-600 hover:bg-primary-500 text-white md:text-[15px] lg:text-md font-medium rounded-md transition-all"
        >
          <span className="inline-block relative ltr:pl-[30px] rtl:pr-[30px] ltr:md:pl-[34px] rtl:md:pr-[34px]">
            <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 !text-[22px] md:!text-[24px]">
              shopping_cart
            </i>
            Buy Now
          </span>
        </button>
        
        <div className="flex items-center gap-[8px] mt-[20px] md:mt-[25px] lg:mt-[30px]">
          <span className="block md:text-[15px] lg:text-md">Share:</span>
          <a
            href="#"
            className="leading-none inline-block transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500 text-[22px]"
            target="_blank"
          >
            <i className="ri-facebook-box-fill"></i>
          </a>
          <a
            href="#"
            className="leading-none inline-block transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500 text-[22px]"
            target="_blank"
          >
            <i className="ri-twitter-x-fill"></i>
          </a>
          <a
            href="#"
            className="leading-none inline-block transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500 text-[22px]"
            target="_blank"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
