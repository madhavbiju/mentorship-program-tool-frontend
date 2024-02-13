import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table, { TableProps } from "@mui/joy/Table";

const ReportMeetingsTable = () => {
  function createData(
    menteeName: string,
    meetingName: string,
    scheduledDate: string,
    scheduledTime: string,
    status: string
  ) {
    return { menteeName, meetingName, scheduledDate, scheduledTime, status };
  }

  const rows = [
    createData(
      "Shiyas",
      "Sprint 5 Planning ",
      "12/05/2024",
      "12:00 pm",
      "Scheduled"
    ),
    createData(
      "Madhav",
      "Interim Review",
      "25/05/2024",
      "02:00 pm",
      "Scheduled"
    ),
    createData(
      "Mehanoor",
      "Sprint 5 Walkthrough",
      "05/02/2024",
      "08:00 am",
      "Completed"
    ),
    createData(
      "Aadarsh",
      "Domain Discussion",
      "12/01/2024",
      "11:00 am",
      "Completed"
    ),
  ];

  return (
    <div>
      <FormControl orientation="horizontal"></FormControl>
      <Table>
        <thead>
          <tr>
            <th>Mentee Name</th>
            <th>Meeting Name</th>
            <th>Scheduled Date</th>
            <th>Scheduled Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.menteeName}>
              <td>{row.menteeName}</td>
              <td>{row.meetingName}</td>
              <td>{row.scheduledDate}</td>
              <td>{row.scheduledTime}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReportMeetingsTable;
