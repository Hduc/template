import React from "react";
import { Breadcrumb } from "react-bootstrap";
import MultiFileUpload from "../../components/Forms/FileUpload/MultiFileUpload";
import SingleFileUpload from "../../components/Forms/FileUpload/SingleFileUpload";

const FileUploader = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">File Uploader</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">Forms</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">File Uploader</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <SingleFileUpload />

      <MultiFileUpload />
    </>
  );
};

export default FileUploader;
