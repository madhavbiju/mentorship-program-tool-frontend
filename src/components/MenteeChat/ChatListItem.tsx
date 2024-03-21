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
    <>
      {mentorListData.map((mentor) => (
        <>
          <ListItem sx={{ width: "100%", px: 0 }}>
            <ListItemButton
              onClick={() => handleClick(mentor.emailID)}
              color="neutral"
              sx={{
                flex: 1,
                mx: 0,
                flexDirection: "column",
                alignItems: "initial",
              }}
            >
              <Stack direction="row" flex={1}>
                <Box
                  sx={{
                    display: "flex",
                    minWidth: "100%",
                  }}
                >
                  <Avatar size="lg">
                    {mentor.firstName.charAt(0) + mentor.lastName.charAt(0)}
                  </Avatar>
                  <Stack
                    sx={{ ml: 2, overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    <Typography
                      sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
                      level="title-sm"
                    >{`${mentor.firstName} ${mentor.lastName}`}</Typography>
                    <Typography
                      sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
                      level="body-sm"
                    >
                      {mentor.emailID}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </ListItemButton>
          </ListItem>
          <ListDivider sx={{ margin: 0 }} />
        </>
      ))}
    </>
  );
}
