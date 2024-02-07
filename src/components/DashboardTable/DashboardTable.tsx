import * as React from "react";
import Table from "@mui/joy/Table";
import { Sheet, Typography } from "@mui/joy";
import PaginationButtons from "../Pagination/Pagination";
import { Stack } from "@mui/material";
import { DashboardTableProps } from "./Types";

export default function DashboardTable({ users }: DashboardTableProps) {
  return (
    <>
      <Sheet
        variant="outlined"
        sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}
      >
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
            {users.map((row) => (
              <tr key={row.id}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.maidenName}</td>
                <td>{row.age}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </>
  );
}
