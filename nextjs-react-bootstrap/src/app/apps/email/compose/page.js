"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Sidebar from "@/components/Apps/Email/Sidebar"; 
import Compose from "@/components/Apps/Email/Compose";

export default function Page() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Compose</h3>
 
        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce/">
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
            <span className="fw-medium">Compose</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col xs={12} md={4} lg={3} xl={4}>
          <Sidebar />
        </Col>

        <Col xs={12} md={8} lg={9} xl={8}>
          <Compose />
        </Col>
      </Row>
    </>
  );
}