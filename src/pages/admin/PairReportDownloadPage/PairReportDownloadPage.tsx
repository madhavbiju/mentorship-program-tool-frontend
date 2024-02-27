import React from "react";
import { Box, Typography } from "@mui/joy";
import html2pdf from "html2pdf.js";
import { Grid, Button } from "@mui/joy";
import ReportMeetingDownloadHandler from "../../../components/ReportMeetingDownload/ReportMeetingDownloadHandler";
import ReportPairDownloadHandler from "../../../components/ReportPairDownload/ReportPairDownloadHandler";
import ReportTaskDownloadHandler from "../../../components/ReportTaskDownload.tsx/ReportTaskDownloadHandler";
import MenteeInfoBarHandler from "../../../components/menteeInfoBar/MenteeInfoBarHandler";
import PairReportTaskTableHandler from "../../../components/PairReportTaskTable/PairReportTaskTableHandler";
import AdminPairReportTaskTableHandler from "../../../components/AdminPairReportTaskTableHandler/AdminPairReportTaskTableHandler";
import PairReportMeetingTableHandler from "../../../components/AdminPairReportMeetingTable/AdminPairReportMeetingTableHandler";
import { useParams } from "react-router-dom";
interface Params {
  programId: number;
  [key: string]: any;
}
const PairReportDownloadPage = () => {
  const { programId } = useParams<Params>();
  const programID = Number(programId);
  const handleDownloadPDF = () => {
    const element = document.getElementById("reportPage");
    const options = {
      filename: "Pair_Report.pdf",
    };
    html2pdf().from(element).set(options).save();
  };

  // Function to get today's date and time in a formatted string
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    return `${formattedDate} at ${formattedTime}`;
  };

  return (
    <Box>
      <Grid sx={{ paddingLeft: 2 }}>
        <Button onClick={handleDownloadPDF} color="primary">
          Download
        </Button>
      </Grid>
      <Grid id="reportPage" sx={{ padding: 2 }}>
        <Grid>
          <Typography level="h2">Pair Report</Typography>
          <Typography level="body-sm">
            Generated On: {getCurrentDateTime()}
          </Typography>
          <MenteeInfoBarHandler programid={programID} />
        </Grid>

        <Grid>
          <Box>
            <Typography level="h4">TASKS</Typography>{" "}
            <AdminPairReportTaskTableHandler sort={""} programid={programID} />{" "}
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Typography level="h4">MEETINGS</Typography>{" "}
            <PairReportMeetingTableHandler programid={programID} sort={""} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PairReportDownloadPage;
