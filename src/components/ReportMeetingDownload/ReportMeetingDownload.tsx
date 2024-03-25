import * as React from "react";
import Table from "@mui/joy/Table";
import { Sheet } from "@mui/joy"; // Assuming Typography and Stack are not used
import { useState } from "react";
import { ReportMeetingDownloadTableProps } from "./Types/";

export default function ReportMeetingDownloadTable({
  meetings,
}: ReportMeetingDownloadTableProps) {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const formatTime = (timeString: string | number | Date) => {
    const time = new Date(timeString);
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  return (
    <>
      <Sheet>
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
            {meetings.map((row) => (
              <tr key={row.meetingID}>
                <td>{row.menteeName}</td>
                <td>{row.meetingName}</td>
                <td>{formatDate(row.scheduledDate)}</td>
                <td>{formatTime(row.scheduledTime)}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </>
  );
}
