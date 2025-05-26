"use client";

import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutUs = () => {
  // Dynamic data for statistics
  const stats = [
    { value: "50,000+", label: "Marketing Campaigns" },
    { value: "80+", label: "Industries Served" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <>
      <div className="about-us-marketing-area pt-180">
        <Container className="cmw-1308">
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="about-us-marketing-img position-relative">
                <Image
                  src="/images/happy-woman.jpg"
                  alt="happy-woman"
                  width={1042}
                  height={1148}
                />
                <Image
                  src="/images/total-revenue.jpg"
                  className="total-revenue position-absolute bottom-0 end-0"
                  alt="total-revenue"
                  width={650}
                  height={392}
                />
              </div>
            </Col>

            <Col lg={6}>
              <div className="about-us-content-marketing">
                <span className="top-title2 bg-card-text-c text-danger-90">
                  About Us
                </span>
                <h2 className="text-secondary-50">
                  Empowering Marketers to Work Smarter, Not Harder
                </h2>
                <p className="dec">
                  At Trezo, we believe that great marketing starts with clarity.
                  That’s why we built an all-in-one platform that brings
                  strategy, execution, and analytics together — so you can focus
                  less on juggling tools and more on driving results.
                </p>

                <Row className="g-4">
                  {stats.map((stat, index) => (
                    <Col key={index} xs={6} sm={6}>
                      <div className="marketing-counter-single-item">
                        <h1 className="text-secondary-50">{stat.value}</h1>
                        <span>{stat.label}</span>
                      </div>
                    </Col>
                  ))}
                </Row>

                <p className="dec2 mb-0">
                  We’re not just another dashboard — we’re your partner in
                  growth.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
