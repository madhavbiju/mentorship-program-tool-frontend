import { Button, Divider, Grid, Typography } from "@mui/joy";
import { Box, flexbox } from "@mui/system";
import React from "react";
import MentorMenteeTable from "../MentorMenteeTable/MentorMenteeTable";
import MentorReportPieChart from "../PieChart/AdminReportPieChart";
import ReportTaskTable from "../ReportTables/ReportTaskTable/ReportTaskTable";
import MeetingsTable from "../ReportTables/ReportMeetingsTable";
import { end } from "@popperjs/core";
import BandHighlight from "../PieChart/AdminReportPieChart";
import Sort from "../Sort/SortByMentorMenteeTable";
import SortByMentorMenteeTable from "../Sort/SortByMentorMenteeTable";
import SortByReportTaskTable from "../Sort/SortByReportTaskTable";
import SelectMenteeDropDown from "../SelectMenteeDropDown/SelectMenteeDropDown";
import SortByReportMeetingsTable from "../Sort/SortByReportMeetingsTable";
import ReportMeetingsTable from "../ReportTables/ReportMeetingsTable";
import AdminReportPieChart from "../PieChart/AdminReportPieChart";
import MentorMenteeTableHandler from "../MentorMenteeTable/MentorMenteeTableHandler";
import ReportTaskTableHandler from "../ReportTables/ReportTaskTable/ReportTaskTableHandler";

const AdminReport = () => {
  return (
    <div>
      <Box>
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
              <MentorMenteeTableHandler />
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
              <ReportTaskTableHandler />
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
