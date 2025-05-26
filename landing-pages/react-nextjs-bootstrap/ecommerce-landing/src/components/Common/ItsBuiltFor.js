"use client";

import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItsBuiltFor = () => {
  return (
    <>
      <div className="it-built-for-area ptb-180 position-relative">
        <Container className="cmw-1308">
          <div className="section-title2 mx-auto text-center">
            <span className="top-title2">It&apos;s Built For</span>
            <h2>Perfect for Every Kind of Online Seller</h2>
            <p>
              Whether you&apos;re just starting or scaling big — Trezo fits your
              store.
            </p>
          </div>

          <Row className="justify-content-center g-4">
            <Col md={3} sm={6}>
              <div className="it-built-for-single-item">
                <Image
                  src="/images/arrow-top-right.svg"
                  className="arrow-top-right"
                  alt="arrow-top-right"
                  width={188}
                  height={87}
                />
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex justify-content-center align-items-center bg-white rounded-circle">
                    <Image
                      src="/images/icons/brand.svg"
                      alt="brand"
                      width={70}
                      height={70}
                    />
                  </div>
                </div>
                <h3>D2C Brands</h3>
                <p>Control the full customer journey and drive loyalty.</p>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="it-built-for-single-item mt-25">
                <Image
                  src="/images/arrow-bottom-right.svg"
                  className="arrow-bottom-right"
                  alt="arrow-bottom-right"
                  width={188}
                  height={87}
                />
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex justify-content-center align-items-center bg-white rounded-circle">
                    <Image
                      src="/images/icons/shopify.svg"
                      alt="brand"
                      width={70}
                      height={70}
                    />
                  </div>
                </div>
                <h3>Shopify Sellers</h3>
                <p>
                  Plug Trezo into your existing setup and enhance capabilities.
                </p>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="it-built-for-single-item">
                <Image
                  src="/images/arrow-top-right.svg"
                  className="arrow-top-right"
                  alt="arrow-top-right"
                  width={188}
                  height={87}
                />
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex justify-content-center align-items-center bg-white rounded-circle">
                    <Image
                      src="/images/icons/industry.svg"
                      alt="brand"
                      width={70}
                      height={70}
                    />
                  </div>
                </div>
                <h3>Niche Stores</h3>
                <p>Run smarter with insights tailored to your audience.</p>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="it-built-for-single-item mt-25">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex justify-content-center align-items-center bg-white rounded-circle">
                    <Image
                      src="/images/icons/shopping-store.svg"
                      alt="brand"
                      width={70}
                      height={70}
                    />
                  </div>
                </div>
                <h3>Multi-Channel Retailers</h3>
                <p>Track sales from all platforms, seamlessly.</p>
              </div>
            </Col>
          </Row>
        </Container>

        <Image
          src="/images/mesh-grad.png"
          className="position-absolute top-50 start-50 translate-middle z-n1"
          alt="mesh-grad"
          width={1920}
          height={1566}
        />
      </div>
    </>
  );
};

export default ItsBuiltFor;
