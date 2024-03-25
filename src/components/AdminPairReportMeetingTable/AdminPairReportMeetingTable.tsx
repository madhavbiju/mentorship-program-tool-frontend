import * as React from "react";
import Table from "@mui/joy/Table";
import { Sheet } from "@mui/joy"; // Assuming Typography and Stack are not used
import { useState } from "react";
import { AdminPairReportMeetingTableProps } from "./Types/index";

export default function AdminPairReportMeetingTable({
  meetings,
}: AdminPairReportMeetingTableProps) {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  function extractTime(dateString: string | number | Date) {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  const statusvalue = (status: number) => {
    switch (status) {
      case 7:
        return "Scheduled";
      case 8:
        return "Completed";
      default:
        return "Unknown";
    }
  };

  return (
    <>
      <Table hoverRow>
        <thead>
          <tr>
            {/* <th>Mentee Name</th> */}
            <th>Meeting Title</th>
            <th>Scheduled Date</th>
            <th>Scheduled Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((row) => (
            <tr key={row.meetingID}>
              {/* <td>{row.menteeFirstName}</td> */}
              <td>{row.title}</td>
              <td>{formatDate(row.scheduleDate)}</td>
              <td>{extractTime(row.startTime)}</td>
              <td>{statusvalue(row.meetingStatus)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
