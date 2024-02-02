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

const MentorTaskCard = () => {
  return (
    <Grid xs={12} md={12}>
      <List
        orientation="horizontal"
        variant="soft"
        sx={{
          "--ListItemDecorator-size": "48px",
          "--ListItem-paddingY": "1rem",
          borderRadius: "sm",
          py: "2%",
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
              Mahfooz Ahamed
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
            Task name </Typography>
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
          12/02/2024</Typography>
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
          <ListItem sx={{ color: "blue" }}>
            InProgress</ListItem>
        </Stack>
      </List>
    </Grid>
  );
};

export default MentorTaskCard;
