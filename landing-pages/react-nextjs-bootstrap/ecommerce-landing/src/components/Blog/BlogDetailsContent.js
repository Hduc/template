"use client";

import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";

const BlogDetailsContent = () => {
  return (
    <>
      <div className="from-the-blog-area ptb-180">
        <Container className="cmw-1308">
          <div style={{ maxWidth: "850px" }} className="mx-auto">
            <div className="section-title2 mx-auto text-center mw-100">
              <span className="top-title2">Online Shopping</span>
              <h2>The Secret to Faster Checkout Experiences</h2>

              <ul className="p-0 list-unstyled d-flex align-items-center blog-post-info justify-content-center flex-wrap">
                <li
                  className="d-flex align-items-center"
                  style={{ gap: "5px" }}
                >
                  <i className="ri-calendar-line text-primary fs-18"></i>
                  <span className="fs-14 text-body">April 13, 2025</span>
                </li>
                <li
                  className="d-flex align-items-center"
                  style={{ gap: "5px" }}
                >
                  <i className="ri-user-line text-primary fs-18"></i>
                  <span className="fs-14 text-body">By: Trezo</span>
                </li>
                <li
                  className="d-flex align-items-center"
                  style={{ gap: "5px" }}
                >
                  <i className="ri-time-line text-primary fs-18"></i>
                  <span className="fs-14 text-body">Reading time: ~4 min</span>
                </li>
              </ul>
            </div>

            <div className="blog-details-content">
              <div className="blog-img">
                <Image
                  src="/images/blogs/blog10.jpg"
                  alt="blog10"
                  width={1596}
                  height={828}
                />
              </div>
              <h3>Introduction</h3>
              <p>
                Marketing is no longer about guesswork. In today’s digital
                landscape, data is the new creative. From customer behavior to
                conversion patterns, brands that leverage data effectively are
                outperforming their competitors — and the gap is growing.
              </p>

              <h3>Why Data Matters More Than Ever</h3>
              <p>
                Consumers expect personalization. Businesses need precision.
                Data-driven marketing empowers teams to:
              </p>

              <ul>
                <li>Target the right audiences with the right message</li>
                <li>Optimize campaigns in real time</li>
                <li>Make informed decisions backed by performance metrics</li>
                <li>Reduce ad waste and improve ROI</li>
              </ul>

              <h3>Key Trends Shaping the Future</h3>
              <span className="title">AI-Powered Analytics</span>
              <p>
                AI helps marketers surface insights faster, predict outcomes,
                and even automate decisions — from email timing to content
                optimization.
              </p>

              <span className="title">Real-Time Dashboards</span>
              <p>
                Live data feeds allow teams to monitor KPIs as they happen.
                Trezo’s dashboard offers funnel views, engagement stats, and
                conversion tracking all in one place.
              </p>

              <span className="title">Cross-Channel Integration</span>
              <p>
                The future of marketing is omnichannel. Tools like Trezo unify
                social, email, ads, and more — allowing full-funnel visibility.
              </p>

              <h3>From Data to Strategy</h3>
              <p>
                It’s not just about collecting numbers — it’s about turning them
                into actions. High-performing teams use data to:
              </p>
              <span className="d-block fw-medium mb-20">
                Personalize messaging
              </span>
              <span className="d-block fw-medium mb-20">Spot trends early</span>
              <span className="d-block fw-medium mb-20">
                A/B test with confidence
              </span>
              <span className="d-block fw-medium mb-20">
                Drive continuous improvement
              </span>

              <h3>Final Thoughts</h3>
              <p>
                The future belongs to marketers who adapt, automate, and
                analyze. With tools like Trezo, data is no longer intimidating —
                it’s empowering. If your marketing decisions aren’t data-backed,
                you’re already behind.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogDetailsContent;
