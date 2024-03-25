import { Sheet, Typography, Box } from "@mui/joy";
import { Table, Avatar, Chip } from "@mui/joy";
import { MentorPairTableProps } from "./Types/Index";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import RotateRightIcon from "@mui/icons-material/RotateRight";

const MentorPairTable = ({ program, totalCount }: MentorPairTableProps) => {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
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
            <th style={{ width: 240, padding: "12px 6px" }}>Program Name</th>
            <th style={{ width: 240, padding: "12px 6px" }}>Mentor</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Mentee</th>
            <th style={{ width: 140, padding: "12px 6px" }}>End Date</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {program.map((program) => (
            <tr key={program.programID}>
              <td>
                <Typography level="body-xs">{program.programName}</Typography>
              </td>
              <td>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Avatar size="sm">{program.mentorFirstName.charAt(0)}</Avatar>
                  <div>
                    <Typography level="body-xs">
                      {program.mentorFirstName}
                    </Typography>
                  </div>
                </Box>
              </td>
              <td>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Avatar size="sm">{program.menteeFirstName.charAt(0)}</Avatar>
                  <div>
                    <Typography level="body-xs">
                      {program.menteeFirstName}
                    </Typography>
                  </div>
                </Box>
              </td>
              <td>
                <Typography level="body-xs">
                  {formatDate(program.endDate)}
                </Typography>
              </td>
              <td>
                <Chip
                  variant="soft"
                  size="sm"
                  color={program.programStatus === 1 ? "success" : "neutral"}
                  startDecorator={
                    program.programStatus === 1 ? (
                      <RotateRightIcon />
                    ) : (
                      <CheckRoundedIcon />
                    )
                  }
                >
                  {program.programStatus === 1 ? "Ongoing" : "Completed"}
                </Chip>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
};

export default MentorPairTable;
