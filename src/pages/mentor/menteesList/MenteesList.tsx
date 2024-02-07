import {
  Box,
  Breadcrumbs,
  Button,
  Dropdown,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/joy";
import React from "react";
import MenteesListCard from "../../../components/MenteesList/MenteesListCard";
import Grid from "@mui/material/Grid";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenteesListHandler from "../../../components/MenteesList/MenteesListHandler";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const MenteesList = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Mentees
          </Typography>
        </Breadcrumbs>
      </Box>
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
          <MenteesListHandler />
        </Grid>
        {/* <Grid item xs={12} sm={12} md={12}>
          <MenteesListCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <MenteesListCard />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default MenteesList;
