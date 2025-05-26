"use client";

import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <div className="footer-area bg-fffef8">
        <div className="cmw-1704 mx-auto footer-wrap-lms">
          <Container className="cmw-1308">
            <Row className="g-4 justify-content-center">
              <Col lg={3} sm={6}>
                <div className="footer-single-item">
                  <Link to="/" className="logo">
                    <img
                      src="/images/logo.svg"
                      className="black-logo"
                      alt="black-logo"
                      width={132}
                      height={34}
                    />
                    <img
                      src="/images/white-logo.svg"
                      className="d-none white-logo"
                      alt="white-logo"
                      width={132}
                      height={34}
                    />
                  </Link>

                  <p className="dec">
                    Empowering learners worldwide with expert-led online
                    courses, flexible learning paths, and career-boosting
                    certifications — anytime, anywhere.
                  </p>

                  <ul
                    className="d-flex align-items-center p-0 mb-0 list-unstyled social-link"
                    style={{
                      gap: "8px",
                    }}
                  >
                    <li>
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <i className="ri-twitter-x-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.dribbble.com/" target="_blank" rel="noopener noreferrer">
                        <i className="ri-dribbble-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={3} sm={6}>
                <div className="footer-single-item pl-130">
                  <h3>Popular Categories</h3>
                  <ul className="p-0 m-0 list-unstyled import-link">
                    <li>
                      <Link to="#">Web Development</Link>
                    </li>
                    <li>
                      <Link to="#">Data Science</Link>
                    </li>
                    <li>
                      <Link to="#">Analysis & Reporting</Link>
                    </li>
                    <li>
                      <Link to="#">Business & Marketing</Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={3} sm={6}>
                <div className="footer-single-item pl-130">
                  <h3>Quick Links</h3>
                  <ul className="p-0 m-0 list-unstyled import-link">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Pricing Plans</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={3} sm={6}>
                <div className="footer-single-item pl-80">
                  <h3>Get in Touch</h3>
                  <ul className="p-0 m-0 list-unstyled info-link">
                    <li>
                      <span>Email:</span>{" "}
                      <a href="mailto:support@trezo.com">support@trezo.com</a>
                    </li>
                    <li>
                      <span>Phone:</span>{" "}
                      <a href="tel:+1(555)123-4567">+1 (555) 123-4567</a>
                    </li>
                    <li>
                      <p>
                        <span>Location:</span> 123 Learning Ave, Knowledge City,
                        USA
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="copyright-area-ecommerce bg-fffef8">
        <Container className="cmw-1308">
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-between align-items-center">
            <p className="fs-14 mb-0">
              © <span className="text-primary-div">Trezo</span> is Proudly Owned
              by{" "}
              <a
                href="https://envytheme.com/"
                target="_blank"
                className="text-decoration-none text-primary"
                rel="noopener noreferrer"
              >
                EnvyTheme
              </a>
            </p>

            <ul className="p-0 m-0 list-unstyled d-flex flex-wrap justify-content-center justify-content-md-end terms-info">
              <li>
                <Link to="#">Terms of Service</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
