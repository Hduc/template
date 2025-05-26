"use client";

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import CourseOverview from "./CourseOverview";
import Curriculum from "./Curriculum";
import Instructor from "./Instructor";
import Reviews from "./Reviews";

const CourseDetailsContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="page-banner-area-lms bg-fffef8">
        <Container className="cmw-1308">
          <div className="page-banner-content-lms">
            <h2 className="text-secondary">Full-Stack Web Development</h2>
            <div className="d-inline-block">
              <ul className="m-0 list-unstyled d-flex align-items-center breadcrumb-lms">
                <li>
                  <a href="lms-landing-index.html">Home</a>
                </li>
                <li>
                  <i className="ri-arrow-right-s-line"></i>
                </li>
                <li>
                  <span>Courses</span>
                </li>
                <li>
                  <i className="ri-arrow-right-s-line"></i>
                </li>
                <li>
                  <span>Course Details</span>
                </li>
              </ul>
            </div>

            <ul className="d-flex align-items-center info list-unstyled p-0 mb-0">
              <li className="d-flex align-items-center">
                <i className="material-symbols-outlined fs-28">menu_book</i>
                <span className="fs-18">By</span>
                <a href="#" className="fs-16 text-decoration-none">
                  John
                </a>
              </li>
              <li className="d-flex align-items-center">
                <i className="material-symbols-outlined fs-28">group</i>
                <span className="fs-18">6,300+ Enrolled</span>
              </li>
              <li>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "8px" }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "2px" }}
                  >
                    <i className="ri-star-fill fs-17 text-rating-color"></i>
                    <i className="ri-star-fill fs-17 text-rating-color"></i>
                    <i className="ri-star-fill fs-17 text-rating-color"></i>
                    <i className="ri-star-fill fs-17 text-rating-color"></i>
                    <i className="ri-star-half-fill fs-17 text-rating-color"></i>
                  </div>
                  <span
                    className="fs-18 position-relative"
                    style={{ top: "3px" }}
                  >
                    4.7 (980 ratings)
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <div className="courses-details-lms-area">
        <Container className="cmw-1308">
          <Row className="g-4">
            <Col lg={8}>
              <div className="courses-details-lms-content">
                <ul className="nav nav-tabs courses-details-lms-tabs">
                  <li className="nav-item" role="presentation">
                    <button
                      onClick={() => handleTabClick(0)}
                      className={`nav-link ${activeTab === 0 ? "active" : ""}`}
                    >
                      Overview
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      onClick={() => handleTabClick(1)}
                      className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                    >
                      Curriculum
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      onClick={() => handleTabClick(2)}
                      className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                    >
                      Instructor
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      onClick={() => handleTabClick(3)}
                      className={`nav-link ${activeTab === 3 ? "active" : ""}`}
                    >
                      Reviews
                    </button>
                  </li>
                </ul>

                <div className="tab-content">
                  {activeTab === 0 && <CourseOverview />}
                  {activeTab === 1 && <Curriculum />}
                  {activeTab === 2 && <Instructor />}
                  {activeTab === 3 && <Reviews />}
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CourseDetailsContent;
