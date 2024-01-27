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
    <Box>
      <Box sx={{ marginRight: "10%" }}>
        <List
          orientation="horizontal"
          variant="soft"
          sx={{
            flexGrow: 0,
            mx: "auto",
            "--ListItemDecorator-size": "48px",
            "--ListItem-paddingY": "1rem",
            borderRadius: "sm",
            py: "2%",
            justifyContent: "center",
          }}
        >
          <ListItem sx={{ mr: 12 }}>
            <ListItemDecorator>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemDecorator>
          </ListItem>
          
          <Box sx={{ display: "flex" }}>
          <ListDivider inset="gutter" />
            <Stack>
              <Typography sx={{ml:9 }} level="body-sm" 
              style={{ fontSize: "10px"}}
              >Mentee</Typography>
              <ListItem sx={{ mx: 5 , paddingTop:1.5 }}>Boyd Burt </ListItem> 
            </Stack>
            
            <ListDivider inset="gutter" />
            <Stack>
            <Typography sx={{ml:9}} level="body-sm"  style={{ fontSize: "10px"}}>Program</Typography>
            <ListItem sx={{ mx: 4,  paddingTop:1.5 }}>Program Name</ListItem>
            </Stack>
            <ListDivider inset="gutter" />
            <Stack>
            <Typography sx={{ml:9 }} level="body-sm"  style={{ fontSize: "10px"}}>End date</Typography>
            <ListItem sx={{ ml: 4 , paddingTop:1.5 }}>12/02/2024</ListItem>
            </Stack>
          </Box>
        </List>
      </Box>
    </Box>
  );
};

export default MenteesListCard;
