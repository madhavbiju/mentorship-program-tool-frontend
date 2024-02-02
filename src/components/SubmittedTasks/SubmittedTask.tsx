import { Box, List, ListItem, ListDivider } from "@mui/joy";
import React from "react";

const submittedTaskData = [
  { menteeName: "Mentee1", programName: "Program1", taskName: "Task1" },
  { menteeName: "Mentee2", programName: "Program2", taskName: "Task2" },
  { menteeName: "Mentee3", programName: "Program3", taskName: "Task3" },
  { menteeName: "Mentee4", programName: "Program4", taskName: "Task4" },
  // { menteeName: "Mentee5", programName: "Program5", taskName: "Task5" },
  // { meetingName: "Meeting6", time: "11:10", date: "13/02/2024" },
  // { meetingName: "Meeting7", time: "10:10", date: "14/02/2024" },
];

const SubmittedTask = () => {
  return (
    <Box sx={{ paddingTop: "2%" }}>
      {submittedTaskData.map((data)=>(
        <List
        orientation="horizontal"
        variant="soft"
        sx={{
          flexGrow: 0,
          mx: "auto",
          "--ListItemDecorator-size": "48px",
          "--ListItem-paddingY": "1rem",
          borderRadius: "sm",
          mb: "1rem",
          justifyContent: "space-around",
        }}
      >
        <ListItem>{data.menteeName}</ListItem>
        <ListDivider inset="gutter" />
        <ListItem>{data.programName}</ListItem>
        <ListDivider inset="gutter" />
        <ListItem>{data.taskName}</ListItem>
      </List>

      ))}
      
    </Box>
  );
};

export default SubmittedTask;
