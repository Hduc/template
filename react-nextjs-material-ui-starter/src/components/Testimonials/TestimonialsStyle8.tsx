"use client";

import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import Image from "next/image";

const TestimonialsStyle8: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          p: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-black"
        >
          Testimonials Style - 8
        </Typography>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          spacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
            <Box
              className="testimonial-item"
              sx={{
                mb: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  mb: "15px",
                }}
              >
                <Box>
                  <Image
                    src="/images/users/user9.jpg"
                    width={100}
                    height={100}
                    alt="user-image"
                    className="rounded-circle"
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "18px" },
                      marginBottom: "6px",
                    }}
                  >
                    Jason Lee
                  </Typography>

                  <Typography component="span">Physician Assistant</Typography>
                </Box>
              </Box>

              <Box
                className="ratings"
                sx={{
                  lineHeight: "1",
                  color: "#fe7a36",
                  fontSize: "16px",
                  mb: "15px",
                }}
              >
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
              </Box>

              <Typography
                sx={{
                  fontWeight: "500",
                  fontStyle: "italic",
                  lineHeight: "1.8",
                }}
              >
                "Statistics is the science of using data to make decisions. This
                is relevant in almost all fields of work and there are many
                opportunities for employment."
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
            <Box
              className="testimonial-item"
              sx={{
                mb: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  mb: "15px",
                }}
              >
                <Box>
                  <Image
                    src="/images/users/user10.jpg"
                    width={100}
                    height={100}
                    alt="user-image"
                    className="rounded-circle"
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "18px" },
                      marginBottom: "6px",
                    }}
                  >
                    Ashley Davis
                  </Typography>

                  <Typography component="span">Data Scientist</Typography>
                </Box>
              </Box>

              <Box
                className="ratings"
                sx={{
                  lineHeight: "1",
                  color: "#fe7a36",
                  fontSize: "16px",
                  mb: "15px",
                }}
              >
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
              </Box>

              <Typography
                sx={{
                  fontWeight: "500",
                  fontStyle: "italic",
                  lineHeight: "1.8",
                }}
              >
                "Statistics is the science of using data to make decisions. This
                is relevant in almost all fields of work and there are many
                opportunities for employment."
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
            <Box
              className="testimonial-item"
              sx={{
                mb: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  mb: "15px",
                }}
              >
                <Box>
                  <Image
                    src="/images/users/user11.jpg"
                    width={100}
                    height={100}
                    alt="user-image"
                    className="rounded-circle"
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "18px" },
                      marginBottom: "6px",
                    }}
                  >
                    Alex Rocky
                  </Typography>

                  <Typography component="span">Marketing Manager</Typography>
                </Box>
              </Box>

              <Box
                className="ratings"
                sx={{
                  lineHeight: "1",
                  color: "#fe7a36",
                  fontSize: "16px",
                  mb: "15px",
                }}
              >
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
              </Box>

              <Typography
                sx={{
                  fontWeight: "500",
                  fontStyle: "italic",
                  lineHeight: "1.8",
                }}
              >
                "Statistics is the science of using data to make decisions. This
                is relevant in almost all fields of work and there are many
                opportunities for employment."
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default TestimonialsStyle8;
