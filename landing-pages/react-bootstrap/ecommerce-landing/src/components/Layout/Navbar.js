import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Navigation data defined outside the component
const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Use Cases", path: "/use-cases" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blogs" },
];

const Navbar = () => {
  const location = useLocation(); // Use `useLocation` to get the current path
  const pathname = location.pathname;
  const isHomePage = pathname === "/";

  const [isToggleNavbar, setToggleNavbar] = useState(true);
  const handleToggleNavbar = () => {
    setToggleNavbar(!isToggleNavbar);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]); // Trigger when pathname changes

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
  }, []);

  return (
    <>
      <nav className={navbarClass} id="navbar">
        <div className="container cmw-1308">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.svg" alt="logo" width={109} height={29} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
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
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="othres">
              <Link
                to="/pricing"
                className="btn bg-white fw-medium fs-14 text-primary rounded-pill hover-bg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
