import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table, { TableProps } from "@mui/joy/Table";

const ReportTaskTable = () => {
  function createData(
    menteeName: string,
    taskTitle: string,
    assignedDate: string,
    submissionDate: string,
    status: string
  ) {
    return { menteeName, taskTitle, assignedDate, submissionDate, status };
  }

  const rows = [
    createData("Shiyas", "Task1", "12/05/2024", "25/05/2024", "Active"),
    createData("Aadarsh", "Task2", "25/05/2024", "05/05/2024", "Inactive"),
    createData("Mehanoor", "Task3", "05/05/2024", "25/05/2024", "Active"),
    createData("Madhav", "Task4", "12/05/2024", "05/05/2024", "Submitted"),
  ];

  return (
    <div>
      <FormControl orientation="horizontal"></FormControl>
      <Table>
        <thead>
          <tr>
            <th>Mentee Name</th>
            <th>Task Title</th>
            <th>Assigned Date</th>
            <th>Submission Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.menteeName}>
              <td>{row.menteeName}</td>
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
