import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

import Typography from "@mui/joy/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff"; // Assuming this as a choice for 'inactive'
import { UserTableProps } from "./types";

export default function UserTable({ userList }: UserTableProps) {
  return (
    <Sheet
      className="OrderTableContainer"
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
            <th style={{ width: 240, padding: "12px 6px" }}>Sl No.</th>
            <th style={{ width: 240, padding: "12px 6px" }}>Customer</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Date</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Status</th>
            <th style={{ width: 140, padding: "12px 6px" }}> </th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={user.id}>
              <td>
                <Typography level="body-xs">{index + 1}</Typography>
              </td>
              <td>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Avatar size="sm">{user.userInitials}</Avatar>
                  <Typography level="body-xs">{user.userName} </Typography>
                </Box>
              </td>
              <td>
                <Typography level="body-xs">{user.userJob}</Typography>{" "}
              </td>
              <td>
                <Chip
                  variant="soft"
                  size="sm"
                  color={user.userStatus === "active" ? "success" : "neutral"}
                  startDecorator={
                    user.userStatus === "active" ? (
                      <CheckCircleOutlineIcon />
                    ) : (
                      <HighlightOffIcon />
                    )
                  }
                >
                  {user.userStatus.charAt(0).toUpperCase() +
                    user.userStatus.slice(1)}
                </Chip>
              </td>
              <td>
                <Button
                  variant="outlined"
                  startDecorator={<AddCircleOutlineIcon />}
                >
                  Assign Roles
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
