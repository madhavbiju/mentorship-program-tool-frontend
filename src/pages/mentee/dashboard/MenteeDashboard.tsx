import { Box, Divider, Typography } from "@mui/joy";
import React, { useEffect, useState } from "react";
import GreetCard from "../../../components/GreetCard/GreetCard";
import MentorAndProgramCard from "../../../components/MentorAndProgramCard/MentorAndProgramCard";
import TasksNameAndDueDate from "../../../components/TasksNameAndDueDate/TasksNameAndDueDate";
import { MentorNameAndProgramNameAPI } from "./API/MentorNameAndProgramNameAPI/MentorNameAndProgramNameAPI";
import { Grid } from "@mui/material";
import ProgramProgressBar from "../../../components/ProgramProgressBar/ProgramProgressBar";

const MenteeDashboard = () => {
  const [mentorName, setMentorName] = useState<string>("");
  const [programName, setProgramName] = useState<string>("");

  useEffect(() => {
    const fetchMentorAndProgramDetails = async () => {
      try {
        const menteeDetails = await MentorNameAndProgramNameAPI(3); // 3 is the Mentee id
        setMentorName(menteeDetails.mentorFirstName);
        setProgramName(menteeDetails.programName);
        console.log("Hello world");
      } catch (error) {
        console.error("Error fetching mentee details:", error);
      }
    };

    fetchMentorAndProgramDetails();
  }, []);

  return (
    <Box>
      <Grid sx={{ display: "flex", alignItems: "center" }}>
        <Grid xs={12} lg={6}>
          <GreetCard />
        </Grid>
        <Grid xs={12} lg={6}>
          <MentorAndProgramCard
            mentorName={mentorName}
            programName={programName}
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
