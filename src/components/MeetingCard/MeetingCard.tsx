import { Box, List, ListItem, ListDivider } from "@mui/joy";
import { MeetingProps } from "./Types";

const MeetingCard = ({ meeting }: MeetingProps) => {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const formatTime = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    return `${hours}:${minutes} ${amOrPm}`;
  };

  return (
    <Box sx={{ paddingTop: "2%" }}>
      {meeting.map((data) => (
        <List
          orientation="horizontal"
          variant="soft"
          sx={{
            flexGrow: 0,
            "--ListItemDecorator-size": "44px",
            "--ListItem-paddingY": "1rem",
            borderRadius: "sm",
            justifyContent: "space-around",
            mb: "1rem",
          }}
        >
          <ListItem>{data.title}</ListItem>
          {/* <ListDivider inset="gutter" /> */}
          <ListItem>{formatTime(data.startTime)}</ListItem>
          {/* <ListDivider inset="gutter" /> */}
          <ListItem>{formatDate(data.scheduleDate)}</ListItem>
        </List>
      ))}
    </Box>
  );
};

export default MeetingCard;
