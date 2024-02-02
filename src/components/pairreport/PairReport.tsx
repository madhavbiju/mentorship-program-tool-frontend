import { Box, Typography } from "@mui/joy";
import { Grid, Button } from "@mui/joy";
import ReportTaskTable from "../ReportTables/ReportTaskTable";
import MenteeTaskGraph from "../MenteeTaskGraph/MenteeTaskGraph";
import ReportMeetingsTable from "../ReportTables/ReportMeetingsTable";
import MenteeInfoBar from "../menteeInfoBar/MenteeInfoBar";

const PairReport = () => {
  return (
    <div>
      <Box>
        <br />
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <MenteeInfoBar />
        </Grid>
        <br />
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid xs={12} lg={6}>
            <Typography level="h4">Tasks</Typography>
            <ReportTaskTable />
            <br />
            <Typography level="h4">Meetings</Typography>
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

export default PairReport;
