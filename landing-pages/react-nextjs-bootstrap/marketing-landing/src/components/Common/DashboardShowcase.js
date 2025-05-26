"use client";

import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const dashboardData = {
  image: {
    src: "/images/dashboard.jpg",
    alt: "dashboard",
  },
  header: {
    badge: "Dashboard Showcase",
    title: "Experience Trezo in Action — No Guesswork, Just Results",
    description:
      "Get a firsthand look at how Trezo transforms your marketing workflow. From real-time performance tracking to campaign management and team collaboration — our interactive dashboard puts the power of data and strategy at your fingertips.",
  },
  features: [
    "Real-time analytics",
    "Customizable widgets",
    "Drag-and-drop simplicity",
    "No setup required",
  ],
  footerText: "Try the live demo and see why marketers love Trezo.",
};

const FeatureList = ({ features }) => {
  return (
    <Row className="g-4">
      {features.map((feature, index) => (
        <Col key={index} sm={6} lg={6}>
          <div
            className="info-list d-flex align-items-center"
            style={{ gap: "12px" }}
          >
            <i className="ri-check-fill"></i>
            <span>{feature}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
};

const DashboardShowcase = () => {
  return (
    <div className="dashboard-showcase-marketing-area pb-180">
      <Container className="cmw-1308">
        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <div className="dashboard-showcase-marketing-img">
              <Image
                src={dashboardData.image.src}
                alt={dashboardData.image.alt}
                width={1042}
                height={1030}
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="dashboard-showcase-marketing-content">
              <span className="top-title2 bg-card-text-c text-danger-90">
                {dashboardData.header.badge}
              </span>

              <h2 className="text-secondary-50">
                {dashboardData.header.title}
              </h2>

              <p>{dashboardData.header.description}</p>

              <div className="dashboard-showcase-wrap">
                <FeatureList features={dashboardData.features} />
              </div>

              <p className="dec2 text-secondary-50 mb-0">
                {dashboardData.footerText}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardShowcase;
