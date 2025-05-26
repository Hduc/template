"use client";

import React from "react";
import Container from 'react-bootstrap/Container';

const UseCasesIdealUsers = () => {
  // Use cases data array
  const useCases = [
    {
      icon: "/images/icons/chart.svg",
      title: "Freelance Marketers",
      description:
        "Plan, launch, and report on campaigns faster. Spend more time creating and less time managing tools.",
    },
    {
      icon: "/images/icons/management.svg",
      title: "Agencies & Teams",
      description:
        "Plan, launch, and report on campaigns faster. Spend more time creating and less time managing tools.",
    },
    {
      icon: "/images/icons/start-up.svg",
      title: "Startups",
      description:
        "Plan, launch, and report on campaigns faster. Spend more time creating and less time managing tools.",
    },
    {
      icon: "/images/icons/leader.svg",
      title: "Marketing Leaders",
      description:
        "Plan, launch, and report on campaigns faster. Spend more time creating and less time managing tools.",
    },
    {
      icon: "/images/icons/saas.svg",
      title: "SaaS & Tech Companies",
      description:
        "Plan, launch, and report on campaigns faster. Spend more time creating and less time managing tools.",
    },
  ];

  return (
    <>
      <div className="use-cases-ideal-users-marketing">
        <Container className="cmw-1308">
          <div
            className="section-title2 text-center mx-auto mb-70"
            style={{
              maxWidth: "570px",
            }}
          >
            <span className="top-title2 bg-card-text-c text-danger-90">
              Use Cases & Ideal Users
            </span>
            <h2>Built for Modern Marketers. Trusted by Teams of All Sizes.</h2>
            <p className="dec">
              Trezo is flexible, powerful, and ready to scale with you.
            </p>
          </div>

          <div className="hover-accordion-wrap" style={{ gap: "24px" }}>
            {useCases.map((useCase, index) => (
              <div className="col-lg-25" key={`use-case-${index}`}>
                <div className="users-marketing-single-item">
                  <div className="users-marketing-content">
                    <div className="icon">
                      <img
                        src={useCase.icon}
                        alt={useCase.title
                          .toLowerCase()
                          .replace(/[&\s]+/g, "-")}
                        width={64}
                        height={64}
                      />
                    </div>
                    <h3>{useCase.title}</h3>
                    <p>{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default UseCasesIdealUsers;
