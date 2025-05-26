"use client";

import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroBanner = () => {
  return (
    <>
      <div className="banner-area-lms bg-fffef8 position-relative z-1">
        <Container className="cmw-1704">
          <Row className="g-4">
            <Col xxl={5}>
              <div className="banner-content-lms">
                <div className="d-inline-block">
                  <div className="d-flex align-items-center justify-content-center banner-top-title">
                    <i className="material-symbols-outlined">menu_book</i>
                    <span className="text-secondary-50">
                      Learn anytime, Anywhere
                    </span>
                  </div>
                </div>
                <h2>
                  Unlock Your <span>Potential</span> with Online Learning
                </h2>
                <p>
                  Discover expertly designed courses, flexible learning paths,
                  and a community that supports your goals — all in one powerful
                  platform.
                </p>

                <div className="d-flex flex-wrap align-items-center banner-btn">
                  <Link
                    to="/pricing"
                    className="btn btn-primary-50 landing-page-btn fw-medium fs-16 rounded-2 d-flex align-items-center pyx-11-18"
                    style={{ gap: "10px" }}
                  >
                    <i className="material-symbols-outlined fs-24">school</i>
                    <span>Explore Courses</span>
                  </Link>
                  <Link
                    to="/why-choose-us"
                    className="arrow-btn d-flex align-items-center gap-1"
                  >
                    <span>Learn More</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </Col>

            <Col xxl={7}>
              <div className="banner-course-img-wrap">
                <Row className="g-4">
                  <Col md={6}>
                    <div className="single-course-lms-item ml-60 mt-60">
                      <span className="note">Featured</span>
                      <Link
                        to="/courses/details"
                        className="d-block text-decoration-none"
                      >
                        <img
                          src="/images/courses/course1.jpg"
                          alt="course1"
                          width={684}
                          height={440}
                        />
                      </Link>
                      <div className="single-course-lms-content">
                        <Link
                          to="/courses/details"
                          className="d-block text-decoration-none"
                        >
                          <h3>Full-Stack Web Development</h3>
                        </Link>
                        <div
                          className="d-flex align-items-center"
                          style={{
                            gap: "8px",
                          }}
                        >
                          <div
                            className="d-flex align-items-center"
                            style={{
                              gap: "2px",
                            }}
                          >
                            <i className="ri-star-fill fs-16 text-rating-color"></i>
                            <i className="ri-star-fill fs-16 text-rating-color"></i>
                            <i className="ri-star-fill fs-16 text-rating-color"></i>
                            <i className="ri-star-fill fs-16 text-rating-color"></i>
                            <i className="ri-star-half-fill fs-16 text-rating-color"></i>
                          </div>
                          <span className="fs-16">4.8 (1,240 ratings)</span>
                        </div>
                        <span className="price">$79</span>
                        <ul className="d-flex align-items-center p-0 m-0 info">
                          <li className="d-flex align-items-center">
                            <i className="material-symbols-outlined fs-24">
                              menu_book
                            </i>
                            <span className="fs-16">45 Lessons</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <i className="material-symbols-outlined fs-24">
                              group
                            </i>
                            <span className="fs-16">8,500+ Enrolled</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="banner-img-lms position-relative">
                      <img
                        src="/images/woman.png"
                        alt="woman"
                        width={473}
                        height={750}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <img
          src="/images/shapes/shape1.png"
          className="shape1 d-none d-xl-inline-block z-n1"
          alt="shape1"
          width={486}
          height={456}
        />
      </div>
    </>
  );
};

export default HeroBanner;
