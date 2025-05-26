"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Testimonials = () => {
  // Testimonial data state
  const [testimonials, setTestimonials] = useState([]);
  const [header, setHeader] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch testimonial data
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // In a real app, this would be an API call:
        // const response = await fetch('/api/testimonials');
        // const data = await response.json();

        // Mock data (replace with actual API call)
        const data = {
          header: {
            title: "Customer Testimonials",
            heading: "What Store Owners Say About Trezo",
            description:
              "Real feedback from real users — building better eCommerce with Trezo.",
          },
          testimonials: [
            {
              id: 1,
              rating: 5,
              content:
                "Trezo has completely transformed how we run our store. The real-time dashboard gives us a clear view of sales and stock, and the marketing tools helped us scale faster than expected. It's like having a full team behind us.",
              author: {
                name: "Alex H.",
                role: "Apparel Store Owner",
                image: "/images/users/user1.jpg",
              },
            },
            {
              id: 2,
              rating: 5,
              content:
                "We were juggling multiple tools for sales tracking, email, & product analytics — until we found Trezo. Now everything's in one place. It saves time, reduces errors, & helps us grow smarter. Highly recommended for serious store owners.",
              author: {
                name: "Monica R.",
                role: "Shopify Seller",
                image: "/images/users/user2.jpg",
              },
            },
            {
              id: 3,
              rating: 5,
              content:
                "As a small business, Trezo gave us enterprise-level tools at an affordable price. The inventory management alone saved us thousands in lost sales from stockouts. Customer support is incredibly responsive too.",
              author: {
                name: "Daniel K.",
                role: "Fitness Gear Retailer",
                image: "/images/users/user3.jpg",
              },
            },
          ],
        };

        setHeader(data.header);
        setTestimonials(data.testimonials);
      } catch (err) {
        setError(err.message);
        console.error("Failed to load testimonials:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`ri-star-fill fs-18 ${
          i < rating ? "text-rating-color" : "text-muted"
        } lh-1`}
      />
    ));
  };

  if (loading)
    return <div className="text-center py-10">Loading testimonials...</div>;
  if (error)
    return (
      <div className="text-center py-10 text-danger">
        Error loading testimonials
      </div>
    );

  return (
    <>
      <div className="testimonials-area position-relative z-2 pb-180">
        <Container className="cmw-1308">
          <div className="d-flex justify-content-between flex-wrap gap-3 align-items-center mb-65">
            <div className="section-title2 m-0">
              <span className="top-title2">{header.title}</span>
              <h2>{header.heading}</h2>
              <p>{header.description}</p>
            </div>

            <Link
              to="/testimonials"
              className="btn bg-primary text-white fw-medium fs-14 rounded-pill hover-bg landing-page-btn"
            >
              View All Feedback
            </Link>
          </div>

          <Row className="g-4 justify-content-center">
            {testimonials.map((testimonial) => (
              <Col key={testimonial.id} md={6} lg={4}>
                <div className="testimonials-single-item-ecommerce">
                  <div className="d-flex mb-25" style={{ gap: "2px" }}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="fs-16">{testimonial.content}</p>

                  <div
                    className="d-flex align-items-center mt-50"
                    style={{ gap: "12px" }}
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.author.image}
                        className="rounded-circle"
                        alt={testimonial.author.name}
                        width={42}
                        height={42}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <span
                        className="text-secondary fw-semibold d-block s-14"
                        style={{ marginBottom: "4px" }}
                      >
                        {testimonial.author.name}
                      </span>
                      <span>{testimonial.author.role}</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
