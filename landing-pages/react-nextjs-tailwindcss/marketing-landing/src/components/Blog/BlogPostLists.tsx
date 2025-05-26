"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the type for a blog post
interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

// Sample dynamic data (replace with API call or CMS data)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Data-Driven Marketing",
    description:
      "Discover why real-time data is the new creative and how teams are shifting to smarter, measurable campaigns.",
    image: "/images/blogs/blog1.jpg",
    slug: "/blog/details",
  },
  {
    id: "2",
    title: "7 Marketing Funnels That Actually Convert",
    description:
      "Explore the funnel setups successful brands are using — and how you can apply them to your campaigns.",
    image: "/images/blogs/blog2.jpg",
    slug: "/blog/details",
  },
  {
    id: "3",
    title: "Why Your Team Needs a Unified Marketing Tool",
    description:
      "Learn how consolidating your marketing stack improves performance, saves time, and boosts ROI.",
    image: "/images/blogs/blog3.jpg",
    slug: "/blog/details",
  },
  {
    id: "4",
    title: "Automation in 2025: What's Next?",
    description:
      "See how AI and automation are reshaping campaign execution and helping marketers scale like never before.",
    image: "/images/blogs/blog4.jpg",
    slug: "/blog/details",
  },
  {
    id: "5",
    title: "Email Marketing Still Works—Here’s Proof",
    description:
      "Find out why email remains one of the highest ROI channels and how to make your emails actually get read.",
    image: "/images/blogs/blog5.jpg",
    slug: "/blog/details",
  },
  {
    id: "6",
    title: "How to Build Trust with Transparency",
    description:
      "Transparency in messaging builds long-term customer trust. Here’s how to apply it across your campaigns.",
    image: "/images/blogs/blog6.jpg",
    slug: "/blog/details",
  },
  {
    id: "7",
    title: "The Psychology Behind Color in Marketing",
    description:
      "Discover how color choices affect buyer behavior and how to design with intention.",
    image: "/images/blogs/blog7.jpg",
    slug: "/blog/details",
  },
  {
    id: "8",
    title: "Top 5 KPIs Every CMO Should Track",
    description:
      "Cut through vanity metrics. These are the performance indicators that actually matter to your bottom line.",
    image: "/images/blogs/blog8.jpg",
    slug: "/blog/details",
  },
  {
    id: "9",
    title: "From Click to Conversion: A UX Blueprint",
    description:
      "Craft seamless digital journeys that guide users from first impression to final action effortlessly.",
    image: "/images/blogs/blog9.jpg",
    slug: "/blog/details",
  },
];

const BlogPostLists: React.FC = () => {
  return (
    <>
      <div className="pt-[145px] md:pt-[175px] lg:pt-[190px] xl:pt-[175px] pb-[70px] md:pb-[90px] lg:pb-[110px] xl:pb-[140px] relative z-[1] overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-no-repeat bg-top -z-[1] dark:hidden"
          style={{
            background: "linear-gradient(180deg, #FFEFE1 0%, #FFF 100%)",
          }}
        ></div>
        <div className="absolute top-[70px] md:top-[84px] lg:top-[91px] left-0 right-0 -z-[1]">
          <Image
            src="/images/perspective-grid.png"
            className="inline-block w-full"
            alt="perspective-grid"
            width={1920}
            height={676}
          />
        </div>

        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px] 2xl:mb-[70px]">
            <span className="inline-block py-[4.5px] px-[15px] rounded-[100px] bg-orange-100 dark:bg-[#0a0e19] text-orange-700 mb-[12px]">
              Blog
            </span>
            <h2 className="!text-gray-900 dark:!text-white md:-tracking-[1px] !font-medium !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl mx-auto xl:max-w-[630px] !leading-[1.2] !mb-[10px] lg:!mb-[12px]">
              Insights, Strategies, and Stories to Help You Market Smarter.
            </h2>
            <p className="md:text-[15px] lg:text-md !leading-[1.6] mx-auto xl:max-w-[615px]">
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
                    src={post.image}
                    className="rounded-[25px] inline-block"
                    alt={`blog-image-${post.id}`}
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
                  <p className="!leading-[1.6]">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostLists;
