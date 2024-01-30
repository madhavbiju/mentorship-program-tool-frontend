import { Box, List, ListItem, ListDivider } from "@mui/joy";
import React from "react";

const SubmittedTask = () => {
  return (
    <Box sx={{ paddingTop: "2%" }}>
      <List
        orientation="horizontal"
        variant="soft"
        sx={{
          flexGrow: 0,
          mx: "auto",
          "--ListItemDecorator-size": "48px",
          "--ListItem-paddingY": "1rem",
          borderRadius: "sm",
          justifyContent: "space-around",
        }}
      >
        <ListItem>Mentee Name</ListItem>
        <ListDivider inset="gutter" />
        <ListItem>Program name</ListItem>
        <ListDivider inset="gutter" />
        <ListItem>Task Name</ListItem>
      </List>
    </Box>
  );
};

export default SubmittedTask;
