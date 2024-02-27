import * as React from "react";
import Table from "@mui/joy/Table";
import { Sheet } from "@mui/joy"; // Assuming Typography and Stack are not used
import { useState } from "react";
import { ReportTaskTableProps } from "./Types";

export default function ReportTaskTable({ task }: ReportTaskTableProps) {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const statusvalue = (taskStatus: number) => {
    switch (taskStatus) {
      case 1:
        return "Active";
      case 2:
        return "Inactive";
      case 6:
        return "Submitted";
      default:
        return "Unknown";
    }
  };

  return (
    <>
      <Sheet>
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
            {task.map((row) => (
              <tr key={row.taskId}>
                <td>{row.menteeFirstName}</td>
                <td>{row.taskName}</td>
                <td>{formatDate(row.startDate)}</td>
                <td>{formatDate(row.endDate)}</td>
                <td>{statusvalue(row.taskStatus)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </>
  );
}
