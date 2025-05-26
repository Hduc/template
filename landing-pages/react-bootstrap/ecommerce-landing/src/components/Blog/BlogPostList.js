"use client";

import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BlogPostList = () => {
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
    {
      id: 4,
      title: "Top Marketing Channels for Online Stores",
      excerpt: "Discover where to invest your marketing budget in 2025.",
      image: "/images/blogs/blog4.jpg",
      author: "Trezo",
      date: "April 10, 2025",
      slug: "/blogs/details",
    },
    {
      id: 5,
      title: "Using AI to Personalize Customer Experiences",
      excerpt: "Learn how AI can tailor your offers and increase loyalty.",
      image: "/images/blogs/blog5.jpg",
      author: "Trezo",
      date: "April 9, 2025",
      slug: "/blogs/details",
    },
    {
      id: 6,
      title: "The Future of Mobile Commerce",
      excerpt: "Mobile-first strategies you can’t afford to ignore.",
      image: "/images/blogs/blog6.jpg",
      author: "Trezo",
      date: "April 8, 2025",
      slug: "/blogs/details",
    },
    {
      id: 7,
      title: "Managing Returns Without Losing Revenue",
      excerpt: "Tactics to keep customers happy without hurting profits.",
      image: "/images/blogs/blog7.jpg",
      author: "Trezo",
      date: "April 7, 2025",
      slug: "/blogs/details",
    },
    {
      id: 8,
      title: "Secrets of High-Converting Landing Pages",
      excerpt: "Turn more traffic into buyers with these proven methods.",
      image: "/images/blogs/blog8.jpg",
      author: "Trezo",
      date: "April 6, 2025",
      slug: "/blogs/details",
    },
    {
      id: 9,
      title: "Why Your Store Needs Subscriptions",
      excerpt: "Recurring revenue is easier than you think. Here’s how.",
      image: "/images/blogs/blog9.jpg",
      author: "Trezo",
      date: "April 5, 2025",
      slug: "/blogs/details",
    },
  ];

  return (
    <>
      <div className="from-the-blog-area ptb-180">
        <Container className="cmw-1308">
          <div className="section-title2 mx-auto text-center">
            <span className="top-title2">From the Blog</span>
            <h2>Learn to Sell Smarter</h2>
            <p>
              Expert tips, growth guides, and eCommerce trends — fresh every
              week.
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {blogPosts.map((post) => (
              <Col key={post.id} md={6} lg={4}>
                <Link
                  to={`${post.slug}`}
                  className="from-the-blog-single-item text-decoration-none"
                >
                  <img
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

export default BlogPostList;
