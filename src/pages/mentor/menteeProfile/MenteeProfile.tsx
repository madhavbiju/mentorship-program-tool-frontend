import {
  Box,
  AspectRatio,
  Typography,
  ButtonGroup,
  Button,
  Grid,
  Breadcrumbs,
} from "@mui/joy";
import { Avatar, Stack } from "@mui/joy";
import { Divider } from "@mui/material";
import React, { useState } from "react";
import { Mentee, menteeProfileProp } from "./Types";
import ProgressGrid from "./ProgressGrid";
import TasksGrid from "./TasksGrid";
import ReportGrid from "./ReportGrid";
import { Link } from "react-router-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const MenteeProfile = ({ menteeData }: menteeProfileProp) => {
  const [activeGrid, setActiveGrid] = useState("Progress");

  const renderGrid = () => {
    switch (activeGrid) {
      case "Progress":
        return <ProgressGrid menteeData={menteeData} />;
      case "Tasks":
        return <TasksGrid programID={menteeData.programID} />;
      case "Report":
        return <ReportGrid />;
      default:
        return null;
    }
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/mentor/home" style={{ color: "grey" }}>
            <HomeRoundedIcon />
          </Link>
          <Link
            to="/mentor/mentees"
            style={{ color: "grey", textDecoration: "none" }}
          >
            <Typography color="neutral" fontWeight={500} fontSize={12}>
              Mentees
            </Typography>
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Profile
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: 400,
          height: 150,

          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <AspectRatio
          ratio="1"
          sx={{ minWidth: 120, borderRadius: "50%", width: 120, height: 120 }}
        >
          <Avatar
            sx={{
              width: "100%",
              height: "100%",
              fontSize: "3rem",
            }}
          >
            {menteeData.menteeFirstName.charAt(0) +
              menteeData.menteeLastName.charAt(0)}
          </Avatar>
        </AspectRatio>
        <Stack sx={{ ml: 2 }}>
          <Typography level="title-lg">
            {menteeData.menteeFirstName + " " + menteeData.menteeLastName}
          </Typography>
          <Typography level="h3">{menteeData.programName}</Typography>
        </Stack>
      </Box>
      <Divider />
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 1,
        }}
      >
        <ButtonGroup size="lg" variant="soft">
          <Button onClick={() => setActiveGrid("Progress")}>Progress</Button>
          <Button onClick={() => setActiveGrid("Tasks")}>Tasks</Button>
          <Button onClick={() => setActiveGrid("Report")}>Report</Button>
        </ButtonGroup>
      </Grid>

      {renderGrid()}
    </>
  );
};

export default MenteeProfile;
