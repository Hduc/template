"use client";

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    quote:
      "Trezo changed the way we manage campaigns. Everything's faster, clearer, and way more collaborative. Our ROI improved within weeks.",
    name: "Rachel Nguyen",
    position: "Growth Marketing Lead, BrightDash",
    image: "/images/users/user5.jpg",
    background: "linear-gradient(#fff 0%, #eef6ff 100%)",
    isWide: false,
  },
  {
    id: 2,
    rating: 5,
    quote:
      "I've used dozens of marketing tools — Trezo is the only one that actually simplifies my workflow instead of complicating it.",
    name: "Michael Brooks",
    position: "Senior Digital Strategist, Amply Media",
    image: "/images/users/user6.jpg",
    background: "linear-gradient(180deg, #FFF 0%, #FAF5FF 100%)",
    isWide: false,
  },
  {
    id: 3,
    rating: 5,
    quote:
      "The real-time dashboard and funnel visualization features are a game-changer. My team finally has the clarity we needed.",
    name: "Lila Fernandez",
    position: "Head of Marketing, Corelytics",
    image: "/images/users/user7.jpg",
    background: "linear-gradient(180deg, #FFF 0%, #EEFFE5 100%)",
    isWide: false,
  },
  {
    id: 4,
    rating: 5,
    quote:
      "Trezo's impact on our marketing operations has been incredible. It's now at the center of everything we do.",
    name: "Olivia Smith",
    position: "Performance Marketing Lead, BrightDash",
    image: "/images/users/user5.jpg",
    background: "linear-gradient(180deg, #FFF 0%, #FFE4E4 100%)",
    isWide: true,
    hasVideo: true,
    videoId: "_ZppXdKk4c8",
    thumbnail: "/images/man.jpg",
  },
];

const renderStars = (rating) => {
  return Array(rating)
    .fill()
    .map((_, i) => (
      <i key={i} className="ri-star-fill fs-18 text-rating-color lh-1"></i>
    ));
};

const Testimonials = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const toggleVideo = (videoId = "") => {
    setCurrentVideo(videoId);
    setShowVideo(!showVideo);
  };

  return (
    <div
      className="testimonials-marketing-area bg-img ptb-180"
      style={{ backgroundImage: "url(/images/gradient-bg2.jpg)" }}
    >
      <Container className="cmw-1308">
        <div className="section-title2 text-center mx-auto mw-100 mb-70">
          <span className="top-title2 bg-card-text-c text-danger-90">
            Testimonials
          </span>
          <h2 className="mx-auto" style={{ maxWidth: "520px" }}>
            What Marketers Say About Trezo
          </h2>
          <p className="dec">
            From campaign tracking to performance insights — we&apos;ve got you
            covered.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {testimonialsData.map((testimonial) => (
            <Col key={testimonial.id} md={6} lg={testimonial.isWide ? 8 : 4}>
              <div
                className={`testimonials-single-item-marketing h-100 ${
                  testimonial.isWide ? "bg-4" : ""
                }`}
                style={{ background: testimonial.background }}
              >
                {testimonial.isWide ? (
                  <Row className="align-content-center g-4">
                    <Col md={6}>
                      <div className="d-flex mb-25" style={{ gap: "2px" }}>
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="fs-16">
                        <q>{testimonial.quote}</q>
                      </p>
                      <div
                        className="d-flex align-items-center mt-50"
                        style={{ gap: "12px" }}
                      >
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.image}
                            className="rounded-circle user"
                            alt={testimonial.name}
                            width={42}
                            height={42}
                          />
                        </div>
                        <div className="flex-grow-1">
                          <span
                            className="text-secondary fw-semibold d-block s-14"
                            style={{ marginBottom: "4px" }}
                          >
                            {testimonial.name}
                          </span>
                          <span>{testimonial.position}</span>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="position-relative z-1">
                        <img
                          src={testimonial.thumbnail}
                          style={{ borderRadius: "15px" }}
                          alt="marketing"
                          width={726}
                          height={566}
                        />
                        {testimonial.hasVideo && (
                          <button
                            onClick={() => toggleVideo(testimonial.videoId)}
                            className="marketing-play text-decoration-none text-secondary-50 d-flex justify-content-center align-content-center rounded-circle position-absolute top-50 start-50 translate-middle border-0 p-0"
                            style={{ width: "55px", height: "55px" }}
                          >
                            <i className="ri-play-fill fs-35"></i>
                          </button>
                        )}
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <>
                    <div className="d-flex mb-25" style={{ gap: "2px" }}>
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="fs-16">
                      <q>{testimonial.quote}</q>
                    </p>
                    <div
                      className="d-flex align-items-center mt-50"
                      style={{ gap: "12px" }}
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          className="rounded-circle user"
                          alt={testimonial.name}
                          width={42}
                          height={42}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <span
                          className="text-secondary fw-semibold d-block s-14"
                          style={{ marginBottom: "4px" }}
                        >
                          {testimonial.name}
                        </span>
                        <span>{testimonial.position}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Video Popup Modal */}
      {showVideo && (
        <div
          className="position-fixed top-0 bg-black bg-opacity-75 d-flex align-items-center justify-content-center p-4 w-100 h-100"
          style={{ zIndex: "9999" }}
        >
          <div
            className="relative mx-auto"
            style={{ maxWidth: "800px", width: "100%" }}
          >
            <div className="text-end">
              <button
                onClick={() => toggleVideo("")}
                className="border-0 bg-transparent text-white fs-17"
              >
                <i className="ri-close-large-line"></i>
              </button>
            </div>
            <div className="ratio ratio-16x9">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                title="Trezo - Intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
