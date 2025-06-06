"use client";

import * as React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import styles from "@/components/Pricing/PricingStyle3/PricingStyle3.module.css";

const PricingStyle3: React.FC = () => {
  return (
    <>
      <div className={`border-radius bg-white ${styles.pricingStyle3Card}`}>
        <div className={styles.cardContent}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
              <div className={styles.singlePricingBox}>
                <div className="text-center">
                  <div className={styles.title}>
                    <span>Basic</span>
                  </div>

                  <div className={`text-black ${styles.price}`}>
                    $29 <span className="text-body">/ per month</span>
                  </div>

                  <Typography
                    sx={{ fontWeight: "500", display: "block", mb: "20px" }}
                  >
                    For individual user
                  </Typography>
                </div>

                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: { xs: "13px", sm: "16px" },
                    padding: { xs: "10px 20px" },
                    color: "#fff !important",
                    boxShadow: "none",
                    display: "block",
                    width: "100%",
                  }}
                >
                  <i
                    className="material-symbols-outlined mr-5"
                    style={{ fontSize: "16px" }}
                  >
                    arrow_forward_ios
                  </i>
                  Buy Now
                </Button>

                <ul className={styles.featuresList}>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Basic Dashboard
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Task Management
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    File Storage (5GB)
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Basic Reporting
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Email Integration
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Basic Support
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
              <div className={styles.singlePricingBox}>
                <div className="text-center">
                  <div className={styles.title}>
                    <span>Standard</span>
                  </div>

                  <div className={`text-black ${styles.price}`}>
                    $49 <span className="text-body">/ per month</span>
                  </div>

                  <Typography
                    sx={{ fontWeight: "500", display: "block", mb: "20px" }}
                  >
                    For team of 10 users
                  </Typography>
                </div>

                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: { xs: "13px", sm: "16px" },
                    padding: { xs: "10px 20px" },
                    color: "#fff !important",
                    boxShadow: "none",
                    display: "block",
                    width: "100%",
                  }}
                >
                  <i
                    className="material-symbols-outlined mr-5"
                    style={{ fontSize: "16px" }}
                  >
                    arrow_forward_ios
                  </i>
                  Buy Now
                </Button>

                <ul className={styles.featuresList}>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Advanced Dashboard
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Task Management
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    File Storage (10GB)
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Advanced Reporting
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Email Integration
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Priority Support
                  </li>
                </ul>

                <div className={styles.popular}>
                  <Image
                    src="/images/icons/star-popular.svg"
                    alt="popular-image"
                    width={81}
                    height={81}
                  />
                </div>
              </div>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
              <div className={styles.singlePricingBox}>
                <div className="text-center">
                  <div className={styles.title}>
                    <span>Premium</span>
                  </div>

                  <div className={`text-black ${styles.price}`}>
                    $79 <span className="text-body">/ per month</span>
                  </div>

                  <Typography
                    sx={{ fontWeight: "500", display: "block", mb: "20px" }}
                  >
                    For team of 15 users
                  </Typography>
                </div>

                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: { xs: "13px", sm: "16px" },
                    padding: { xs: "10px 20px" },
                    color: "#fff !important",
                    boxShadow: "none",
                    display: "block",
                    width: "100%",
                  }}
                >
                  <i
                    className="material-symbols-outlined mr-5"
                    style={{ fontSize: "16px" }}
                  >
                    arrow_forward_ios
                  </i>
                  Buy Now
                </Button>

                <ul className={styles.featuresList}>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Customizable Dashboard
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Task Management
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    File Storage (Unlimited)
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Custom Reporting
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    Email Integration
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check</i>
                    24/7 Premium Support
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default PricingStyle3;
