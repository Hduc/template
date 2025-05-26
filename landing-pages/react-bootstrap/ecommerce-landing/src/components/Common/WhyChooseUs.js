"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhyChooseUs = () => {
  // Dynamic data for statistics
  const stats = [
    { value: "2x", label: "Faster Sales Monitoring" },
    { value: "98%", label: "Inventory Accuracy" },
    { value: "3x", label: "Better Conversion Insights" },
    { value: "5k+", label: "Orders Automated Weekly" },
  ];

  // Content data
  const content = {
    title: "Why Trezo?",
    heading: "Built for Modern Online Sellers",
    description:
      "Every feature of Trezo is crafted to help you sell smarter, not harder.",
    image: {
      src: "/images/why-trezo.png",
      alt: "why-trezo",
      width: 962,
      height: 978,
    },
  };

  return (
    <>
      <div className="why-trezo-area ptb-180">
        <Container className="cmw-1308">
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="why-trezo-img">
                <img
                  src={content.image.src}
                  alt={content.image.alt}
                  width={content.image.width}
                  height={content.image.height}
                  loading="lazy"
                />
              </div>
            </Col>

            <Col lg={6}>
              <div className="why-trezo-content">
                <span className="top-title2">{content.title}</span>
                <h2>{content.heading}</h2>
                <p>{content.description}</p>

                <div className="why-trezo-single-item-wrap">
                  <div className="row g-4 g-50">
                    {stats.map((stat, index) => (
                      <div key={index} className="col-6 col-sm-6">
                        <div className="why-trezo-single-item">
                          <h1>{stat.value}</h1>
                          <span className="d-block">{stat.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WhyChooseUs;
