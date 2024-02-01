import { Box, Typography } from "@mui/joy";
import { Grid, Button } from "@mui/joy";
import React from "react";
import MentorMenteeTable from "../../../components/MentorMenteeTable/MentorMenteeTable";
import ReportMeetingsTable from "../../../components/ReportTables/ReportMeetingsTable";
import ReportTaskTable from "../../../components/ReportTables/ReportTaskTable";
import SelectMenteeDropDown from "../../../components/SelectMenteeDropDown/SelectMenteeDropDown";
import SortByMentorMenteeTable from "../../../components/Sort/SortByMentorMenteeTable";
import SortByReportMeetingsTable from "../../../components/Sort/SortByReportMeetingsTable";
import SortByReportTaskTable from "../../../components/Sort/SortByReportTaskTable";
import MentorReportGraph from "../../../components/MentorReportGraph/MentorReportGraph";
import MenteeProgramTable from "../../../components/MenteeProgramTable/MenteeProgramTable";

const MentorReport = () => {
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
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid lg={6}>
            <Grid
              xs={12}
              lg={6}
              columnGap={1}
              container
              sx={{ display: "flex" }}
            >
              <Grid>
                <Typography level={"h3"}>Programs</Typography>
              </Grid>

              <Grid>
                <SortByMentorMenteeTable />
              </Grid>
            </Grid>

            <Grid xs={12} lg={6}>
              <MenteeProgramTable />
            </Grid>
          </Grid>
          <Grid lg={6}>
            <MentorReportGraph />
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

export default MentorReport;
