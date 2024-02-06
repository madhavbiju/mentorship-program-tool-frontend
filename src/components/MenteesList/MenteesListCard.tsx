import { People } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemDecorator,
  Avatar,
  ListDivider,
  Typography,
  Grid,
  Stack,
} from "@mui/joy";
import React from "react";

const menteesData = [
  {
    image: "/static/images/avatar/1.jpg",
    menteeName: "Mentee1",
    programName: "Program1",
    endDate: "12/11/2024",
  },
  {
    image: "/static/images/avatar/1.jpg",
    menteeName: "Mentee2",
    programName: "Program2",
    endDate: "13/11/2024",
  },
  {
    image: "/static/images/avatar/1.jpg",
    menteeName: "Mentee3",
    programName: "Program3",
    endDate: "14/11/2024",
  },
  {
    image: "/static/images/avatar/1.jpg",
    menteeName: "Mentee4",
    programName: "Program4",
    endDate: "02/11/2024",
  },
];

const MenteesListCard = () => {
  return (
    <Grid xs={12}>
      {menteesData.map((data) => (
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
            mb:"1rem"
          }}
        >
          <ListItem sx={{ pt: "18px", pb: "12px" }}>
            <ListItemDecorator>
              <Avatar src={data.image} />
            </ListItemDecorator>
          </ListItem>

          <ListDivider inset="gutter" />
          <Stack>
            <Typography
              level="body-sm"
              sx={{ display: "flex", justifyContent: "center" }}
              style={{ fontSize: "10px" }}
            >
              Mentee
            </Typography>
            <ListItem sx={{ paddingTop: 1.5 }}>{data.menteeName} </ListItem>
          </Stack>

          <ListDivider inset="gutter" />

          <Stack>
            <Typography
              sx={{ display: "flex", justifyContent: "center" }}
              level="body-sm"
              style={{ fontSize: "10px" }}
            >
              Program
            </Typography>
            <ListItem sx={{ paddingTop: 1.5 }}>{data.programName}</ListItem>
          </Stack>

          <ListDivider inset="gutter" />

          <Stack>
            <Typography
              sx={{ display: "flex", justifyContent: "center" }}
              level="body-sm"
              style={{ fontSize: "10px" }}
            >
              End date
            </Typography>
            <ListItem sx={{ paddingTop: 1.5 }}>{data.endDate}</ListItem>
          </Stack>
        </List>
      ))}
    </Grid>
  );
};

export default MenteesListCard;
