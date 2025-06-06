"use client";

import React from "react";
import { Grid, Card, Box, Typography, Button } from "@mui/material";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
}

const PositionedSnackbar: React.FC = () => {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
        >
          Top-Center
        </Button>
      </Box>
      <Grid container justifyContent="center">
        <Grid size={{ xs: 6 }}>
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "left" })}
          >
            Top-Left
          </Button>
        </Grid>
        <Grid size={{ xs: 6 }} textAlign="right">
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "right" })}
          >
            Top-Right
          </Button>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Button
            onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
          >
            Bottom-Left
          </Button>
        </Grid>
        <Grid size={{ xs: 6 }} textAlign="right">
          <Button
            onClick={handleClick({ vertical: "bottom", horizontal: "right" })}
          >
            Bottom-Right
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
        >
          Bottom-Center
        </Button>
      </Box>
    </React.Fragment>
  );

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
          Positioned Snackbar
        </Typography>

        <Box sx={{ width: 500 }}>
          {buttons}
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="I love snacks"
            key={vertical + horizontal}
          />
        </Box>
      </Card>
    </>
  );
};

export default PositionedSnackbar;
