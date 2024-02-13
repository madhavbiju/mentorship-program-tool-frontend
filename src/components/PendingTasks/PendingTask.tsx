import { Box, List, ListItem, ListDivider } from "@mui/joy";
import { TasksProps } from "./Types";

const SubmittedTask = ({ tasks }: TasksProps) => {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <Box sx={{ paddingTop: "2%" }}>
      {tasks.map((Task) => (
        <List
          orientation="horizontal"
          variant="soft"
          sx={{
            flexGrow: 0,
            mx: "auto",
            "--ListItemDecorator-size": "48px",
            "--ListItem-paddingY": "1rem",
            borderRadius: "sm",
            mb: "1rem",
            justifyContent: "space-around",
          }}
        >
          <ListItem>{Task.taskName}</ListItem>
          {/* <ListDivider inset="gutter" /> */}
          <ListItem>{Task.mentorFirstName}</ListItem>
          {/* <ListDivider inset="gutter" /> */}
          <ListItem>{formatDate(Task.endDate)}</ListItem>
        </List>
      ))}
    </Box>
  );
};

export default SubmittedTask;
