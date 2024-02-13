import { List, ListDivider, ListItem, Typography } from "@mui/joy";
import { MenteeinfoBarProps } from "./Types";

const MenteeInfoBar: React.FC<{ data: MenteeinfoBarProps }> = ({ data }) => {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <List orientation="horizontal">
      <ListItem role="none">
        <Typography level="body-xs"> Mentor:</Typography>
        <Typography level="title-sm">{data.mentorName}</Typography>
      </ListItem>
      <ListDivider />
      <ListItem role="none">
        <Typography level="body-xs"> Mentee:</Typography>
        <Typography level="title-sm">{data.menteeName}</Typography>
      </ListItem>
      <ListDivider />
      <ListItem role="none">
        <Typography level="body-xs"> Program:</Typography>
        <Typography level="title-sm">{data.programName}</Typography>
      </ListItem>
      <ListDivider />
      <ListItem role="none">
        <Typography level="body-xs"> Status:</Typography>
        <Typography level="title-sm">{data.programStatus}</Typography>
      </ListItem>
      <ListDivider />
      <ListItem role="none">
        <Typography level="body-xs"> Ends On:</Typography>
        <Typography level="title-sm">{formatDate(data.endDate)}</Typography>
      </ListItem>
    </List>
  );
};

export default MenteeInfoBar;
