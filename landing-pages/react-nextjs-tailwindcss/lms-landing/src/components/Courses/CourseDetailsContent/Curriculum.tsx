"use client";

import React, { useState } from "react";

const Curriculum: React.FC = () => {
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

      <div>
        <div className="p-[20px] md:p-[25px] xl:p-[30px] border border-gray-200 dark:border-gray-900 mb-[25px] md:mb-[30px] lg:mb-[40px] last:mb-0">
          <div className="flex items-center justify-between">
            <h4 className="!text-md md:!text-lg lg:!text-[20px] !mb-0 text-gray-700 dark:text-gray-100">
              Introduction to Web Development
            </h4>
            <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full bg-white dark:bg-dark flex items-center justify-center text-[25px] text-gray-700 dark:text-gray-300">
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>

          <ul className="mt-[20px] md:mt-[25px] lg:mt-[30px]">
            <li className="relative md:flex items-center justify-between border-b border-gray-200 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
              <div className="relative md:text-[15px] lg:text-md font-medium text-gray-700 dark:text-gray-100 ltr:pl-[35px] rtl:pr-[35px]">
                <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                  description
                </i>
                How the web works
              </div>
              <div className="mt-[15px] md:mt-0 text-gray-700 dark:text-gray-100 flex items-center gap-[15px]">
                <div className="bg-purple-500 text-white rounded-[4px] px-[8px] py-[3.5px]">
                  <span className="inline-block relative ltr:pl-[20px] rtl:pl-[20px]">
                    <i className="ri-play-line absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2 text-[22px]"></i>
                    Overview
                  </span>
                </div>
                <i className="material-symbols-outlined">visibility</i>
              </div>
              <button
                type="button"
                onClick={toggleModal}
                className="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                data-fslightbox="html5-youtube-videos"
              ></button>
            </li>

            <li className="relative md:flex items-center justify-between border-b border-gray-200 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
              <div className="relative md:text-[15px] lg:text-md font-medium text-gray-700 dark:text-gray-100 ltr:pl-[35px] rtl:pr-[35px]">
                <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                  description
                </i>
                Front-end vs. back-end overview
              </div>
              <div className="mt-[15px] md:mt-0 text-gray-700 dark:text-gray-100 flex items-center gap-[15px]">
                <div className="bg-orange-100 dark:bg-[#0a0e19] text-orange-600 rounded-[4px] px-[8px] py-[3.5px]">
                  <span className="inline-block relative ltr:pl-[20px] rtl:pl-[20px]">
                    <i className="ri-time-line absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 text-[18px]"></i>
                    12:30 Minutes
                  </span>
                </div>
                <i className="material-symbols-outlined">lock</i>
              </div>
            </li>

            <li className="relative md:flex items-center justify-between border-b border-gray-200 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
              <div className="relative md:text-[15px] lg:text-md font-medium text-gray-700 dark:text-gray-100 ltr:pl-[35px] rtl:pr-[35px]">
                <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                  description
                </i>
                Tools you&apos;ll need (Code editor, Browser, Git)
              </div>
              <div className="mt-[15px] md:mt-0 text-gray-700 dark:text-gray-100 flex items-center gap-[15px]">
                <div className="bg-orange-100 dark:bg-[#0a0e19] text-orange-600 rounded-[4px] px-[8px] py-[3.5px]">
                  <span className="inline-block relative ltr:pl-[20px] rtl:pl-[20px]">
                    <i className="ri-time-line absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 text-[18px]"></i>
                    8:00 Minutes
                  </span>
                </div>
                <i className="material-symbols-outlined">lock</i>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-[20px] md:p-[25px] xl:p-[30px] border border-gray-200 dark:border-gray-900 mb-[25px] md:mb-[30px] lg:mb-[40px] last:mb-0">
          <div className="flex items-center justify-between">
            <h4 className="!text-md md:!text-lg lg:!text-[20px] !mb-0 text-gray-700 dark:text-gray-100">
              HTML Fundamentals
            </h4>
            <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full bg-white dark:bg-dark flex items-center justify-center text-[25px] text-gray-700 dark:text-gray-300">
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
          <ul className="mt-[20px] md:mt-[25px] lg:mt-[30px]">
            <li className="relative md:flex items-center justify-between border-b border-gray-200 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
              <div className="relative md:text-[15px] lg:text-md font-medium text-gray-700 dark:text-gray-100 ltr:pl-[35px] rtl:pr-[35px]">
                <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                  description
                </i>
                Structure of an HTML document
              </div>
              <div className="mt-[15px] md:mt-0 text-gray-700 dark:text-gray-100 flex items-center gap-[15px]">
                <div className="bg-orange-100 dark:bg-[#0a0e19] text-orange-600 rounded-[4px] px-[8px] py-[3.5px]">
                  <span className="inline-block relative ltr:pl-[20px] rtl:pl-[20px]">
                    <i className="ri-time-line absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 text-[18px]"></i>
                    12:30 Minutes
                  </span>
                </div>
                <i className="material-symbols-outlined">lock</i>
              </div>
            </li>

            <li className="relative md:flex items-center justify-between border-b border-gray-200 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
              <div className="relative md:text-[15px] lg:text-md font-medium text-gray-700 dark:text-gray-100 ltr:pl-[35px] rtl:pr-[35px]">
                <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                  description
                </i>
                Text formatting, links, and images
              </div>
              <div className="mt-[15px] md:mt-0 text-gray-700 dark:text-gray-100 flex items-center gap-[15px]">
                <div className="bg-orange-100 dark:bg-[#0a0e19] text-orange-600 rounded-[4px] px-[8px] py-[3.5px]">
                  <span className="inline-block relative ltr:pl-[20px] rtl:pl-[20px]">
                    <i className="ri-time-line absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 text-[18px]"></i>
                    8:00 Minutes
                  </span>
                </div>
                <i className="material-symbols-outlined">lock</i>
              </div>
            </li>

            <li className="relative md:flex items-center justify-between border-b border-gray-200 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
              <div className="relative md:text-[15px] lg:text-md font-medium text-gray-700 dark:text-gray-100 ltr:pl-[35px] rtl:pr-[35px]">
                <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                  description
                </i>
                Forms and semantic elements
              </div>
              <div className="mt-[15px] md:mt-0 text-gray-700 dark:text-gray-100 flex items-center gap-[15px]">
                <div className="bg-orange-100 dark:bg-[#0a0e19] text-orange-600 rounded-[4px] px-[8px] py-[3.5px]">
                  <span className="inline-block relative ltr:pl-[20px] rtl:pl-[20px]">
                    <i className="ri-time-line absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 text-[18px]"></i>
                    11:00 Minutes
                  </span>
                </div>
                <i className="material-symbols-outlined">lock</i>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-[20px] md:p-[25px] xl:p-[30px] border border-gray-200 dark:border-gray-900 mb-[25px] md:mb-[30px] lg:mb-[40px] last:mb-0">
          <div className="flex items-center justify-between">
            <h4 className="!text-md md:!text-lg lg:!text-[20px] !mb-0 text-gray-700 dark:text-gray-100">
              CSS & Responsive Design
            </h4>
            <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full bg-white dark:bg-dark flex items-center justify-center text-[25px] text-gray-700 dark:text-gray-300">
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>

          <ul className="mt-[20px] md:mt-[25px] lg:mt-[30px]">
            <li className="relative md:flex items-center justify-between border-b border-gray-200 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
              <div className="relative md:text-[15px] lg:text-md font-medium text-gray-700 dark:text-gray-100 ltr:pl-[35px] rtl:pr-[35px]">
                <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                  description
                </i>
                Selectors, colors, margins, and padding
              </div>
              <div className="mt-[15px] md:mt-0 text-gray-700 dark:text-gray-100 flex items-center gap-[15px]">
                <div className="bg-orange-100 dark:bg-[#0a0e19] text-orange-600 rounded-[4px] px-[8px] py-[3.5px]">
                  <span className="inline-block relative ltr:pl-[20px] rtl:pl-[20px]">
                    <i className="ri-time-line absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 text-[18px]"></i>
                    12:30 Minutes
                  </span>
                </div>
                <i className="material-symbols-outlined">lock</i>
              </div>
            </li>

            <li className="relative md:flex items-center justify-between border-b border-gray-200 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
              <div className="relative md:text-[15px] lg:text-md font-medium text-gray-700 dark:text-gray-100 ltr:pl-[35px] rtl:pr-[35px]">
                <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                  description
                </i>
                Flexbox and Grid layout
              </div>
              <div className="mt-[15px] md:mt-0 text-gray-700 dark:text-gray-100 flex items-center gap-[15px]">
                <div className="bg-orange-100 dark:bg-[#0a0e19] text-orange-600 rounded-[4px] px-[8px] py-[3.5px]">
                  <span className="inline-block relative ltr:pl-[20px] rtl:pl-[20px]">
                    <i className="ri-time-line absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 text-[18px]"></i>
                    8:00 Minutes
                  </span>
                </div>
                <i className="material-symbols-outlined">lock</i>
              </div>
            </li>

            <li className="relative md:flex items-center justify-between border-b border-gray-200 dark:border-gray-900 pb-[15px] mb-[15px] last:border-b-0 last:mb-0 last:pb-0">
              <div className="relative md:text-[15px] lg:text-md font-medium text-gray-700 dark:text-gray-100 ltr:pl-[35px] rtl:pr-[35px]">
                <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                  description
                </i>
                Media queries and mobile-first design
              </div>
              <div className="mt-[15px] md:mt-0 text-gray-700 dark:text-gray-100 flex items-center gap-[15px]">
                <div className="bg-orange-100 dark:bg-[#0a0e19] text-orange-600 rounded-[4px] px-[8px] py-[3.5px]">
                  <span className="inline-block relative ltr:pl-[20px] rtl:pl-[20px]">
                    <i className="ri-time-line absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 text-[18px]"></i>
                    11:00 Minutes
                  </span>
                </div>
                <i className="material-symbols-outlined">lock</i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
