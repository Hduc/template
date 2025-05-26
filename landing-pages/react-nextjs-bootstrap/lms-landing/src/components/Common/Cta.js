"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cta = () => {
  return (
    <>
      <div className="advancing-lms-area bg-fffef8 pb-180">
        <Container className="cmw-1308">
          <div className="advancing-lms-wrap">
            <Row className="g-4 align-items-center">
              <Col md={6}>
                <div className="advancing-lms-content">
                  <h2>Join Thousands of Learners Advancing Their Careers</h2>

                  <div className="d-inline-block">
                    <Link
                      href="#"
                      className="btn btn-primary-50 landing-page-btn fw-medium fs-16 rounded-2 d-flex align-items-center pyx-11-18"
                      style={{
                        gap: "10px",
                      }}
                    >
                      <i className="material-symbols-outlined fs-24">school</i>
                      <span>Start Learning Now</span>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col md={6}>
                <div className="advancing-lms-img position-relative text-md-end text-center">
                  <Image
                    src="/images/learning.png"
                    alt="learning"
                    width={343}
                    height={324}
                  />
                  <Image
                    src="/images/shapes/shape3.png"
                    className="position-absolute shape3"
                    alt="shape3"
                    width={92}
                    height={47}
                  />
                  <Image
                    src="/images/shapes/shape3.png"
                    className="position-absolute shape4"
                    alt="shape3"
                    width={92}
                    height={47}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cta;
