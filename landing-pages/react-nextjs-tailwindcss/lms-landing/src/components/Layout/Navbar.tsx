"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the menu items as a dynamic array
const menuItems = [
  { label: "Home", href: "/" },
  { label: "Why Choose Us", href: "/why-choose-us/" },
  { label: "Courses", href: "/courses/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Pricing", href: "/pricing/" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  // Sticky Menu
  const [isSticky, setIsSticky] = useState(false);

  // Sticky Menu Logic
  useEffect(() => {
    const handleScroll = () => {
      const shouldBeSticky = window.scrollY > 100;
      setIsSticky(shouldBeSticky);
    };

    // Check scroll position on mount
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add active class to mobile menu
  const [isActiveMobileMenu, setActiveMobileMenu] = useState<boolean>(true);

  const handleToggleMobileMenu = (): void => {
    setActiveMobileMenu(!isActiveMobileMenu);
  };

  return (
    <>
      <div
        className={`lms-navbar fixed top-0 right-0 left-0 transition-all h-auto z-[5] py-[20px] md:py-[30px] ${
          isSticky ? "is-sticky" : ""
        }`}
        id="navbar"
      >
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1400px] 2xl:max-w-[1705px] mx-auto px-[12px]">
          <div className="flex items-center relative flex-wrap lg:flex-nowrap justify-between lg:justify-start">
            <Link
              href="/"
              className="inline-block w-[150px] ltr:mr-[15px] rtl:ml-[15px]"
            >
              <Image
                src="/images/logo.svg"
                alt="logo"
                className="inline-block dark:hidden"
                width={132}
                height={34}
              />
              <Image
                src="/images/white-logo.svg"
                alt="logo"
                className="hidden dark:inline-block"
                width={132}
                height={34}
              />
            </Link>

            <button
              type="button"
              className="inline-block relative leading-none lg:hidden"
              onClick={handleToggleMobileMenu}
            >
              <span className="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white"></span>
              <span className="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white"></span>
              <span className="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white"></span>
            </button>

            {/* For Big Devices */}
            <div className="hidden lg:flex items-center grow basis-full">
              <ul className="flex mx-auto flex-row gap-[30px] xl:gap-[50px]">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`font-medium transition-all hover:text-primary-600 text-[15px] xl:text-md ${
                        pathname === item.href
                          ? "text-primary-600"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-[25px] xl:gap-[30px]">
                <Link
                  href="/checkout"
                  className="inline-block relative text-gray-700 dark:text-gray-100 transition-all hover:text-primary-500 ltr:pr-[6px] rtl:pl-[6px]"
                >
                  <i className="material-symbols-outlined">shopping_cart</i>
                  <span className="flex items-center justify-center absolute top-0 ltr:right-0 rtl:left-0 font-semibold bg-danger-500 rounded-full text-[8px] text-white w-[14px] h-[14px]">
                    01
                  </span>
                </Link>

                <Link
                  href="#"
                  className="inline-block text-purple-600 lg:text-[15px] xl:text-[16px] py-[11px] px-[17px] rounded-md transition-all font-medium border border-purple-600 hover:text-white hover:bg-purple-500 hover:border-purple-500"
                >
                  <span className="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]">
                    <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]">
                      person
                    </i>
                    Get Started
                  </span>
                </Link>
              </div>
            </div>

            {/* For Responsive */}
            <div
              className={`bg-white dark:bg-[#0a0e19] rounded-[15px] border border-gray-200 dark:border-[#202c4b] mt-[20px] p-[20px] md:p-[30px] w-full hidden lg:!hidden ${
                isActiveMobileMenu ? "" : "active"
              }`}
              id="navbar-collapse"
            >
              <ul>
                {menuItems.map((item) => (
                  <li
                    key={item.href}
                    className="my-[14px] md:my-[16px] first:mt-0 last:mb-0"
                  >
                    <Link
                      href={item.href}
                      className={`font-medium transition-all hover:text-primary-600 text-[15px] xl:text-md ${
                        pathname === item.href
                          ? "text-primary-600"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-[20px] mt-[15px]">
                <Link
                  href="/checkout"
                  className="inline-block relative text-gray-700 dark:text-gray-100 transition-all hover:text-primary-500 ltr:pr-[6px] rtl:pl-[6px]"
                >
                  <i className="material-symbols-outlined">shopping_cart</i>
                  <span className="flex items-center justify-center absolute top-0 ltr:right-0 rtl:left-0 font-semibold bg-danger-500 rounded-full text-[8px] text-white w-[14px] h-[14px]">
                    01
                  </span>
                </Link>

                <Link
                  href="#"
                  className="inline-block text-purple-600 lg:text-[15px] xl:text-[16px] py-[11px] px-[17px] rounded-md transition-all font-medium border border-purple-600 hover:text-white hover:bg-purple-500 hover:border-purple-500"
                >
                  <span className="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]">
                    <i className="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]">
                      person
                    </i>
                    Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
