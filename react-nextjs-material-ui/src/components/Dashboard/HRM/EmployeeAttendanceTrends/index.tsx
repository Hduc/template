"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Box, Typography, Card } from "@mui/material";
import DateTimePickerDemo from "./DateTimePickerDemo";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const EmployeeAttendanceTrends: React.FC = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Attendance",
      data: [170, 450, 400, 550, 550, 650, 820],
    },
    {
      name: "Absent",
      data: [320, 300, 650, 400, 750, 650, 600],
    },
  ];

  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#605DFF", "#EE3E08"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      strokeDashArray: 7,
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "straight",
      width: [2, 2],
    },
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0,
        opacityTo: 0.8,
      },
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      axisTicks: {
        show: false,
        color: "#D5D9E2",
      },
      axisBorder: {
        show: true,
        color: "#D5D9E2",
      },
      labels: {
        show: true,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 6,
      max: 960,
      min: 0,
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#D5D9E2",
      },
      axisTicks: {
        show: false,
        color: "#D5D9E2",
      },
    },
    legend: {
      show: true,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 12,
        vertical: 10,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        size: 6,
        offsetX: -2,
        offsetY: -0.5,
        shape: "square",
      },
    },
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          overflow: "visible",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15px",
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Employee Attendance Trends
          </Typography>

          <Box sx={{ mt: { xs: "10px", sm: "0px" } }}>
            <DateTimePickerDemo />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: "10px", sm: "20px", md: "25px" },
          }}
        >
          <Box>
            Avg. Daily Attend:{" "}
            <Typography component={"span"} sx={{ fontWeight: "600" }}>
              320
            </Typography>
          </Box>

          <Box>
            High. Attend:{" "}
            <Typography component={"span"} sx={{ fontWeight: "600" }}>
              340
            </Typography>{" "}
            (October 5th)
          </Box>

          <Box>
            Low. Attend:{" "}
            <Typography component={"span"} sx={{ fontWeight: "600" }}>
              290
            </Typography>{" "}
            (October 1st)
          </Box>
        </Box>

        <Box
          sx={{
            mb: "-25px",
            ml: "-15px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={424}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default EmployeeAttendanceTrends;
