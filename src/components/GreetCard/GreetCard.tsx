import React from "react";
import { AspectRatio, Box, Stack, Typography } from "@mui/joy";

interface GreetCardProps {
  name: string;
}

const GreetCard = ({ name }: GreetCardProps) => {
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
      <AspectRatio ratio="1" sx={{ minWidth: 130, borderRadius: "50%" }}>
        <img
          src="/Assets/dp.png"
          srcSet="/Assets/dp.png"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Stack sx={{ ml: 2 }}>
        <Typography level="title-lg">Hi,</Typography>
        <Typography level="h2">{name}</Typography>
      </Stack>
    </Box>
  );
};

export default GreetCard;
