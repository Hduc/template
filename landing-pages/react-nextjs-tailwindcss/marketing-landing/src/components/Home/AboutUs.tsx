"use client";

import React from "react";
import Image from "next/image";

type Statistic = {
  id: number;
  value: string;
  label: string;
};

const AboutUs: React.FC = () => {
  // Statistics data
  const statistics: Statistic[] = [
    { id: 1, value: "50,000+", label: "Marketing Campaigns" },
    { id: 2, value: "80+", label: "Industries Served" },
    { id: 3, value: "99.9%", label: "Platform Uptime" },
    { id: 4, value: "24/7", label: "Customer Support" },
  ];

  return (
    <>
      <div className="pt-[70px] md:pt-[90px] lg:pt-[110px] xl:pt-[150px] 2xl:pt-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
            <div className="xl:max-w-[521px] relative">
              <Image
                src="/images/happy-woman.jpg"
                alt="happy-woman"
                className="inline-block rounded-[15px]"
                width={1042}
                height={1148}
              />
              <Image
                src="/images/total-revenue.jpg"
                className="inline-block rounded-md max-w-[200px] md:max-w-[325px] absolute ltr:right-[15px] rtl:left-[15px] bottom-[15px] ltr:md:right-[35px] rtl:md:left-[35px] md:bottom-[35px]"
                alt="total-revenue"
                width={650}
                height={392}
              />
            </div>

            <div>
              <span className="inline-block py-[4.5px] px-[15px] rounded-[100px] bg-orange-100 dark:bg-[#0a0e19] text-orange-700 mb-[12px]">
                About Us
              </span>

              <h2 className="!text-gray-900 dark:!text-white md:-tracking-[1px] !font-medium !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl xl:max-w-[520px] !leading-[1.2] !mb-[10px] lg:!mb-[17px]">
                Empowering Marketers to Work Smarter, Not Harder
              </h2>

              <p className="!leading-[1.6]">
                At Trezo, we believe that great marketing starts with clarity.
                That’s why we built an all-in-one platform that brings strategy,
                execution, and analytics together — so you can focus less on
                juggling tools and more on driving results.
              </p>

              <div className="my-[20px] md:my-[30px] xl:my-[40px]">
                <div className="grid grid-cols-2 gap-[20px] md:gap-[30px] xl:gap-[40px]">
                  {statistics.map((stat) => (
                    <div
                      key={stat.id}
                      className="relative ltr:pl-[15px] rtl:pr-[15px] ltr:md:pl-[20px] rtl:md:pr-[20px]"
                    >
                      <div className="w-px absolute top-0 bottom-0 ltr:left-0 rtl:right-0 bg-orange-600"></div>
                      <h3 className="!leading-none !font-medium md:-tracking-[1px] !text-2xl md:!text-3xl lg:!text-4xl !text-gray-900 dark:!text-white !mb-[5px]">
                        {stat.value}
                      </h3>
                      <span className="block">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="!leading-[1.6] text-gray-900 dark:text-gray-100 font-medium md:text-[15px] lg:text-md">
                We’re not just another dashboard — we’re your partner in growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
