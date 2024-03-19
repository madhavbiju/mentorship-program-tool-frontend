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
import { TaskProps } from "./Types";

const MentorTaskCard = ({ tasks }: TaskProps) => {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
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
            py: "2%",
            mb: "1rem",
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
                <Typography>{Tasks.menteeFirstName} </Typography>
                <Typography>{Tasks.menteeLastName}</Typography>
              </Typography>
            </ListItem>
          </Stack>

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
              <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
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
              <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
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
                : Tasks.taskStatus === 8
                ? "Completed"
                : ""}
            </ListItem>
          </Stack>
        </List>
      ))}
    </Grid>
  );
};

export default MentorTaskCard;
