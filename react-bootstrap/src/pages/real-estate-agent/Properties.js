import React from "react";
import { Breadcrumb } from "react-bootstrap";
import PropertiesTable from "../../components/RealEstateAgent/PropertiesTable";

const Properties = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Properties</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">Real Estate Agent</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">Properties</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <PropertiesTable />
    </>
  );
};

export default Properties;
