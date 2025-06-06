"use client";

import React, { useEffect, useState } from "react";
import { Card, Dropdown } from "react-bootstrap";

const TradesPerMonth = () => {
  const [Chart, setChart] = useState();
  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const series = [
    {
      name: "Price",
      data: [
        { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
        { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
        { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
        { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
        { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
        { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },
        { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
        { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
        { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
        { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
        { x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6608.91] },
        { x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6612] },
        { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },
        { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] },
      ],
    },
  ];

  const options = {
    chart: {
      toolbar: { show: false },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#EE3E08",
          downward: "#4936F5",
        },
        wick: { useFillColor: true },
      },
    },
    fill: { opacity: 1 },
    xaxis: {
      type: "datetime",
      axisTicks: { show: false, color: "#ECEEF2" },
      axisBorder: { show: false, color: "#ECEEF2" },
      labels: {
        show: true,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: { show: false, color: "#ECEEF2" },
      axisTicks: { show: false, color: "#ECEEF2" },
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <h3 className="mb-4">Trades Per Month</h3>

          <div style={{ margin: "-23px 0 -15px 0" }}>
            {Chart && (
              <Chart
                options={options}
                series={series}
                type="candlestick"
                height={288}
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default TradesPerMonth;
