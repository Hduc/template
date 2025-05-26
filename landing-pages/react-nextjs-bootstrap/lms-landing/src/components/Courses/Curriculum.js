"use client";

import React, { useState } from "react";

const Curriculum = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <>
      {/* Video Popup Modal */}
      {showVideo && (
        <div
          className="position-fixed top-0 bg-black bg-opacity-75 d-flex align-items-center justify-content-center p-4 w-100 h-100"
          style={{ zIndex: "9999", left: "0" }}
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

      <div className="courses-curriculum-lms">
        <div className="accordion faq-wrapper-lms">
          <div
            className="accordion-item mb-3 bg-transparent rounded-0"
            style={{
              backgroundColor: "transparent !important",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button text-secondary bg-white"
                type="button"
              >
                Introduction to Web Development
              </button>
            </h2>

            <div className="accordion-collapse collapse show">
              <div className="accordion-body">
                <button
                  type="button"
                  onClick={toggleVideo}
                  className="d-flex flex-wrap gap-3 justify-content-between align-items-center text-decoration-none border-bottom border-light pb-3 mb-3 border-0 bg-transparent w-100"
                >
                  <div
                    className="d-flex align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <i className="material-symbols-outlined fs-24">
                      description
                    </i>
                    <span className="fs-16">How the web works</span>
                  </div>
                  <div
                    className="d-flex justify-content-end align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <div className="d-flex align-items-center bg-primary-div rounded-1 px-2 py-1 gap-1">
                      <i className="ri-play-line text-white fs-16"></i>
                      <span className="text-white">Overview</span>
                    </div>
                    <i className="material-symbols-outlined fs-24">
                      visibility
                    </i>
                  </div>
                </button>

                <button
                  type="button"
                  className="d-flex flex-wrap gap-3 justify-content-between align-items-center text-decoration-none border-bottom border-light pb-3 mb-3 border-0 bg-transparent w-100"
                  style={{
                    cursor: "auto",
                  }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <i className="material-symbols-outlined fs-24">
                      description
                    </i>
                    <span className="fs-16">
                      Front-end vs. back-end overview
                    </span>
                  </div>
                  <div
                    className="d-flex justify-content-end align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <div className="d-flex align-items-center bg-danger-50 bg-opacity-10 rounded-1 px-2 py-1 gap-1">
                      <i className="ri-time-line text-danger-50 fs-16"></i>
                      <span className="text-danger-50">12:30 Minutes</span>
                    </div>
                    <i className="material-symbols-outlined fs-24">lock</i>
                  </div>
                </button>

                <button
                  type="button"
                  className="d-flex flex-wrap gap-3 justify-content-between align-items-center text-decoration-none border-0 bg-transparent w-100"
                  style={{
                    cursor: "auto",
                  }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <i className="material-symbols-outlined fs-24">
                      description
                    </i>
                    <span className="fs-16">
                      Tools you&apos;ll need (Code editor, Browser, Git)
                    </span>
                  </div>
                  <div
                    className="d-flex justify-content-end align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <div className="d-flex align-items-center bg-danger-50 bg-opacity-10 rounded-1 px-2 py-1 gap-1">
                      <i className="ri-time-line text-danger-50 fs-16"></i>
                      <span className="text-danger-50">8:00 Minutes</span>
                    </div>
                    <i className="material-symbols-outlined fs-24">lock</i>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div
            className="accordion-item mb-3 bg-transparent rounded-0"
            style={{
              backgroundColor: "transparent !important",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button text-secondary bg-white"
                type="button"
              >
                HTML Fundamentals
              </button>
            </h2>
            <div className="accordion-collapse collapse show">
              <div className="accordion-body">
                <button
                  type="button"
                  className="d-flex flex-wrap gap-3 justify-content-between align-items-center text-decoration-none border-bottom border-light pb-3 mb-3 border-0 bg-transparent w-100"
                  data-fslightbox="4"
                  style={{
                    cursor: "auto",
                  }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <i className="material-symbols-outlined fs-24">
                      description
                    </i>
                    <span className="fs-16">Structure of an HTML document</span>
                  </div>
                  <div
                    className="d-flex justify-content-end align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <div className="d-flex align-items-center bg-danger-50 bg-opacity-10 rounded-1 px-2 py-1 gap-1">
                      <i className="ri-time-line text-danger-50 fs-16"></i>
                      <span className="text-danger-50">12:30 Minutes</span>
                    </div>
                    <i className="material-symbols-outlined fs-24">lock</i>
                  </div>
                </button>

                <button
                  type="button"
                  className="d-flex flex-wrap gap-3 justify-content-between align-items-center text-decoration-none border-bottom border-light pb-3 mb-3 border-0 bg-transparent w-100"
                  style={{
                    cursor: "auto",
                  }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <i className="material-symbols-outlined fs-24">
                      description
                    </i>
                    <span className="fs-16">
                      Text formatting, links, and images
                    </span>
                  </div>
                  <div
                    className="d-flex justify-content-end align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <div className="d-flex align-items-center bg-danger-50 bg-opacity-10 rounded-1 px-2 py-1 gap-1">
                      <i className="ri-time-line text-danger-50 fs-16"></i>
                      <span className="text-danger-50">8:00 Minutes</span>
                    </div>
                    <i className="material-symbols-outlined fs-24">lock</i>
                  </div>
                </button>

                <button
                  type="button"
                  className="d-flex flex-wrap gap-3 justify-content-between align-items-center text-decoration-none border-0 bg-transparent w-100"
                  style={{
                    cursor: "auto",
                  }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <i className="material-symbols-outlined fs-24">
                      description
                    </i>
                    <span className="fs-16">Forms and semantic elements</span>
                  </div>
                  <div
                    className="d-flex justify-content-end align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <div className="d-flex align-items-center bg-danger-50 bg-opacity-10 rounded-1 px-2 py-1 gap-1">
                      <i className="ri-time-line text-danger-50 fs-16"></i>
                      <span className="text-danger-50">11:00 Minutes</span>
                    </div>
                    <i className="material-symbols-outlined fs-24">lock</i>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div
            className="accordion-item mb-3 bg-transparent rounded-0"
            style={{
              backgroundColor: "transparent !important",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button text-secondary bg-white"
                type="button"
              >
                CSS & Responsive Design
              </button>
            </h2>

            <div className="accordion-collapse collapse show">
              <div className="accordion-body">
                <button
                  type="button"
                  className="d-flex flex-wrap gap-3 justify-content-between align-items-center text-decoration-none border-bottom border-light pb-3 mb-3 border-0 bg-transparent w-100"
                  style={{
                    cursor: "auto",
                  }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <i className="material-symbols-outlined fs-24">
                      description
                    </i>
                    <span className="fs-16">
                      Selectors, colors, margins, and padding
                    </span>
                  </div>
                  <div
                    className="d-flex justify-content-end align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <div className="d-flex align-items-center bg-danger-50 bg-opacity-10 rounded-1 px-2 py-1 gap-1">
                      <i className="ri-time-line text-danger-50 fs-16"></i>
                      <span className="text-danger-50">12:30 Minutes</span>
                    </div>
                    <i className="material-symbols-outlined fs-24">lock</i>
                  </div>
                </button>

                <button
                  type="button"
                  className="d-flex flex-wrap gap-3 justify-content-between align-items-center text-decoration-none border-bottom border-light pb-3 mb-3 border-0 bg-transparent w-100"
                  style={{
                    cursor: "auto",
                  }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <i className="material-symbols-outlined fs-24">
                      description
                    </i>
                    <span className="fs-16">Flexbox and Grid layout</span>
                  </div>
                  <div
                    className="d-flex justify-content-end align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <div className="d-flex align-items-center bg-danger-50 bg-opacity-10 rounded-1 px-2 py-1 gap-1">
                      <i className="ri-time-line text-danger-50 fs-16"></i>
                      <span className="text-danger-50">8:00 Minutes</span>
                    </div>
                    <i className="material-symbols-outlined fs-24">lock</i>
                  </div>
                </button>

                <button
                  type="button"
                  className="d-flex flex-wrap gap-3 justify-content-between align-items-center text-decoration-none border-0 bg-transparent w-100"
                  style={{
                    cursor: "auto",
                  }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <i className="material-symbols-outlined fs-24">
                      description
                    </i>
                    <span className="fs-16">
                      Media queries and mobile-first design
                    </span>
                  </div>
                  <div
                    className="d-flex justify-content-end align-items-center"
                    style={{
                      gap: "15px",
                    }}
                  >
                    <div className="d-flex align-items-center bg-danger-50 bg-opacity-10 rounded-1 px-2 py-1 gap-1">
                      <i className="ri-time-line text-danger-50 fs-16"></i>
                      <span className="text-danger-50">11:00 Minutes</span>
                    </div>
                    <i className="material-symbols-outlined fs-24">lock</i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
