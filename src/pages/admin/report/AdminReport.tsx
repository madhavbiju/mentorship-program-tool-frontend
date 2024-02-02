import { Button, Divider, Grid, Typography } from "@mui/joy";
import { Box, flexbox } from "@mui/system";
import React from "react";
import MentorMenteeTable from "../../../components/MentorMenteeTable/MentorMenteeTable";
import MentorReportPieChart from "../../../components/PieChart/AdminReportPieChart";
import ReportTaskTable from "../../../components/ReportTables/ReportTaskTable";
import MeetingsTable from "../../../components/ReportTables/ReportMeetingsTable";
import { end } from "@popperjs/core";
import BandHighlight from "../../../components/PieChart/AdminReportPieChart";
import Sort from "../../../components/Sort/SortByMentorMenteeTable";
import SortByMentorMenteeTable from "../../../components/Sort/SortByMentorMenteeTable";
import SortByReportTaskTable from "../../../components/Sort/SortByReportTaskTable";
import SelectMenteeDropDown from "../../../components/SelectMenteeDropDown/SelectMenteeDropDown";
import SortByReportMeetingsTable from "../../../components/Sort/SortByReportMeetingsTable";
import ReportMeetingsTable from "../../../components/ReportTables/ReportMeetingsTable";
import AdminReportPieChart from "../../../components/PieChart/AdminReportPieChart";

const AdminReport = () => {
  return (
    <div>
      <Box>
        <Grid container sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Grid xs={12} lg={9}>
            <Typography level={"h2"}>Report</Typography>
          </Grid>

          <Grid xs={12} lg={3}>
            <Button size="md">Download</Button>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            xs={12}
            lg={2}
            container
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
            <Grid xs={12} lg={7}>
              <MentorMenteeTable />
            </Grid>
            <Grid xs={12} lg={5}>
              <AdminReportPieChart />
            </Grid>
          </Grid>
        </Grid>
        <br />

        <Grid container>
          <Grid
            xs={12}
            lg={3}
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid>
              <Typography level={"h3"}>Tasks</Typography>
            </Grid>

            <Grid>
              <SortByReportTaskTable />
            </Grid>
          </Grid>

          <Grid>
            <Grid xs={12} lg={11}>
              <ReportTaskTable />
            </Grid>
          </Grid>
        </Grid>
        <br />

        <Grid container>
          <Grid
            xs={12}
            lg={4}
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid>
              <Typography level={"h3"}>Meetings</Typography>
            </Grid>

            <Grid>
              <SortByReportMeetingsTable />
            </Grid>
          </Grid>

          <Grid>
            <Grid xs={12} lg={11}>
              <ReportMeetingsTable />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AdminReport;
