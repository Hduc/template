"use client";

import React from "react";
import Link from "next/link"; 
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const Pagination = () => {
  return (
    <>
      <div className="p-4">
        <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
          <span className="fs-12 fw-medium">Items per pages: 5</span>

          <div className="d-flex align-items-center">
            <span className="fs-12 fw-medium me-2">1 - 5 of 12</span>

            <nav aria-label="Page navigation example">
              <ul className="pagination mb-0 justify-content-center">
                <li className="page-item">
                  <Link
                    className="page-link icon"
                    href="#"
                    aria-label="Previous"
                  >
                    <MaterialSymbol icon="keyboard_arrow_left" />
                  </Link>
                </li>

                <li className="page-item">
                  <Link
                    className="page-link icon"
                    href="#"
                    aria-label="Next"
                  >
                    <MaterialSymbol icon="keyboard_arrow_right" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
