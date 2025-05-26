"use client";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Cta = () => {
  return (
    <>
      <div className="supercharge-area">
        <Container className="cmw-1308">
          <div
            className="supercharge-content position-relative z-1"
            style={{
              background:
                "linear-gradient(278deg, #757DFF 23.88%, #4936F5 94.06%)",
            }}
          >
            <h2>Ready to Supercharge Your Store?</h2>
            <p>
              Start growing with real data, real automation, and real results.
            </p>

            <div
              className="d-flex flex-wrap justify-content-center mt-40"
              style={{
                gap: "14px",
              }}
            >
              <Link
                to="#"
                className="btn bg-white text-primary fw-medium fs-14 rounded-pill hover-bg landing-page-btn"
              >
                Start Free Trial
              </Link>
              <Link
                to="#"
                className="btn btn-outline-light text-white fw-medium fs-14 rounded-pill hover-bg landing-page-btn"
              >
                Talk to Sales
              </Link>
            </div>

            {/* Shape Images  */}
            <img
              src="/images/shapes/shape1.png"
              className="position-absolute d-none d-xl-inline-block"
              style={{
                bottom: "85px",
                left: "85px",
              }}
              alt="shape"
              width={87}
              height={87}
            />
            <img
              src="/images/shapes/shape2.png"
              className="position-absolute d-none d-xl-inline-block"
              style={{
                bottom: "187px",
                left: "180px",
              }}
              alt="shape"
              width={50}
              height={50}
            />
            <img
              src="/images/shapes/shape3.png"
              className="position-absolute d-none d-xl-inline-block"
              style={{
                top: "88px",
                right: "106px",
              }}
              alt="shape"
              width={87}
              height={87}
            />
            <img
              src="/images/shapes/shape4.png"
              className="position-absolute d-none d-xl-inline-block"
              style={{
                top: "195px",
                right: "193px",
              }}
              alt="shape"
              width={50}
              height={50}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cta;
