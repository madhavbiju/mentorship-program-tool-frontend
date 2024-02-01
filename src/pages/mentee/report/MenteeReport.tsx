import { Box, Typography } from "@mui/joy";
import { Grid, Button } from "@mui/joy";
import React from "react";
import MentorMenteeTable from "../../../components/MentorMenteeTable/MentorMenteeTable";
import AdminReportPieChart from "../../../components/PieChart/AdminReportPieChart";
import SortByMentorMenteeTable from "../../../components/Sort/SortByMentorMenteeTable";
import Mentor_Program_Status from "../../../components/Mentor_Program_Status.tsx/Mentor_Program_Status";
import ReportTaskTable from "../../../components/ReportTables/ReportTaskTable";
import MenteeTaskGraph from "../../../components/MenteeTaskGraph/MenteeTaskGraph";
import ReportMeetingsTable from "../../../components/ReportTables/ReportMeetingsTable";

const MenteeReport = () => {
  return (
    <div>
      <Box>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Grid xs={12} lg={2}>
            <Typography level={"h2"}>Report</Typography>
          </Grid>
          <Grid xs={12} lg={7}>
            <Mentor_Program_Status />
          </Grid>

          <Grid xs={12} lg={3}>
            <Button size="md">Download</Button>
          </Grid>
        </Grid>
        <br></br>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid xs={12} lg={6}>
            <ReportTaskTable />
            <br />
            <ReportMeetingsTable />
          </Grid>
          <Grid xs={12} lg={6}>
            <MenteeTaskGraph />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MenteeReport;
