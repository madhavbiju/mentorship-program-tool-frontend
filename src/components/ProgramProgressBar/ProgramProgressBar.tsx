import { CircularProgress, LinearProgress, Typography } from "@mui/joy";
import React from "react";

const ProgramProgressBar = () => {
  return (
    <div>
      <LinearProgress
        determinate
        variant="solid"
        size="sm"
        thickness={32}
        value={60}
        sx={{
          "--LinearProgress-radius": "20px",
          "--LinearProgress-progressThickness": "24px",
          boxShadow: "sm",
          borderColor: "neutral.500",
        }}
      >
        <Typography
          level="body-xs"
          fontWeight="xl"
          textColor="black"
          sx={{ mixBlendMode: "hard-light" }}
        >
          10 days to go{" "}
        </Typography>
      </LinearProgress>
    </div>
  );
};

export default ProgramProgressBar;
