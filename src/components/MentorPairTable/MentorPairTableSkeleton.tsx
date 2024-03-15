/* eslint-disable jsx-a11y/anchor-is-valid */

import { Sheet, Box } from "@mui/joy";
import { Table, Skeleton } from "@mui/joy";

// import CreatePair from "../createPair/CreatePair";
// import { Navigate } from "react-router";

const MentorPairTableSkeleton = () => {
  return (
    <Sheet
      variant="outlined"
      sx={{
        display: { sm: "initial" },
        width: "100%",
        borderRadius: "sm",
        flexShrink: 1,
        overflow: "auto",
        minHeight: 0,
      }}
    >
      <Table
        aria-labelledby="tableTitle"
        stickyHeader
        hoverRow
        sx={{
          "--TableCell-headBackground": "var(--joy-palette-background-level1)",
          "--Table-headerUnderlineThickness": "1px",
          "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
          "--TableCell-paddingY": "4px",
          "--TableCell-paddingX": "8px",
        }}
      >
        <thead>
          <tr>
            <th style={{ width: 170, padding: "12px 6px" }}>Program Name</th>
            <th style={{ width: 240, padding: "12px 6px" }}>Mentor</th>
            <th style={{ width: 240, padding: "12px 6px" }}>Mentee</th>
            <th style={{ width: 140, padding: "12px 6px" }}>End Date</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Status</th>
            <th style={{ width: 140, padding: "12px 6px" }}> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Skeleton level="body-xs" variant="text" width="92%" />
            </td>
            <td>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
            </td>
            <td>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton
                    level="body-xs"
                    variant="text"
                    width="92%"
                  ></Skeleton>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
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
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
            </td>
            <td>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton
                    level="body-xs"
                    variant="text"
                    width="92%"
                  ></Skeleton>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
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
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
            </td>
            <td>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton
                    level="body-xs"
                    variant="text"
                    width="92%"
                  ></Skeleton>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
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
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
            </td>
            <td>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton
                    level="body-xs"
                    variant="text"
                    width="92%"
                  ></Skeleton>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
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
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
            </td>
            <td>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton
                    level="body-xs"
                    variant="text"
                    width="92%"
                  ></Skeleton>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
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
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
            </td>
            <td>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton variant="circular" width={30} height={30} />
                <Box sx={{ minWidth: 100 }}>
                  <Skeleton
                    level="body-xs"
                    variant="text"
                    width="92%"
                  ></Skeleton>
                  <Skeleton level="body-xs" variant="text" width="92%" />
                </Box>
              </Box>
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
  );
};

export default MentorPairTableSkeleton;
