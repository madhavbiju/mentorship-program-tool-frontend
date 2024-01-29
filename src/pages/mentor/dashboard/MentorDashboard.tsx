import { Box, Card, CardContent, Divider, Typography } from "@mui/joy";
import React from "react";
import GreetCard from "../../../components/GreetCard/GreetCard";
import CountCard from "../../../components/CountCard/CountCard";
import MeetingCard from "../../../components/MeetingCard/MeetingCard";
import SubmittedTask from "../../../components/SubmittedTasks/SubmittedTask";

const MentorDashboard = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          // alignItems: 'center',
          flexDirection: "row",
          // justifyContent:'right'
          // gap: '20px'
          marginLeft: "5%",
          marginTop: "2%",
        }}
      >
        <GreetCard />

        <CountCard
          title={"mentee Count"}
          count={5}
          sx={(theme) => ({
            width: 1 / 5,
            height: 100,
            marginLeft: "25%",
            marginTop: "3%",
          })}
        ></CountCard>
      </Box>
      <Divider />

      <Box sx={{display:"flex"}}>

      <Box sx={{ width: 1/2, marginTop:3}}>
        <Typography level="h3">Meetings</Typography>
        <MeetingCard />
        <MeetingCard />
        <MeetingCard/>
      </Box>

     <Box sx={{width:1/2, marginTop:3, paddingLeft:2}}>
     <Typography level="h3">Submitted Task</Typography>
     <SubmittedTask/>
     <SubmittedTask/>
      </Box>

      </Box>

    </Box>
  );
};

export default MentorDashboard;
