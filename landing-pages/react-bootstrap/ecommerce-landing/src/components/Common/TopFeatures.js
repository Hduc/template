"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TopFeatures = () => {
  // Feature data configuration
  const features = [
    {
      id: 1,
      icon: "/images/icons/creativity.svg",
      title: "Sales Insights",
      description:
        "Get a clear view of what's selling, when, and to whom — all in real time.",
      shape: "/images/shapes/shape5.png",
      className: "mt-35",
    },
    {
      id: 2,
      icon: "/images/icons/bar-chart.svg",
      title: "Customer Analytics",
      description:
        "Uncover buyer behavior, repeat purchases, and lifetime value effortlessly.",
      shape: "/images/shapes/shape5.png",
    },
    {
      id: 3,
      icon: "/images/icons/edit.svg",
      title: "Product Manager",
      description:
        "Bulk edit items, update inventory, and categorize with just a few clicks.",
      shape: "/images/shapes/shape5.png",
      className: "mt-35",
    },
    {
      id: 4,
      icon: "/images/icons/connect.svg",
      title: "Smart Connect",
      description: "Connect to Shopify, Stripe, Meta Ads, and more in seconds.",
      shape: "/images/shapes/shape5.png",
    },
  ];

  return (
    <>
      <div className="top-features-area bg-gray-200 ptb-180">
        <Container className="cmw-1308">
          <div className="section-title2 mx-auto text-center">
            <span className="top-title2">Top Features</span>
            <h2>Your eCommerce Toolkit — All in One Place</h2>
            <p>
              Trezo equips you with intelligent tools to run a high-performing
              online store.
            </p>
          </div>

          <Row className="g-4">
            {features.map((feature) => (
              <Col key={feature.id} sm={6} lg={3}>
                <div
                  className={`top-features-single-item position-relative z-1 ${
                    feature.className || ""
                  }`}
                >
                  <div className="top-features-content">
                    <img
                      src={feature.icon}
                      alt={feature.title.toLowerCase()}
                      width={60}
                      height={60}
                    />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                  <img
                    src={feature.shape}
                    className="shape5"
                    alt={`${feature.title} background shape`}
                    width={80}
                    height={80}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TopFeatures;
