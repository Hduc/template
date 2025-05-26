"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BlogPost = () => {
  // Blog posts data array
  const blogPosts = [
    {
      id: 1,
      image: "/images/blogs/blog1.jpg",
      title: "The Future of Data-Driven Marketing",
      description:
        "Discover why real-time data is the new creative and how teams are shifting to smarter, measurable campaigns.",
      slug: "/blogs/details",
    },
    {
      id: 2,
      image: "/images/blogs/blog2.jpg",
      title: "7 Marketing Funnels That Actually Convert",
      description:
        "Explore the funnel setups successful brands are using — and how you can apply them to your campaigns.",
      slug: "/blogs/details",
    },
    {
      id: 3,
      image: "/images/blogs/blog3.jpg",
      title: "Why Your Team Needs a Unified Marketing Tool",
      description:
        "Learn how consolidating your marketing stack improves performance, saves time, and boosts ROI.",
      slug: "/blogs/details",
    },
    {
      id: 4,
      image: "/images/blogs/blog4.jpg",
      title: "Email Marketing Trends to Watch in 2025",
      description:
        "See what’s changing in email marketing and how to keep your strategy effective and engaging.",
      slug: "/blogs/details",
    },
    {
      id: 5,
      image: "/images/blogs/blog5.jpg",
      title: "From Clicks to Conversions: Optimizing Your CTAs",
      description:
        "Learn how small tweaks to your CTAs can make a big impact on conversion rates.",
      slug: "/blogs/details",
    },
    {
      id: 6,
      image: "/images/blogs/blog6.jpg",
      title: "Social Media Campaigns That Drove Results",
      description:
        "Case studies on social media marketing efforts that exceeded KPIs and how you can replicate them.",
      slug: "/blogs/details",
    },
    {
      id: 7,
      image: "/images/blogs/blog7.jpg",
      title: "Breaking Down Google Analytics 5",
      description:
        "Understand what's new in GA5 and how to harness its power for deeper campaign insights.",
      slug: "/blogs/details",
    },
    {
      id: 8,
      image: "/images/blogs/blog8.jpg",
      title: "A/B Testing Best Practices for 2025",
      description:
        "Master modern A/B testing techniques that help optimize every step of your customer journey.",
      slug: "/blogs/details",
    },
    {
      id: 9,
      image: "/images/blogs/blog9.jpg",
      title: "How to Build a Content Strategy That Scales",
      description:
        "A roadmap for creating scalable content that grows with your business goals.",
      slug: "/blogs/details",
    },
  ];

  return (
    <>
      <div
        className="blog-marketing-area ptb-180 position-relative z-1"
        style={{
          background: "linear-gradient(180deg, #FFEFE1 0%, #FFF 100%)",
        }}
      >
        <Container className="cmw-1308">
          <div
            className="section-title2 mb-70 mx-auto text-center"
            style={{
              maxWidth: "630px",
            }}
          >
            <span className="top-title2 bg-card-text-c text-danger-90">
              Blog
            </span>
            <h2>
              Insights, Strategies, and Stories to Help You Market Smarter.
            </h2>
            <p className="dec">
              Stay ahead of the curve with expert tips, industry trends, and
              product updates from the Trezo team.
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {blogPosts.map((post) => (
              <Col md={6} lg={4} key={`blog-post-${post.id}`}>
                <Link
                  href={`${post.slug}`}
                  className="blog-marketing-single-item text-decoration-none"
                >
                  <Image
                    src={post.image}
                    alt={`blog-${post.id}`}
                    width={824}
                    height={550}
                  />

                  <div className="blog-marketing-content">
                    <h3>{post.title}</h3>
                    <p className="text-body">{post.description}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Perspective grid shape image */}
        <Image
          src="/images/perspective-grid.png"
          className="perspective-grid w-100"
          alt="perspective-grid"
          width={1920}
          height={676}
        />
      </div>
    </>
  );
};

export default BlogPost;
