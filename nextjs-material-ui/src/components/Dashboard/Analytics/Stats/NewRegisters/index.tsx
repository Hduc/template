"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Box, Typography } from "@mui/material";
import styles from "../Stats.module.css"

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const NewRegisters: React.FC = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Revenue Growth",
      data: [3, 12, 8, 10, 15, 10, 7],
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
    colors: ["#C52B09"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "monotoneCubic",
      width: 1,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: (val) => {
          return "$" + val + "k";
        },
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    legend: {
      show: false,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        shape: 'diamond',
        offsetX: -2,
        offsetY: -0.5,
      },
    },
  };

  return (
    <>
      <Box className={styles.item}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: "12px",
            position: "relative",
          }}
        >
          <Box>
            <Typography component="span" sx={{ mb: "3px", display: "block" }}>
              New Registers
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", lg: "20px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              35.3k
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "-28px",
              right: "-9px",
              maxWidth: "120px",
            }}
            className="crm-ap"
          >
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="area"
                height={95}
                width={"100%"}
              />
            )}
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "5px",
            }}
          >
            <Typography
              component="span"
              color="success"
              sx={{
                bgcolor: "#d8ffc8",
                border: "1px solid #82FC5A",
                borderRadius: "100px",
                fontSize: "12px",
                padding: "1px 9px",
                lineHeight: 'normal'
              }}
            >
              +15% Increase
            </Typography>

            <Typography component="span" sx={{ fontSize: "12px" }}>
              Last 7 days
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewRegisters;
