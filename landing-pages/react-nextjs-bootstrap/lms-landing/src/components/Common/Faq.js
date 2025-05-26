"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      id: 1,
      question: "Can I learn at my own pace?",
      answer:
        "Absolutely! Our platform is fully self-paced. You can access all course materials 24/7 and progress through the content as quickly or slowly as you need.",
      isOpen: true,
    },
    {
      id: 2,
      question: "Are certificates recognized?",
      answer:
        "Yes! Our certificates are widely recognized in the industry. Many of our students have used them to advance their careers or showcase their skills to employers.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Do I need any prior knowledge?",
      answer:
        "Most of our beginner courses require no prior knowledge. For advanced courses, we clearly list any prerequisites so you can choose the right starting point for your skill level.",
      isOpen: false,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-lms-area bg-fffef8 pb-180">
      <Container className="cmw-1308">
        <div
          className="section-title2 lms-title text-center mx-auto"
          style={{ maxWidth: "475px" }}
        >
          <div className="title3">
            <div className="d-flex align-items-center" style={{ gap: "10px" }}>
              <Image src="/images/ico.svg" alt="ico" width={20} height={20} />
              <span>FAQ&apos;s</span>
            </div>
          </div>
          <h2 className="text-secondary">Got Questions? We&apos;ve Got Answers</h2>
        </div>

        <Row className="align-items-center g-4">
          <Col lg={6}>
            <div className="faq-lms-img text-center">
              <Image
                src="/images/faq.png"
                alt="faq"
                width={457}
                height={322}
                priority
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="accordion faq-wrapper-lms">
              {faqItems.map((item, index) => (
                <div className="accordion-item mb-3 bg-white" key={item.id}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button text-secondary bg-white ${
                        activeIndex === index ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
