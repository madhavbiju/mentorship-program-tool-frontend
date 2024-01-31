import { Button, Grid, Typography } from "@mui/joy";
import { Box, flexbox } from "@mui/system";
import React from "react";
import MentorMenteeTable from "../../../components/MentorMenteeTable/MentorMenteeTable";
import MentorReportPieChart from "../../../components/PieChart/MentorReportPieChart";
import ReportTaskTable from "../../../components/ReportTables/ReportTaskTable";
import MeetingsTable from "../../../components/ReportTables/MeetingsTable";
import { end } from "@popperjs/core";
import BandHighlight from "../../../components/PieChart/MentorReportPieChart";

const MentorReport = () => {
  return (
    <div>
      <Box>
        <Grid container>
          <Grid>
            <Typography level={"h2"}>Report</Typography>
          </Grid>

          <Grid>
            <Button size="md">Download</Button>
          </Grid>
        </Grid>

        <Grid container>
          <Grid sx={{ display: "flex" }}>
            <Typography level={"h3"}>Pairs</Typography>
            <Button size="sm">filter</Button>
            <Button size="sm">sort</Button>
          </Grid>
        </Grid>

        <Grid container xs={12} md={8}>
          <MentorMenteeTable />
        </Grid>
        <Grid>
          <BandHighlight></BandHighlight>
        </Grid>

        <Grid container>
          <Grid>
            <Typography level={"h3"}>Tasks</Typography>
          </Grid>
          <Grid container>
            <Grid>
              <Button size="sm">filter</Button>
            </Grid>

            <Grid>
              <Button size="sm">sort</Button>
            </Grid>
          </Grid>

          <Grid container>
            <Grid xs={12} md={8}>
              <ReportTaskTable />
            </Grid>
            <Grid>
              <MentorReportPieChart />
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid>
            <Typography level={"h3"}>Meetings</Typography>
          </Grid>
          <Grid container>
            <Grid>
              <Button size="sm">filter</Button>
            </Grid>

            <Grid>
              <Button size="sm">sort</Button>
            </Grid>
          </Grid>

          <Grid container>
            <Grid xs={12} md={8}>
              <MeetingsTable />
            </Grid>
            <Grid>{/* <MentorReportPieChart /> */}</Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MentorReport;
