import { Box, Dropdown, MenuButton, Menu, MenuItem, MenuList } from "@mui/joy";
import React from "react";
import MenteesListCard from "../../../components/MenteesList/MenteesListCard";
import MentorTaskCard from "../../../components/MentorTaskCard/MentorTaskCard";
import Grid from "@mui/material/Grid";

const MentorTask = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", ml: 3, mt: 3 }}>
        <Dropdown>
          <MenuButton color="primary" sx={{ borderRadius: 10, px: "3%" }}>
            Sort
          </MenuButton>
          <Menu>
            <MenuItem>Choose item</MenuItem>
            <MenuList>Add item</MenuList>
            <MenuList>Add item</MenuList>
          </Menu>
        </Dropdown>
        <Dropdown>
          <MenuButton
            color="primary"
            sx={{ borderRadius: 10, mx: "3%", px: "3%" }}
          >
            Filter
          </MenuButton>
          <Menu>
            <MenuItem>Choose item</MenuItem>
            <MenuList>Add item</MenuList>
            <MenuList>Add item</MenuList>
          </Menu>
        </Dropdown>
      </Box>

      <Grid container spacing={1} sx={{ my: "5%" }}>
        <Grid item xs={12} sm={12} md={12}>
          <MentorTaskCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <MentorTaskCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <MentorTaskCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MentorTask;
