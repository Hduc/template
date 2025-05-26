"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroBanner = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <>
      <div
        className="banner-area-marketing position-relative z-1"
        style={{
          background: "linear-gradient(180deg, #FFEFE1 0%, #FFF 100%)",
        }}
      >
        <Container className="cmw-1308">
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <div className="banner-content-marketing">
                <div className="title bg-card-text-c">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      gap: "4px",
                    }}
                  >
                    <i className="ri-fire-fill text-danger-50"></i>
                    <span className="text-danger-90">
                      Less chaos. More clarity. Better results.
                    </span>
                  </div>
                </div>

                <h2>
                  Unlock <span>rapid growth</span> with an all-in-one marketing
                  hub
                </h2>

                <p>
                  Trezo gives you the tools to plan, execute, and track
                  campaigns — all in one smart dashboard.
                </p>

                <div
                  className="d-flex flex-wrap align-items-center banner-btn"
                  style={{
                    gap: "15px",
                  }}
                >
                  <Link
                    href="#"
                    className="btn btn-danger text-white fw-medium fs-14 rounded-pill landing-page-btn"
                  >
                    Start Your Free Trial
                  </Link>

                  <button
                    type="button"
                    onClick={toggleVideo}
                    className="btn btn-outline-danger-50 text-danger fw-medium fs-14 rounded-pill landing-page-btn"
                  >
                    <i className="ri-play-fill fs-16"></i>
                    <span>Watch Demo</span>
                  </button>
                </div>
              </div>
            </Col>

            <Col lg={5}>
              <div className="position-relative banner-img-marketing">
                <Image
                  src="/images/woman-with-tab.png"
                  alt="woman-with-tab"
                  width={870}
                  height={1168}
                />
                <Image
                  src="/images/flying-laptop.png"
                  className="flying-laptop"
                  alt="flying-laptop"
                  width={536}
                  height={420}
                />
              </div>
            </Col>
          </Row>
        </Container>

        {/* Perspective grid shape image */}
        <Image
          src="/images/perspective-grid.png"
          className="perspective-grid w-100"
          alt="perspective-grid"
          width={1920}
          height={676}
        />
      </div>

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
                onClick={toggleVideo}
                className="border-0 bg-transparent text-white fs-17"
              >
                <i className="ri-close-large-line"></i>
              </button>
            </div>

            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/_ZppXdKk4c8?si=9IpWzVHI_uDyzL4n"
                title="Trezo - Intro"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBanner;
