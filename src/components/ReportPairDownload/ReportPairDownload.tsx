/* eslint-disable jsx-a11y/anchor-is-valid */
import { ColorPaletteProp } from "@mui/joy/styles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import { ReportPairDownloadProps } from "./Types/Index";
// import CreatePair from "../createPair/CreatePair";
// import { Navigate } from "react-router";

const ReportPairDownload = ({
  program,
  totalCount,
}: ReportPairDownloadProps) => {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <Sheet>
      <Table>
        <thead>
          <tr>
            <th>Program Name</th>
            <th>Mentor</th>
            <th>Mentee</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {program.map((program) => (
            <tr key={program.programID}>
              <td>{program.programName}</td>
              <td>{program.mentorFirstName}</td>
              <td>{program.menteeFirstName}</td>
              <td>{formatDate(program.endDate)}</td>
              <td>{program.programStatus === 1 ? "Ongoing" : "Completed"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
};

export default ReportPairDownload;
