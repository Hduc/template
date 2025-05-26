"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  ];

  return (
    <>
      <div className="blog-marketing-area pb-180">
        <Container className="cmw-1308">
          <div className="section-title2 mb-70" style={{ maxWidth: "630px" }}>
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
      </div>
    </>
  );
};

export default BlogPost;
