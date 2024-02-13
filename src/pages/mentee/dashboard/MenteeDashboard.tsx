import { Box, Divider, Typography } from "@mui/joy";
import React, { useEffect, useState } from "react";
import GreetCard from "../../../components/GreetCard/GreetCard";
import MentorAndProgramCard from "../../../components/MentorAndProgramCard/MentorAndProgramCard";
import { Grid } from "@mui/material";
import ProgramProgressBar from "../../../components/ProgramProgressBar/ProgramProgressBar";
import MeetingCardHandler from "../../../components/MeetingCard/MeetingCardHandler";
import PendingTaskHandler from "../../../components/PendingTasks/PendingTaskHandler";
import ProgramProgressBarHandler from "../../../components/ProgramProgressBar/ProgramProgressBarHandler";
import MentorAndProgramCardHandler from "../../../components/MentorAndProgramCard/MentorAndProgramCardHandler";

const MenteeDashboard = () => {
  return (
    <Box>
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
          <MentorAndProgramCardHandler />
        </Grid>
      </Grid>

      <Divider />
      <br />
      <ProgramProgressBarHandler />
      <br />
      <Grid columnGap={2} sx={{ display: "flex" }} container>
        <Grid xs={12} lg={6}>
          <PendingTaskHandler />
        </Grid>
        <Grid xs={12} lg={5}>
          <MeetingCardHandler />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenteeDashboard;
