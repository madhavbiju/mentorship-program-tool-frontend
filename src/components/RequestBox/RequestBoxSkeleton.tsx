import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { ListItemContent, Skeleton } from "@mui/joy";

export default function RequestBoxSkeleton() {
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
          <React.Fragment>
            <ListItem>
              <ListItemDecorator>
                <Skeleton variant="circular" width={30} height={30} />
              </ListItemDecorator>
              <ListItemContent>
                <Skeleton level="title-sm" variant="text" width="60%" />
                <Skeleton level="body-sm" variant="text" width="60%" />
              </ListItemContent>
            </ListItem>
            <ListDivider inset="gutter" />
            <ListItem>
              <ListItemDecorator>
                <Skeleton variant="circular" width={30} height={30} />
              </ListItemDecorator>
              <ListItemContent>
                <Skeleton level="title-sm" variant="text" width="92%" />
                <Skeleton level="body-sm" variant="text" width="92%" />
              </ListItemContent>
            </ListItem>
            <ListDivider inset="gutter" />
            <ListItem>
              <ListItemDecorator>
                <Skeleton variant="circular" width={30} height={30} />
              </ListItemDecorator>
              <ListItemContent>
                <Skeleton level="title-sm" variant="text" width="80%" />
                <Skeleton level="body-sm" variant="text" width="80%" />
              </ListItemContent>
            </ListItem>
            <ListDivider inset="gutter" />
            <ListItem>
              <ListItemDecorator>
                <Skeleton variant="circular" width={30} height={30} />
              </ListItemDecorator>
              <ListItemContent>
                <Skeleton level="title-sm" variant="text" width="45%" />
                <Skeleton level="body-sm" variant="text" width="45%" />
              </ListItemContent>
            </ListItem>
          </React.Fragment>
        </List>
      </div>
    </Box>
  );
}
