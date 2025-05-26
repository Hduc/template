"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FAQItem {
  id: number;
  question: string;
  answers: string[];
  isOpen?: boolean;
}

const Faq: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: 1,
      question: "Can I learn at my own pace?",
      answers: [
        "Absolutely! Our platform is fully self-paced.",
        "You can access courses anytime and progress through materials at your preferred speed."
      ],
      isOpen: true
    },
    {
      id: 2,
      question: "Are certificates recognized?",
      answers: [
        "Yes! Our certificates are widely recognized by employers.",
        "They demonstrate completion of rigorous coursework and skill acquisition."
      ]
    },
    {
      id: 3,
      question: "Do I need any prior knowledge?",
      answers: [
        "Most courses are designed for beginners with no prior experience.",
        "We clearly indicate prerequisites when they're required."
      ]
    },
    {
      id: 4,
      question: "What if I need help with a course?",
      answers: [
        "We offer multiple support options:",
        "- Community forums with instructors and peers",
        "- Direct messaging with teaching assistants",
        "- Live Q&A sessions for many courses"
      ]
    }
  ]);

  const toggleFAQ = (id: number) => {
    setFaqs(faqs.map(faq => ({
      ...faq,
      isOpen: faq.id === id ? !faq.isOpen : false
    })));
  };

  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          {/* Header Section */}
          <div className="text-center mx-auto md:max-w-[485px] mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px]">
            <div className="md:text-[15px] lg:text-md py-[4px] px-[17px] md:px-[18px] bg-[#ffef99] dark:bg-[#0a0e19] rounded-[100px] text-gray-900 dark:text-gray-200 inline-block">
              <div className="flex items-center gap-[8px] md:gap-[10px]">
                <Image 
                  src="/images/ico.svg" 
                  alt="FAQ icon" 
                  width={20} 
                  height={20} 
                />
                FAQ&apos;s
              </div>
            </div>
            <h2 className="!text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl -tracking-[1px] mt-[15px] !mb-0 !text-gray-800 dark:!text-gray-100">
              Got Questions? We&apos;ve Got Answers
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
            {/* FAQ Image */}
            <div className="text-center">
              <Image
                src="/images/faq.png"
                className="inline-block"
                alt="FAQ illustration"
                width={500}
                height={500}
              />
            </div>
            
            {/* FAQ Accordion */}
            <div className="toc-accordion" id="faqAccordion">
              {faqs.map((faq) => (
                <div 
                  key={faq.id}
                  className={`toc-accordion-item bg-white dark:bg-[#0a0e19] border border-gray-200 dark:border-[#202c4b] rounded-[25px] text-gray-700 dark:text-gray-100 mb-[15px] last:mb-0 transition-all duration-300 ${
                    faq.isOpen ? 'shadow-md' : ''
                  }`}
                >
                  <button
                    className={`toc-accordion-button text-[16px] md:text-lg lg:text-[20px] py-[20px] md:py-[28px] px-[20px] md:px-[30px] block w-full ltr:text-left rtl:text-right font-semibold relative transition-all ${
                      faq.isOpen ? 'text-primary-600' : ''
                    }`}
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={faq.isOpen}
                    aria-controls={`faq-content-${faq.id}`}
                  >
                    {faq.question}
                    <i className={`ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[30px] md:rtl:left-[30px] text-[20px] md:text-[25px] transition-transform ${
                      faq.isOpen ? 'transform rotate-180 text-primary-600' : ''
                    }`}></i>
                  </button>
                  <div
                    id={`faq-content-${faq.id}`}
                    className={`-mt-[7px] md:-mt-[12px] px-[20px] md:px-[30px] pb-[20px] md:pb-[28px] ${
                      faq.isOpen 
                        ? 'block'
                        : 'hidden'
                    }`}
                  >
                    {faq.answers.map((answer, index) => (
                      <p 
                        key={index}
                        className="text-gray-500 dark:text-gray-400 !leading-[1.6] md:text-[15px] lg:text-md mb-3 last:mb-0"
                      >
                        {answer}
                      </p>
                    ))}
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

export default Faq;