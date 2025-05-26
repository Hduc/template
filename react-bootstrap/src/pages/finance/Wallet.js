import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap"; 
import TotalIncome from "../../components/Finance/Wallet/TotalIncome";
import TotalExpenses from "../../components/Finance/Wallet/TotalExpenses"; 
import TransactionHistory from "../../components/Finance/Wallet/TransactionHistory";
import DebitCard from "../../components/Finance/Wallet/DebitCard";
import TotalBalance from "../../components/Finance/Wallet/TotalBalance";
import Static from "../../components/Finance/Wallet/Static";

const Wallet = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Wallet</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">Finance</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">Wallet</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col lg={4}>
          <Row>
            <Col sm={12} md={4} lg={12}>
              <TotalBalance />
            </Col>

            <Col sm={6} md={4} lg={12}>
              <TotalIncome />
            </Col>

            <Col sm={6} md={4} lg={12}>
              <TotalExpenses />
            </Col>
          </Row>
        </Col>

        <Col lg={8}>
          <Static />
        </Col>
      </Row>

      <Row>
        <Col xxl={8}>
          <TransactionHistory />
        </Col>

        <Col xxl={4}>
          <DebitCard />
        </Col>
      </Row>
    </>
  );
};

export default Wallet;
