"use client";

import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const CheckoutForm = () => {
  return (
    <>
      <div className="checkout-lms-area">
        <Container className="cmw-1308">
          <div className="d-flex border-top border-2 border-primary bg-gray-300 coupon-wrap-lms">
            <div className="d-flex align-items-center" style={{ gap: "12px" }}>
              <i className="material-symbols-outlined">web_asset</i>
              <p className="fs-16 fw-medium">
                Have a coupon?{" "}
                <Link href="#" className="text-decoration-none text-primary">
                  Click here to enter your code
                </Link>
              </p>
            </div>
          </div>

          <Row className="g-4">
            <Col lg={6}>
              <div className="checkout-lms-form">
                <h3 className="fs-28 mb-4 fw-medium">Billing details</h3>

                <Form>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-20">
                        <label className="label text-secondary-60">
                          First Name *
                        </label>
                        <Form.Control type="text" placeholder="First name" />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-20">
                        <label className="label text-secondary-60">
                          Last Name *
                        </label>
                        <Form.Control type="text" placeholder="Last name" />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-20">
                        <label className="label text-secondary-60">
                          Company Name ( Optional )
                        </label>
                        <Form.Control type="text" />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-20">
                        <label className="label text-secondary-60">
                          Country / Region *
                        </label>
                        <Form.Select
                          className="form-control"
                          aria-label="Default select example"
                        >
                          <option>United States (US)</option>
                          <option value="1">United Kingdom (UK)</option>
                          <option value="2">Canada (CA)</option>
                          <option value="3">Australia (AU)</option>
                          <option value="4">Germany (DE)</option>
                        </Form.Select>
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-20">
                        <label className="label text-secondary-60">
                          Street Address *
                        </label>
                        <Form.Control type="text" placeholder="House number" />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-20">
                        <label className="label text-secondary-60">
                          Town / City
                        </label>
                        <Form.Control type="text" placeholder="Town / City *" />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-20">
                        <label className="label text-secondary-60">
                          State *
                        </label>
                        <Form.Select
                          className="form-control"
                          aria-label="Default select example"
                        >
                          <option>California</option>
                          <option value="1">New York</option>
                          <option value="2">Canada (CA)</option>
                          <option value="3">Texas</option>
                          <option value="4">Florida</option>
                          <option value="5">Illinois</option>
                        </Form.Select>
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-20">
                        <label className="label text-secondary-60">
                          ZIP Code *
                        </label>
                        <Form.Control type="text" placeholder="ZIP Code" />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-20">
                        <label className="label text-secondary-60">
                          Phone *
                        </label>
                        <Form.Control type="text" placeholder="Phone no" />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-20">
                        <label className="label text-secondary-60">
                          Email Address *
                        </label>
                        <Form.Control type="text" placeholder="Email address" />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <h3 className="fs-28 my-4 fw-medium">
                        Additional information
                      </h3>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-20">
                        <label className="label text-secondary-60">
                          Order Notes (Optional)
                        </label>
                        <textarea
                          rows="4"
                          className="form-control"
                          placeholder="Type here..."
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>

            <Col lg={6}>
              <div className="order-wrap-lms ms-auto">
                <h3 className="fs-28 mb-4 fw-medium">Your order</h3>
                <div className="order-table-lms">
                  <div className="table-responsive">
                    <table className="table align-middle">
                      <thead>
                        <tr>
                          <th scope="col">Description</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="fs-14">Digital Marketing Mastery</td>
                          <td className="fs-16 text-primary">$49</td>
                        </tr>
                        <tr>
                          <td className="fs-14">Mobile App Development</td>
                          <td className="fs-16 text-primary">$69</td>
                        </tr>
                        <tr>
                          <td className="fs-15 fw-medium">Subtotal</td>
                          <td className="fs-16 text-primary">$118</td>
                        </tr>
                        <tr>
                          <td className="fs-15 fw-medium">Total</td>
                          <td className="fs-16 text-primary">$118</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="payment-method">
                    <h3 className="fs-20 fw-medium mb-20">Payment Method</h3>

                    <div
                      className="d-flex flex-wrap align-items-center mb-4"
                      style={{ gap: "20px" }}
                    >
                      <div>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options-base"
                          id="option5"
                          autoComplete="off"
                        />
                        <label
                          className="btn"
                          htmlFor="option5"
                          style={{
                            width: "80px",
                            height: "66px",
                            backgroundColor: "#F6F7F9",
                            border: "1px solid #DDE4FF",
                            padding: "9px 0",
                          }}
                        >
                          <i className="material-symbols-outlined fs-28 text-primary">
                            paid
                          </i>
                          <span className="d-block lh-1">Cash</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options-base"
                          id="option6"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label
                          className="btn"
                          htmlFor="option6"
                          style={{
                            width: "81px",
                            height: "66px",
                            backgroundColor: "#F6F7F9",
                            border: "1px solid #DDE4FF",
                            padding: "9px 0",
                          }}
                        >
                          <i className="material-symbols-outlined fs-28 text-primary">
                            credit_card
                          </i>
                          <span className="d-block lh-1">Card</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options-base"
                          id="option8"
                          autoComplete="off"
                        />
                        <label
                          className="btn"
                          htmlFor="option8"
                          style={{
                            width: "81px",
                            height: "66px",
                            backgroundColor: "#F6F7F9",
                            border: "1px solid #DDE4FF",
                            padding: "9px 0",
                          }}
                        >
                          <i className="material-symbols-outlined fs-28 text-primary">
                            wallet
                          </i>
                          <span className="d-block lh-1">E-Wallet</span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary-50 landing-page-btn fw-medium fs-16 rounded-2 pyx-11-18 w-100"
                    >
                      <span>Place Order</span>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CheckoutForm;
