import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import { ListItemContent } from '@mui/joy';

export default function RequestBox() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      <div>
        <Typography level="body-lg" mb={2}>
          Requests
        </Typography>
        <List
          variant="outlined"
          sx={{
            minWidth: 240,
            borderRadius: 'sm',
          }}
        >
          <ListItem>
          <ListItemDecorator>
            <Avatar size='sm' src="/static/images/avatar/1.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">Program Extension</Typography>
            <Typography level="body-sm" noWrap>
             Topics Pending
            </Typography>
          </ListItemContent>
        </ListItem>
          <ListDivider inset="gutter" />
          <ListItem>
          <ListItemDecorator>
            <Avatar size='sm' src="/static/images/avatar/2.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">Mentor Change</Typography>
            <Typography level="body-sm" noWrap>
              Current mentor busy
            </Typography>
          </ListItemContent>
        </ListItem>
        <ListDivider inset="gutter" />
        <ListItem>
          <ListItemDecorator>
            <Avatar size='sm' src="/static/images/avatar/1.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">Program Extension</Typography>
            <Typography level="body-sm" noWrap>
             Topics Pending
            </Typography>
          </ListItemContent>
        </ListItem>
          <ListDivider inset="gutter" />
          <ListItem>
          <ListItemDecorator>
            <Avatar size='sm' src="/static/images/avatar/1.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">Program Extension</Typography>
            <Typography level="body-sm" noWrap>
             Topics Pending
            </Typography>
          </ListItemContent>
        </ListItem>
          
        </List>
      </div>
    </Box>
  );
}
