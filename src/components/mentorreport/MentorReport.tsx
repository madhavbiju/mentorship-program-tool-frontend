import { Typography } from "@mui/joy";
import MentorPairTableHandler from "../MentorPairTable/MentorPairTableHandler";
import MentorReportTaskTableHandler from "../MentorReportTaskTable/MentorReportTaskTableHandler";
import MentorReportMeetingsTableHandler from "../MentorReportMeetingsTable/MentorReportMeetingsTableHandler";

const MentorReport = ({ employeeId }: { employeeId: number }) => {
  return (
    <div>
      <br />

      <Typography level="h4">Programs</Typography>
      <MentorPairTableHandler employeeId={employeeId} sort={""} />
      <Typography level="h4">Tasks</Typography>
      <MentorReportTaskTableHandler sort={""} employeeId={employeeId} />
      <Typography level="h4">Meetings</Typography>
      <MentorReportMeetingsTableHandler sort={""} employeeId={employeeId} />
    </div>
  );
};

export default MentorReport;
