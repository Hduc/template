import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import Basic from "../components/ExtraPages/Toasts/Basic";
import Dismissible from "../components/ExtraPages/Toasts/Dismissible";
import Stacking from "../components/ExtraPages/Toasts/Stacking";
import Placement from "../components/ExtraPages/Toasts/Placement";
import Autohide from "../components/ExtraPages/Toasts/Autohide";
import Contextual from "../components/ExtraPages/Toasts/Contextual";

const Toasts = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Toasts</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">Toasts</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col lg={6}>
          <Basic />

          <Stacking />

          <Autohide />

          <Contextual />
        </Col>

        <Col lg={6}>
          <Dismissible />

          <Placement />
        </Col>
      </Row> 
    </>
  );
};

export default Toasts;
