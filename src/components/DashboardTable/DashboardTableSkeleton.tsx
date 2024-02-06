import * as React from "react";
import Table from "@mui/joy/Table";
import { Sheet, Skeleton, Typography } from "@mui/joy";
import PaginationButtons from "../Pagination/Pagination";
import { Stack } from "@mui/material";

export default function DashboardTableSkeleton() {
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
            <tr>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
            </tr>
            <tr>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
            </tr>
            <tr>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
            </tr>
            <tr>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
            </tr>
            <tr>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
              <td>
                <Skeleton level="body-xs" variant="text" width="92%" />
              </td>
            </tr>
          </tbody>
        </Table>
      </Sheet>
    </>
  );
}
