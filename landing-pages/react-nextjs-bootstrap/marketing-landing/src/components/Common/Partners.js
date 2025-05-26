"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Partners = () => {
  // Dynamic data for customer avatars
  const customers = [
    { id: 1, image: "/images/users/user1.jpg", alt: "Customer 1" },
    { id: 2, image: "/images/users/user2.jpg", alt: "Customer 2" },
    { id: 3, image: "/images/users/user3.jpg", alt: "Customer 3" },
    { id: 4, image: "/images/users/user4.jpg", alt: "Customer 4" },
  ];

  // Dynamic data for partners logos
  const partners = [
    { id: 1, logo: "/images/partners/partner1.svg", alt: "Partner 1" },
    { id: 2, logo: "/images/partners/partner2.svg", alt: "Partner 2" },
    { id: 3, logo: "/images/partners/partner3.svg", alt: "Partner 3" },
    { id: 4, logo: "/images/partners/partner4.svg", alt: "Partner 4" },
    { id: 5, logo: "/images/partners/partner5.svg", alt: "Partner 5" },
  ];

  // Swiper configuration
  const swiperConfig = {
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnHover: true,
    },
    breakpoints: {
      0: { slidesPerView: 2 },
      400: { slidesPerView: 2 },
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  };

  return (
    <>
      <div className="customers-growing-area">
        <Container className="cmw-1308">
          <Row className="g-4">
            <Col lg={3}>
              <div className="customers-info">
                <ul className="p-0 list-unstyled d-flex justify-content-center">
                  {customers.map((customer) => (
                    <li key={customer.id}>
                      <Image
                        src={customer.image}
                        alt={customer.alt}
                        width={40}
                        height={40}
                        className="rounded-circle"
                      />
                    </li>
                  ))}
                </ul>
                <span className="fs-14 fw-medium">50k+ Trusted Customers</span>
              </div>
            </Col>

            <Col lg={9}>
              <div className="growing-info text-center">
                <span className="fw-medium fs-16">
                  From Startups to Industry Leaders — Everyone&apos;s Growing with
                  Trezo
                </span>

                <Swiper
                  {...swiperConfig}
                  modules={[Autoplay]}
                  className="partners-slide2 z-0"
                >
                  {[...partners, ...partners].map((partner, index) => (
                    <SwiperSlide key={`${partner.id}-${index}`}>
                      <Image
                        src={partner.logo}
                        alt={partner.alt}
                        width={120}
                        height={50}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Partners;
