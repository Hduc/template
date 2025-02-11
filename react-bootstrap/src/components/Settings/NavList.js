"use client";

import { Link, useLocation } from "react-router-dom";

const NavList = () => {
  const location = useLocation(); // Use `useLocation` to get the current path
  const pathname = location.pathname; // Extract `pathname` from location

  return (
    <>
      <ul className="ps-0 mb-4 list-unstyled d-flex flex-wrap gap-2 gap-lg-3">
        <li>
          <Link
            to="/settings/account-settings"
            className={`btn border border-primary text-primary py-2 px-3 fw-semibold ${
              pathname === "/settings/account-settings"
                ? "btn-primary text-white"
                : "bg-transparent"
            }`}
          >
            Account Settings
          </Link>
        </li>

        <li>
          <Link
            to="/settings/change-password"
            className={`btn border border-primary text-primary py-2 px-3 fw-semibold ${
              pathname === "/settings/change-password"
                ? "btn-primary text-white"
                : "bg-transparent"
            }`}
          >
            Change Password
          </Link>
        </li>

        <li>
          <Link
            to="/settings/connections"
            className={`btn border border-primary text-primary py-2 px-3 fw-semibold ${
              pathname === "/settings/connections"
                ? "btn-primary text-white"
                : "bg-transparent"
            }`}
          >
            Connections
          </Link>
        </li>

        <li>
          <Link
            to="/settings/privacy-policy"
            className={`btn border border-primary text-primary py-2 px-3 fw-semibold ${
              pathname === "/settings/privacy-policy"
                ? "btn-primary text-white"
                : "bg-transparent"
            }`}
          >
            Privacy Policy
          </Link>
        </li>

        <li>
          <Link
            to="/settings/terms-conditions"
            className={`btn border border-primary text-primary py-2 px-3 fw-semibold ${
              pathname === "/settings/terms-conditions"
                ? "btn-primary text-white"
                : "bg-transparent"
            }`}
          >
            Terms & Conditions
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
