import { Box, List, ListItem, ListItemDecorator, Avatar, ListDivider, Stack, Typography } from '@mui/joy'
import React from 'react'

const MentorTaskCard = () => {
  return (
    <Box>
        <Box sx={{ marginRight: "10%" }}>
        <List
          orientation="horizontal"
          variant="soft"
          sx={{
            flexGrow: 0,
            mx: "auto",
            "--ListItemDecorator-size": "48px",
            "--ListItem-paddingY": "1rem",
            borderRadius: "sm",
            py: "2%",
            "&:hover": {
              backgroundColor: "lightgrey"
            }
            // justifyContent: "center",
          }}
        >
          {/* <ListItem sx={{ mr: 12 }}>
            
          </ListItem> */}
          
          <Box sx={{ display: "flex" }}>
            
              <ListItem sx={{ mx: 6 }}>Mahfooz Ahamed</ListItem> 
            
            
            <ListDivider inset="gutter" />
            
            <ListItem sx={{ mx: 4 }}>Task Name</ListItem>
            
            <ListDivider inset="gutter" />
            
            <ListItem sx={{ mx: 4 }}><Typography sx={{color:"red"}}>Due Date: </Typography> 12/02/2024</ListItem>
            <ListDivider inset="gutter" />
            
            <ListItem sx={{ ml: 4, color:"blue"}}>InProgress</ListItem>
          </Box>
        </List>
      </Box>
    </Box>
  )
}

export default MentorTaskCard
