"use client";

import React from "react";
import Image from "next/image"; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Instructor = () => {
  return (
    <>
      <div className="courses-instructor-lms">
        <Row className="g-4">
          <Col xl={5}>
            <div className="instructor-img">
              <Image
                src="/images/instructor.jpg"
                style={{
                  borderRadius: "15px",
                }}
                alt="instructor"
                width={606}
                height={494}
              />

              <ul
                className="social-link d-flex align-items-center p-0 mt-4 mb-0 list-unstyled lh-1"
                style={{
                  gap: "8px",
                }}
              >
                <li>
                  <span className="fs-16 text-body-color-50">Share:</span>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    <i className="ri-facebook-box-fill fs-22"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    <i className="ri-twitter-x-fill fs-22"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    <i className="ri-linkedin-box-fill fs-22"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col xl={7}>
            <h3 className="fs-20" style={{ marginBottom: "12px" }}>
              David Mercer
            </h3>
            <ul
              className="p-0 mb-3 list-unstyled d-flex flex-wrap align-items-center"
              style={{
                gap: "8px",
              }}
            >
              <li className="fs-16">Senior Full-Stack Engineer</li>
              <li className="border-end py-2 border-light"></li>
              <li className="fs-16">Tech Educator</li>
              <li className="border-end py-2 border-light"></li>
              <li className="fs-16">Mentor</li>
            </ul>
            <ul className="p-0 mb-4">
              <li
                className="d-flex align-items-center"
                style={{
                  gap: "8px",
                  marginBottom: "10px",
                }}
              >
                <i className="material-symbols-outlined">location_on</i>
                <span className="fs-16">San Francisco, CA</span>
              </li>
              <li
                className="d-flex align-items-center"
                style={{
                  gap: "8px",
                  marginBottom: "10px",
                }}
              >
                <i className="material-symbols-outlined">cast_for_education</i>
                <span className="fs-16">
                  <span className="fw-bold">12+</span> Years of Industry
                  Experience
                </span>
              </li>
              <li
                className="d-flex align-items-center"
                style={{
                  gap: "8px",
                  marginBottom: "10px",
                }}
              >
                <i className="material-symbols-outlined">star</i>
                <span className="fs-16">
                  <span className="fw-bold">4.9</span> Instructor Rating
                </span>
              </li>
              <li
                className="d-flex align-items-center"
                style={{
                  gap: "8px",
                  marginBottom: "10px",
                }}
              >
                <i className="material-symbols-outlined">location_on</i>
                <span className="fs-16">
                  <span className="fw-bold">45,000+</span> Students Taught
                </span>
              </li>
            </ul>

            <h3 className="fs-20" style={{ marginBottom: "12px" }}>
              About David
            </h3>
            <p className="fs-16">
              David is a passionate software engineer, educator, and startup
              consultant who has spent over a decade building web applications
              and helping developers grow. With a background in both corporate
              and startup environments, David brings a real-world perspective
              into every lesson — from front-end design to backend architecture.
            </p>
            <p className="fs-16">
              He’s contributed to open-source projects, mentored junior
              developers, and led teams at top tech companies including CodeNest
              and AppForge. David believes in teaching through practical
              projects and simplifying complex ideas for every learner level.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Instructor;
