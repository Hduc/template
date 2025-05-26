"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";

// Navigation data defined outside the component
const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features/" },
  { name: "Use Cases", path: "/use-cases/" },
  { name: "Testimonials", path: "/testimonials/" },
  { name: "Pricing", path: "/pricing/" },
  { name: "Blog", path: "/blogs/" },
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
    ? "navbar navbar-expand-lg bg-transparent fixed-top navbar-for-landing-page py-40"
    : "navbar navbar-expand-lg bg-primary navbar-for-landing-page py-40 position-sticky top-0";

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
        <Container className="cmw-1308">
          <Link className="navbar-brand" href="/">
            <Image src="/images/logo.svg" alt="logo" width={109} height={29} />
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
                    className={`nav-link fs-14 fw-medium text-body-bg hover p-0 ${
                      pathname === item.path ? "active" : ""
                    }`}
                    href={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="othres">
              <Link
                href="/pricing/"
                className="btn bg-white fw-medium fs-14 text-primary rounded-pill hover-bg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
