"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type Customer = {
  id: number;
  image: string;
  alt: string;
};

type Partner = {
  id: number;
  logo: string;
  alt: string;
};

const Partners: React.FC = () => {
  // Customers data
  const customers: Customer[] = [
    { id: 1, image: "/images/users/user1.jpg", alt: "Customer 1" },
    { id: 2, image: "/images/users/user2.jpg", alt: "Customer 2" },
    { id: 3, image: "/images/users/user4.jpg", alt: "Customer 3" },
    { id: 4, image: "/images/users/user3.jpg", alt: "Customer 4" },
  ];

  // Partners data
  const partners: Partner[] = [
    { id: 1, logo: "/images/partners/partner1.svg", alt: "Partner 1" },
    { id: 2, logo: "/images/partners/partner2.svg", alt: "Partner 2" },
    { id: 3, logo: "/images/partners/partner3.svg", alt: "Partner 3" },
    { id: 4, logo: "/images/partners/partner4.svg", alt: "Partner 4" },
    { id: 5, logo: "/images/partners/partner5.svg", alt: "Partner 5" },
    { id: 6, logo: "/images/partners/partner5.svg", alt: "Partner 6" }, // Duplicate for demo
  ];

  return (
    <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[25px]">
        {/* Trusted Customers Card */}
        <div className="lg:col-span-1">
          <div className="relative z-[1] text-center rounded-[15px] bg-white dark:bg-[#0a0e19] px-[20px] xl:px-[25px] py-[35px] md:py-[55px] lg:py-[85px]">
            <div className="flex items-center justify-center">
              {customers.map((customer) => (
                <Image
                  key={customer.id}
                  src={customer.image}
                  className="rounded-full w-[46px] border-[3px] border-white dark:border-gray-800 -mx-[7px]"
                  alt={customer.alt}
                  width={46}
                  height={46}
                />
              ))}
            </div>
            <span className="block mt-[12px] md:mt-[15px] font-medium text-gray-700 dark:text-gray-100">
              50k+ Trusted Customers
            </span>
            <div
              className="absolute top-0 left-0 right-0 bottom-0 -z-[1] rounded-[15px] dark:hidden"
              style={{
                background: "linear-gradient(0deg, #FFF8F1 0%, #F7F9FF 100%)",
              }}
            ></div>
          </div>
        </div>

        {/* Partners Card with Swiper */}
        <div className="lg:col-span-3">
          <div className="relative z-[1] text-center rounded-[15px] bg-white dark:bg-[#0a0e19] px-[20px] md:px-[30px] lg:px-[40px] xl:px-[50px] py-[35px] md:py-[55px] lg:py-[85.5px]">
            <span className="block font-medium text-gray-700 dark:text-gray-100 md:text-[15px] lg:text-md mb-[20px] md:mb-[25px] lg:mb-[30px]">
              From Startups to Industry Leaders — Everyone&apos;s Growing with Trezo
            </span>

            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                500: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay]}
              className="partners-swiper"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id} className="text-center">
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src={partner.logo}
                      className="inline-block w-auto h-auto"
                      alt={partner.alt}
                      width={120}
                      height={50}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              className="absolute top-0 left-0 right-0 bottom-0 -z-[1] rounded-[15px] dark:hidden"
              style={{
                background: "linear-gradient(0deg, #FFF8F1 0%, #F7F9FF 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
