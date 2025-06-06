"use client";

import React from "react";
import { Card, Typography, Alert, Stack } from "@mui/material";

const BasicAlerts: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
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
          Basic Alerts
        </Typography>

        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success" sx={{ fontSize: "14px", color: "success.main" }}>
            This is a success Alert.
          </Alert>
          <Alert severity="info" sx={{ fontSize: "14px", color: "info.main" }}>
            This is an info Alert.
          </Alert>
          <Alert severity="warning" sx={{ fontSize: "14px", color: "warning.main" }}>
            This is a warning Alert.
          </Alert>
          <Alert severity="error" sx={{ fontSize: "14px", color: "error.main" }}>
            This is an error Alert.
          </Alert>
        </Stack>
      </Card>
    </>
  );
};

export default BasicAlerts;
