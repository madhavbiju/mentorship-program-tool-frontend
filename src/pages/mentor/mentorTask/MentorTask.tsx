import {
  Box,
  Dropdown,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  Button,
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/joy";
import React from "react";
import MenteesListCard from "../../../components/MenteesList/MenteesListCard";
import MentorTaskCard from "../../../components/MentorTaskCard/MentorTaskCard";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const MentorTask = () => {
  const history = useNavigate();

  const handleClick = () => {
    history("/mentor/tasks/create");
  };
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
            Tasks
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          Tasks
        </Typography>
        <Button
          color="primary"
          startDecorator={<AddIcon />}
          size="sm"
          onClick={handleClick}
        >
          Create Task
        </Button>
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
          <MentorTaskCard />
        </Grid>
        {/* <Grid item xs={12} sm={12} md={12}>
          <MentorTaskCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <MentorTaskCard />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default MentorTask;
