"use client";

import React from "react";
import Image from "next/image";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  position: "left" | "right"; // For alternating layout
}

const WhyChooseUs: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 1,
      title: "Diverse Course Catalog",
      description:
        "From tech to creative arts, access 1000+ expert-led courses.",
      icon: "collections_bookmark",
      position: "right",
    },
    {
      id: 2,
      title: "Progress Tracking",
      description:
        "Interactive dashboards and real-time analytics to track your learning.",
      icon: "monitoring",
      position: "left",
    },
    {
      id: 3,
      title: "Expert Instructors",
      description: "Learn from certified professionals and industry leaders.",
      icon: "school",
      position: "right",
    },
    {
      id: 4,
      title: "Anytime, Anywhere Access",
      description: "Mobile-friendly platform for learning on the go.",
      icon: "devices",
      position: "left",
    },
    {
      id: 5,
      title: "Certificates & Badges",
      description:
        "Showcase your achievements with professional certification.",
      icon: "workspace_premium",
      position: "right",
    },
  ];

  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
            {/* Left Column - Image */}
            <div className="xl:max-w-[521px]">
              <Image
                src="/images/why-choose-us.jpg"
                className="inline-block rounded-[25px]"
                alt="why-choose-us-image"
                width={1042}
                height={1510}
              />
            </div>

            {/* Right Column - Content */}
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
                  Why Choose Us
                </div>
              </div>

              {/* Heading */}
              <h2 className="!text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl md:-tracking-[1px] mt-[15px] !mb-[25px] md:!mb-[30px] xl:!mb-[40px] !text-gray-800 dark:!text-gray-100">
                Why Our LMS Stands Out
              </h2>

              {/* Features List */}
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`bg-[#f0eedf] dark:bg-[#0a0e19] rounded-[15px] px-[20px] md:px-[30px] py-[20px] md:py-[22px] mb-[20px] md:mb-[23px] last:mb-0 ${
                    feature.position === "right"
                      ? "ltr:md:mr-[45px] rtl:md:ml-[45px]"
                      : "ltr:md:ml-[45px] rtl:md:mr-[45px]"
                  }`}
                >
                  <div className="relative ltr:md:pl-[65px] rtl:md:pr-[65px]">
                    <i
                      className={`material-symbols-outlined md:absolute md:top-1/2 md:-translate-y-1/2 ltr:left-0 rtl:right-0 !text-[40px] md:!text-[46px] text-primary-600`}
                    >
                      {feature.icon}
                    </i>
                    <h3 className="!text-gray-700 dark:!text-gray-100 !text-[18px] md:!text-[20px] !my-[10px] md:!mb-[5px] md:!mt-0">
                      {feature.title}
                    </h3>
                    <p className="md:text-[15px] lg:text-md !leading-[1.6]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
