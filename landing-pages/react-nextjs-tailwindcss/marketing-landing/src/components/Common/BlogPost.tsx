"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

const BlogPost: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Data-Driven Marketing",
      excerpt:
        "Discover why real-time data is the new creative and how teams are shifting to smarter, measurable campaigns.",
      imageUrl: "/images/blogs/blog1.jpg",
      slug: "/blog/details",
    },
    {
      id: 2,
      title: "7 Marketing Funnels That Actually Convert",
      excerpt:
        "Explore the funnel setups successful brands are using — and how you can apply them to your campaigns.",
      imageUrl: "/images/blogs/blog2.jpg",
      slug: "/blog/details",
    },
    {
      id: 3,
      title: "Why Your Team Needs a Unified Marketing Tool",
      excerpt:
        "Learn how consolidating your marketing stack improves performance, saves time, and boosts ROI.",
      imageUrl: "/images/blogs/blog3.jpg",
      slug: "/blog/details",
    },
  ];

  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px] 2xl:mb-[70px]">
            <span className="inline-block py-[4.5px] px-[15px] rounded-[100px] bg-orange-100 dark:bg-[#0a0e19] text-orange-700 mb-[12px]">
              Blog
            </span>
            <h2 className="!text-gray-900 dark:!text-white md:-tracking-[1px] !font-medium !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl xl:max-w-[630px] !leading-[1.2] !mb-[10px] lg:!mb-[12px]">
              Insights, Strategies, and Stories to Help You Market Smarter.
            </h2>
            <p className="md:text-[15px] lg:text-md !leading-[1.6] xl:max-w-[615px]">
              Stay ahead of the curve with expert tips, industry trends, and
              product updates from the Trezo team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {blogPosts.map((post) => (
              <div key={post.id}>
                <Link
                  href={post.slug}
                  className="block rounded-[25px] mb-[20px] md:mb-[25px]"
                >
                  <Image
                    src={post.imageUrl}
                    className="rounded-[25px] inline-block"
                    alt="blog-image"
                    width={824}
                    height={550}
                  />
                </Link>
                <div className="lg:px-[15px] xl:px-[25px]">
                  <h3 className="!font-medium !text-lg md:!text-[20px] lg:!text-xl text-gray-700 dark:text-gray-100 !mb-[12px] md:!mb-[15px] lg:!mb-[20px] !leading-[1.2]">
                    <Link
                      href={post.slug}
                      className="text-gray-700 dark:text-gray-100 hover:text-orange-600 transition-all"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="!leading-[1.6]">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
