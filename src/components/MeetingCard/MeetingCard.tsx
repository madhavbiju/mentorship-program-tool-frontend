import { Box, List, ListItem, ListDivider } from "@mui/joy";

const meetingListData = [
  { meetingName: "Interm Meeting", time: "12:10pm", date: "12/02/2024" },
  { meetingName: "Buddy Meeting", time: "11:10am", date: "13/02/2024" },
  { meetingName: "Buddy Meeting", time: "10:10am", date: "14/02/2024" },
  {
    meetingName: "Sprint plannning Meeting",
    time: "11:10am",
    date: "13/02/2024",
  },
  { meetingName: "Interm Meeting", time: "10:10am", date: "14/02/2024" },
  // { meetingName: "Meeting6", time: "11:10", date: "13/02/2024" },
  // { meetingName: "Meeting7", time: "10:10", date: "14/02/2024" },
];

const MeetingCard = () => {
  return (
    <Box sx={{ paddingTop: "2%" }}>
      {meetingListData.map((data) => (
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
          <ListItem>{data.meetingName}</ListItem>
          <ListDivider inset="gutter" />
          <ListItem>{data.time}</ListItem>
          <ListDivider inset="gutter" />
          <ListItem>{data.date}</ListItem>
        </List>
      ))}
    </Box>
  );
};

export default MeetingCard;
