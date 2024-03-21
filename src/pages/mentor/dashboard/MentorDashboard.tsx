import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Divider,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import React from "react";
import GreetCard from "../../../components/GreetCard/GreetCard";
import CountCard from "../../../components/CountCard/CountCard";
import MeetingCard from "../../../components/MeetingCard/MeetingCard";
import SubmittedTask from "../../../components/SubmittedTasks/SubmittedTask";
import { Grid } from "@mui/material";
import { ActiveMenteeCountData } from "./Types";
import MeetingCardHandler from "../../../components/MeetingCard/MeetingCardHandler";
import SubmittedTaskHandler from "../../../components/SubmittedTasks/SubmittedTaskHandler";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const MentorDashboard = ({ menteeCount }: ActiveMenteeCountData) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/mentor/home" style={{ color: "grey" }} aria-label="Home">
            <HomeRoundedIcon />
          </Link>
        </Breadcrumbs>
      </Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          // gap: '20px'
        }}
      >
        <Grid xs={12} md={4}>
          <GreetCard />
        </Grid>
        <Grid xs={12} md={3} sx={{ mr: { sx: 0, md: "150px" } }}>
          <CountCard title={"Active Mentees"} count={menteeCount}></CountCard>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        md={12}
        container
        rowGap={1}
        columnGap={1}
        height="60vh"
        mt={1}
        display={"flex"}
        flexDirection={{ xs: "row", lg: "column" }}
      >
        <Grid
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MeetingCardHandler />
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SubmittedTaskHandler />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MentorDashboard;
