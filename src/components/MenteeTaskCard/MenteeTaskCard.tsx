import {
  Box,
  List,
  ListItem,
  ListItemDecorator,
  Avatar,
  ListDivider,
  Stack,
  Typography,
  ListItemButton,
} from "@mui/joy";
import Grid from "@mui/joy/Grid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskProps, Tasks } from "./Types";
import SubmitTaskHandler from "../../pages/mentee/submitTask/SubmitTaskHandler";

const MenteeTaskCard = ({ tasks }: TaskProps) => {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const history = useNavigate();
  const handleClick = (task: Tasks) => {
    console.log(task.taskID);
    // setTaskData(task);
    if (task.taskStatus === 1) {
      history(`/mentee/tasks/submit/${task.taskID}`);
    }
  };
  return (
    <Grid xs={12} md={12}>
      {tasks.map((Tasks) => (
        <List
          orientation="horizontal"
          variant="soft"
          sx={{
            "--ListItemDecorator-size": "48px",
            "--ListItem-paddingY": "1rem",
            borderRadius: "sm",
            display: "flex",
            justifyContent: "space-around",
            mb: 1,
          }}
        >
          <ListItemButton
            onClick={() => handleClick(Tasks)}
            color="neutral"
            sx={{
              borderRadius: "sm",
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {/* <ListDivider inset="gutter" /> */}
            <Stack>
              <Typography
                level="body-sm"
                sx={{ display: "flex", justifyContent: "center" }}
                style={{ fontSize: "10px" }}
              >
                Task name
              </Typography>
              <ListItem>
                <Typography
                  sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {Tasks.taskName}
                </Typography>
              </ListItem>
            </Stack>

            {/* <ListDivider inset="gutter" /> */}

            <Stack>
              <Typography
                sx={{ display: "flex", justifyContent: "center", color: "red" }}
                level="body-sm"
                style={{ fontSize: "10px" }}
              >
                Due Date
              </Typography>
              <ListItem>
                <Typography
                  sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {formatDate(Tasks.endDate)}
                </Typography>
              </ListItem>
            </Stack>

            {/* <ListDivider inset="gutter" /> */}

            <Stack>
              <Typography
                sx={{ display: "flex", justifyContent: "center" }}
                level="body-sm"
                style={{ fontSize: "10px" }}
              >
                Status
              </Typography>
              <ListItem sx={{ color: "blue" }}>
                {Tasks.taskStatus === 1
                  ? "In Progress"
                  : Tasks.taskStatus === 6
                  ? "Completed"
                  : ""}
              </ListItem>
            </Stack>
          </ListItemButton>
        </List>
      ))}
    </Grid>
  );
};

export default MenteeTaskCard;
