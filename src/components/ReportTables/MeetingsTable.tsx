import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table, { TableProps } from "@mui/joy/Table";

const ReportTaskTable = () => {
  function createData(
    meetingName: string,
    scheduledDate: string,
    scheduledTime: string,
    status: string
  ) {
    return { meetingName, scheduledDate, scheduledTime, status };
  }

  const rows = [
    createData("Meeting1", "12/05/2024", "25/05/2024", "Scheduled"),
    createData("Meeting2", "25/05/2024", "05/05/2024", "Scheduled"),
    createData("Meeting3", "05/05/2024", "25/05/2024", "Completed"),
    createData("Meeting4", "12/05/2024", "05/05/2024", "Completed"),
  ];

  return (
    <div>
      <FormControl orientation="horizontal"></FormControl>
      <Table>
        <thead>
          <tr>
            <th>Meeting Name</th>
            <th>Scheduled Date</th>
            <th>Scheduled Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.meetingName}>
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

export default ReportTaskTable;
