import { Sheet, Skeleton } from "@mui/joy";
import Table from "@mui/joy/Table";

export default function ReportMeetingDownloadTableSkeleton() {
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
