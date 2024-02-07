import { Box, Divider, Typography } from "@mui/joy";
import React, { useEffect, useState } from "react";
import GreetCard from "../../../components/GreetCard/GreetCard";
import MentorAndProgramCard from "../../../components/MentorAndProgramCard/MentorAndProgramCard";
import TasksNameAndDueDate from "../../../components/TasksNameAndDueDate/TasksNameAndDueDate";
import { Grid } from "@mui/material";
import ProgramProgressBar from "../../../components/ProgramProgressBar/ProgramProgressBar";

const MenteeDashboard = () => {
  return (
    <Box>
      <Grid sx={{ display: "flex", alignItems: "center" }}>
        <Grid xs={12} lg={6}>
          <GreetCard name={"Mentee"} />
        </Grid>
        <Grid xs={12} lg={6}>
          <MentorAndProgramCard
            mentorName={"Shiyas"}
            programName={"React Js"}
          />
        </Grid>
      </Grid>
      <Divider />
      <br />
      <ProgramProgressBar />
      <br />
      <Grid columnGap={2} sx={{ display: "flex" }} container>
        <Grid xs={12} lg={5}>
          <Typography>Tasks</Typography>
          <div style={{ marginBottom: "10px" }}>
            <TasksNameAndDueDate
              taskName={"Assignment 1"}
              submissionDate={"2024-04-23"}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <TasksNameAndDueDate
              taskName={"Assignment 2"}
              submissionDate={"2024-04-23"}
            />
          </div>
        </Grid>
        <Grid xs={12} lg={5}>
          <Typography>Meetings</Typography>
          <div style={{ marginBottom: "10px" }}>
            <TasksNameAndDueDate
              taskName={"Meeting 1"}
              submissionDate={"2024-04-23"}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <TasksNameAndDueDate
              taskName={"Meeting 2"}
              submissionDate={"2024-04-23"}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenteeDashboard;
