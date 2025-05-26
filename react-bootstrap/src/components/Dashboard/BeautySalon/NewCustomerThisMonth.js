"use client";

import { Card } from "react-bootstrap";

const NewCustomerThisMonth = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <span className="fs-14 d-block mb-2">New Customer This Month</span>

          <h2 className="fs-32 lh-1 mb-2">14.5K</h2>

          <span className="d-inline-block bg-success-80 border-success-70 border px-2 rounded-pill text-success-50 fs-12 fw-medium mb-2">
            +7%
          </span>

          <p className="fs-12">vs previous 30 days</p>

          <div className="d-flex flex-wrap align-items-center mt-5 pt-3">
            <div
              className="-mr-10"
              style={{
                border: "2px solid #fff",
                borderRadius: "50px",
                boxShadow: "0px 4px 4px 0px rgba(101, 96, 240, 0.10)",
                width: "42px",
                height: "42px",
                textAlign: "center",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              <img
                src="/images/user-82.png"
                alt="user"
                width={38}
                height={38}
              />
            </div>

            <div
              className="-mr-10"
              style={{
                border: "2px solid #fff",
                borderRadius: "50px",
                boxShadow: "0px 4px 4px 0px rgba(101, 96, 240, 0.10)",
                width: "42px",
                height: "42px",
                textAlign: "center",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              <img
                src="/images/user-80.png"
                alt="user"
                width={38}
                height={38}
              />
            </div>

            <div
              className="-mr-10"
              style={{
                border: "2px solid #fff",
                borderRadius: "50px",
                boxShadow: "0px 4px 4px 0px rgba(101, 96, 240, 0.10)",
                width: "42px",
                height: "42px",
                textAlign: "center",
                backgroundColor: "#59CBB7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              P
            </div>

            <div
              className="-mr-10"
              style={{
                border: "2px solid #fff",
                borderRadius: "50px",
                boxShadow: "0px 4px 4px 0px rgba(101, 96, 240, 0.10)",
                width: "42px",
                height: "42px",
                textAlign: "center",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              <img
                src="/images/user-81.png"
                alt="user"
                width={38}
                height={38}
              />
            </div>

            <div
              className="-mr-10"
              style={{
                border: "2px solid #fff",
                borderRadius: "50px",
                boxShadow: "0px 4px 4px 0px rgba(101, 96, 240, 0.10)",
                width: "42px",
                height: "42px",
                textAlign: "center",
                backgroundColor: "#605DFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              S
            </div>

            <div
              className="-mr-10"
              style={{
                border: "2px solid #fff",
                borderRadius: "50px",
                boxShadow: "0px 4px 4px 0px rgba(101, 96, 240, 0.10)",
                width: "42px",
                height: "42px",
                textAlign: "center",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              <img
                src="/images/user-84.png"
                alt="user"
                width={38}
                height={38}
              />
            </div>

            <div
              className="-mr-10"
              style={{
                border: "2px solid #fff",
                borderRadius: "50px",
                boxShadow: "0px 4px 4px 0px rgba(101, 96, 240, 0.10)",
                width: "42px",
                height: "42px",
                textAlign: "center",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                color: "#7A799B",
              }}
            >
              <span className="name">+24</span>
            </div>
          </div>

          <h3 className="fs-12 fw-medium text-body mt-2 pt-1 mb-0">
            Joined Today
          </h3>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewCustomerThisMonth;
