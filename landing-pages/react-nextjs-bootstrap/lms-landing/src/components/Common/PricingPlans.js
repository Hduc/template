"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PricingPlans = () => {
  return (
    <>
      <div className="pricing-plans-lms-area pb-180 bg-fffef8">
        <Container className="cmw-1308">
          <Row className="g-4">
            <Col lg={6}>
              <div className="pricing-plans-lms-content">
                <div className="title3">
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <Image
                      src="/images/ico.svg"
                      alt="ico"
                      width={20}
                      height={20}
                    />
                    <span>Pricing Plans</span>
                  </div>
                </div>

                <h2 className="text-secondary">
                  Flexible Plans for Every Learner
                </h2>

                <div className="shape2 text-end d-none d-lg-block">
                  <Image
                    src="/images/shapes/shape2.png"
                    alt="shape2"
                    width={129}
                    height={142}
                  />
                </div>

                <div className="d-inline-block">
                  <Link
                    href="#"
                    className="btn btn-primary-50 landing-page-btn fw-medium fs-16 rounded-2 d-flex align-items-center pyx-11-18"
                    style={{ gap: "10px" }}
                  >
                    <i className="material-symbols-outlined fs-24">school</i>
                    <span>Start Free Trial</span>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <Row className="g-4 gx-40">
                <Col sm={6}>
                  <div className="pricing-plans-single-lms mt-70">
                    <h2>
                      $0<sub>/monthly</sub>
                    </h2>
                    <h3>Free Plan</h3>
                    <p>Access to limited courses</p>

                    <div className="d-inline-block">
                      <Link
                        href="#"
                        className="btn btn-outline-primary-div-50 fw-medium fs-16 text-primary-div-50 rounded-2 d-flex align-items-center"
                        style={{
                          gap: "5px",
                        }}
                      >
                        <i className="material-symbols-outlined fs-24">
                          person
                        </i>
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="pricing-plans-single-lms">
                    <h2>
                      $29<sub>/monthly</sub>
                    </h2>
                    <h3>Pro Plan</h3>
                    <p>Unlimited access to all courses</p>

                    <div className="d-inline-block">
                      <Link
                        href="#"
                        className="btn btn-outline-primary-div-50 fw-medium fs-16 text-primary-div-50 rounded-2 d-flex align-items-center"
                        style={{
                          gap: "5px",
                        }}
                      >
                        <i className="material-symbols-outlined fs-24">
                          person
                        </i>
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PricingPlans;
