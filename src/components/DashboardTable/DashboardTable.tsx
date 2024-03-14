import * as React from "react";
import Table from "@mui/joy/Table";
import { Sheet, Typography } from "@mui/joy";
import PaginationButtons from "../Pagination/Pagination";
import { Stack } from "@mui/material";
import { DashboardTableProps } from "./Types";
const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month indexes are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
export default function DashboardTable({ program }: DashboardTableProps) {
  return (
    <>
      <Sheet variant="outlined" sx={{ width: "100%", borderRadius: "sm" }}>
        <Table hoverRow>
          <thead>
            <tr>
              <th style={{ width: "40%" }}>Program Name</th>
              <th>Mentor</th>
              <th>Mentee</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {program.map((row) => (
              <tr key={row.programName}>
                <td>{row.programName}</td>
                <td>{row.mentorFirstName}</td>
                <td>{row.menteeFirstName}</td>
                <td>{formatDate(row.endDate)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </>
  );
}
