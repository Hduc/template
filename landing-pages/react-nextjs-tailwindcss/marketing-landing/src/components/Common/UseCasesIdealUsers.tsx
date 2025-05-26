"use client";

import React from "react";
import Image from "next/image";

// Define the shape of each use case item
interface UseCase {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

// Sample static data (this could come from an API)
const useCases: UseCase[] = [
  {
    title: "Freelance Marketers",
    description:
      "Plan, launch, and report on campaigns faster. Spend more time creating and less time managing tools.",
    icon: "/images/icons/chart.svg",
    alt: "chart",
  },
  {
    title: "Agencies & Teams",
    description:
      "Collaborate seamlessly, manage multiple clients with ease, and keep every campaign on track—from planning to reporting.",
    icon: "/images/icons/management.svg",
    alt: "management",
  },
  {
    title: "Startups",
    description:
      "Move fast, stay lean, and launch impactful campaigns without the overhead. Everything you need to grow in one place.",
    icon: "/images/icons/start-up.svg",
    alt: "start-up",
  },
  {
    title: "Marketing Leaders",
    description:
      "Gain full visibility, align your team, and drive growth with data-backed decisions—all from one centralized platform.",
    icon: "/images/icons/leader.svg",
    alt: "leader",
  },
  {
    title: "SaaS & Tech Companies",
    description:
      "Accelerate growth with streamlined campaigns, real-time analytics, and tools built for scale—all in one unified platform.",
    icon: "/images/icons/saas.svg",
    alt: "saas",
  },
  {
    title: "Customizable Widgets",
    description:
      "Tailor every element to match your brand and workflow. Drag, drop, and design your perfect dashboard experience.",
    icon: "/images/icons/conversion.svg",
    alt: "conversion",
  },
];

const UseCasesIdealUsers: React.FC = () => {
  return (
    <>
      <div className="pt-[70px] md:pt-[90px] lg:pt-[110px] xl:pt-[150px] 2xl:pt-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px] 2xl:mb-[70px]">
            <span className="inline-block py-[4.5px] px-[15px] rounded-[100px] bg-orange-100 dark:bg-[#0a0e19] text-orange-700 mb-[12px]">
              Use Cases & Ideal Users
            </span>
            <h2 className="!text-gray-900 dark:!text-white md:-tracking-[1px] !font-medium !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl xl:max-w-[570px] mx-auto !leading-[1.2] !mb-[10px] lg:!mb-[12px]">
              Built for Modern Marketers. Trusted by Teams of All Sizes.
            </h2>
            <p className="md:text-[15px] lg:text-md !leading-[1.6]">
              Trezo is flexible, powerful, and ready to scale with you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#0a0e19] rounded-[15px] px-[20px] py-[30px] md:px-[25px] md:py-[50px] lg:px-[35px] lg:py-[60px] xl:px-[60px] relative z-[1]"
              >
                <div
                  className="rounded-[15px] absolute top-0 left-0 right-0 bottom-0 -z-[1] dark:hidden"
                  style={{
                    background:
                      "linear-gradient(0deg, #FFF8F1 0%, #F7F9FF 100%)",
                  }}
                ></div>
                <div className="ltr:pl-[22px] rtl:pr-[22px] relative z-[1] mb-[30px] md:mb-[50px] lg:mb-[90px] xl:mb-[155px]">
                  <Image
                    src={useCase.icon}
                    alt={useCase.alt}
                    width={65}
                    height={65}
                  />
                  <div className="absolute top-[5px] ltr:left-0 rtl:right-0 bg-orange-50 dark:bg-dark w-[55px] h-[55px] rounded-full -z-[1]"></div>
                </div>
                <h3 className="!text-gray-900 dark:!text-white !font-medium !text-lg md:!text-[20px] lg:!text-xl !mb-[15px] md:!mb-[20px] lg:!mb-[25px]">
                  {useCase.title}
                </h3>
                <p className="!leading-[1.6]">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCasesIdealUsers;
