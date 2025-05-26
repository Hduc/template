"use client";

import React from "react";
import Image from "next/image";

type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
  image?: string;
  wide?: boolean;
};

const Features: React.FC = () => {
  // Features data
  const features: Feature[] = [
    {
      id: 1,
      icon: "/images/icons/chart.svg",
      title: "Campaign Insights",
      description:
        "Track real-time performance, spot trends instantly, and optimize campaigns based on smart, visualized data",
    },
    {
      id: 2,
      icon: "/images/icons/global.svg",
      title: "Channel Control",
      description:
        "Manage all your marketing channels — email, social, ads — from one streamlined platform without switching",
    },
    {
      id: 3,
      icon: "/images/icons/conversion.svg",
      title: "Funnel Tracking",
      description:
        "Visualize how leads flow through your funnel, identify drop-offs, and improve conversions with clear, actionable data.",
    },
    {
      id: 4,
      icon: "/images/icons/network.svg",
      title: "Team Workspace",
      description:
        "Collaborate with your team in real time using tasks, comments, and shared views to keep everyone aligned.",
      image: "/images/team-workspace.png",
      wide: true,
    },
    {
      id: 5,
      icon: "/images/icons/technology.svg",
      title: "Seamless Integrations",
      description:
        "Connect with your favorite tools through our growing ecosystem of integrations",
      image: "/images/seamless-integrations.png",
      wide: true,
    },
  ];

  return (
    <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px] relative z-[1]">
      {/* Background Gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center -z-1 dark:hidden"
        style={{
          backgroundImage: "url(/images/gradient-bg.jpg)",
        }}
      ></div>

      <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
        <div className="text-center mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px] 2xl:mb-[70px]">
          <span className="inline-block py-[4.5px] px-[15px] rounded-[100px] bg-orange-100 dark:bg-[#0a0e19] text-orange-700 mb-[12px]">
            Why Trezo
          </span>
          <h2 className="!text-gray-900 dark:!text-white md:-tracking-[1px] !font-medium !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl xl:max-w-[520px] mx-auto !leading-[1.2] !mb-[10px] lg:!mb-[12px]">
            Everything You Need to Grow Faster
          </h2>
          <p className="md:text-[15px] lg:text-md !leading-[1.6]">
            From campaign tracking to performance insights — we&apos;ve got you
            covered.
          </p>
        </div>

        {/* Regular Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[25px]">
          {features
            .filter((f) => !f.wide)
            .map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
        </div>

        {/* Wide Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
          {features
            .filter((f) => f.wide)
            .map((feature) => (
              <WideFeatureCard key={feature.id} feature={feature} />
            ))}
        </div>
      </div>
    </div>
  );
};

// Component for regular feature cards
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="bg-white dark:bg-[#0a0e19] rounded-[15px] px-[20px] py-[30px] md:px-[25px] md:py-[50px] lg:px-[35px] lg:py-[70px] xl:px-[60px]">
      <div className="ltr:pl-[22px] rtl:pr-[22px] relative z-[1] mb-[30px] md:mb-[50px] lg:mb-[90px]">
        <Image src={feature.icon} alt={feature.title} width={65} height={65} />
        <div className="absolute top-[5px] ltr:left-0 rtl:right-0 bg-orange-50 dark:bg-dark w-[55px] h-[55px] rounded-full -z-[1]"></div>
      </div>
      <h3 className="!text-gray-900 dark:!text-white !font-medium !text-lg md:!text-[20px] lg:!text-xl !mb-[15px] md:!mb-[20px] lg:!mb-[25px]">
        {feature.title}
      </h3>
      <p className="!leading-[1.6]">{feature.description}</p>
    </div>
  );
};

// Component for wide feature cards with images
const WideFeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="bg-white dark:bg-[#0a0e19] rounded-[15px] px-[20px] py-[30px] md:px-[25px] md:py-[50px] lg:px-[35px] lg:py-[70px] xl:px-[60px] relative overflow-hidden">
      <div className="md:max-w-[290px]">
        <div className="ltr:pl-[22px] rtl:pr-[22px] relative z-[1] mb-[30px] md:mb-[50px] lg:mb-[90px]">
          <Image
            src={feature.icon}
            alt={feature.title}
            width={65}
            height={65}
          />
          <div className="absolute top-[5px] ltr:left-0 rtl:right-0 bg-orange-50 dark:bg-dark w-[55px] h-[55px] rounded-full -z-[1]"></div>
        </div>
        <h3 className="!text-gray-900 dark:!text-white !font-medium !text-lg md:!text-[20px] lg:!text-xl !mb-[15px] md:!mb-[20px] lg:!mb-[25px]">
          {feature.title}
        </h3>
        <p className="!leading-[1.6]">{feature.description}</p>
      </div>
      {feature.image && (
        <Image
          src={feature.image}
          className="inline-block md:absolute md:top-1/2 ltr:md:right-0 rtl:md:left-0 md:-translate-y-1/2 mt-[25px] md:mt-0 lg:max-w-[160px] xl:max-w-full rtl:-scale-x-100"
          alt={feature.title}
          width={272}
          height={340}
        />
      )}
    </div>
  );
};

export default Features;
