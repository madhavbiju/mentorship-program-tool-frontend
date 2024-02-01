import { Home, Person } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Grid,
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/joy";
import React from "react";

const MenteeInfoBar = () => {
  return (
    <div>
      <Grid
        container
        columnGap={1}
        sx={{ display: "flex", alignContent: "center" }}
      >
        <List orientation="horizontal">
          <ListItem role="none">
            <Typography level="body-xs"> Mentee:</Typography>
            <Typography level="title-sm"> Shiyas</Typography>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <Typography level="body-xs"> Program:</Typography>
            <Typography level="title-sm"> React Js</Typography>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <Typography level="body-xs"> Status:</Typography>
            <Typography level="title-sm"> Active</Typography>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <Typography level="body-xs"> Ends On:</Typography>
            <Typography level="title-sm"> 12/05/2024</Typography>
          </ListItem>
        </List>
      </Grid>
    </div>
  );
};

export default MenteeInfoBar;
