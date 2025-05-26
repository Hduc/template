"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Container from "react-bootstrap/Container";

const Partners = () => {
  // Array of partner data
  const partners = [
    { id: 1, image: "/images/partners/partner1.svg", alt: "Partner 1" },
    { id: 2, image: "/images/partners/partner2.svg", alt: "Partner 2" },
    { id: 3, image: "/images/partners/partner3.svg", alt: "Partner 3" },
    { id: 4, image: "/images/partners/partner4.svg", alt: "Partner 4" },
    { id: 5, image: "/images/partners/partner5.svg", alt: "Partner 5" },
    { id: 6, image: "/images/partners/partner6.svg", alt: "Partner 6" },
  ];

  return (
    <div className="partners-area">
      <Container className="cmw-1308">
        <span className="partners-title fs-20 fw-medium d-block text-center">
          Trezo is the platform behind some of the fastest-growing online
          brands.
        </span>

        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
          className="partners-slide align-items-center text-center"
        >
          {[...partners, ...partners].map((partner, index) => (
            <SwiperSlide key={`${partner.id}-${index}`}>
              <img
                src={partner.image}
                alt={partner.alt}
                className="partner-logo h-auto"
                loading="lazy"
                width={145}
                height={35}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Partners;
