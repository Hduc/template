"use client";

import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DashboardShowcase = () => {
  // Dashboard features data
  const features = [
    {
      id: 1,
      icon: "/images/icons/check.svg",
      title: "Real-Time Insights",
      description: "View live sales, orders, and traffic without delay.",
    },
    {
      id: 2,
      icon: "/images/icons/check.svg",
      title: "Sales Analytics",
      description: "Track revenue, conversion rates, and product performance.",
    },
    {
      id: 3,
      icon: "/images/icons/check.svg",
      title: "Inventory Monitoring",
      description: "Get automatic alerts for low or out-of-stock items.",
    },
    {
      id: 4,
      icon: "/images/icons/check.svg",
      title: "Customer Behavior",
      description: "Understand how shoppers browse, buy, and return.",
    },
  ];

  // Section content
  const content = {
    title: "Dashboard Showcase",
    heading: "See Trezo in Action",
    description:
      "A live view of your store's performance — all in one clean dashboard.",
    image: {
      src: "/images/dashboard-showcase.jpg",
      alt: "dashboard-showcase",
    },
  };

  return (
    <div className="dashboard-showcase-area pt-180 position-relative z-2">
      <Container className="cmw-1308">
        <Row className="align-items-center g-4">
          <Col lg={7} xl={6}>
            <div className="dashboard-showcase-content">
              <span className="top-title2">{content.title}</span>
              <h2>{content.heading}</h2>
              <p>{content.description}</p>

              <div className="dashboard-showcase-item-wrap">
                <div className="row g-4 g-50">
                  {features.map((feature) => (
                    <div key={feature.id} className="col-sm-6">
                      <div
                        className="d-flex dashboard-showcase-single-item"
                        style={{ gap: "20px" }}
                      >
                        <div className="flex-shrink-0">
                          <Image
                            src={feature.icon}
                            className="position-relative"
                            style={{ top: "4px" }}
                            alt="check"
                            width={25}
                            height={25}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="text-secondary-50">{feature.title}</h3>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} xl={6}>
            <div className="dashboard-showcase-img">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={1042}
                height={1304}
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardShowcase;
