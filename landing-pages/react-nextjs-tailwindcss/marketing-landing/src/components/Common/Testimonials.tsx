"use client";

import React, { useState } from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Define the testimonial data dynamically
  const testimonials = [
    {
      quote:
        "Trezo changed the way we manage campaigns. Everything’s faster, & way more collaborative. ROI improved within weeks.",
      userImage: "/images/users/user5.jpg",
      userName: "Rachel Nguyen",
      userTitle: "Growth Marketing Lead, BrightDash",
      hasVideo: false,
    },
    {
      quote:
        "I’ve used dozens of marketing tools — Trezo is the only one that actually simplifies my workflow instead of complicating it.",
      userImage: "/images/users/user6.jpg",
      userName: "Michael Brooks",
      userTitle: "Senior Digital Strategist, Amply Media",
      hasVideo: false,
    },
    {
      quote:
        "The real-time dashboard and funnel visualization features are a game-changer. My team finally has the clarity we needed.",
      userImage: "/images/users/user7.jpg",
      userName: "Lila Fernandez",
      userTitle: "Head of Marketing, Corelytics",
      hasVideo: false,
    },
    {
      quote:
        "Trezo’s impact on our marketing operations has been incredible. It’s now at the center of everything we do.",
      userImage: "/images/users/user5.jpg",
      userName: "Olivia Smith",
      userTitle: "Performance Marketing Lead, BrightDash",
      hasVideo: true,
    },
  ];

  // Define gradient backgrounds
  const gradients = [
    "linear-gradient(180deg, #FFF 0%, #EEF6FF 100%)", // For first regular testimonial
    "linear-gradient(180deg, #FFF 0%, #FAF5FF 100%)", // For second regular testimonial
    "linear-gradient(180deg, #FFF 0%, #EEFFE5 100%)", // For third regular testimonial
    "linear-gradient(180deg, #FFF 0%, #FFE4E4 100%)", // For featured testimonial with video
  ];

  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px] relative z-[1]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px] 2xl:mb-[70px]">
            <span className="inline-block py-[4.5px] px-[15px] rounded-[100px] bg-orange-100 dark:bg-[#0a0e19] text-orange-700 mb-[12px]">
              Testimonials
            </span>
            <h2 className="!text-gray-900 dark:!text-white md:-tracking-[1px] !font-medium !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl xl:max-w-[520px] mx-auto !leading-[1.2] !mb-[10px] lg:!mb-[12px]">
              What Marketers Say About Trezo
            </h2>
            <p className="md:text-[15px] lg:text-md !leading-[1.6]">
              From campaign tracking to performance insights — we’ve got you
              covered.
            </p>
          </div>

          {/* Regular Testimonials in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[25px]">
            {testimonials
              .filter((t) => !t.hasVideo)
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="px-[20px] py-[30px] md:px-[30px] md:py-[40px] lg:px-[40px] lg:py-[50px] xl:px-[50px] xl:py-[60px] bg-white dark:bg-[#0a0e19] rounded-[15px] relative z-[1]"
                >
                  <div className="flex items-center text-orange-400 leading-none text-md lg:text-lg gap-[3px] mb-[18px] md:mb-[22px] lg:mb-[30px]">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill"></i>
                    ))}
                  </div>
                  <p className="font-medium text-gray-900 dark:text-gray-100 text-[15px] md:text-md lg:text-[17px] xl:text-lg !leading-[1.6]">
                    <q>{testimonial.quote}</q>
                  </p>
                  <div className="flex items-center gap-[12px] mt-[18px] md:mt-[25px] lg:mt-[40px] xl:mt-[50px]">
                    <Image
                      src={testimonial.userImage}
                      className="rounded-full w-[42px]"
                      alt="user-image"
                      width={42}
                      height={42}
                    />
                    <div>
                      <h5 className="!text-base !mb-[3px] !font-semibold !text-gray-800 dark:!text-gray-100">
                        {testimonial.userName}
                      </h5>
                      <span className="block">{testimonial.userTitle}</span>
                    </div>
                  </div>
                  <div
                    className="rounded-[15px] absolute top-0 left-0 right-0 bottom-0 -z-[1] dark:hidden"
                    style={{
                      background: gradients[index],
                    }}
                  ></div>
                </div>
              ))}
          </div>

          {/* Featured Testimonial with Video */}
          {testimonials
            .filter((t) => t.hasVideo)
            .map((testimonial, index) => (
              <div key={index} className="mx-auto max-w-[848px]">
                <div className="px-[20px] py-[30px] md:px-[30px] md:py-[40px] lg:px-[40px] lg:py-[50px] xl:px-[50px] xl:py-[60px] bg-white dark:bg-[#0a0e19] rounded-[15px] relative z-[1]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[25px]">
                    <div>
                      <div className="flex items-center text-orange-400 leading-none text-md lg:text-lg gap-[3px] mb-[18px] md:mb-[22px] lg:mb-[30px]">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="ri-star-fill"></i>
                        ))}
                      </div>
                      <p className="font-medium text-gray-900 dark:text-gray-100 text-[15px] md:text-md lg:text-[17px] xl:text-lg !leading-[1.6]">
                        <q>{testimonial.quote}</q>
                      </p>
                      <div className="flex items-center gap-[12px] mt-[18px] md:mt-[25px] lg:mt-[40px] xl:mt-[50px]">
                        <Image
                          src={testimonial.userImage}
                          className="rounded-full w-[42px]"
                          alt="user-image"
                          width={42}
                          height={42}
                        />
                        <div>
                          <h5 className="!text-base !mb-[3px] !font-semibold !text-gray-800 dark:!text-gray-100">
                            {testimonial.userName}
                          </h5>
                          <span className="block">{testimonial.userTitle}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/man.jpg"
                        className="inline-block rounded-[15px]"
                        alt="man"
                        width={726}
                        height={566}
                      />
                      <button
                        type="button"
                        onClick={toggleModal}
                        className="flex items-center justify-center w-[55px] h-[55px] bg-orange-300 rounded-full absolute left-0 right-0 top-1/2 -translate-y-1/2 mx-auto text-[35px] text-black transition-all hover:bg-orange-400"
                      >
                        <i className="ri-play-fill"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    className="rounded-[15px] absolute top-0 left-0 right-0 bottom-0 -z-[1] dark:hidden"
                    style={{
                      background: gradients[3], // Specific gradient for video testimonial
                    }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center -z-1 dark:hidden"
          style={{
            backgroundImage: "url(/images/gradient-bg2.jpg)",
          }}
        ></div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed p-3 inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-3xl p-4 bg-white rounded-lg dark:bg-[#0a0e19]">
            <button
              onClick={toggleModal}
              className="absolute -top-2 -right-2 bg-[#000] p-1 rounded-full text-red-500 hover:text-red-400"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" /* 16:9 Aspect Ratio */ }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/_ZppXdKk4c8?si=9IpWzVHI_uDyzL4n"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
