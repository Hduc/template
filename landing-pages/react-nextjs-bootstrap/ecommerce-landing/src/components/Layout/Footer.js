"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <div
        className="footer-area-ecommerce ptb-180"
        style={{
          background: " linear-gradient(180deg, #FFFFFF 0%, #DDE4FF 100%)",
        }}
      >
        <Container className="cmw-1308">
          <Row className="g-4 justify-content-center">
            <Col sm={6} lg={3}>
              <div className="footer-single-item-ecommerce">
                <Link href="/" className="logo">
                  <Image
                    src="/images/black-logo.svg"
                    className="black-logo"
                    alt="black-logo"
                    width={132}
                    height={34}
                  />
                  <Image
                    src="/images/white-logo.svg"
                    className="d-none white-logo"
                    alt="white-logo"
                    width={132}
                    height={34}
                  />
                </Link>

                <p className="dec">
                  Your all-in-one marketing command center — built to help you
                  grow, scale, and win smarter.
                </p>

                <ul
                  className="d-flex align-items-center p-0 mb-0 list-unstyled social-link"
                  style={{
                    gap: "8px",
                  }}
                >
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="ri-twitter-x-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dribbble.com/" target="_blank">
                      <i className="ri-dribbble-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col sm={6} lg={3}>
              <div className="footer-single-item-ecommerce pl-130">
                <h3>Quick Links</h3>
                <ul className="p-0 m-0 list-unstyled import-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/features">Features</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing Plans</Link>
                  </li>
                  <li>
                    <Link href="/use-cases">Use Cases</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col sm={6} lg={3}>
              <div className="footer-single-item-ecommerce pl-130">
                <h3>Resources</h3>
                <ul className="p-0 m-0 list-unstyled import-link">
                  <li>
                    <Link href="#">Help Center</Link>
                  </li>
                  <li>
                    <Link href="#">Documentation</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col sm={6} lg={3}>
              <div className="footer-single-item-ecommerce pl-80">
                <h3>Get in Touch</h3>
                <ul className="p-0 m-0 list-unstyled info-link">
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:support@trezo.com">support@trezo.com</a>
                  </li>
                  <li>
                    <span>Phone:</span>{" "}
                    <a href="tel:+1(555)123-4567">+1 (555) 123-4567m</a>
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

      <div className="copyright-area-ecommerce">
        <Container className="cmw-1308">
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-between align-items-center">
            <p className="fs-14 mb-0">
              © <span className="text-primary-div">Trezo</span> is Proudly Owned
              by{" "}
              <a
                href="https://envytheme.com/"
                target="_blank"
                className="text-decoration-none text-primary"
              >
                EnvyTheme
              </a>
            </p>
            <ul className="p-0 m-0 list-unstyled d-flex flex-wrap justify-content-center justify-content-md-end terms-info">
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
