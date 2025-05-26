"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Container from 'react-bootstrap/Container';

const Partners = () => {
  // Partner logo data (can be fetched from an API or CMS)
  const partnerLogos = [
    { id: 1, src: "/images/learners-organizations/lo1.svg", alt: "Partner 1" },
    { id: 2, src: "/images/learners-organizations/lo2.svg", alt: "Partner 2" },
    { id: 3, src: "/images/learners-organizations/lo3.svg", alt: "Partner 3" },
    { id: 4, src: "/images/learners-organizations/lo4.svg", alt: "Partner 4" },
    { id: 5, src: "/images/learners-organizations/lo5.svg", alt: "Partner 5" },
    { id: 6, src: "/images/learners-organizations/lo6.svg", alt: "Partner 6" },
    { id: 7, src: "/images/learners-organizations/lo1.svg", alt: "Partner 7" },
    { id: 8, src: "/images/learners-organizations/lo2.svg", alt: "Partner 8" },
  ];

  return (
    <>
      <div className="trusted-lms-area bg-fffef8">
        <Container className="cmw-1704">
          <div className="trusted-lms-wrap">
            <span className="title">
              Trusted by Learners & Organizations Worldwide
            </span>

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 2 },
                400: { slidesPerView: 3 },
                576: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                992: { slidesPerView: 5 },
                1200: { slidesPerView: 6 },
              }}
              modules={[Autoplay]}
              className="partners-slide"
              loop={true} // Enable infinite loop
            >
              {partnerLogos.map((logo) => (
                <SwiperSlide key={logo.id}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-auto h-auto"
                    width={120}
                    height={60}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Partners;
