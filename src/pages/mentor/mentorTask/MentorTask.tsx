import { Box, Dropdown, MenuButton, Menu, MenuItem, MenuList } from '@mui/joy'
import React from 'react'
import MenteesListCard from '../../../components/MenteesList/MenteesListCard'
import MentorTaskCard from '../../../components/MentorTaskCard/MentorTaskCard'

const MentorTask = () => {
  return (
    <Box>
        <Box sx={{ display: "flex", ml: 3, mt: 3 }}>
        <Dropdown>
          <MenuButton color="primary" sx={{borderRadius:10 ,px:"3%"}}>Sort</MenuButton>
          <Menu>
            <MenuItem>Choose item</MenuItem>
            <MenuList>Add item</MenuList>
            <MenuList>Add item</MenuList>
          </Menu>
        </Dropdown>
        <Dropdown>
          <MenuButton color="primary" sx={{borderRadius:10 ,mx:"3%",px:"3%"}}>Filter</MenuButton>
          <Menu>
            <MenuItem>Choose item</MenuItem>
            <MenuList>Add item</MenuList>
            <MenuList>Add item</MenuList>
          </Menu>
        </Dropdown>
      </Box>
      <Box sx={{my:"3   %", mx:"2%"}} >
        <MentorTaskCard/>
        <br />
        <MentorTaskCard/>
        <br/>
        <MentorTaskCard/>
      </Box>
    </Box>
  )
}

export default MentorTask
