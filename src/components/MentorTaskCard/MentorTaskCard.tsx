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
    menteeName: "Mentee1",
    taskName: "task1",
    dueDate: "12/11/2024",
    status: "In progress",
  },
  {
    menteeName: "Mentee2",
    taskName: "task2",
    dueDate: "13/11/2024",
    status: "In progress",
  },
  {
    menteeName: "Mentee3",
    taskName: "task3",
    dueDate: "14/11/2024",
    status: "In progress",
  },
  {
    menteeName: "Mentee4",
    taskName: "task4",
    dueDate: "02/11/2024",
    status: "Completed",
  },
  {
    menteeName: "Mentee5",
    taskName: "task5",
    dueDate: "02/11/2024",
    status: "Completed",
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
