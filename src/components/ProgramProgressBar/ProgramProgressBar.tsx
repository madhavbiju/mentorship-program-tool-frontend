import { CircularProgress, LinearProgress, Typography } from "@mui/joy";
import React from "react";

const ProgramProgressBar = ({ daysLeft, percentageCompletion }: any) => {
  return (
    <div>
      <LinearProgress
        determinate
        variant="solid"
        size="sm"
        thickness={32}
        value={percentageCompletion}
        sx={{
          "--LinearProgress-radius": "20px",
          "--LinearProgress-progressThickness": "24px",
          boxShadow: "sm",
          borderColor: "neutral.500",
        }}
      >
        <Typography
          level="h4"
          fontWeight="xl"
          textColor="black"
          sx={{ mixBlendMode: "hard-light" }}
        >
          {daysLeft} days to Go
        </Typography>
      </LinearProgress>
    </div>
  );
};

export default ProgramProgressBar;
