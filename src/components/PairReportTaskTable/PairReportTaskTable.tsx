import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import Table, { TableProps } from "@mui/joy/Table";

const PairReportTasksTable = () => {
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
    createData("Shiyas", "React Hooks", "12/05/2024", "25/05/2024", "Active"),
    createData(
      "Madhav",
      "React Components",
      "25/05/2024",
      "05/05/2024",
      "Active"
    ),
    createData(
      "Mehanoor",
      "API Creation",
      "05/05/2024",
      "25/05/2024",
      "Submitted"
    ),
    createData(
      "Aadarsh",
      "API Testing",
      "12/05/2024",
      "05/05/2024",
      "Submitted"
    ),
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
          {rows.map((row, index) => (
            <tr key={index}>
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

export default PairReportTasksTable;
