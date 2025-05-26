"use client";

import React from "react";
import Image from "next/image";

const BlogDetailsContent: React.FC = () => {
  return (
    <>
      <div className="pt-[145px] md:pt-[175px] lg:pt-[190px] xl:pt-[175px] 2xl:pt-[170px] pb-[70px] md:pb-[90px] lg:pb-[110px] xl:pb-[140px] relative z-[1] overflow-hidden">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center mb-[30px] md:mb-[40px]">
            <span className="inline-block py-[4.5px] px-[15px] rounded-[100px] bg-orange-100 dark:bg-[#0a0e19] text-orange-700 mb-[12px]">
              Marketing Strategy
            </span>
            <h2 className="!text-gray-900 dark:!text-white md:-tracking-[1px] !font-medium !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl !leading-[1.2] !mb-[10px] lg:!mb-[15px]">
              The Future of Data-Driven Marketing
            </h2>
            <ul>
              <li className="relative inline-block ltr:pl-[24px] rtl:pr-[24px] mx-[10px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                <i className="ri-calendar-line text-lg absolute top-1/2 ltr:left-0 rtl:right-0 -translate-y-1/2 text-orange-600"></i>
                April 13, 2025
              </li>
              <li className="relative inline-block ltr:pl-[24px] rtl:pr-[24px] mx-[10px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                <i className="ri-user-line text-lg absolute top-1/2 ltr:left-0 rtl:right-0 -translate-y-1/2 text-orange-600"></i>
                By: Trezo Team
              </li>
              <li className="relative inline-block ltr:pl-[24px] rtl:pr-[24px] mx-[10px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                <i className="ri-time-line text-lg absolute top-1/2 ltr:left-0 rtl:right-0 -translate-y-1/2 text-orange-600"></i>
                Reading time: ~4 min
              </li>
            </ul>
          </div>

          <div className="mx-auto lg:max-w-[850px] bg-white dark:bg-[#0a0e19] rounded-[25px] p-[20px] md:p-[25px] mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px] 2xl:mb-[70px]">
            <Image
              src="/images/blogs/blog10.jpg"
              className="rounded-[25px]"
              alt="blog-image"
              width={1596}
              height={828}
            />
          </div>

          <div className="mx-auto lg:max-w-[850px]">
            <h3 className="!font-medium !text-lg md:!text-[20px] lg:!text-xl text-gray-700 dark:text-gray-100 !mb-[12px] md:!mb-[15px] lg:!mb-[20px] !leading-[1.2] [&:not(:first-child)]:mt-[25px] [&:not(:first-child)]:md:mt-[35px] [&:not(:first-child)]:lg:mt-[40px]">
              Introduction
            </h3>
            <p className="!leading-[1.6]">
              Marketing is no longer about guesswork. In today’s digital
              landscape, data is the new creative. From customer behavior to
              conversion patterns, brands that leverage data effectively are
              outperforming their competitors — and the gap is growing.
            </p>

            <h3 className="!font-medium !text-lg md:!text-[20px] lg:!text-xl text-gray-700 dark:text-gray-100 !mb-[12px] md:!mb-[15px] lg:!mb-[20px] !leading-[1.2] [&:not(:first-child)]:mt-[25px] [&:not(:first-child)]:md:mt-[35px] [&:not(:first-child)]:lg:mt-[40px]">
              Why Data Matters More Than Ever
            </h3>
            <p className="!leading-[1.6] !mb-[15px] md:!mb-[20px] last:!mb-0">
              Consumers expect personalization. Businesses need precision.
              Data-driven marketing empowers teams to:
            </p>
            <ul>
              <li className="leading-[1.6] relative mb-[5px] last:mb-0 ltr:pl-[15px] rtl:pr-[15px]">
                <div className="w-[5px] h-[5px] absolute top-1/2 rounded-full ltr:left-0 rtl:right-0 -translate-y-1/2 bg-gray-500"></div>
                Target the right audiences with the right message
              </li>
              <li className="leading-[1.6] relative mb-[5px] last:mb-0 ltr:pl-[15px] rtl:pr-[15px]">
                <div className="w-[5px] h-[5px] absolute top-1/2 rounded-full ltr:left-0 rtl:right-0 -translate-y-1/2 bg-gray-500"></div>
                Optimize campaigns in real time
              </li>
              <li className="leading-[1.6] relative mb-[5px] last:mb-0 ltr:pl-[15px] rtl:pr-[15px]">
                <div className="w-[5px] h-[5px] absolute top-1/2 rounded-full ltr:left-0 rtl:right-0 -translate-y-1/2 bg-gray-500"></div>
                Make informed decisions backed by performance metrics
              </li>
              <li className="leading-[1.6] relative mb-[5px] last:mb-0 ltr:pl-[15px] rtl:pr-[15px]">
                <div className="w-[5px] h-[5px] absolute top-1/2 rounded-full ltr:left-0 rtl:right-0 -translate-y-1/2 bg-gray-500"></div>
                Reduce ad waste and improve ROI
              </li>
            </ul>

            <h3 className="!font-medium !text-lg md:!text-[20px] lg:!text-xl text-gray-700 dark:text-gray-100 !mb-[12px] md:!mb-[15px] lg:!mb-[20px] !leading-[1.2] [&:not(:first-child)]:mt-[25px] [&:not(:first-child)]:md:mt-[35px] [&:not(:first-child)]:lg:mt-[40px]">
              Key Trends Shaping the Future
            </h3>
            <span className="block font-medium md:text-[15px] lg:text-md mb-[4px]">
              AI-Powered Analytics
            </span>
            <p className="!leading-[1.6] !mb-[15px] md:!mb-[20px] last:!mb-0">
              AI helps marketers surface insights faster, predict outcomes, and
              even automate decisions — from email timing to content
              optimization.
            </p>
            <span className="block font-medium md:text-[15px] lg:text-md mb-[4px]">
              Real-Time Dashboards
            </span>
            <p className="!leading-[1.6] !mb-[15px] md:!mb-[20px] last:!mb-0">
              Live data feeds allow teams to monitor KPIs as they happen.
              Trezo’s dashboard offers funnel views, engagement stats, and
              conversion tracking all in one place.
            </p>
            <span className="block font-medium md:text-[15px] lg:text-md mb-[4px]">
              Cross-Channel Integration
            </span>
            <p className="!leading-[1.6] !mb-[15px] md:!mb-[20px] last:!mb-0">
              The future of marketing is omnichannel. Tools like Trezo unify
              social, email, ads, and more — allowing full-funnel visibility.
            </p>

            <h3 className="!font-medium !text-lg md:!text-[20px] lg:!text-xl text-gray-700 dark:text-gray-100 !mb-[12px] md:!mb-[15px] lg:!mb-[20px] !leading-[1.2] [&:not(:first-child)]:mt-[25px] [&:not(:first-child)]:md:mt-[35px] [&:not(:first-child)]:lg:mt-[40px]">
              From Data to Strategy
            </h3>
            <p className="!leading-[1.6] !mb-[15px] md:!mb-[20px] last:!mb-0">
              It’s not just about collecting numbers — it’s about turning them
              into actions. High-performing teams use data to:
            </p>
            <p className="!leading-[1.6] !mb-[15px] md:!mb-[20px] last:!mb-0 font-medium">
              Personalize messaging
            </p>
            <p className="!leading-[1.6] !mb-[15px] md:!mb-[20px] last:!mb-0 font-medium">
              Spot trends early
            </p>
            <p className="!leading-[1.6] !mb-[15px] md:!mb-[20px] last:!mb-0 font-medium">
              A/B test with confidence
            </p>
            <p className="!leading-[1.6] !mb-[15px] md:!mb-[20px] last:!mb-0 font-medium">
              Drive continuous improvement
            </p>

            <h3 className="!font-medium !text-lg md:!text-[20px] lg:!text-xl text-gray-700 dark:text-gray-100 !mb-[12px] md:!mb-[15px] lg:!mb-[20px] !leading-[1.2] [&:not(:first-child)]:mt-[25px] [&:not(:first-child)]:md:mt-[35px] [&:not(:first-child)]:lg:mt-[40px]">
              Final Thoughts
            </h3>
            <p className="!leading-[1.6] !mb-[15px] md:!mb-[20px] last:!mb-0">
              The future belongs to marketers who adapt, automate, and analyze.
              With tools like Trezo, data is no longer intimidating — it’s
              empowering. If your marketing decisions aren’t data-backed, you’re
              already behind.
            </p>
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
    </>
  );
};

export default BlogDetailsContent;
