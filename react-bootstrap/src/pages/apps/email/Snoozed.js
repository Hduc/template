import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import Sidebar from "../../../components/Apps/Email/Sidebar";
import SnoozedEmail from "../../../components/Apps/Email/SnoozedEmail";

const Snoozed = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Email</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="fw-medium">Apps</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="fw-medium">Email</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <span className="fw-medium">Snoozed</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col xs={12} md={4} lg={3} xl={4}>
          <Sidebar />
        </Col>

        <Col xs={12} md={8} lg={9} xl={8}>
          <SnoozedEmail />
        </Col>
      </Row>
    </>
  );
};

export default Snoozed;
