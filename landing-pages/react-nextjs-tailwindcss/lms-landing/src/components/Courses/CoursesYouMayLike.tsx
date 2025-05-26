"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Course data array - this could be fetched from an API in a real application
const coursesData = [
  {
    id: 1,
    title: "Data Science with Python",
    image: "/images/courses/course2.jpg",
    rating: 4.7,
    ratingCount: 980,
    price: 69,
    lessons: 38,
    enrolled: "6,300+",
    slug: "/courses/details",
  },
  {
    id: 2,
    title: "Graphic Design Masterclass",
    image: "/images/courses/course3.jpg",
    rating: 4.9,
    ratingCount: 10200,
    price: 99,
    lessons: 52,
    enrolled: "10,200+",
    slug: "/courses/details",
  },
  {
    id: 3,
    title: "Mindfulness & Stress Management",
    image: "/images/courses/course4.jpg",
    rating: 4.0,
    ratingCount: 750,
    price: 79,
    lessons: 20,
    enrolled: "4,000+",
    slug: "/courses/details",
  },
];

// Reusable Rating Stars component
const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  // Generate stars based on rating
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center text-orange-400 leading-none lg:text-md gap-[2px] relative -top-px">
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

// Course Card component
interface Course {
  id: number;
  title: string;
  image: string;
  rating: number;
  ratingCount: number;
  price: number;
  lessons: number;
  enrolled: string;
  slug: string;
}

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="bg-white dark:bg-[#0a0e19] border border-gray-200 dark:border-[#202c4b] rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] 2xl:p-[35px]">
      <Link href={`${course.slug}`} className="d-block rounded-[10px]">
        <Image
          src={course.image}
          alt={`${course.title} course thumbnail`}
          className="rounded-[10px] inline-block w-full"
          width={684}
          height={440}
        />
      </Link>

      <h3 className="!text-[18px] md:!text-[19px] lg:!text-[20px] !font-semibold mt-[18px] md:mt-[22px] lg:mt-[28px] !mb-[15px]">
        <Link
          href={`${course.slug}`}
          className="text-gray-800 dark:text-gray-100 transition-all hover:text-primary-500"
        >
          {course.title}
        </Link>
      </h3>

      <div className="flex items-center gap-[8px]">
        <RatingStars rating={course.rating} />
        <span className="block lg:text-md leading-none">
          {course.rating.toFixed(1)} ({course.ratingCount.toLocaleString()}{" "}
          ratings)
        </span>
      </div>

      <div className="mt-[20px] lg:mt-[25px] text-primary-600 leading-none text-md md:text-[20px] font-semibold">
        ${course.price}
      </div>

      <ul className="flex items-center gap-[15px] lg:gap-[20px] 2xl:gap-[25px] md:text-[15px] xl:text-md mt-[15px] md:mt-[20px] lg:mt-[22px]">
        <li className="relative inline-block ltr:pl-[25px] rtl:pr-[25px] ltr:lg:pl-[32px] rtl:lg:pr-[32px] text-gray-700 dark:text-gray-200">
          <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 !text-lg lg:!text-xl">
            book_ribbon
          </i>
          {course.lessons} Lessons
        </li>
        <li className="relative inline-block">
          <div className="w-[1px] h-[19px] bg-gray-200 dark:bg-[#202c4b]"></div>
        </li>
        <li className="relative inline-block ltr:pl-[25px] rtl:pr-[25px] ltr:lg:pl-[32px] rtl:lg:pr-[32px] text-gray-700 dark:text-gray-200">
          <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 !text-lg lg:!text-xl">
            group
          </i>
          {course.enrolled} Enrolled
        </li>
      </ul>
    </div>
  );
};

interface PopularCoursesProps {
  customData?: Course[];
}

const CoursesYouMayLike: React.FC<PopularCoursesProps> = ({ customData }) => {
  // Use provided data or default to the coursesData
  const displayData = customData || coursesData;

  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[140px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="mb-[30px] md:mb-[40px] lg:mb-[50px]">
            <h2 className="!text-xl md:!text-3xl !font-semibold -tracking-[1px] mt-[15px] !mb-0 !text-gray-800 dark:!text-gray-100">
              Courses You May Like
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {displayData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesYouMayLike;
