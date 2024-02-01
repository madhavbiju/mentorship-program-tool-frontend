import { Box, Divider, Typography } from "@mui/joy";
import React, { useEffect, useState } from "react";
import GreetCard from "../../../components/GreetCard/GreetCard";
import MentorAndProgramCard from "../../../components/MentorAndProgramCard/MentorAndProgramCard";
import TasksNameAndDueDate from "../../../components/TasksNameAndDueDate/TasksNameAndDueDate";
import ProgramProgressCircularBar from "../../../components/ProgramProgressBar/ProgramProgressBar";
import { MentorNameAndProgramNameAPI } from "./API/MentorNameAndProgramNameAPI/MentorNameAndProgramNameAPI";
import { Grid } from "@mui/material";

const MenteeDashboard = () => {
  const [mentorName, setMentorName] = useState<string>("");
  const [programName, setProgramName] = useState<string>("");

  useEffect(() => {
    const fetchMentorAndProgramDetails = async () => {
      try {
        const menteeDetails = await MentorNameAndProgramNameAPI(3); // 3 is the Mentee id
        setMentorName(menteeDetails.mentorFirstName);
        setProgramName(menteeDetails.programName);
      } catch (error) {
        console.error("Error fetching mentee details:", error);
      }
    };

    fetchMentorAndProgramDetails();
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <GreetCard />
        </Grid>
        <Grid item xs={3} lg={2}>
          <MentorAndProgramCard
            mentorName={mentorName}
            programName={programName}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <ProgramProgressCircularBar />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography>Tasks</Typography>
              <TasksNameAndDueDate
                taskName={"Assignment 1"}
                submissionDate={"2024-04-23"}
              />
              <TasksNameAndDueDate
                taskName={"Assignment 2"}
                submissionDate={"2024-04-23"}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Meetings</Typography>
              <TasksNameAndDueDate
                taskName={"Assignment 1"}
                submissionDate={"2024-04-23"}
              />
              <TasksNameAndDueDate
                taskName={"Assignment 2"}
                submissionDate={"2024-04-23"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenteeDashboard;
