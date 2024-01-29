import {
  List,
  ListItem,
  ListItemDecorator,
  Avatar,
  ListDivider,
  Box,
  Typography,
} from "@mui/joy";
import React from "react";
import { TasksNameAndDueDatePropType } from "./TasksNameAndDueDatePropType";

const TasksNameAndDueDate = ({
  taskName,
  submissionDate,
}: TasksNameAndDueDatePropType) => {
  return (
    <div>
      <List
        orientation="horizontal"
        variant="soft"
        sx={{
          flexGrow: 0,
          mx: "auto",
          "--ListItemDecorator-size": "48px",
          "--ListItem-paddingY": "1rem",
          "--ListItem-paddingX": "6rem",
          borderRadius: "sm",
          marginBottom: "10px",
          marginRight: "10px",
          marginTop: "10px",
          justifyContent: "center",
        }}
      >
        <ListItem>
          {" "}
          <Typography level="title-lg">{taskName}</Typography>
        </ListItem>
        <ListDivider inset="gutter" />

        <ListItem>
          <Box>
            <Typography level="title-sm">Due Date</Typography>
            <Typography level="title-lg">{submissionDate}</Typography>
          </Box>
        </ListItem>
      </List>
    </div>
  );
};

export default TasksNameAndDueDate;
