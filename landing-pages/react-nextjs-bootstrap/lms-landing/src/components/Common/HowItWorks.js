"use client";

import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const steps = [
  {
    number: "1",
    title: "Sign Up Free",
    description: "Create your account in seconds.",
    icon: "person_add", // Optional: you could add Material icons later
  },
  {
    number: "2",
    title: "Choose Your Course",
    description: "Pick from hundreds of topics.",
    icon: "search",
  },
  {
    number: "3",
    title: "Start Learning",
    description: "Watch lessons, take quizzes, and track progress.",
    icon: "play_lesson",
  },
  {
    number: "4",
    title: "Get Certified",
    description: "Earn credentials and grow your resume.",
    icon: "verified",
  },
];

const HowItWorks = () => {
  return (
    <>
      <div className="how-it-works-lms-area ptb-180 bg-fffef8">
        <Container className="cmw-1308">
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="how-it-works-lms-content pe-lg-4">
                <div className="title3 mb-4">
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <Image
                      src="/images/ico.svg"
                      alt="How it works icon"
                      width={20}
                      height={20}
                      aria-hidden="true"
                    />
                    <span className="text-primary">How It Works</span>
                  </div>
                </div>

                <h2 className="mb-5 text-secondary">Learning Made Simple</h2>

                <ul className="p-0 m-0 list-unstyled how-it-works-list-lms">
                  {steps.map((step) => (
                    <li key={step.number}>
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0">
                          <span>{step.number}.</span>
                        </div>
                        <div className="flex-grow-1">
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={6}>
              <div className="how-it-works-lms-img">
                <Image
                  src="/images/how-it-works.jpg"
                  alt="Person learning on laptop and mobile device"
                  width={1042}
                  height={996}
                  className="img-fluid rounded-3 shadow-sm"
                  priority
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HowItWorks;
