import * as React from "react";
import Box from "@mui/joy/Box";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { menteeListProp } from "./Types";
import { Avatar } from "@mui/joy";

export default function ChatListItem({ menteeListData }: menteeListProp) {
  const handleClick = (email: string) => {
    const teamsChatLink = `https://teams.microsoft.com/l/chat/0/0?users=${email}`;
    window.open(teamsChatLink, "_blank");
  };

  return (
    <React.Fragment>
      {menteeListData.map((mentee) => (
        <React.Fragment key={mentee.emailID}>
          <ListItem sx={{ width: "100%" }}>
            <ListItemButton
              onClick={() => handleClick(mentee.emailID)}
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
                    {mentee.firstName.charAt(0) + mentee.lastName.charAt(0)}
                  </Avatar>
                  <Stack sx={{ ml: 2 }}>
                    <Typography level="title-sm">{`${mentee.firstName} ${mentee.lastName}`}</Typography>
                    <Typography level="body-sm">{mentee.emailID}</Typography>
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
