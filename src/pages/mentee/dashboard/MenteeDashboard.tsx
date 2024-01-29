import { Box, Divider, Typography } from "@mui/joy";
import React, { useEffect, useState } from "react";
import GreetCard from "../../../components/GreetCard/GreetCard";
import MentorAndProgramCard from "../../../components/MentorAndProgramCard/MentorAndProgramCard";
import TasksNameAndDueDate from "../../../components/TasksNameAndDueDate/TasksNameAndDueDate";
import ProgramProgressCircularBar from "../../../components/ProgramProgressBar/ProgramProgressBar";
import ProgramProgressBar from "../../../components/ProgramProgressBar/ProgramProgressBar";
import { MentorNameAndProgramNameAPI } from "./API/MentorNameAndProgramNameAPI/MentorNameAndProgramNameAPI";

const MenteeDashboard = () => {
  const [mentorName, setMentorName] = useState<string>("");
  const [programName, setProgramName] = useState<string>("");

  useEffect(() => {
    const fetchMentorAndProgramDetails = async () => {
      try {
        const menteeDetails = await MentorNameAndProgramNameAPI(3); // 3 is the Mentee id
        setMentorName(menteeDetails.mentorFirstName);
        console.log(menteeDetails.mentorFirstName);
        setProgramName(menteeDetails.programName);
      } catch (error) {
        console.error("Error fetching mentee details:", error);
      }
    };

    fetchMentorAndProgramDetails();
  }, []);
  return (
    <div>
      <Box className="mainBox" sx={{ width: "100%" }}>
        <Box
          className="UpperBox"
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Box width="50%">
            <GreetCard />
          </Box>
          <Box>
            <MentorAndProgramCard
              mentorName={mentorName}
              programName={programName}
            />
          </Box>
        </Box>

        <Divider />
        <br />
        <ProgramProgressBar />
        <br />

        <Box className="LowerBox">
          <Box className="TaskAndMeetingsBox" display="flex">
            <Box className="TasksBox" sx={{ width: 1 / 2 }}>
              <Typography level="h3">Tasks</Typography>
              <TasksNameAndDueDate
                taskName={"Assignment 1"}
                submissionDate={"2024-04-23"}
              />
              <TasksNameAndDueDate
                taskName={"Assignment 2"}
                submissionDate={"2024-04-23"}
              />
            </Box>
            <Box className="MeetingsBox" sx={{ width: 1 / 2 }}>
              <Typography level="h3">Meetings</Typography>
              <TasksNameAndDueDate
                taskName={"Assignment 1"}
                submissionDate={"2024-04-23"}
              />
              <TasksNameAndDueDate
                taskName={"Assignment 2"}
                submissionDate={"2024-04-23"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MenteeDashboard;
