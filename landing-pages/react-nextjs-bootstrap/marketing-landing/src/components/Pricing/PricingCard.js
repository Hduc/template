"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PricingCard = () => {
  // Pricing plans data array
  const pricingPlans = [
    {
      id: "free-trial",
      title: "Free Trial",
      price: "$0",
      interval: "/monthly",
      description: "Perfect for individuals or small teams",
      isActive: false,
      features: [
        "Access to core features",
        "1 active project",
        "Up to 3 team members",
        "Email campaign builder",
        "Basic analytics",
        "7-day activity history",
      ],
    },
    {
      id: "pro",
      title: "Pro",
      price: "$39",
      interval: "/monthly",
      description: "Ideal for growing teams and agencies",
      isActive: true,
      features: [
        "Everything in Free Trial",
        "Unlimited projects & campaigns",
        "Up to 15 team members",
        "Advanced analytics & reports",
        "Funnel tracking & segmentation",
        "Social & email integrations",
        "Priority email support",
      ],
    },
    {
      id: "enterprise",
      title: "Enterprise",
      price: "$79",
      interval: "/monthly",
      description: "Built for large teams and custom needs",
      isActive: false,
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security & audit logs",
        "24/7 priority support",
      ],
    },
  ];

  return (
    <>
      <div
        className="pricing-plans-marketing-area ptb-180 position-relative z-1"
        style={{
          background: "linear-gradient(180deg, #FFEFE1 0%, #FFF 100%)",
        }}
      >
        <Container className="cmw-1308">
          <div className="section-title2 mx-auto text-center mb-70">
            <span className="top-title2 bg-card-text-c text-danger-90">
              Pricing
            </span>
            <h2>Flexible Plans That Scale With You</h2>
            <p className="dec">
              Trezo has a plan that fits your needs — and grows with you.
            </p>
          </div>

          <Row className="g-4 justify-content-center align-items-center">
            {pricingPlans.map((plan, index) => (
              <Col md={6} lg={4} key={`plan-${index}`}>
                <div
                  className={`pricing-plans-marketing-single-item position-relative z-1 bg-white ${
                    plan.isActive ? "active" : ""
                  }`}
                >
                  <div className="pricing-header">
                    <span className="trial">{plan.title}</span>
                    <h1>
                      {plan.price}
                      <sub className="text-body">{plan.interval}</sub>
                    </h1>
                    <p>{plan.description}</p>
                  </div>
                  <Link
                    href="#"
                    className={`btn btn-outline-danger-50 rounded-2 landing-page-btn ${
                      plan.isActive ? "active" : ""
                    }`}
                  >
                    <div
                      className="d-flex align-items-center"
                      style={{ gap: "10px" }}
                    >
                      <i className="material-symbols-outlined absolute fs-24">
                        person
                      </i>
                      <span className="fs-16 fw-medium">Get Started</span>
                    </div>
                  </Link>

                  <div className="pricing-content">
                    <ul className="p-0 list-unstyled">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          className="d-flex align-items-center"
                          style={{ gap: "10px" }}
                          key={`feature-${index}-${featureIndex}`}
                        >
                          <Image
                            src="/images/icons/check.svg"
                            alt="check"
                            width={22}
                            height={22}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Perspective grid shape image */}
        <Image
          src="/images/perspective-grid.png"
          className="perspective-grid w-100"
          alt="perspective-grid"
          width={1920}
          height={676}
        />
      </div>
    </>
  );
};

export default PricingCard;
