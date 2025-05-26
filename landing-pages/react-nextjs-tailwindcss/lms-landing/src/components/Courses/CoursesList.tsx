"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Sample course data with categories
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
    category: "Technology & Coding",
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
    category: "Creative Arts & Design",
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
    category: "Health & Wellness",
  },
  {
    id: 4,
    title: "Digital Marketing Fundamentals",
    image: "/images/courses/course2.jpg",
    rating: 4.5,
    ratingCount: 1250,
    price: 89,
    lessons: 45,
    enrolled: "7,500+",
    category: "Business & Management",
  },
  {
    id: 5,
    title: "Web Development Bootcamp",
    image: "/images/courses/course3.jpg",
    rating: 4.8,
    ratingCount: 8500,
    price: 129,
    lessons: 60,
    enrolled: "12,000+",
    category: "Technology & Coding",
  },
  {
    id: 6,
    title: "Personal Finance Mastery",
    image: "/images/courses/course4.jpg",
    rating: 4.6,
    ratingCount: 3200,
    price: 59,
    lessons: 28,
    enrolled: "5,800+",
    category: "Personal Development",
  },
];

// List of all categories
const categories = [
  "All Categories",
  "Business & Management",
  "Technology & Coding",
  "Creative Arts & Design",
  "Personal Development",
  "Health & Wellness",
];

const CoursesList = () => {
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filter courses based on selected category
  const filteredCourses =
    selectedCategory === "All Categories"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  // Handle category button click
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Render star ratings
  const renderStarRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="ri-star-fill"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half-star" className="ri-star-half-fill"></i>);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="ri-star-line"></i>);
    }

    return stars;
  };

  return (
    <>
      <div className="bg-[#f6f5f3] dark:bg-[#0e1321] py-[70px] md:py-[90px] lg:py-[110px] xl:py-[120px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="mb-[20px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px]">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`text-[15px] font-medium rounded-[100px] inline-block py-[8px] md:py-[10px] px-[20px] md:px-[25px] ltr:mr-[10px] rtl:ml-[10px] ltr:last:mr-0 rtl:last:ml-0 mb-[10px] transition-all ${
                  selectedCategory === category
                    ? "bg-primary-500 text-white"
                    : "text-gray-700 dark:text-gray-100 bg-white dark:bg-[#0a0e19] hover:bg-primary-500 hover:text-white"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-[#0a0e19] rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] 2xl:p-[35px]"
              >
                <Link href="/courses/details" className="block rounded-[10px]">
                  <Image
                    src={course.image}
                    alt={`${course.title} image`}
                    className="rounded-[10px] inline-block w-full"
                    width={684}
                    height={440}
                  />
                </Link>
                
                <h3 className="!text-[18px] md:!text-[19px] lg:!text-[20px] !font-semibold mt-[18px] md:mt-[22px] lg:mt-[28px] !mb-[15px]">
                  <Link
                    href="/courses/details"
                    className="text-gray-800 dark:text-gray-100 transition-all hover:text-primary-500"
                  >
                    {course.title}
                  </Link>
                </h3>

                <div className="flex items-center gap-[8px]">
                  <div className="flex items-center text-orange-400 leading-none lg:text-md gap-[2px] relative -top-px">
                    {renderStarRating(course.rating)}
                  </div>
                  <span className="block lg:text-md leading-none">
                    {course.rating} ({course.ratingCount.toLocaleString()}{" "}
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
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-700 dark:text-gray-200">
                No courses found for this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CoursesList;
