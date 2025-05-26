"use client";

import React from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const courses = [
  {
    id: 1,
    title: "Data Science with Python",
    image: "/images/courses/course2.jpg",
    rating: 4.7,
    ratingsCount: 980,
    price: 69,
    lessons: 38,
    enrolled: 6300,
    viewLink: "/courses/details",
  },
  {
    id: 2,
    title: "Graphic Design Masterclass",
    image: "/images/courses/course3.jpg",
    rating: 4.9,
    ratingsCount: 10200,
    price: 99,
    lessons: 52,
    enrolled: 10200,
    viewLink: "/courses/details",
  },
  {
    id: 3,
    title: "Mindfulness & Stress Management",
    image: "/images/courses/course4.jpg",
    rating: 4.0,
    ratingsCount: 750,
    price: 79,
    lessons: 20,
    enrolled: 400,
    viewLink: "/courses/details",
  },
];

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(
        <i key={i} className="ri-star-fill fs-16 text-rating-color"></i>
      );
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(
        <i key={i} className="ri-star-half-fill fs-16 text-rating-color"></i>
      );
    } else {
      stars.push(
        <i key={i} className="ri-star-line fs-16 text-rating-color"></i>
      );
    }
  }

  return stars;
};

const PopularCourses = () => {
  return (
    <>
      <div className="popular-courses-lms-area ptb-180 bg-f6f5f3">
        <Container className="cmw-1308">
          <div className="section-title2 lms-title text-center mx-auto mb-5">
            <div className="title3">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "10px" }}
              >
                <img
                  src="/images/ico.svg"
                  alt="Popular courses icon"
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
                <span>Popular Courses</span>
              </div>
            </div>
            <h2 className="text-secondary">
              Top-Rated Courses to Kickstart Your Journey
            </h2>
          </div>

          <Row className="g-4 justify-content-center">
            {courses.map((course) => (
              <Col lg={4} md={6} key={course.id}>
                <div className="single-course-lms-item border-0 style-two">
                  <Link
                    to={course.viewLink}
                    className="d-block text-decoration-none"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      width={684}
                      height={440}
                    />
                  </Link>
                  <div className="single-course-lms-content">
                    <Link
                      to={course.viewLink}
                      className="d-block text-decoration-none"
                    >
                      <h3 className="mb-3">{course.title}</h3>
                    </Link>

                    <div
                      className="d-flex align-items-center"
                      style={{ gap: "8px" }}
                    >
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "2px" }}
                      >
                        {renderStars(course.rating)}
                      </div>
                      <span className="fs-16 text-dark">
                        {course.rating.toFixed(1)} (
                        {course.ratingsCount.toLocaleString()} ratings)
                      </span>
                    </div>

                    <span className="price">${course.price}</span>

                    <ul className="d-flex align-items-center p-0 m-0 info">
                      <li className="d-flex align-items-center">
                        <i className="material-symbols-outlined fs-24">
                          menu_book
                        </i>
                        <span className="fs-16">{course.lessons} Lessons</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="material-symbols-outlined fs-24">group</i>
                        <span className="fs-16">
                          {course.enrolled.toLocaleString()}+ Enrolled
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            ))}

            <Col xs={12} className="text-center">
              <div className="d-inline-block mt-46">
                <Link
                  to="/courses"
                  className="btn btn-primary-50 landing-page-btn fw-medium fs-16 rounded-2 d-flex align-items-center pyx-11-18"
                  style={{ gap: "10px" }}
                >
                  <i
                    className="material-symbols-outlined fs-24"
                    aria-hidden="true"
                  >
                    school
                  </i>
                  <span>Explore Courses</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PopularCourses;
