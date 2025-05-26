"use client";

import React from "react";
import Image from "next/image";

interface StepItem {
  id: number;
  number: string;
  title: string;
  description: string;
  position: "left" | "center" | "right"; // For alternating layout
}

const HowItWorks: React.FC = () => {
  const steps: StepItem[] = [
    {
      id: 1,
      number: "1",
      title: "Sign Up Free",
      description: "Create your account in seconds.",
      position: "right"
    },
    {
      id: 2,
      number: "2",
      title: "Choose Your Course",
      description: "Pick from hundreds of topics.",
      position: "left"
    },
    {
      id: 3,
      number: "3",
      title: "Start Learning",
      description: "Watch lessons, take quizzes, and track progress.",
      position: "center"
    },
    {
      id: 4,
      number: "4",
      title: "Get Certified",
      description: "Earn credentials and grow your resume.",
      position: "right"
    }
  ];

  const getMarginClasses = (position: string) => {
    switch(position) {
      case 'left':
        return 'ltr:md:ml-[35px] rtl:md:mr-[35px] ltr:md:mr-[70px] rtl:md:ml-[70px]';
      case 'center':
        return 'ltr:md:ml-[70px] rtl:md:mr-[70px] ltr:md:mr-[35px] rtl:md:ml-[35px]';
      case 'right':
        return 'ltr:md:mr-[105px] rtl:md:ml-[105px]';
      default:
        return '';
    }
  };

  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
            {/* Left Column - Content */}
            <div>
              {/* Tagline */}
              <div className="md:text-[15px] lg:text-md py-[4px] px-[17px] md:px-[18px] bg-[#ffef99] dark:bg-[#0a0e19] rounded-[100px] text-gray-900 dark:text-gray-200 inline-block">
                <div className="flex items-center gap-[8px] md:gap-[10px]">
                  <Image
                    src="/images/ico.svg"
                    alt="ico"
                    width={20}
                    height={20}
                  />
                  How It Works
                </div>
              </div>

              {/* Heading */}
              <h2 className="!text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl md:-tracking-[1px] mt-[15px] !mb-[25px] md:!mb-[30px] lg:!mb-[50px] xl:!mb-[80px] !text-gray-800 dark:!text-gray-100">
                Learning Made Simple
              </h2>

              {/* Steps List */}
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`flex items-center gap-[20px] pb-[15px] md:pb-[20px] mb-[15px] md:mb-[20px] border-b border-gray-100 dark:border-[#202c4b] last:mb-0 last:pb-0 last:border-b-0 ${getMarginClasses(step.position)}`}
                >
                  <div className="leading-none font-semibold text-[48px] italic -tracking-[1px] text-primary-300">
                    {step.number}.
                  </div>
                  <div>
                    <h3 className="!text-gray-700 dark:!text-gray-100 !text-[18px] md:!text-[20px] !mb-[5px]">
                      {step.title}
                    </h3>
                    <p className="md:text-[15px] lg:text-md !leading-[1.6]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Image */}
            <div className="xl:max-w-[521px] ltr:ml-auto rtl:mr-auto">
              <Image
                src="/images/how-it-works.jpg"
                className="inline-block rounded-[25px]"
                alt="how-it-works-image"
                width={1042}
                height={996}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;