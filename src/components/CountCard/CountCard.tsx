import { Card, Typography, CardContent } from "@mui/joy";
import React from "react";
import { CountCardPropsType } from "./CountCardPropType";

const CountCard = ({ title, count }: CountCardPropsType) => {
  return (
    <Card variant="outlined" sx={{ width: "100%", padding: 1, lineHeight: 0 }}>
      <Typography sx={{ opacity: "90%", lineHeight: 1 }}>{title}</Typography>
      <Typography level="h2" sx={{ lineHeight: 1 }}>
        {count}
      </Typography>
    </Card>
  );
};

export default CountCard;
