import { Box, Typography } from "@mui/joy";
import { Grid, Button } from "@mui/joy";
import ReportTaskTable from "../../../components/ReportTables/ReportTaskTable";
import MenteeTaskGraph from "../../../components/MenteeTaskGraph/MenteeTaskGraph";
import ReportMeetingsTable from "../../../components/ReportTables/ReportMeetingsTable";
import MenteeInfoBar from "../../../components/menteeInfoBar/MenteeInfoBar";

const PairReport = () => {
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
            <MenteeInfoBar />
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

export default PairReport;
