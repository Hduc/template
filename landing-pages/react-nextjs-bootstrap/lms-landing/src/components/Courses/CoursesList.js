"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CoursesList = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "business", name: "Business & Management" },
    { id: "technology", name: "Technology & Coding" },
    { id: "creative", name: "Creative Arts & Design" },
    { id: "personal", name: "Personal Development" },
    { id: "health", name: "Health & Wellness" },
  ];

  const courses = [
    {
      id: 1,
      title: "Data Science with Python",
      category: "technology",
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
      category: "creative",
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
      category: "health",
      image: "/images/courses/course4.jpg",
      rating: 4.0,
      ratingsCount: 750,
      price: 79,
      lessons: 20,
      enrolled: 400,
      viewLink: "/courses/details",
    },
    {
      id: 4,
      title: "Digital Marketing Fundamentals",
      category: "business",
      image: "/images/courses/course5.jpg",
      rating: 4.5,
      ratingsCount: 3200,
      price: 89,
      lessons: 45,
      enrolled: 8500,
      viewLink: "/courses/details",
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      category: "technology",
      image: "/images/courses/course6.jpg",
      rating: 4.8,
      ratingsCount: 5400,
      price: 129,
      lessons: 65,
      enrolled: 12500,
      viewLink: "/courses/details",
    },
    {
      id: 6,
      title: "Leadership & Team Management",
      category: "business",
      image: "/images/courses/course7.jpg",
      rating: 4.6,
      ratingsCount: 2100,
      price: 79,
      lessons: 32,
      enrolled: 4800,
      viewLink: "/courses/details",
    },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i
          key={`full-${i}`}
          className="ri-star-fill fs-16 text-rating-color"
        ></i>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <i key="half" className="ri-star-half-fill fs-16 text-rating-color"></i>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i
          key={`empty-${i}`}
          className="ri-star-line fs-16 text-rating-color"
        ></i>
      );
    }

    return stars;
  };

  return (
    <div className="popular-courses-lms-area ptb-120 bg-f6f5f3">
      <Container className="cmw-1308">
        <div
          className="d-flex flex-wrap mb-4 mb-lg-5 pb-lg-3"
          style={{ gap: "10px" }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`btn landing-page-btn ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-white text-secondary"
              } hover-bg fw-medium fs-16 rounded-pill px-4`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <Row className="g-4 justify-content-center">
          {filteredCourses.map((course) => (
            <Col key={course.id} md={6} lg={4}>
              <div className="single-course-lms-item border-0 style-two">
                <Link
                  href={course.viewLink}
                  className="d-block text-decoration-none"
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={684}
                    height={440}
                  />
                </Link>
                <div className="single-course-lms-content">
                  <Link
                    href={course.viewLink}
                    className="d-block text-decoration-none"
                  >
                    <h3>{course.title}</h3>
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
                    <span className="fs-16">
                      {course.rating} ({course.ratingsCount.toLocaleString()}{" "}
                      ratings)
                    </span>
                  </div>

                  <span className="price">${course.price}</span>
                  
                  <ul className="d-flex align-items-center info p-0 m-0">
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
        </Row>
      </Container>
    </div>
  );
};

export default CoursesList;
