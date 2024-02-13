import * as React from "react";
import Table from "@mui/joy/Table";
import { Sheet } from "@mui/joy"; // Assuming Typography and Stack are not used
import { useState } from "react";
import { PairReportMeetingTableProps } from "./Types";

export default function PairReportMeetingTable({
  meeting,
}: PairReportMeetingTableProps) {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const statusvalue = (status: number) => {
    switch (status) {
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
      <Sheet
        variant="outlined"
        sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}
      >
        <Table hoverRow>
          <thead>
            <tr>
              <th>Mentee Name</th>
              <th>Meeting Title</th>
              <th>Scheduled Date</th>
              <th>Scheduled Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {meeting.map((row) => (
              <tr key={row.meetingId}>
                <td>{row.menteeName}</td>
                <td>{row.meetingName}</td>
                <td>{formatDate(row.scheduledDate)}</td>
                <td>{row.scheduledTime}</td>
                <td>{statusvalue(row.status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </>
  );
}
