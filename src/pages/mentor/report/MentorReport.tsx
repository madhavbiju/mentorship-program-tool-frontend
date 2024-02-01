import { Button, Grid, Typography } from "@mui/joy";
import { Box, flexbox } from "@mui/system";
import React from "react";
import MentorMenteeTable from "../../../components/MentorMenteeTable/MentorMenteeTable";
import MentorReportPieChart from "../../../components/PieChart/MentorReportPieChart";
import ReportTaskTable from "../../../components/ReportTables/ReportTaskTable";
import MeetingsTable from "../../../components/ReportTables/ReportMeetingsTable";
import { end } from "@popperjs/core";
import BandHighlight from "../../../components/PieChart/MentorReportPieChart";
import SortByMentorMenteeTable from "../../../components/Sort/SortByMentorMenteeTable";

const MentorReport = () => {
  return (
    <div>
      <Box>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid xs={3}>
            <Typography level={"h2"}>Report</Typography>
          </Grid>

          <Grid xs={3} md={3}>
            <Button size="md">Download</Button>
          </Grid>
        </Grid>

        <Grid container md={8}>
          <Grid
            container
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid>
              <Typography level={"h3"}>Pairs</Typography>
            </Grid>
            <Grid>
              <SortByMentorMenteeTable />
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12} md={7}>
              <MentorMenteeTable />
            </Grid>
          </Grid>

          <Grid xs={5} md={5}>
            <MentorReportPieChart />
          </Grid>
        </Grid>

        <Grid container>
          <Grid>
            <Typography level={"h3"}>Tasks</Typography>
          </Grid>
          <Grid container>
            <Grid></Grid>

            <Grid></Grid>
          </Grid>

          <Grid container>
            <Grid xs={12} md={8}>
              <ReportTaskTable />
            </Grid>
            <Grid></Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid>
            <Typography level={"h3"}>Meetings</Typography>
          </Grid>
          <Grid container>
            <Grid></Grid>

            <Grid></Grid>
          </Grid>

          <Grid container>
            <Grid xs={12} md={8}>
              <MeetingsTable />
            </Grid>
            <Grid></Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MentorReport;
