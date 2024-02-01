import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table, { TableProps } from "@mui/joy/Table";

const ReportTaskTable = () => {
  function createData(
    taskTitle: string,
    assignedDate: string,
    submissionDate: string,
    status: string
  ) {
    return { taskTitle, assignedDate, submissionDate, status };
  }

  const rows = [
    createData("Task1", "12/05/2024", "25/05/2024", "Active"),
    createData("Task2", "25/05/2024", "05/05/2024", "Inactive"),
    createData("Task3", "05/05/2024", "25/05/2024", "Active"),
    createData("Task4", "12/05/2024", "05/05/2024", "Submitted"),
  ];

  return (
    <div>
      <FormControl orientation="horizontal"></FormControl>
      <Table>
        <thead>
          <tr>
            <th>Task title</th>
            <th>Assigned Date</th>
            <th>Submission Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.taskTitle}>
              <td>{row.taskTitle}</td>
              <td>{row.assignedDate}</td>
              <td>{row.submissionDate}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReportTaskTable;
