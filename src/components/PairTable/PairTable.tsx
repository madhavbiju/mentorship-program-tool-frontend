/* eslint-disable jsx-a11y/anchor-is-valid */
import { ColorPaletteProp } from "@mui/joy/styles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BlockIcon from "@mui/icons-material/Block";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
// import CreatePair from "../createPair/CreatePair";
// import { Navigate } from "react-router";

const PairTable = ({ users }: PairTableProps) => {
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Typography level="body-xs">{user.id}</Typography>
              </td>
              <td>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                  <div>
                    <Typography level="body-xs">{user.firstName}</Typography>
                    <Typography level="body-xs">{user.lastName}</Typography>
                  </div>
                </Box>
              </td>
              <td>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                  <div>
                    <Typography level="body-xs">{user.firstName}</Typography>
                    <Typography level="body-xs">{user.lastName}</Typography>
                  </div>
                </Box>
              </td>
              <td>
                <Typography level="body-xs">{user.age}</Typography>
              </td>
              <td>
                <Chip
                  variant="soft"
                  size="sm"
                  startDecorator={<CheckRoundedIcon />}
                  color="success"
                >
                  Completed
                </Chip>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
};

export default PairTable;
