"use client";

import React, { useState } from "react";

interface AccordionItem {
  id: number;
  question: string;
  answers: string[];
  isOpen?: boolean;
}

const Faq: React.FC = () => {
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([
    {
      id: 1,
      question: "Is there a free trial available?",
      answers: [
        "Yes! You can start with our Free Trial plan — no credit card required. It includes access to core features, allowing you to explore Trezo without any financial commitment.",
        "The Free Trial includes 1 active project, up to 3 team members, and basic analytics to help you get started.",
      ],
      isOpen: true,
    },
    {
      id: 2,
      question: "Can I upgrade or downgrade my plan anytime?",
      answers: [
        "Absolutely! You can change your plan at any time from your account settings. Changes take effect immediately and we'll prorate the difference.",
      ],
    },
    {
      id: 3,
      question: "Is Trezo suitable for large teams or enterprises?",
      answers: [
        "Yes! Our Enterprise plan is specifically designed for large teams with features like unlimited members, advanced security, and dedicated support.",
      ],
    },
    {
      id: 4,
      question: "Do you offer onboarding or training?",
      answers: [
        "We provide comprehensive onboarding materials and live training sessions for all paid plans. Enterprise customers get a dedicated account manager.",
      ],
    },
    {
      id: 5,
      question: "What channels does Trezo support?",
      answers: [
        "Trezo integrates with email, social media platforms, SMS, and web push notifications. We're constantly adding new channel integrations.",
      ],
    },
  ]);

  const toggleAccordion = (id: number) => {
    setAccordionItems(
      accordionItems.map((item) => ({
        ...item,
        isOpen: item.id === id ? !item.isOpen : false,
      }))
    );
  };

  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px] 2xl:mb-[70px]">
            <span className="inline-block py-[4.5px] px-[15px] rounded-[100px] bg-orange-100 dark:bg-[#0a0e19] text-orange-700 mb-[12px]">
              Frequently Asked Questions
            </span>
            <h2 className="!text-gray-900 dark:!text-white md:-tracking-[1px] !font-medium !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl xl:max-w-[520px] mx-auto !leading-[1.2] !mb-[10px] lg:!mb-[12px]">
              Everything You Need to Know About Trezo
            </h2>
            <p className="md:text-[15px] lg:text-md !leading-[1.6]">
              Here are some of the most common things people ask us.
            </p>
          </div>

          <div className="mx-auto lg:max-w-[850px]" id="faqAccordion">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className="accordion-item bg-white dark:bg-[#0a0e19] border border-orange-100 dark:border-[#202c4b] rounded-[25px] text-gray-700 dark:text-gray-100 relative z-[1] mb-[15px] last:mb-0"
              >
                <button
                  className={`accordion-button text-[15px] md:text-md lg:text-lg py-[20px] md:py-[28px] px-[20px] md:px-[30px] block w-full ltr:text-left rtl:text-right font-semibold relative transition-all ${
                    item.isOpen ? "text-orange-600" : ""
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={item.isOpen}
                  aria-controls={`accordion-content-${item.id}`}
                >
                  {item.question}
                  <i
                    className={`ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[30px] md:rtl:left-[30px] text-[20px] md:text-[25px] transition-transform ${
                      item.isOpen ? "transform rotate-180 text-orange-600" : ""
                    }`}
                  ></i>
                </button>

                <div
                  id={`accordion-content-${item.id}`}
                  className={`accordion-collapse -mt-[7px] md:-mt-[12px] px-[20px] md:px-[30px] pb-[20px] md:pb-[28px]  ${
                    item.isOpen ? "block" : "hidden"
                  }`}
                >
                  {item.answers.map((answer, idx) => (
                    <p
                      key={idx}
                      className="text-gray-500 dark:text-gray-400 !leading-[1.6] mb-[10px] last:mb-0"
                    >
                      {answer}
                    </p>
                  ))}
                </div>

                <div
                  className="opacity-50 absolute top-0 left-0 right-0 bottom-0 -z-[1] rounded-[25px] dark:hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, #FFEFE1 0%, #FFFFFF 100%)",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
