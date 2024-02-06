import React, { useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { Box } from "@mui/joy";

const MentorDashboardSkeleton = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress
        color="primary"
        determinate={false}
        size="lg"
        value={20}
        variant="solid"
        thickness={3}
      />
    </Box>
  );
};

export default MentorDashboardSkeleton;
