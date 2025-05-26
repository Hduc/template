"use client";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PricingPlans = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Free Trial",
      price: 0,
      description: "New store owners exploring Trezo",
      features: [
        "Access to basic dashboard",
        "Real-time sales tracking",
        "Inventory overview",
        "Up to 50 products",
        "1 connected store",
        "Email support",
        "No credit card required",
      ],
    },
    {
      id: 2,
      title: "Pro",
      price: 39,
      description: "Growing businesses that need more control",
      features: [
        "Everything in Free",
        "Unlimited products & orders",
        "Multi-store dashboard",
        "Marketing automation tools",
        "Custom email campaigns",
        "Analytics & reports",
        "Chat support",
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      price: 79,
      description: "High-volume sellers & teams",
      features: [
        "Everything in Pro",
        "Dedicated success manager",
        "API & integrations",
        "Advanced analytics & forecasting",
        "Priority support",
        "Team roles & permissions",
        "SLA-backed uptime guarantee",
      ],
    },
  ];

  return (
    <>
      <div className="pricing-plans-area bg-gray-200 ptb-180">
        <Container className="cmw-1308">
          <div className="section-title2 mx-auto text-center">
            <span className="top-title2">Pricing Plans</span>
            <h2>Flexible Plans That Scale With You</h2>
            <p>
              Start free and upgrade as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {pricingPlans.map((plan) => (
              <Col key={plan.id} md={6} lg={4}>
                <div className="pricing-plans-single-item position-relative z-1">
                  <div className="pricing-header">
                    <span className="trial">{plan.title}</span>
                    <h1>
                      ${plan.price}
                      <sub className="text-body">/monthly</sub>
                    </h1>
                    <p>{plan.description}</p>
                  </div>

                  <div className="pricing-content">
                    <h3>Features:</h3>

                    <ul className="p-0 list-unstyled">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="d-flex align-items-center"
                          style={{ gap: "12px" }}
                        >
                          <img
                            src="/images/icons/check.svg"
                            alt="check"
                            width={16}
                            height={16}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="#"
                      className="btn btn-outline-primary fw-medium fs-14 rounded-pill hover-bg landing-page-btn w-100"
                    >
                      Get Started
                    </Link>
                  </div>

                  <img
                    src="/images/shapes/shape5.png"
                    className="position-absolute shape5"
                    alt="shape5"
                    width={80}
                    height={80}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PricingPlans;
