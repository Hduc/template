"use client";

import { Card, Form } from "react-bootstrap";

const ConfirmEmailForm = () => {
  return (
    <>
      <div className="auth-main-content m-auto m-1230 px-3">
        <Form style={{ maxWidth: "550px" }}>
          <Card className="bg-white border-0 rounded-10 mb-4 text-center">
            <Card.Body className="p-4">
              <div className="mb-3 mb-md-4">
                <img
                  src="/images/logo.svg"
                  alt="logo"
                  width={100}
                  height={26}
                />
              </div>

              <img
                src="/images/message.svg"
                className="mb-3 mb-md-4"
                alt="message"
                width={124}
                height={124}
              />

              <h4 className="fs-20 fw-semibold mb-2">Success !</h4>

              <p className="mb-4">
                A email has been send to <strong>hello@trezo.com</strong>.
                Please check for an email from company and click on the included
                link to reset your password.
              </p>

              <button
                type="button"
                className="btn btn-primary fs-16 fw-medium text-dark py-2 px-4 text-white w-100"
              >
                Confirm Mail
              </button>
            </Card.Body>
          </Card>
        </Form>
      </div>
    </>
  );
};

export default ConfirmEmailForm;
