"use client";

import React, { useState } from "react";

const Faq = () => {
  // FAQ Data (Can be fetched from an API or stored in a separate file)
  const faqData = [
    {
      question: "Is there a free trial available?",
      answer: [
        "Yes! You can start with our Free Trial plan — no credit card required.",
        "It includes access to core features so you can explore Trezo without risk.",
      ],
      isOpen: true, // Default open
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: [
        "Absolutely! You can change your plan at any time from your account settings.",
        "Downgrades will apply at the next billing cycle.",
      ],
      isOpen: false,
    },
    {
      question: "Is Trezo suitable for large teams or enterprises?",
      answer: [
        "Yes, Trezo scales effortlessly for large teams with advanced permissions, analytics, and enterprise-grade security.",
      ],
      isOpen: false,
    },
    {
      question: "Do you offer onboarding or training?",
      answer: [
        "We provide free onboarding sessions, video tutorials, and 24/7 support to help you get started.",
      ],
      isOpen: false,
    },
    {
      question: "What channels does Trezo support?",
      answer: [
        "Trezo integrates with Slack, Microsoft Teams, Email, and SMS for seamless communication.",
      ],
      isOpen: false,
    },
  ];

  // State to track which FAQ is open
  const [faqs, setFaqs] = useState(faqData);

  // Toggle FAQ item
  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false, // Close others when one opens
      }))
    );
  };

  return (
    <>
      <div className="faq-marketing-arae position-relative z-1 pb-180">
        <div className="container">
          <div className="section-title2 text-center mx-auto mw-100 mb-70">
            <span className="top-title2 bg-card-text-c text-danger-90">
              Frequently Asked Questions
            </span>
            <h2 className="mx-auto" style={{ maxWidth: "520px" }}>
              Everything You Need to Know About Trezo
            </h2>
            <p className="dec">
              Here are some of the most common things people ask us.
            </p>
          </div>

          <div className="accordion faq-wrapper-marketing">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="accordion-item mb-3 border-0 bg-white"
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button text-secondary bg-white ${
                      !faq.isOpen ? "collapsed" : ""
                    }`}
                    onClick={() => toggleFaq(index)}
                    type="button"
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    faq.isOpen ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    {faq.answer.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
