"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the menu items as a dynamic array
const menuItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Blog", href: "/blog/" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  // Sticky navbar
  useEffect(() => {
    const elementId = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // Added empty dependency array to avoid repeated effect calls

  // Add active class to mobile menu
  const [isActiveMobileMenu, setActiveMobileMenu] = useState<boolean>(true);

  const handleToggleMobileMenu = (): void => {
    setActiveMobileMenu(!isActiveMobileMenu);
  };

  return (
    <>
      <div
        className="marketing-navbar fixed top-0 right-0 left-0 transition-all h-auto z-[5] py-[20px] md:py-[30px]"
        id="navbar"
      >
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="navbar relative bg-white dark:bg-[#0a0e19] rounded-[100px] py-[10px] md:py-[12px] lg:py-[8px] px-[15px] md:px-[20px] lg:px-[15px] transition-all">
            <div className="flex items-center flex-wrap lg:flex-nowrap justify-between lg:justify-start">
              <Link
                href="/"
                className="inline-block w-[125px] ltr:mr-[15px] rtl:ml-[15px]"
              >
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  className="inline-block dark:hidden"
                  width={109}
                  height={29}
                />
                <Image
                  src="/images/white-logo.svg"
                  alt="logo"
                  className="hidden dark:inline-block"
                  width={109}
                  height={29}
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
                <ul className="flex mx-auto flex-row gap-[30px] xl:gap-[45px]">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`font-medium transition-all hover:text-orange-600 ${
                          pathname === item.href
                            ? "text-orange-600"
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
                    href="#"
                    className="inline-block text-orange-600 transition-all hover:text-orange-700"
                  >
                    Login
                  </Link>
                  <Link
                    href="#"
                    className="inline-block text-orange-600 py-[10.5px] px-[28px] rounded-[100px] transition-all font-medium border border-orange-600 hover:text-white hover:bg-orange-500 hover:border-orange-500"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* For Responsive */}
              <div
                className={`bg-white dark:bg-[#0a0e19] rounded-[15px] p-[20px] md:p-[30px] w-full hidden lg:!hidden absolute top-[100%] left-0 right-0 ${
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
                        className={`font-medium transition-all hover:text-orange-600 ${
                          pathname === item.href
                            ? "text-orange-600"
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
                    href="#"
                    className="inline-block text-orange-600 py-[10.5px] px-[28px] rounded-[100px] transition-all font-medium border border-orange-600 hover:text-white hover:bg-orange-500 hover:border-orange-500"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-block text-orange-600 transition-all hover:text-orange-700"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
