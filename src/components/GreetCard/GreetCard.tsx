import React, { useEffect, useState } from "react";
import { AspectRatio, Avatar, Box, Stack, Typography } from "@mui/joy";
import { decodeToken } from "../../apiHandler/Decoder";

const GreetCard = () => {
  const [name, setName] = useState("");
  const [initials, setInitials] = useState("");
  function getInitials(name: string) {
    // Split the name into parts
    const parts = name.split(" ");
    // Filter out empty strings in case there are extra spaces
    const filteredParts = parts.filter((part) => part !== "");
    // Map each part to its first character and join them together
    const initials = filteredParts
      .map((part) => part[0].toUpperCase())
      .join("");
    return initials;
  }
  useEffect(() => {
    const token = sessionStorage.getItem("jwtToken");
    if (token) {
      const decoded = decodeToken(token);
      if (decoded && decoded.name) {
        // Convert the name to uppercase before setting it
        const upperName = decoded.name.toUpperCase();
        setName(upperName);
        // Set initials
        setInitials(getInitials(upperName));
      }
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        width: 400,
        height: 150,
        mb: 2,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <AspectRatio
        ratio="1"
        sx={{ minWidth: 130, borderRadius: "50%", width: 130, height: 130 }}
      >
        <Avatar
          sx={{
            width: "100%",
            height: "100%",
            fontSize: "3rem",
          }}
        >
          {initials}
        </Avatar>
      </AspectRatio>
      <Stack sx={{ ml: 2 }}>
        <Typography level="h2">Hi,</Typography>
        <Typography level="title-lg">{name}</Typography>
      </Stack>
    </Box>
  );
};

export default GreetCard;
