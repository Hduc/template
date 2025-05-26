"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonVariant: "outline" | "solid";
  order: string;
  gradient: string;
}

const Pricing: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "Free Trial",
      price: "$0",
      description: "Perfect for individuals or small teams",
      features: [
        "Access to core features",
        "1 active project",
        "Up to 3 team members",
        "Email campaign builder",
        "Basic analytics",
        "7-day activity history",
      ],
      buttonVariant: "outline",
      order: "order-1 lg:order-1",
      gradient: "linear-gradient(180deg, #FAF5FF 0%, #EEF6FF 100%)",
    },
    {
      id: 2,
      name: "Pro",
      price: "$39",
      description: "Ideal for growing teams and agencies",
      features: [
        "Everything in free trial",
        "Unlimited projects & campaigns",
        "Up to 15 team members",
        "Advanced analytics & reports",
        "Funnel tracking & segmentation",
        "Social & email integrations",
        "Priority email support",
      ],
      buttonVariant: "solid",
      order: "order-3 lg:order-2",
      gradient: "linear-gradient(180deg, #FFF5ED 0%, #FAF5FF 100%)",
    },
    {
      id: 3,
      name: "Enterprise",
      price: "$79",
      description: "Built for large teams and custom needs",
      features: [
        "Everything in pro",
        "Unlimited team members",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security & audit logs",
        "24/7 priority support",
      ],
      buttonVariant: "outline",
      order: "order-2 lg:order-3",
      gradient: "linear-gradient(180deg, #EEF6FF 0%, #EEFFE5 100%)",
    },
  ];

  return (
    <>
      <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
        <div className="text-center mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px] 2xl:mb-[70px]">
          <span className="inline-block py-[4.5px] px-[15px] rounded-[100px] bg-orange-100 dark:bg-[#0a0e19] text-orange-700 mb-[12px]">
            Pricing
          </span>
          <h2 className="!text-gray-900 dark:!text-white md:-tracking-[1px] !font-medium !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl xl:max-w-[520px] mx-auto !leading-[1.2] !mb-[10px] lg:!mb-[12px]">
            Flexible Plans That Scale With You
          </h2>
          <p className="md:text-[15px] lg:text-md !leading-[1.6]">
            Trezo has a plan that fits your needs — and grows with you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] items-center">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={plan.order}>
              <div className="dark:bg-[#0a0e19] px-[20px] py-[25px] md:px-[35px] md:py-[45px] xl:px-[55px] xl:py-[65px] relative z-[1] rounded-[25px]">
                <span className="block text-orange-600 font-medium text-md lg:text-lg mb-[10px] md:mb-[17px]">
                  {plan.name}
                </span>

                <div className="text-gray-700 dark:text-gray-100 font-medium text-4xl md:text-5xl mb-[15px] md:mb-[18px]">
                  {plan.price}{" "}
                  <span className="ltr:-ml-[8px] rtl:-mr-[8px] md:-tracking-[1px] text-base md:text-[15px] font-normal lg:text-md text-gray-500 dark:text-gray-400">
                    /monthly
                  </span>
                </div>

                <p className="!leading-[1.6] md:text-[15px] lg:text-md">
                  {plan.description}
                </p>

                <Link
                  href="#"
                  className={`inline-flex items-center gap-[8px] ${
                    plan.buttonVariant === "solid"
                      ? "text-white bg-orange-600 border-orange-600"
                      : "text-orange-600 border-orange-600 hover:text-white hover:bg-orange-500 hover:border-orange-500"
                  } py-[10.5px] px-[20px] rounded-[7px] transition-all font-medium border md:text-[15px] lg:text-md md:mt-[5px] lg:mt-[10px]`}
                >
                  <i className="ri-user-3-line font-bold"></i>
                  Get Started
                </Link>

                <ul className="mt-[20px] md:mt-[25px] lg:mt-[35px]">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-700 dark:text-gray-100 md:text-[15px] lg:text-md relative ltr:pl-[32px] rtl:pr-[32px] mb-[12px] md:mb-[15px] last:mb-0"
                    >
                      <Image
                        src="/images/icons/check.svg"
                        className="absolute top-1/2 ltr:left-0 rtl:right-0 -translate-y-1/2 dark:invert"
                        alt="check"
                        width={22}
                        height={22}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-[25px] absolute top-0 left-0 right-0 bottom-0 -z-[1] dark:hidden"
                  style={{ background: plan.gradient }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
