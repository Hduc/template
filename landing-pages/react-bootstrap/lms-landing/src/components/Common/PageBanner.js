"use client";

import React from "react";
import { Link } from "react-router-dom";

const PageBanner = ({ pageTitle, homePageUrl, homePageText }) => {
  return (
    <>
      <div className="page-banner-area-lms bg-fffef8">
        <div className="container cmw-1704">
          <div className="page-banner-content-lms text-center">
            <h2 className="text-secondary">{pageTitle}</h2>

            <div className="d-inline-block">
              <ul className="m-0 list-unstyled d-flex align-items-center justify-content-center breadcrumb-lms">
                <li>
                  <Link to={homePageUrl}>{homePageText}</Link>
                </li>
                <li>
                  <i className="ri-arrow-right-s-line"></i>
                </li>
                <li>
                  <span>{pageTitle}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
