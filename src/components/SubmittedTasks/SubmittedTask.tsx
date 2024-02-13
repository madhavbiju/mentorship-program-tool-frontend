import { Box, List, ListItem, ListDivider } from "@mui/joy";
import React from "react";
import { TasksProps } from "./Types";

const SubmittedTask = ({ tasks, totalCount }: TasksProps) => {
  return (
    <Box sx={{ paddingTop: "2%" }}>
      {tasks.map((data) => (
        <List
          orientation="horizontal"
          variant="soft"
          sx={{
            flexGrow: 0,
            mx: "auto",
            "--ListItemDecorator-size": "48px",
            "--ListItem-paddingY": "1rem",
            borderRadius: "sm",
            mb: "1rem",
            justifyContent: "space-around",
          }}
        >
          <ListItem>{data.menteeFirstName}</ListItem>
          {/* <ListDivider inset="gutter" /> */}
          <ListItem>{data.taskName}</ListItem>
          {/* <ListDivider inset="gutter" /> */}
          <ListItem>Done</ListItem>
        </List>
      ))}
    </Box>
  );
};

export default SubmittedTask;
