"use client";

import React from "react";

const DownloadApp = () => {
  return (
    <>
      <div
        className="rounded-3 p-25 rea-manage-app"
        style={{
          backgroundColor: "#b2ff97",
        }}
      >
        <div className="mx-auto py-sm-3 my-1" style={{ maxWidth: "210px" }}>
          <h2 className="fs-24 text-secondary mb-20">
            Manage Your Dashboard From Your Mobile
          </h2>

          <a
            href="https://www.apple.com/app-store/"
            className="rea-app-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download App
          </a>

          <div className="text-center">
            <img src="/images/saas.png" alt="saas" width={207} height={188} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
