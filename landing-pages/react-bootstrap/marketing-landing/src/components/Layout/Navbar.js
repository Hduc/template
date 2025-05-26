"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";

// Navigation data defined outside the component
const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features/" },
  { name: "Pricing", path: "/pricing/" },
  { name: "Blog", path: "/blogs/" },
];

const Navbar = () => {
  const location = useLocation(); // Use `useLocation` to get the current path
  const pathname = location.pathname;

  const [isToggleNavbar, setToggleNavbar] = useState(true);
  const handleToggleNavbar = () => {
    setToggleNavbar(!isToggleNavbar);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]); // Trigger when pathname changes

  // Sticky navbar
  useEffect(() => {
    const elementId = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        elementId?.classList.add("sticky");
      } else {
        elementId?.classList.remove("sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-transparent fixed-top navbar-for-landing-page py-30 style-two"
        id="navbar"
      >
        <Container className="cmw-1308">
          <div
            className="d-flex w-100 align-items-center justify-content-between bg-white rounded-5 for-mobile-p"
            style={{
              padding: "8px 16px",
              flexWrap: "inherit",
            }}
          >
            <Link className="navbar-brand" to="/">
              <img
                src="/images/logo.svg"
                className="black-logo"
                alt="logo"
                width={109}
                height={29}
              />
              <img
                src="/images/white-logo.svg"
                className="white-logo d-none"
                alt="logo"
                width={109}
                height={29}
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleToggleNavbar}
            >
              <span className="border-bottom border-3 border-secondary top"></span>
              <span className="border-bottom border-3 border-secondary middle my-5px"></span>
              <span className="border-bottom border-3 border-secondary bottom"></span>
            </button>

            <div
              id="navbarSupportedContent"
              className={`collapse navbar-collapse ${
                isToggleNavbar ? "" : "show"
              }`}
            >
              <ul className="navbar-nav m-auto">
                {navigationItems.map((item) => (
                  <li className="nav-item" key={item.path}>
                    <Link
                      className={`nav-link fs-14 fw-medium text-body-bg hover p-0 ${
                        pathname === item.path ? "active" : ""
                      }`}
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div
                className="othres d-flex align-items-center"
                style={{
                  gap: "30px",
                }}
              >
                <Link
                  to="#"
                  className="fw-medium fs-14 text-decoration-none text-danger-50"
                >
                  Login
                </Link>
                <Link
                  to="#"
                  className="btn btn-outline-danger-50 fw-medium fs-14 rounded-pill"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
