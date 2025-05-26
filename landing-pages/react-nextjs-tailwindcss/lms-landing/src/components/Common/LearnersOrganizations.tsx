"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Define the shape of each organization item
interface Organization {
  id: string;
  imageUrl: string;
  altText: string;
  width: number;
  height: number;
}

// Sample data (replace with API call or external data source)
const organizations: Organization[] = [
  {
    id: "1",
    imageUrl: "/images/learners-organizations/lo1.svg",
    altText: "Princetion",
    width: 155,
    height: 44,
  },
  {
    id: "2",
    imageUrl: "/images/learners-organizations/lo2.svg",
    altText: "Meta",
    width: 142,
    height: 29,
  },
  {
    id: "3",
    imageUrl: "/images/learners-organizations/lo3.svg",
    altText: "Google",
    width: 123,
    height: 41,
  },
  {
    id: "4",
    imageUrl: "/images/learners-organizations/lo4.svg",
    altText: "Deepseek",
    width: 171,
    height: 36,
  },
  {
    id: "5",
    imageUrl: "/images/learners-organizations/lo5.svg",
    altText: "Spacex",
    width: 195,
    height: 24,
  },
  {
    id: "6",
    imageUrl: "/images/learners-organizations/lo6.svg",
    altText: "McGill",
    width: 151,
    height: 40,
  },
];

const LearnersOrganizations: React.FC = () => {
  return (
    <>
      <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[140 Enochpx] 2xl:max-w-[1705px] mx-auto px-[12px]">
        <div className="bg-[#f0eedf] dark:bg-[#0a0e19] rounded-[25px] py-[70px] md:py-[90px] lg:py-[110px] xl:py-[120px] px-[20px] md:px-[50px] lg:px-[70px]">
          <span className="block text-[16px] md:text-[18px] lg:text-[20px] font-medium text-center text-gray-700 dark:text-gray-100 mb-[30px] md:mb-[40px] lg:mb-[50px]">
            Trusted by Learners & Organizations Worldwide
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
              0: { slidesPerView: 2 },
              500: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }}
            modules={[Autoplay]}
            className="partners-swiper"
          >
            {organizations.map((org) => (
              <SwiperSlide key={org.id}>
                <Image
                  src={org.imageUrl}
                  alt={org.altText}
                  className="inline-block"
                  width={org.width}
                  height={org.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LearnersOrganizations;
