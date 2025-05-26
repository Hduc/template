"use client";

import React from "react";
import Image from "next/image";

// Testimonial data array - this could be fetched from an API in a real application
const testimonialsData = [
  {
    id: 1,
    content:
      "This platform changed my life! The Web Development course was incredibly comprehensive, and the support team was always there when I needed help. I landed a job just weeks after finishing!",
    rating: 5,
    name: "Maria Johnson",
    position: "Web Developer at TechVerse",
    image: "/images/users/user1.jpg",
    layout: "standard", // standard layout for the grid
  },
  {
    id: 2,
    content:
      "Loved every bit of the Graphic Design Masterclass! The instructor was amazing, and the course content was well-structured. I use what I learned every day at work.",
    rating: 4.5,
    name: "Jessica Lee",
    position: "Graphic Designer at CreativeHive",
    image: "/images/users/user2.jpg",
    layout: "standard",
  },
  {
    id: 3,
    content:
      "The Mindfulness course helped me not only in my personal life but also improved how I teach my clients. The guided sessions are pure gold. I use what I learned every day at work.",
    rating: 4,
    name: "Carlos Mendes",
    position: "Mental Wellness Coach",
    image: "/images/users/user3.jpg",
    layout: "standard",
  },
  {
    id: 4,
    content:
      "Enrolling in the Full-Stack Web Development course was one of the best decisions I've ever made. The platform's structure made learning easy and enjoyable — from interactive video lessons to real-time quizzes. What truly impressed me was the depth of content and how up-to-date it was with modern technologies.",
    rating: 5,
    name: "Elena Petrova",
    position: "HR Manager at SkillBridge Corp.",
    image: "/images/users/user4.jpg",
    layout: "wide", // wide layout for the bottom grid
  },
  {
    id: 5,
    content:
      "As someone looking to switch careers, I was hesitant at first. But the Data Science and Analytics course exceeded all my expectations. It took me from beginner-level Python to advanced data manipulation and visualization. The capstone project gave me something tangible to show in my portfolio.",
    rating: 5,
    name: "Lucas Moretti",
    position: "Entrepreneur & Startup Mentor",
    image: "/images/users/user5.jpg",
    layout: "wide",
  },
];

// Reusable Rating Stars component
const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  // Generate stars based on rating
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center text-orange-400 leading-none lg:text-md gap-[2px] mb-[15px] md:mb-[20px]">
      {[...Array(fullStars)].map((_, i) => (
        <i key={`full-${i}`} className="ri-star-fill"></i>
      ))}
      {hasHalfStar && <i className="ri-star-half-fill"></i>}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={`empty-${i}`} className="ri-star-line"></i>
      ))}
    </div>
  );
};

// Testimonial Card component
interface Testimonial {
  id: number;
  content: string;
  rating: number;
  name: string;
  position: string;
  image: string;
  layout: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="bg-[#f0eedf] dark:bg-[#0a0e19] relative z-[1] rounded-[25px] p-[20px] md:p-[30px] lg:p-[40px]">
      <RatingStars rating={testimonial.rating} />
      <p className="text-gray-700 dark:text-gray-200 md:text-[15px] lg:text-md font-medium !leading-[1.6]">
        {testimonial.content}
      </p>
      <div className="flex items-center mt-[20px] md:mt-[25px] gap-[15px]">
        <Image
          src={testimonial.image}
          className="rounded-full border-[3px] border-white w-[48px]"
          alt={`${testimonial.name} profile picture`}
          width={48}
          height={48}
        />
        <div>
          <h5 className="!text-md !mb-[5px] !font-semibold !text-gray-800 dark:!text-gray-100">
            {testimonial.name}
          </h5>
          <span className="block text-xs">{testimonial.position}</span>
        </div>
      </div>
      <div className="absolute bottom-[20px] md:bottom-[30px] lg:bottom-[40px] ltr:right-[20px] rtl:left-[20px] ltr:md:right-[30px] rtl:md:left-[30px] ltr:lg:right-[40px] rtl:lg:left-[40px] leading-none text-[50px] text-dark opacity-[.10]">
        <i className="ri-double-quotes-l"></i>
      </div>
    </div>
  );
};

interface TestimonialsProps {
  customData?: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ customData }) => {
  // Use provided data or default to the testimonialsData
  const displayData = customData || testimonialsData;

  // Separate testimonials by layout type
  const standardTestimonials = displayData.filter(
    (item) => item.layout === "standard"
  );
  const wideTestimonials = displayData.filter((item) => item.layout === "wide");

  return (
    <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
      <div className="text-center mx-auto md:max-w-[500px] mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px]">
        <div className="md:text-[15px] lg:text-md py-[4px] px-[17px] md:px-[18px] bg-[#ffef99] dark:bg-[#0a0e19] rounded-[100px] text-gray-900 dark:text-gray-200 inline-block">
          <div className="flex items-center gap-[8px] md:gap-[10px]">
            <Image src="/images/ico.svg" alt="ico" width={20} height={20} />
            Student Testimonials
          </div>
        </div>
        <h2 className="!text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl -tracking-[1px] mt-[15px] !mb-0 !text-gray-800 dark:!text-gray-100">
          What Our Learners Say
        </h2>
      </div>

      {/* Top grid - 3 columns on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
        {standardTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Bottom grid - 2 columns on medium and larger screens */}
      {wideTestimonials.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] mt-[25px]">
          {wideTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;
