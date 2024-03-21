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
    <>
      {menteeListData.map((mentee) => (
        <>
          <ListItem sx={{ width: "100%", px: 0 }}>
            <ListItemButton
              onClick={() => handleClick(mentee.emailID)}
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
                    {mentee.firstName.charAt(0) + mentee.lastName.charAt(0)}
                  </Avatar>
                  <Stack
                    sx={{ ml: 2, overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    <Typography
                      sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
                      level="title-sm"
                    >{`${mentee.firstName} ${mentee.lastName}`}</Typography>
                    <Typography
                      sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
                      level="body-sm"
                    >
                      {mentee.emailID}
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
