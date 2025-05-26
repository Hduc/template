"use client";

import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const featureItems = [
  {
    icon: "/images/icons/chart.svg",
    title: "Campaign Insights",
    description:
      "Track real-time performance, spot trends instantly, and optimize campaigns based on smart, visualized data",
    colClass: "col-lg-4 col-md-6",
  },
  {
    icon: "/images/icons/global.svg",
    title: "Channel Control",
    description:
      "Manage all your marketing channels — email, social, ads — from one streamlined platform without switching",
    colClass: "col-lg-4 col-md-6",
  },
  {
    icon: "/images/icons/conversion.svg",
    title: "Funnel Tracking",
    description:
      "Visualize how leads flow through your funnel, identify drop-offs, and improve conversions with clear, actionable data.",
    colClass: "col-lg-4 col-md-6",
  },
  {
    icon: "/images/icons/network.svg",
    title: "Team Workspace",
    description:
      "Collaborate with your team in real time using tasks, comments, and shared views to keep everyone aligned.",
    colClass: "col-lg-6",
    image: "/images/team-workspace.png",
    hasImage: true,
  },
  {
    icon: "/images/icons/technology.svg",
    title: "Seamless Integrations",
    description:
      "Connect with your favorite tools through our growing ecosystem of integrations",
    colClass: "col-lg-6",
    image: "/images/seamless-integrations.png",
    hasImage: true,
  },
];

const FeatureCard = ({ item }) => {
  return (
    <>
      <div
        className={`why-trezo-marketing-single-item card border-0 bg-white ${
          item.hasImage ? "position-relative z-1 h-100" : ""
        }`}
      >
        <div className={item.hasImage ? "why-trezo-marketing-content" : ""}>
          <div className="icon">
            <Image
              src={item.icon}
              alt={item.title.toLowerCase().replace(" ", "-")}
              width={64}
              height={64}
            />
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>

        {item.hasImage && (
          <Image
            src={item.image}
            className="team-workspace position-absolute top-50 end-0 translate-middle-y z-n1"
            alt={item.title.toLowerCase().replace(" ", "-")}
            width={272}
            height={340}
          />
        )}
      </div>
    </>
  );
};

const FeatureList = () => {
  return (
    <>
      <div
        className="why-trezo-marketing-area bg-img ptb-180 position-relative z-1"
        style={{
          background: "linear-gradient(180deg, #FFEFE1 0%, #FFF 100%)",
        }}
      >
        <Container className="cmw-1308">
          <div className="section-title2 text-center mx-auto mw-100 mb-70">
            <span className="top-title2 bg-card-text-c text-danger-90">
              Why Trezo
            </span>
            <h2 className="mx-auto" style={{ maxWidth: "520px" }}>
              Everything You Need to Grow Faster
            </h2>
            <p className="dec">
              From campaign tracking to performance insights — we’ve got you
              covered.
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {featureItems.map((item, index) => (
              <div key={index} className={item.colClass}>
                <FeatureCard item={item} />
              </div>
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

export default FeatureList;
