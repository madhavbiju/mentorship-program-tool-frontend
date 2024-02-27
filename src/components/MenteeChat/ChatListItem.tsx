import * as React from "react";
import Box from "@mui/joy/Box";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { mentorListProp } from "./Types";
import { Avatar } from "@mui/joy";

export default function ChatListItem({ mentorListData }: mentorListProp) {
  const handleClick = (email: string) => {
    const teamsChatLink = `https://teams.microsoft.com/l/chat/0/0?users=${email}`;
    window.open(teamsChatLink, "_blank");
  };

  return (
    <React.Fragment>
      {mentorListData.map((mentor) => (
        <React.Fragment key={mentor.emailID}>
          <ListItem sx={{ width: "100%" }}>
            <ListItemButton
              onClick={() => handleClick(mentor.emailID)}
              color="neutral"
              sx={{
                flexDirection: "column",
                alignItems: "initial",
                gap: 1,
                width: "100%",
              }}
            >
              <Stack direction="row" spacing={1.5}>
                <Box
                  sx={{
                    display: "flex",
                    minWidth: "100%",
                  }}
                >
                  <Avatar size="lg">
                    {mentor.firstName.charAt(0) + mentor.lastName.charAt(0)}
                  </Avatar>
                  <Stack sx={{ ml: 2 }}>
                    <Typography level="title-sm">{`${mentor.firstName} ${mentor.lastName}`}</Typography>
                    <Typography level="body-sm">{mentor.emailID}</Typography>
                  </Stack>
                </Box>
              </Stack>
            </ListItemButton>
          </ListItem>
          <ListDivider sx={{ margin: 0 }} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
