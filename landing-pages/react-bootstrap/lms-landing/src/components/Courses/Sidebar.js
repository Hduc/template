"use client";

import React, { useState } from "react";

const Sidebar = () => {
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

      <div className="courses-details-lms-sidebar">
        <div className="position-relative">
          <img
            src="/images/courses/course2.jpg"
            style={{
              borderRadius: "20px",
            }}
            alt="course2"
            width={684}
            height={440}
          />

          <button
            type="button"
            onClick={toggleVideo}
            className="d-flex justify-content-center align-items-center text-decoration-none bg-white text-primary rounded-circle position-absolute top-50 start-50 translate-middle hover-bg border-0"
            style={{
              width: "55px",
              height: "55px",
            }}
          >
            <i
              className="ri-play-fill position-relative"
              style={{
                fontSize: "36px",
                left: "3px",
              }}
            ></i>
          </button>
        </div>

        <ul className="px-0 courses-info lh-1">
          <li className="d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center"
              style={{
                gap: "14px",
              }}
            >
              <i className="material-symbols-outlined fs-24 text-secondary">
                payments
              </i>
              <span className="fs-16 text-secondary">Price:</span>
            </div>
            <span className="fs-20 fw-bold text-primary">$69</span>
          </li>

          <li className="d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center"
              style={{
                gap: "14px",
              }}
            >
              <i className="material-symbols-outlined fs-24 text-secondary">
                school
              </i>
              <span className="fs-16 text-secondary">Instructor:</span>
            </div>
            <span className="fs-16 fw-semibold text-body-color-50">John</span>
          </li>

          <li className="d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center"
              style={{
                gap: "14px",
              }}
            >
              <i className="material-symbols-outlined fs-24 text-secondary">
                calendar_month
              </i>
              <span className="fs-16 text-secondary">Duration:</span>
            </div>
            <span className="fs-16 fw-semibold text-body-color-50">
              12 weeks
            </span>
          </li>

          <li className="d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center"
              style={{
                gap: "14px",
              }}
            >
              <i className="material-symbols-outlined fs-24 text-secondary">
                menu_book
              </i>
              <span className="fs-16 text-secondary">Lessons:</span>
            </div>
            <span className="fs-16 fw-semibold text-body-color-50">22</span>
          </li>

          <li className="d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center"
              style={{
                gap: "14px",
              }}
            >
              <i className="material-symbols-outlined fs-24 text-secondary">
                group
              </i>
              <span className="fs-16 text-secondary">Students:</span>
            </div>
            <span className="fs-16 fw-semibold text-body-color-50">6,300</span>
          </li>

          <li className="d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center"
              style={{
                gap: "14px",
              }}
            >
              <i className="material-symbols-outlined fs-24 text-secondary">
                language
              </i>
              <span className="fs-16 text-secondary">Language:</span>
            </div>
            <span className="fs-16 fw-semibold text-body-color-50">
              English
            </span>
          </li>

          <li className="d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center"
              style={{
                gap: "14px",
              }}
            >
              <i className="material-symbols-outlined fs-24 text-secondary">
                workspace_premium
              </i>
              <span className="fs-16 text-secondary">Certifications:</span>
            </div>
            <span className="fs-16 fw-semibold text-body-color-50">Yes</span>
          </li>
        </ul>

        <button
          type="button"
          className="btn btn-primary-50 landing-page-btn fw-medium fs-16 rounded-2 d-flex align-items-center pyx-11-18 justify-content-center w-100"
          style={{
            gap: "10px",
          }}
        >
          <i className="material-symbols-outlined fs-24">shopping_cart</i>
          <span>Buy Now</span>
        </button>

        <ul
          className="social-link d-flex align-items-center p-0 mb-0 list-unstyled"
          style={{
            gap: "10px",
          }}
        >
          <li>
            <span className="fs-16 text-body-color-50">Share:</span>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-facebook-box-fill fs-22"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/"
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-twitter-x-fill fs-22"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-box-fill fs-22"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
