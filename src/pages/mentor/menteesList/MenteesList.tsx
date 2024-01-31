import { Box, Button, Dropdown, Menu, MenuButton, MenuItem, MenuList } from "@mui/joy";
import React from "react";
import MenteesListCard from "../../../components/MenteesList/MenteesListCard";
import Grid from "@mui/material/Grid";

const MenteesList = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", ml: 3, mt: 3 }}>
        <Dropdown>
          <MenuButton color="primary" sx={{borderRadius:10 ,px:"3%"}}>Sort</MenuButton>
          <Menu>
            <MenuItem>Choose item</MenuItem>
            <MenuList>Add item</MenuList>
            <MenuList>Add item</MenuList>
          </Menu>
        </Dropdown>
        <Dropdown>
          <MenuButton color="primary" sx={{borderRadius:10 ,mx:"3%",px:"3%"}}>Filter</MenuButton>
          <Menu>
            <MenuItem>Choose item</MenuItem>
            <MenuList>Add item</MenuList>
            <MenuList>Add item</MenuList>
          </Menu>
        </Dropdown>
      </Box>
      <Grid container spacing={1} sx={{ my: '5%' }}>
      <Grid item xs={12} sm={12} md={12}>
        <MenteesListCard />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <MenteesListCard />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <MenteesListCard />
      </Grid>
    </Grid>
    </Box>
  );
};

export default MenteesList;
