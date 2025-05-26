"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";

const HeroBanner = () => {
  return (
    <>
      <div
        className="banner-area-ecommerce"
        style={{
          background: "linear-gradient(180deg, #4936F5 0%, #FFFFFF 100%)",
        }}
      >
        <Container className="cmw-1308 position-relative z-1">
          <div className="banner-content-ecommerce">
            <div className="title bg-border-color-50">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  gap: "4px",
                }}
              >
                <i className="ri-fire-fill text-primary-50"></i>
                <span className="text-primary-50">
                  Real-time sales insights
                </span>
              </div>
            </div>

            <h2>All-in-One Platform for eCommerce Growth</h2>

            <p>
              The all-in-one solution to manage, grow, and scale your eCommerce
              business — faster.
            </p>

            <div
              className="d-flex flex-wrap align-items-center justify-content-center banner-btn"
              style={{
                gap: "15px",
              }}
            >
              <Link
                href="#"
                className="btn bg-primary text-white fw-medium fs-14 rounded-pill hover-bg landing-page-btn"
              >
                Start Your Free Trial
              </Link>
              <Link
                href="/features"
                className="btn btn-outline-body-bg text-white fw-medium fs-14 rounded-pill hover-bg landing-page-btn"
              >
                Explore Features
              </Link>
            </div>
          </div>

          <div className="banner-img">
            <Image
              src="/images/banner.png"
              alt="banner"
              loading="lazy"
              width={1924}
              height={605}
            />
          </div>

          {/* Shape Images  */}
          <Image
            src="/images/shapes/shape1.png"
            className="shape1 shape d-none d-lg-inline-block"
            alt="shape1"
            loading="lazy"
            width={87}
            height={87}
          />
          <Image
            src="/images/shapes/shape2.png"
            className="shape2 shape d-none d-lg-inline-block"
            alt="shape2"
            loading="lazy"
            width={50}
            height={50}
          />
          <Image
            src="/images/shapes/shape3.png"
            className="shape3 shape d-none d-lg-inline-block"
            alt="shape3"
            loading="lazy"
            width={87}
            height={87}
          />
          <Image
            src="/images/shapes/shape4.png"
            className="shape4 shape d-none d-lg-inline-block"
            alt="shape4"
            loading="lazy"
            width={50}
            height={50}
          />
        </Container>
      </div>
    </>
  );
};

export default HeroBanner;
