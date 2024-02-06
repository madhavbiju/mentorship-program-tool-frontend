import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { ListItemContent } from "@mui/joy";

export default function RequestBox({ users }: RequestBoxProps) {
  return (
    <Box>
      <div>
        <List
          variant="outlined"
          sx={{
            minWidth: 240,
            borderRadius: "sm",
          }}
        >
          {users.map((user, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemDecorator>
                  <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                </ListItemDecorator>
                <ListItemContent>
                  <Typography level="title-sm">{user.firstName}</Typography>
                  <Typography level="body-sm" noWrap>
                    {user.lastName}
                  </Typography>
                </ListItemContent>
              </ListItem>
              {index < users.length - 1 && <ListDivider inset="gutter" />}
            </React.Fragment>
          ))}
        </List>
      </div>
    </Box>
  );
}
