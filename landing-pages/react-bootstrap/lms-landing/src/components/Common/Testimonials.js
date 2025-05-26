"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      content:
        "This platform changed my life! The Web Development course was incredibly comprehensive, and the support team was always there when I needed help. I landed a job just weeks after finishing!",
      author: "Maria Johnson",
      role: "Web Developer at TechVerse",
      image: "/images/users/user1.jpg",
      colClass: "lg={4} md={12}",
    },
    {
      id: 2,
      rating: 4.5,
      content:
        "Loved every bit of the Graphic Design Masterclass! The instructor was amazing, and the course content was well-structured. I use what I learned every day at work.",
      author: "Jessica Lee",
      role: "Graphic Designer at CreativeHive",
      image: "/images/users/user2.jpg",
      colClass: "lg={4} md={12}",
    },
    {
      id: 3,
      rating: 4,
      content:
        "The Mindfulness course helped me not only in my personal life but also improved how I teach my clients. The guided sessions are pure gold. I use what I learned every day at work.",
      author: "Carlos Mendes",
      role: "Mental Wellness Coach",
      image: "/images/users/user3.jpg",
      colClass: "lg={4} md={12}",
    },
    {
      id: 4,
      rating: 5,
      content:
        "Enrolling in the Full-Stack Web Development course was one of the best decisions I've ever made. The platform's structure made learning easy and enjoyable — from interactive video lessons to real-time quizzes. What truly impressed me was the depth of content and how up-to-date it was with modern technologies.",
      author: "Elena Petrova",
      role: "HR Manager at SkillBridge Corp.",
      image: "/images/users/user4.jpg",
      colClass: "lg={6} md={12}",
    },
    {
      id: 5,
      rating: 5,
      content:
        "As someone looking to switch careers, I was hesitant at first. But the Data Science and Analytics course exceeded all my expectations. It took me from beginner-level Python to advanced data manipulation and visualization. The capstone project gave me something tangible to show in my portfolio.",
      author: "Lucas Moretti",
      role: "Entrepreneur & Startup Mentor",
      image: "/images/users/user5.jpg",
      colClass: "lg={6} md={12}",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i
          key={`full-${i}`}
          className="ri-star-fill text-rating-color fs-16"
        ></i>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <i key="half" className="ri-star-half-fill text-rating-color fs-16"></i>
      );
    }

    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i
          key={`empty-${i}`}
          className="ri-star-line text-rating-color fs-16 lh-1"
        ></i>
      );
    }

    return (
      <div className="d-flex align-items-center star" style={{ gap: "2px" }}>
        {stars}
      </div>
    );
  };

  return (
    <>
      <div className="testimonials-lms-area pb-180 bg-fffef8">
        <Container className="cmw-1308">
          <div className="section-title2 lms-title text-center mx-auto">
            <div className="title3">
              <div
                className="d-flex align-items-center"
                style={{ gap: "10px" }}
              >
                <img src="/images/ico.svg" alt="ico" width={20} height={20} />
                <span>Student Testimonials</span>
              </div>
            </div>
            <h2 className="text-secondary">What Our Learners Say</h2>
          </div>

          <Row className="align-items-center g-4">
            {testimonials.map((testimonial) => (
              <Col key={testimonial.id} lg={testimonial.id < 4 ? 4 : 6} md={12}>
                <div className="testimonials-lms-single-item">
                  {renderStars(testimonial.rating)}
                  <p>{testimonial.content}</p>

                  <div className="d-flex align-items-center review-info justify-content-between">
                    <div
                      className="d-flex align-items-center"
                      style={{ gap: "15px" }}
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          className="testimonials-img"
                          alt={testimonial.author}
                          width={48}
                          height={40}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="text-secondary">{testimonial.author}</h6>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>

                    <i className="ri-double-quotes-l"></i>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
