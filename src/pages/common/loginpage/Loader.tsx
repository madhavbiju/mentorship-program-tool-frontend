import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/joy/Box"; // Using Box from Joy UI for layout

const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
