import React, { useState, useEffect } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { ListItemContent } from "@mui/joy";
import { RequestBoxProps } from "./Types";

export default function RequestBox({ request, totalCount }: RequestBoxProps) {
  const [hasRequests, setHasRequests] = useState(false);

  useEffect(() => {
    if (request && request.length > 0) {
      setHasRequests(true);
    } else {
      setHasRequests(false);
    }
  }, [request]);

  return (
    <Box>
      <div>
        <List
          variant="outlined"
          sx={{
            minWidth: 240,
            minHeight: 200,
            borderRadius: "sm",
            display: "flex",
          }}
        >
          {hasRequests ? (
            request.map((request, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemDecorator>
                    <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography level="title-sm">
                      Program Id: {request.programID}
                    </Typography>
                    <Typography level="body-sm" noWrap>
                      {request.reason}
                    </Typography>
                  </ListItemContent>
                </ListItem>
                {index < 2 && <ListDivider inset="gutter" />}
              </React.Fragment>
            ))
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <Typography>No Requests</Typography>
            </Box>
          )}
        </List>
      </div>
    </Box>
  );
}
