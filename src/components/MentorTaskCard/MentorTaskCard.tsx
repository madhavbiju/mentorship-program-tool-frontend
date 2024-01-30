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
import Grid from "@mui/material/Grid";
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

        <Stack >
            <Typography sx={{display:"flex", justifyContent:"center"}} level="body-sm">Mentee</Typography>
            <ListItem sx={{  paddingTop:1.5 }}>Mahfooz Ahamed</ListItem>
            </Stack>
          
          <ListDivider inset="gutter" />
            <Stack >
              <Typography level="body-sm" sx={{display:"flex", justifyContent:"center"}}
              style={{ fontSize: "10px"}}
              >Task name</Typography>
              <ListItem sx={{  paddingTop:1.5 }}>Task name </ListItem> 
            </Stack>
            
            <ListDivider inset="gutter" />

            <Stack >
            <Typography sx={{display:"flex", justifyContent:"center",color: "red"}}  level="body-sm"  >Due Date</Typography>
            <ListItem sx={{   paddingTop:1.5 }}>12/02/2024</ListItem>
            </Stack>

            <ListDivider inset="gutter" />

            <Stack >
            <Typography sx={{display:"flex", justifyContent:"center"}} level="body-sm">Status</Typography>
            <ListItem sx={{  paddingTop:1.5 ,color: "blue" }}>InProgress</ListItem>
            </Stack>
      </List>
    </Grid>
  );
};

export default MentorTaskCard;
