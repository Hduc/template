"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BlogPost = () => {
  const blogPosts = [
    {
      id: 1,
      title: "eCommerce Metrics That Matter in 2025",
      excerpt:
        "Understand which numbers to watch and why they matter for growth.",
      image: "/images/blogs/blog1.jpg",
      author: "Trezo",
      date: "April 13, 2025",
      slug: "/blogs/details",
    },
    {
      id: 2,
      title: "How to Design a Product Page That Converts",
      excerpt: "Boost sales with smarter UX and persuasive content.",
      image: "/images/blogs/blog2.jpg",
      author: "Trezo",
      date: "April 12, 2025",
      slug: "/blogs/details",
    },
    {
      id: 3,
      title: "Avoid These 5 Inventory Mistakes",
      excerpt: "Save money, reduce churn, and improve operations.",
      image: "/images/blogs/blog3.jpg",
      author: "Trezo",
      date: "April 11, 2025",
      slug: "/blogs/details",
    },
  ];

  return (
    <>
      <div className="from-the-blog-area ptb-180">
        <Container className="cmw-1308">
          <div className="d-flex justify-content-between flex-wrap gap-3 align-items-center mb-65">
            <div className="section-title2 m-0">
              <span className="top-title2">From the Blog</span>
              <h2>Learn to Sell Smarter</h2>
              <p>
                Expert tips, growth guides, and eCommerce trends — fresh every
                week.
              </p>
            </div>

            <Link
              href="/blogs"
              className="btn bg-primary text-white fw-medium fs-14 rounded-pill hover-bg landing-page-btn"
            >
              View All
            </Link>
          </div>

          <Row className="g-4 justify-content-center">
            {blogPosts.map((post) => (
              <Col key={post.id} md={6} lg={4}>
                <Link
                  href={`${post.slug}`}
                  className="from-the-blog-single-item text-decoration-none"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={668}
                    height={428}
                    loading="lazy"
                  />

                  <ul
                    className="p-0 list-unstyled d-flex align-items-center"
                    style={{ gap: "25px" }}
                  >
                    <li
                      className="d-flex align-items-center"
                      style={{ gap: "5px" }}
                    >
                      <i className="ri-user-line text-primary fs-18"></i>
                      <span className="fs-14 text-body">By: {post.author}</span>
                    </li>
                    <li
                      className="d-flex align-items-center"
                      style={{ gap: "5px" }}
                    >
                      <i className="ri-calendar-line text-primary fs-18"></i>
                      <span className="fs-14 text-body">{post.date}</span>
                    </li>
                  </ul>

                  <h3>{post.title}</h3>
                  <p className="text-body">{post.excerpt}</p>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogPost;
