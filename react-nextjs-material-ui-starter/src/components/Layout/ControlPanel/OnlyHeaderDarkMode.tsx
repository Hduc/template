"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const OnlyHeaderDarkMode: React.FC = () => {
  const { lang } = useParams();

  // Light/Dark Mode for Header
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("top-navbar-dark-theme");
    if (storedPreference === "top-navbar-dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem(
      "top-navbar-dark-theme",
      isDarkMode ? "top-navbar-dark" : "light"
    );

    // Update the class on the .top-navbar-dark element to apply the selected mode
    const htmlElement = document.querySelector(".top-navbar-dark");
    if (htmlElement) {
      if (isDarkMode) {
        htmlElement.classList.add("dark-theme");
      } else {
        htmlElement.classList.remove("dark-theme");
      }
    }
  }, [isDarkMode]);

  return (
    <>
      <span className="title">
        {lang === "en" ? "Header" : lang === "fr" ? "En-tête" : "رأس الصفحة"}
      </span>
      <button
        className={`switch-btn header-btn bg-transparent border-none p-0 ${
          isDarkMode ? "active" : ""
        }`}
        onClick={handleToggle}
      >
        <div className="first">
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="sub-title">
            <div className="dot-checkbox"></div>
            <span style={{ display: "block", fontWeight: "600" }}>
              {lang === "en" ? "Light" : lang === "fr" ? "Lumière" : "ضوء"}
            </span>
          </div>
        </div>

        <div className="second">
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="sub-title">
            <div className="dot-checkbox"></div>
            <span style={{ display: "block", fontWeight: "600" }}>
              {lang === "en" ? "Dark" : lang === "fr" ? "Sombre" : "مظلم"}
            </span>
          </div>
        </div>
      </button>
    </>
  );
};

export default OnlyHeaderDarkMode;
