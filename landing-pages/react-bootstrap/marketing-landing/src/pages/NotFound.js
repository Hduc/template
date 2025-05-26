"use client";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="ptb-180">
        <div className="container">
          <div className="text-center">
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/images/not-found.png"
                alt="not-found"
                width={500}
                height={480}
                className="inline-block"
              />
            </div>

            <h2 style={{ marginBottom: "10px" }}>Page Not Found</h2>
            <p>Could not find requested resource</p>

            <Link
              to="/"
              className="btn bg-primary text-white fw-medium fs-14 rounded-pill hover-bg landing-page-btn"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
