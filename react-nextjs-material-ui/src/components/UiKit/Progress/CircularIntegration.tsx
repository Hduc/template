"use client";

import React from "react";
import { Card, Typography, CircularProgress, Box, Button } from "@mui/material";
import { green } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";

const CircularIntegration: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

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
          Circular Integration
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ m: 1, position: "relative" }}>
            <Fab
              aria-label="save"
              color="primary"
              sx={buttonSx}
              onClick={handleButtonClick}
            >
              {success ? (
                <CheckIcon sx={{ color: "#fff" }} />
              ) : (
                <SaveIcon sx={{ color: "#fff" }} />
              )}
            </Fab>
            {loading && (
              <CircularProgress
                size={68}
                sx={{
                  color: green[500],
                  position: "absolute",
                  top: -6,
                  left: -6,
                  zIndex: 1,
                }}
              />
            )}
          </Box>
          <Box sx={{ m: 1, position: "relative" }}>
            <Button
              variant="contained"
              sx={buttonSx}
              disabled={loading}
              onClick={handleButtonClick} 
              className="text-white"
            >
              Accept terms
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default CircularIntegration;
