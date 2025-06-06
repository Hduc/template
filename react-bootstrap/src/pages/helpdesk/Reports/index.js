import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import NewTicketsSolvedTickets from "../../../components/HelpDesk/Reports/NewTicketsSolvedTickets";
import TicketsStatus from "../../../components/HelpDesk/Reports/TicketsStatus";
import SupportOverview from "../../../components/HelpDesk/Reports/SupportOverview";
import CustomerSatisfaction from "../../../components/HelpDesk/Reports/CustomerSatisfaction";
import ResponseTime from "../../../components/HelpDesk/Reports/ResponseTime";
import PerformanceOfAgents from "../../../components/HelpDesk/PerformanceOfAgents";

const Reports = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Reports</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">HelpDesk</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">Reports</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col lg={12} xl={12} xxl={4}>
          <NewTicketsSolvedTickets />
        </Col>

        <Col lg={12} xl={12} xxl={8}>
          <TicketsStatus />
        </Col>
      </Row>

      <Row>
        <Col lg={4}>
          <SupportOverview />
        </Col>

        <Col lg={4}>
          <CustomerSatisfaction />
        </Col>

        <Col lg={4}>
          <ResponseTime />
        </Col>
      </Row>

      <PerformanceOfAgents />
    </>
  );
};

export default Reports;
