import * as React from "react";
import Table from "@mui/joy/Table";
import { Sheet, Skeleton, Typography } from "@mui/joy";
import { Stack } from "@mui/material";

export default function MentorReportTableSkeleton() {
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
              <th>Task Title</th>
              <th>Assigned Date</th>
              <th>Submission Date</th>
              <th>Status</th>
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
