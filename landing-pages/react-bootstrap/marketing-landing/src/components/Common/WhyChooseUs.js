"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const features = [
  {
    id: 1,
    icon: "collections_bookmark",
    title: "Diverse Course Catalog",
    description: "From tech to creative arts, access 1000+ expert-led courses.",
  },
  {
    id: 2,
    icon: "monitoring",
    title: "Progress Tracking",
    description:
      "Interactive dashboards and real-time analytics to track your learning.",
  },
  {
    id: 3,
    icon: "school",
    title: "Expert Instructors",
    description: "Learn from certified professionals and industry leaders.",
  },
  {
    id: 4,
    icon: "devices",
    title: "Anytime, Anywhere Access",
    description: "Mobile-friendly platform for learning on the go.",
  },
  {
    id: 5,
    icon: "workspace_premium",
    title: "Certificates & Badges",
    description: "Showcase your achievements with professional certification.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <section className="why-choose-us-lms-area ptb-180 bg-fffef8">
        <Container className="cmw-1308">
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div
                className="why-choose-us-lms-img"
                style={{ maxWidth: "520px" }}
              >
                <img
                  src="/images/why-choose-us.jpg"
                  alt="Why choose our learning platform"
                  width={1042}
                  height={1510}
                  loading="lazy"
                />
              </div>
            </Col>

            <Col lg={6}>
              <div className="why-choose-us-lms-content">
                <div className="title3">
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <img
                      src="/images/ico.svg"
                      alt="Icon"
                      width={20}
                      height={20}
                      aria-hidden="true"
                    />
                    <span>Why Choose Us</span>
                  </div>
                </div>

                <h2 className="text-secondary mb-4">Why Our LMS Stands Out</h2>

                <ul className="p-0 m-0 list-unstyled why-choose-us-lms-list">
                  {features.map((feature, index) => (
                    <li key={index} className="mb-4">
                      <div className="d-sm-flex align-items-center why-choose-us-lms-single-item">
                        <div className="flex-shrink-0 mb-3 mb-sm-0 me-3">
                          <i
                            className="material-symbols-outlined"
                            aria-hidden="true"
                          >
                            {feature.icon}
                          </i>
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="h5 mb-2">{feature.title}</h3>
                          <p className="mb-0">{feature.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhyChooseUs;
