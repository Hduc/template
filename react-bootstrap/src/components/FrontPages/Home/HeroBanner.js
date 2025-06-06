"use client";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <>
      <div className="banner-area bg-img pb-0" id="home">
        <Container className="position-relative z-1">
          <div className="banner-content text-center pb-75">
            <h1 className="fs-60 mb-3 pb-md-3">
              Insights On-the-Go: Access Your Dashboard Anywhere, Anytime
            </h1>

            <p className="fs-18 m-auto mb-3 pb-md-3 mw-740">
              Our intuitive interface transforms complex data into actionable
              insights, empowering you to make informed decisions with
              confidence.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary py-2 px-4 fs-16 fw-medium rounded-3"
            >
              <div className="d-flex align-items-center gap-1">
                <i className="ri-user-line fs-18"></i>
                <span>Get started - It is free</span>
              </div>
            </Link>
          </div>

          <div className="banner-img-wrap text-center">
            <img
              src="/images/landing/banner-img.png"
              alt="banner-img"
              width={848}
              height={585}
            />
          </div>

          {/* Shape Images */}
          <img
            src="/images/landing/shape-3.png"
            className="shape shape-7"
            alt="shape"
            width={685}
            height={685}
          />
          <img
            src="/images/landing/shape-4.png"
            className="shape shape-8"
            alt="shape"
            width={447}
            height={453}
          />
          <img
            src="/images/landing/shape-5.png"
            className="shape shape-9"
            alt="shape"
            width={171}
            height={171}
          />
          <img
            src="/images/landing/shape-6.png"
            className="shape shape-10"
            alt="shape"
            width={658}
            height={656}
          />
        </Container>
      </div>
    </>
  );
};

export default HeroBanner;
