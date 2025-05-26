"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cta: React.FC = () => {
  return (
    <>
      <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
        <div className="bg-[#f0eedf] dark:bg-[#0a0e19] rounded-[25px] py-[70px] md:py-[30px] px-[20px] md:px-[30px] lg:px-[60px] xl:px-[110px] relative z-[1]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[25px]">
            <div className="text-center ltr:md:text-left rtl:md:text-right">
              <h2 className="!text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl md:-tracking-[1px] !mb-[20px] md:!mb-[25px] xl:!mb-[40px] !text-gray-800 dark:!text-gray-100">
                Join Thousands of Learners Advancing Their Careers
              </h2>

              <Link
                href="/courses"
                className="inline-block py-[10px] md:py-[12px] px-[17px] md:px-[20px] bg-primary-600 hover:bg-primary-500 text-white md:text-[15px] lg:text-md font-medium rounded-md transition-all"
              >
                <span className="block relative ltr:pl-[30px] rtl:pr-[30px] ltr:md:pl-[34px] rtl:md:pr-[34px]">
                  <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 !text-[22px] md:!text-[24px]">
                    school
                  </i>
                  Start Learning Now
                </span>
              </Link>
            </div>

            <div className="ltr:text-right rtl:text-left">
              <Image
                src="/images/learning.png"
                className="inline-block"
                alt="learning-image"
                width={343}
                height={324}
              />
            </div>
          </div>

          <div className="absolute -z-[1] ltr:right-[30px] rtl:left-[30px] top-[50px] hidden md:block">
            <Image
              src="/images/shapes/shape3.png"
              alt="shape3"
              width={92}
              height={47}
            />
          </div>
          <div className="absolute -z-[1] ltr:right-[43%] rtl:left-[43%] bottom-[90px] hidden md:block">
            <Image
              src="/images/shapes/shape4.png"
              alt="shape4"
              width={92}
              height={47}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
