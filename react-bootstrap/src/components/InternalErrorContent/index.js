"use client";

import { Card } from "react-bootstrap"; 

const InternalErrorContent = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="text-center">
            <img
              src="/images/internal-error.png"
              className="mb-5"
              alt="error"
              width={400}
              height={437}
            />

            <h3 className="fs-24 mb-3">
              Looks like we did not find this page, please try again later.
            </h3>

            <p className="mb-4">
              But no worries! Our team is looking ever where while you wait
              safely.
            </p>

            <a
              href="/dashboard/ecommerce"
              className="btn btn-primary py-2 px-4 fs-16 fw-medium"
            >
              <span className="d-inline-block py-1">Back To Dashboard</span>
            </a>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default InternalErrorContent;
