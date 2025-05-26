"use client";

import React from "react";

const CourseOverview: React.FC = () => {
  return (
    <>
      <div>
        <h3 className="!text-lg md:!text-[22px] lg:!text-xl !font-semibold !mb-[15px] md:!mb-[20px] [&:not(:first-child)]:mt-[25px] md:[&:not(:first-child)]:mt-[35px] lg:[&:not(:first-child)]:mt-[45px]">
          Course Overview
        </h3>
        <p className="!leading-[1.6] md:text-[15px] lg:text-md">
          Master the skills to become a professional full-stack web developer
          from scratch. This hands-on course covers both front-end and back-end
          development using the most in-demand tools and technologies in the
          industry. Whether you’re starting your career or looking to upgrade
          your skill set, this course will guide you step by step through
          real-world projects and practical applications.
        </p>

        <h3 className="!text-lg md:!text-[22px] lg:!text-xl !font-semibold !mb-[15px] md:!mb-[20px] [&:not(:first-child)]:mt-[25px] md:[&:not(:first-child)]:mt-[35px] lg:[&:not(:first-child)]:mt-[45px]">
          Course Features
        </h3>
        <ul>
          <li className="relative mb-[5px] last:mb-0 !leading-[1.6] md:text-[15px] lg:text-md ltr:pl-[14px] rtl:pl-[14px]">
            <span className="block w-[5px] h-[5px] rounded-full absolute top-1/2 -translate-y-1/2 bg-gray-500 ltr:left-0 rtl:right-0"></span>
            45 in-depth lessons with hands-on coding
          </li>
          <li className="relative mb-[5px] last:mb-0 !leading-[1.6] md:text-[15px] lg:text-md ltr:pl-[14px] rtl:pl-[14px]">
            <span className="block w-[5px] h-[5px] rounded-full absolute top-1/2 -translate-y-1/2 bg-gray-500 ltr:left-0 rtl:right-0"></span>
            Real-world projects: blog, e-commerce store, and portfolio site
          </li>
          <li className="relative mb-[5px] last:mb-0 !leading-[1.6] md:text-[15px] lg:text-md ltr:pl-[14px] rtl:pl-[14px]">
            <span className="block w-[5px] h-[5px] rounded-full absolute top-1/2 -translate-y-1/2 bg-gray-500 ltr:left-0 rtl:right-0"></span>
            Code-along exercises and quizzes
          </li>
          <li className="relative mb-[5px] last:mb-0 !leading-[1.6] md:text-[15px] lg:text-md ltr:pl-[14px] rtl:pl-[14px]">
            <span className="block w-[5px] h-[5px] rounded-full absolute top-1/2 -translate-y-1/2 bg-gray-500 ltr:left-0 rtl:right-0"></span>
            Lifetime access and updates
          </li>
          <li className="relative mb-[5px] last:mb-0 !leading-[1.6] md:text-[15px] lg:text-md ltr:pl-[14px] rtl:pl-[14px]">
            <span className="block w-[5px] h-[5px] rounded-full absolute top-1/2 -translate-y-1/2 bg-gray-500 ltr:left-0 rtl:right-0"></span>
            Downloadable resources and source code
          </li>
          <li className="relative mb-[5px] last:mb-0 !leading-[1.6] md:text-[15px] lg:text-md ltr:pl-[14px] rtl:pl-[14px]">
            <span className="block w-[5px] h-[5px] rounded-full absolute top-1/2 -translate-y-1/2 bg-gray-500 ltr:left-0 rtl:right-0"></span>
            Certificate of completion
          </li>
          <li className="relative mb-[5px] last:mb-0 !leading-[1.6] md:text-[15px] lg:text-md ltr:pl-[14px] rtl:pl-[14px]">
            <span className="block w-[5px] h-[5px] rounded-full absolute top-1/2 -translate-y-1/2 bg-gray-500 ltr:left-0 rtl:right-0"></span>
            Community Q&A and support
          </li>
        </ul>

        <h3 className="!text-lg md:!text-[22px] lg:!text-xl !font-semibold !mb-[15px] md:!mb-[20px] [&:not(:first-child)]:mt-[25px] md:[&:not(:first-child)]:mt-[35px] lg:[&:not(:first-child)]:mt-[45px]">
          Who Should Enroll
        </h3>
        <ul>
          <li className="relative mb-[5px] last:mb-0 !leading-[1.6] md:text-[15px] lg:text-md ltr:pl-[14px] rtl:pl-[14px]">
            <span className="block w-[5px] h-[5px] rounded-full absolute top-1/2 -translate-y-1/2 bg-gray-500 ltr:left-0 rtl:right-0"></span>
            Beginners with no prior coding experience
          </li>
          <li className="relative mb-[5px] last:mb-0 !leading-[1.6] md:text-[15px] lg:text-md ltr:pl-[14px] rtl:pl-[14px]">
            <span className="block w-[5px] h-[5px] rounded-full absolute top-1/2 -translate-y-1/2 bg-gray-500 ltr:left-0 rtl:right-0"></span>
            Designers or marketers looking to build web apps
          </li>
          <li className="relative mb-[5px] last:mb-0 !leading-[1.6] md:text-[15px] lg:text-md ltr:pl-[14px] rtl:pl-[14px]">
            <span className="block w-[5px] h-[5px] rounded-full absolute top-1/2 -translate-y-1/2 bg-gray-500 ltr:left-0 rtl:right-0"></span>
            Students preparing for software development careers
          </li>
          <li className="relative mb-[5px] last:mb-0 !leading-[1.6] md:text-[15px] lg:text-md ltr:pl-[14px] rtl:pl-[14px]">
            <span className="block w-[5px] h-[5px] rounded-full absolute top-1/2 -translate-y-1/2 bg-gray-500 ltr:left-0 rtl:right-0"></span>
            Freelancers and entrepreneurs who want to create websites or SaaS
            products
          </li>
        </ul>
      </div>
    </>
  );
};

export default CourseOverview;
