import { Box, List, ListItem, ListDivider } from "@mui/joy";
import React from "react";

const MeetingCard = () => {
  return (
    <Box sx={{ paddingTop: "2%" }}>
      <List
        orientation="horizontal"
        variant="soft"
        sx={{
          flexGrow: 0,
          "--ListItemDecorator-size": "44px",
          "--ListItem-paddingY": "1rem",
          borderRadius: "sm",
          justifyContent: "center",
        }}
      >
        <ListItem sx={{mr:4}}>Meeting Name</ListItem>
        <ListDivider inset="gutter" />
        <ListItem sx={{mx:4}}>12:10pm</ListItem>
        <ListDivider inset="gutter" />
        <ListItem sx={{ml:4}}>12/02/2024</ListItem>
      </List>
    </Box>
  );
};

export default MeetingCard;
