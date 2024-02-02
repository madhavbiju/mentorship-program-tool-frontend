import React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

const UnauthorizedPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "background.body",
      }}
    >
      <Typography level="h1" sx={{ fontSize: "4rem", mb: 2 }}>
        403
      </Typography>
      <Typography level="h4" sx={{ mb: 3 }}>
        Unauthorized Access
      </Typography>
      <Typography sx={{ mb: 4 }}>
        Sorry, you do not have permission to view this page.
      </Typography>
      <Button variant="solid" onClick={() => (window.location.href = "/")}>
        Go to Home
      </Button>
    </Box>
  );
};

export default UnauthorizedPage;
