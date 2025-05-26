"use client";

import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Reviews = () => {
  return (
    <>
      <div className="courses-reviews-lms">
        <Row className="g-4 align-items-center">
          <Col lg={4}>
            <div
              className="card border-0 rounded-3 bg-white text-center me-3"
              style={{
                padding: "50px 15px",
              }}
            >
              <h2 className="fs-24 mb-1 text-primary">4.7</h2>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  gap: "2px",
                  marginBottom: "5px",
                }}
              >
                <i className="ri-star-fill fs-20 text-rating-color"></i>
                <i className="ri-star-fill fs-20 text-rating-color"></i>
                <i className="ri-star-fill fs-20 text-rating-color"></i>
                <i className="ri-star-fill fs-20 text-rating-color"></i>
                <i className="ri-star-half-fill fs-20 text-rating-color"></i>
              </div>
              <span className="fs-18">10 ratings</span>
            </div>
          </Col>

          <Col lg={8}>
            <div className="d-flex align-items-center mb-2">
              <ul
                className="pe-4 mb-0 list-unstyled d-flex"
                style={{
                  gap: "2px",
                }}
              >
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
              </ul>

              <div
                className="progress w-100 rounded-pill"
                role="progressbar"
                aria-label="Example 5px high"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "4px",
                  backgroundColor: "#D5D9E2",
                }}
              >
                <div
                  className="progress-bar rounded-pill"
                  style={{
                    width: "100%",
                    backgroundColor: "#FFC444",
                  }}
                ></div>
              </div>
              <span className="ms-4">5</span>
            </div>

            <div className="d-flex align-items-center mb-2">
              <ul
                className="pe-4 mb-0 list-unstyled d-flex"
                style={{
                  gap: "2px",
                }}
              >
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-line text-gray-light fs-15 opacity-0"></i>
                </li>
              </ul>

              <div
                className="progress w-100 rounded-pill"
                role="progressbar"
                aria-label="Example 5px high"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "4px",
                  backgroundColor: "#D5D9E2",
                }}
              >
                <div
                  className="progress-bar rounded-pill"
                  style={{
                    width: "100%",
                    backgroundColor: "#FFC444",
                  }}
                ></div>
              </div>
              <span className="ms-4">2</span>
            </div>

            <div className="d-flex align-items-center mb-2">
              <ul
                className="pe-4 mb-0 list-unstyled d-flex"
                style={{
                  gap: "2px",
                }}
              >
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-line text-gray-light fs-15 opacity-0"></i>
                </li>
                <li>
                  <i className="ri-star-line text-gray-light fs-15 opacity-0"></i>
                </li>
              </ul>

              <div
                className="progress w-100 rounded-pill"
                role="progressbar"
                aria-label="Example 5px high"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "4px",
                  backgroundColor: "#D5D9E2",
                }}
              >
                <div
                  className="progress-bar rounded-pill"
                  style={{
                    width: "100%",
                    backgroundColor: "#FFC444",
                  }}
                ></div>
              </div>
              <span className="ms-4">1</span>
            </div>

            <div className="d-flex align-items-center mb-2">
              <ul
                className="pe-4 mb-0 list-unstyled d-flex"
                style={{
                  gap: "2px",
                }}
              >
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-line text-gray-light fs-15 opacity-0"></i>
                </li>
                <li>
                  <i className="ri-star-line text-gray-light fs-15 opacity-0"></i>
                </li>
                <li>
                  <i className="ri-star-line text-gray-light fs-15 opacity-0"></i>
                </li>
              </ul>

              <div
                className="progress w-100 rounded-pill"
                role="progressbar"
                aria-label="Example 5px high"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "4px",
                  backgroundColor: "#D5D9E2",
                }}
              >
                <div
                  className="progress-bar rounded-pill"
                  style={{
                    width: "0%",
                  }}
                ></div>
              </div>
              <span className="ms-4">0</span>
            </div>

            <div className="d-flex align-items-center mb-0">
              <ul
                className="pe-4 mb-0 list-unstyled d-flex"
                style={{
                  gap: "2px",
                }}
              >
                <li>
                  <i className="ri-star-fill text-rating-color fs-15"></i>
                </li>
                <li>
                  <i className="ri-star-line text-gray-light fs-15 opacity-0"></i>
                </li>
                <li>
                  <i className="ri-star-line text-gray-light fs-15 opacity-0"></i>
                </li>
                <li>
                  <i className="ri-star-line text-gray-light fs-15 opacity-0"></i>
                </li>
                <li>
                  <i className="ri-star-line text-gray-light fs-15 opacity-0"></i>
                </li>
              </ul>

              <div
                className="progress w-100 rounded-pill"
                role="progressbar"
                aria-label="Example 5px high"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "4px",
                  backgroundColor: "#D5D9E2",
                }}
              >
                <div
                  className="progress-bar rounded-pill"
                  style={{
                    width: "0%",
                  }}
                ></div>
              </div>
              <span className="ms-4">0</span>
            </div>
          </Col>
        </Row>

        <div
          className="border-top border-light"
          style={{
            margin: "60px 0",
          }}
        ></div>

        <div
          className="d-sm-flex align-items-center"
          style={{
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          <div className="flex-shrink-0 mb-3 mb-sm-0">
            <img
              src="/images/users/user6.jpg"
              className="rounded-circle"
              alt="user6"
              width={120}
              height={120}
            />
          </div>

          <div className="flex-grow-1">
            <h3 className="fs-20" style={{ marginBottom: "12px" }}>
              David Mercer
            </h3>
            <ul
              className="p-0 mb-2 list-unstyled d-flex flex-wrap align-items-center"
              style={{
                gap: "8px",
              }}
            >
              <li className="fs-16">Senior Full-Stack Engineer</li>
              <li className="border-end py-2 border-light"></li>
              <li className="fs-16">Tech Educator</li>
              <li className="border-end py-2 border-light"></li>
              <li className="fs-16">Mentor</li>
            </ul>
            <div className="flex">
              <i className="ri-star-fill text-rating-color fs-16"></i>
              <i className="ri-star-fill text-rating-color fs-16"></i>
              <i className="ri-star-fill text-rating-color fs-16"></i>
              <i className="ri-star-fill text-rating-color fs-16"></i>
              <i className="ri-star-fill text-rating-color fs-16"></i>
            </div>
          </div>
        </div>

        <div className="card bg-white border-0 rounded-3">
          <div className="card-body p-4">
            <div className="d-flex gap-2 flex-wrap justify-content-between  mb-4">
              <h3 className="mb-0">Write Feedback Here:</h3>
              <ul className="ps-0 mb-0 list-unstyled d-flex gap-2 ratings">
                <li className="rating">
                  <i className="ri-star-fill fs-20"></i>
                </li>
                <li className="rating">
                  <i className="ri-star-fill fs-20"></i>
                </li>
                <li className="rating">
                  <i className="ri-star-fill fs-20"></i>
                </li>
                <li className="rating">
                  <i className="ri-star-fill fs-20"></i>
                </li>
                <li className="rating">
                  <i className="ri-star-fill fs-20"></i>
                </li>
              </ul>
            </div>

            <Form>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="label text-secondary">Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="h-55 text-dark"
                      placeholder="Your Name"
                    />
                  </Form.Group>
                </Col>

                <Col lg={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="label text-secondary">Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="h-55 text-dark"
                      placeholder="Your Email"
                    />
                  </Form.Group>
                </Col>

                <Col lg={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="label text-secondary">
                      Your Phone No
                    </Form.Label>
                    <Form.Control
                      type="number"
                      className="h-55 text-dark"
                      placeholder="Your Phone No"
                    />
                  </Form.Group>
                </Col>

                <Col lg={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="label text-secondary">Your Subject</Form.Label>
                    <Form.Control
                      type="email"
                      className="h-55 text-dark"
                      placeholder="Your Subject"
                    />
                  </Form.Group>
                </Col>

                <Col lg={12}>
                  <Form.Group className="mb-4">
                    <Form.Label className="label text-secondary">
                      Write Comment
                    </Form.Label>
                    <textarea
                      className="form-control"
                      placeholder="Write Comment"
                      cols="30"
                      rows="10"
                      data-gramm="false"
                      wt-ignore-input="true"
                    ></textarea>
                  </Form.Group>
                </Col>

                <Col lg={12}>
                  <Form.Group className="mb-0">
                    <button
                      type="submit"
                      className="btn btn-primary-50 landing-page-btn fw-medium fs-16 rounded-2 d-flex align-items-center pyx-11-18 justify-content-center"
                    >
                      Submit
                    </button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
