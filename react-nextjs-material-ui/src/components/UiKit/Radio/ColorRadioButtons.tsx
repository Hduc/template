"use client";

import React from "react";
import { Card, Box, Typography, Radio } from "@mui/material";
import { pink } from "@mui/material/colors";

const ColorRadioButtons: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

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
          Color Radio Buttons
        </Typography>

        <Box>
          <Radio
            {...controlProps("a")}
            sx={{
              color: "primary.500",
              "&.Mui-checked": {
                color: "primary.main",
              },
            }}
          />
          <Radio
            {...controlProps("b")}
            color="secondary"
            sx={{
              color: "secondary.500",
              "&.Mui-checked": {
                color: "secondary.main",
              },
            }}
          />
          <Radio
            {...controlProps("c")}
            color="success"
            sx={{
              color: "success.500",
              "&.Mui-checked": {
                color: "success.main",
              },
            }}
          />
          <Radio
            {...controlProps("d")}
            sx={{
              color: "primary.500",
              "&.Mui-checked": {
                color: "primary.main",
              },
            }}
            color="default"
          />
          <Radio
            {...controlProps("e")}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        </Box>
      </Card>
    </>
  );
};

export default ColorRadioButtons;
