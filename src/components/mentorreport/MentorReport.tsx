import { Box, Typography } from "@mui/joy";
import { Grid, Button } from "@mui/joy";
import React from "react";
import MentorMenteeTable from "../MentorMenteeTable/MentorMenteeTable";
import ReportMeetingsTable from "../ReportTables/ReportMeetingsTable";
import ReportTaskTable from "../ReportTables/ReportTaskTable/ReportTaskTable";
import SelectMenteeDropDown from "../SelectMenteeDropDown/SelectMenteeDropDown";
import SortByMentorMenteeTable from "../Sort/SortByMentorMenteeTable";
import SortByReportMeetingsTable from "../Sort/SortByReportMeetingsTable";
import SortByReportTaskTable from "../Sort/SortByReportTaskTable";
import MentorReportGraph from "../MentorReportGraph/MentorReportGraph";
import MenteeProgramTable from "../MenteeProgramTable/MenteeProgramTable";
import PairReportTasksTable from "../PairReportTaskTable/PairReportTaskTable";
import PairTableHandler from "../PairTable/PairTableHandler";
import ReportTaskTableHandler from "../ReportTables/ReportTaskTable/ReportTaskTableHandler";
import ReportMeetingHandler from "../ReportMeetingsTable/ReportMeetingHandler";

const MentorReport = () => {
  return (
    <div>
      <Box>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid lg={12}>
            <Grid
              xs={12}
              lg={6}
              columnGap={1}
              container
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid>
                <Typography level={"h3"}>Programs</Typography>
              </Grid>

              <Grid lg={12}>
                <SortByMentorMenteeTable />
              </Grid>
            </Grid>

            <Grid xs={12} lg={12}>
              <PairTableHandler status={""} sort={"Name"} search={""} />
            </Grid>
          </Grid>
          {/* <Grid lg={6}>
            <MentorReportGraph />
          </Grid> */}
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
              <ReportTaskTableHandler sort={"Name"} />
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
              <ReportMeetingHandler sort={"title"} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MentorReport;
