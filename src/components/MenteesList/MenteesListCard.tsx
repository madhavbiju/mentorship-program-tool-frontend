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

const MenteesListCard = () => {
  return (
    
      <Grid  xs={12}>
        <List
          orientation="horizontal"
          variant="soft"
          sx={{
            "--ListItemDecorator-size": "48px",
            "--ListItem-paddingY": "1rem",
            borderRadius: "sm",
            py: "2%",
            display: "flex" ,
            justifyContent: "space-around",
          }}
        >
          
          <ListItem >
            <ListItemDecorator>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemDecorator>
          </ListItem>
          
          <ListDivider inset="gutter" />
            <Stack >
              <Typography level="body-sm" sx={{display:"flex", justifyContent:"center"}}
              style={{ fontSize: "10px"}}
              >Mentee</Typography>
              <ListItem sx={{  paddingTop:1.5 }}>Boyd Burt </ListItem> 
            </Stack>
            
            <ListDivider inset="gutter" />

            <Stack >
            <Typography sx={{display:"flex", justifyContent:"center"}}  level="body-sm"  >Program</Typography>
            <ListItem sx={{   paddingTop:1.5 }}>Program Name</ListItem>
            </Stack>

            <ListDivider inset="gutter" />

            <Stack >
            <Typography sx={{display:"flex", justifyContent:"center"}} level="body-sm">End date</Typography>
            <ListItem sx={{  paddingTop:1.5 }}>12/02/2024</ListItem>
            </Stack>
          
        </List>
      </Grid>
   
  );
};

export default MenteesListCard;
