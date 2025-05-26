import React from "react";
import { Breadcrumb } from "react-bootstrap";
import RoomDetailsContent from "../../components/Hotel/RoomDetailsContent";
import Reviews from "../../components/Hotel/Reviews";

const RoomDetails = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Room Details</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">Hotel</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">Room Details</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <RoomDetailsContent />

      <Reviews />
    </>
  );
};

export default RoomDetails;
