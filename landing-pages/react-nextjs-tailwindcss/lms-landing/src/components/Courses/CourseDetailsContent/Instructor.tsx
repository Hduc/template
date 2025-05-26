"use client";

import React from "react";
import Image from "next/image";

const Instructor: React.FC = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
          <div className="lg:max-w-[225px] xl:max-w-[305px]">
            <Image
              src="/images/instructor.jpg"
              alt="instructor-image"
              className="rounded-[15px]"
              width={606}
              height={494}
            />

            <div className="flex items-center gap-[8px] mt-[20px] md:mt-[25px]">
              <span className="block md:text-[15px] lg:text-md">
                Follow Me:
              </span>
              <a
                href="https://www.facebook.com/"
                className="leading-none inline-block transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500 text-[22px]"
                target="_blank"
              >
                <i className="ri-facebook-box-fill"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                className="leading-none inline-block transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500 text-[22px]"
                target="_blank"
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                className="leading-none inline-block transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500 text-[22px]"
                target="_blank"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </div>
          </div>

          <div className="ltr:lg:-ml-[75px] rtl:lg:-mr-[75px] ltr:xl:-ml-[50px] rtl:xl:-mr-[50px]">
            <h3 className="!text-md md:!text-lg lg:!text-[20px] !text-gray-700 dark:!text-gray-100 !mb-[12px]">
              David Mercer
            </h3>

            <p className="!leading-[1.6] md:text-[15px] lg:text-md">
              Senior Full-Stack Engineer | Tech Educator | Mentor
            </p>

            <ul className="mb-[25px]">
              <li className="relative ltr:pl-[24px] rtl:pr-[24px] md:text-[15px] lg:text-md mb-[10px] last:mb-0">
                <i className="material-symbols-outlined absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 !text-[22px]">
                  location_on
                </i>
                San Francisco, CA
              </li>
              <li className="relative ltr:pl-[24px] rtl:pr-[24px] md:text-[15px] lg:text-md mb-[10px] last:mb-0">
                <i className="material-symbols-outlined absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 !text-[22px]">
                  cast_for_education
                </i>
                <span className="font-bold">12+</span> Years of Industry
                Experience
              </li>
              <li className="relative ltr:pl-[24px] rtl:pr-[24px] md:text-[15px] lg:text-md mb-[10px] last:mb-0">
                <i className="material-symbols-outlined absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 !text-[22px]">
                  star
                </i>
                <span className="font-bold">4.9</span> Instructor Rating
              </li>
              <li className="relative ltr:pl-[24px] rtl:pr-[24px] md:text-[15px] lg:text-md mb-[10px] last:mb-0">
                <i className="material-symbols-outlined absolute ltr:-left-[3px] rtl:-right-[3px] top-1/2 -translate-y-1/2 !text-[22px]">
                  school
                </i>
                <span className="font-bold">45,000+</span> Students Taught
              </li>
            </ul>

            <h3 className="!text-md md:!text-lg lg:!text-[20px] !text-gray-700 dark:!text-gray-100 !mb-[12px]">
              About David
            </h3>
            <p className="!leading-[1.6] md:text-[15px] lg:text-md">
              David is a passionate software engineer, educator, and startup
              consultant who has spent over a decade building web applications
              and helping developers grow. With a background in both corporate
              and startup environments, David brings a real-world perspective
              into every lesson — from front-end design to backend architecture.
            </p>
            <p className="!leading-[1.6] md:text-[15px] lg:text-md">
              He’s contributed to open-source projects, mentored junior
              developers, and led teams at top tech companies including CodeNest
              and AppForge. David believes in teaching through practical
              projects and simplifying complex ideas for every learner level.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
