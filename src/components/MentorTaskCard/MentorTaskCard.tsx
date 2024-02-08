import {
  Box,
  List,
  ListItem,
  ListItemDecorator,
  Avatar,
  ListDivider,
  Stack,
  Typography,
} from "@mui/joy";
import Grid from "@mui/joy/Grid";
import React from "react";

const taskData = [
  {
    menteeName: "Binoy",
    taskName: "task1",
    dueDate: "12/02/2024",
    status: "In progress",
  },
  {
    menteeName: "Joyal",
    taskName: "task2",
    dueDate: "13/02/2024",
    status: "In progress",
  },
];

const MentorTaskCard = () => {
  return (
    <Grid xs={12} md={12}>
      {taskData.map((data) => (
        <List
          orientation="horizontal"
          variant="soft"
          sx={{
            "--ListItemDecorator-size": "48px",
            "--ListItem-paddingY": "1rem",
            borderRadius: "sm",
            py: "2%",
            mb:"1rem",
            display: "flex",
            justifyContent: "space-around",
            // "&:hover": {
            //   backgroundColor: "grey"
            // }
          }}
        >
          <Stack>
            <Typography
              sx={{ display: "flex", justifyContent: "center" }}
              level="body-sm"
              style={{ fontSize: "10px" }}
            >
              Mentee
            </Typography>
            <ListItem>
              <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                {data.menteeName}
              </Typography>
            </ListItem>
          </Stack>

          <ListDivider inset="gutter" />
          <Stack>
            <Typography
              level="body-sm"
              sx={{ display: "flex", justifyContent: "center" }}
              style={{ fontSize: "10px" }}
            >
              Task name
            </Typography>
            <ListItem>
              <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                {data.taskName}
              </Typography>
            </ListItem>
          </Stack>

          <ListDivider inset="gutter" />

          <Stack>
            <Typography
              sx={{ display: "flex", justifyContent: "center", color: "red" }}
              level="body-sm"
              style={{ fontSize: "10px" }}
            >
              Due Date
            </Typography>
            <ListItem>
              <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                {data.dueDate}
              </Typography>
            </ListItem>
          </Stack>

          <ListDivider inset="gutter" />

          <Stack>
            <Typography
              sx={{ display: "flex", justifyContent: "center" }}
              level="body-sm"
              style={{ fontSize: "10px" }}
            >
              Status
            </Typography>
            <ListItem sx={{ color: "blue" }}>{data.status}</ListItem>
          </Stack>
        </List>
      ))}
    </Grid>
  );
};

export default MentorTaskCard;
