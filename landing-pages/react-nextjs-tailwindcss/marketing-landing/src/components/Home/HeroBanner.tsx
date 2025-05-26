"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="pt-[145px] md:pt-[175px] lg:pt-[190px] xl:pt-[175px] pb-[70px] md:pb-[90px] lg:pb-[110px] xl:pb-[140px] relative z-[1] overflow-hidden">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
            <div className="ltr:lg:-mr-[75px] rtl:lg:-ml-[75px]">
              <div className="text-orange-700 py-[8px] px-[14px] rounded-[100px] bg-orange-100 dark:bg-[#0a0e19] inline-block mb-[10px] xl:mb-[5px]">
                <span className="relative inline-block ltr:pl-[23px] rtl:pr-[23px]">
                  <i className="ri-fire-fill text-orange-600 absolute top-1/2 ltr:-left-[3px] rtl:-right-[3px] -translate-y-1/2 text-[19px]"></i>
                  Less chaos. More clarity. Better results.
                </span>
              </div>

              <h2 className="!text-gray-900 dark:!text-white -tracking-[1px] lg:-tracking-[1.5px] !text-[30px] md:!text-[45px] lg:!text-[55px] xl:!text-[72px] !font-medium !leading-[1.2] !mb-[14px] md:!mb-[17px] lg:!mb-[20px] xl:!mb-[25px]">
                Unlock{" "}
                <span className="text-orange-600 italic">rapid growth</span>{" "}
                with an all-in-one marketing hub
              </h2>

              <p className="md:!text-[15.8px] lg:text-md !leading-[1.6]">
                Trezo gives you the tools to plan, execute, and track campaigns
                — all in one smart dashboard.
              </p>

              <div className="-mt-[5px] md:mt-[25px] lg:mt-[35px] xl:mt-[55px]">
                <Link
                  href="/pricing"
                  className="inline-block text-white py-[10.5px] px-[30px] rounded-[100px] transition-all font-medium border border-orange-500 bg-orange-500 hover:text-white hover:bg-orange-700 hover:border-orange-700 mt-[12px] md:mt-0"
                >
                  Start Your Free Trial
                </Link>

                <button
                  type="button"
                  onClick={toggleModal}
                  className="inline-block text-orange-500 py-[10.5px] px-[30px] rounded-[100px] transition-all font-medium border border-orange-500 hover:text-white hover:bg-orange-500 hover:border-orange-500 ltr:ml-[15px] rtl:mr-[15px] ltr:md:ml-[15px] rtl:md:mr-[15px] mt-[12px] md:mt-0"
                >
                  <span className="inline-block relative ltr:pl-[18px] rtl:pr-[18px]">
                    <i className="ri-play-fill absolute top-1/2 ltr:-left-[2px] rtl:-right-[2px] -translate-y-1/2 text-md"></i>
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>

            <div className="relative ltr:md:pl-[195px] rtl:md:pr-[195px] ltr:lg:pl-[140px] rtl:lg:pr-[140px] ltr:xl:pl-[195px] rtl:xl:pr-[195px] text-center">
              <Image
                src="/images/woman-with-tab.png"
                className="inline-block"
                alt="woman-with-tab"
                width={870}
                height={1168}
              />
              <Image
                src="/images/flying-laptop.png"
                className="md:absolute md:top-[80px] lg:-top-[5px] xl:top-[80px] ltr:md:left-0 rtl:md:right-0 md:max-w-[265px] lg:max-w-[240px] xl:max-w-[265px] mt-[25px] md:mt-0 inline-block"
                alt="flying-laptop"
                width={536}
                height={421}
              />
            </div>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-no-repeat bg-top -z-[1] dark:hidden"
          style={{
            background: "linear-gradient(180deg, #FFEFE1 0%, #FFF 100%)",
          }}
        ></div>

        <div className="absolute top-[70px] md:top-[84px] lg:top-[91px] left-0 right-0 -z-[1]">
          <Image
            src="/images/perspective-grid.png"
            className="inline-block w-full"
            alt="perspective-grid"
            width={1920}
            height={676}
          />
        </div>
      </div>

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
    </>
  );
};

export default HeroBanner;
