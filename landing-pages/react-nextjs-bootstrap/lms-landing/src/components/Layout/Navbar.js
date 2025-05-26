"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";

// Navigation data defined outside the component
const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Why Choose Us", path: "/why-choose-us/" },
  { name: "Courses", path: "/courses/" },
  { name: "How It Works", path: "/how-it-works/" },
  { name: "Pricing", path: "/pricing/" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isToggleNavbar, setToggleNavbar] = useState(true);
  const handleToggleNavbar = () => {
    setToggleNavbar(!isToggleNavbar);
  };

  // Determine the appropriate class based on the current path
  const navbarClass = isHomePage
    ? "navbar navbar-expand-lg navbar-for-landing-page bg-fffef8 style-lms-nav py-30"
    : "navbar navbar-expand-lg navbar-for-landing-page bg-fffef8 style-lms-nav py-30 position-sticky top-0";

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
  }, []); // Added empty dependency array to avoid repeated effect calls

  return (
    <>
      <nav className={navbarClass} id="navbar">
        <Container className="cmw-1704">
          <Link className="navbar-brand" href="/">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={132}
              height={34}
              className="black-logo"
            />
            <Image
              src="/images/white-logo.svg"
              className="white-logo d-none"
              alt="logo"
              width={132}
              height={34}
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
            <span className="border-bottom border-3 border-white top"></span>
            <span className="border-bottom border-3 border-white middle my-5px"></span>
            <span className="border-bottom border-3 border-white bottom"></span>
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
                    className={`nav-link fs-16 fw-medium hover p-0 ${
                      pathname === item.path ? "active" : ""
                    }`}
                    href={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="others d-flex align-items-center position-relative z-2">
              <Link href="/checkout" className="cart">
                <i className="material-symbols-outlined fs-24">shopping_cart</i>
                <span className="count">01</span>
              </Link>
              <Link
                href="/pricing"
                className="btn btn-outline-primary-div-50 fw-medium fs-16 text-primary-div-50 rounded-2 d-flex align-items-center"
                style={{
                  gap: "5px",
                }}
              >
                <i className="material-symbols-outlined fs-24">person</i>
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
