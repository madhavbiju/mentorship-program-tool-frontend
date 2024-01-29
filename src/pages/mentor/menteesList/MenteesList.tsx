import { Box, Button, Dropdown, Menu, MenuButton, MenuItem, MenuList } from "@mui/joy";
import React from "react";
import MenteesListCard from "../../../components/MenteesList/MenteesListCard";

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
      <Box sx={{my:"5%", mx:"2%"}} >
        <MenteesListCard  />
        <br />
        <MenteesListCard/>
        <br/>
        <MenteesListCard/>
      </Box>
    </Box>
  );
};

export default MenteesList;
