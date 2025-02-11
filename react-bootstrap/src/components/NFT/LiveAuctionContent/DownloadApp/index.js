"use client";
 
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <>
      <div
        className="for-dark rounded-3 p-4 text-center mb-4"
        style={{
          background: "linear-gradient(153deg, #FAD2D2 0%, #6FA3EC 100%)",
        }}
      >
        <div className="py-2">
          <h3 className="fs-20 fw-normal">Have You Tried Our</h3>

          <h3 className="fs-20 mb-1">New Mobile App?</h3>

          <div className="py-4 py-xxl-5">
            <img src="/images/app-2.png" alt="app" width={170} height={188} />
          </div>

          <Link
            to="#"
            className="btn btn-primary py-2 px-3 fs-16 fw-medium"
            target="_blank"
            rel="noreferrer"
          >
            Download App
          </Link>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
