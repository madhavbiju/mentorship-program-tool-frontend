import { Box, Card, CardContent, Divider, Typography } from "@mui/joy";
import React from "react";
import GreetCard from "../../../components/GreetCard/GreetCard";
import CountCard from "../../../components/CountCard/CountCard";
import MeetingCard from "../../../components/MeetingCard/MeetingCard";
import SubmittedTask from "../../../components/SubmittedTasks/SubmittedTask";
import { Grid } from "@mui/material";

const MentorDashboard = () => {
  return (
    <Box sx={{ width: "100%" }}>
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
          <CountCard title={"mentee Count"} count={5}></CountCard>
        </Grid>
      </Grid>
      <Divider />

      <Grid container spacing={2} sx={{ marginTop: ".5%" }}>
        <Grid item xs={12} lg={6} sx={{ marginBottom: "2%" }}>
          <Typography level="h3" sx={{ marginBottom: "1rem" }}>
            Meetings
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MeetingCard />
            </Grid>
            {/* <Grid item xs={12}>
              <MeetingCard />
            </Grid>
            <Grid item xs={12}>
              <MeetingCard />
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ marginBottom: "2%" }}>
          <Typography level="h3" sx={{ marginBottom: "1rem" }}>
            Submitted Task
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SubmittedTask />
            </Grid>
            {/* <Grid item xs={12}>
              <SubmittedTask />
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MentorDashboard;
