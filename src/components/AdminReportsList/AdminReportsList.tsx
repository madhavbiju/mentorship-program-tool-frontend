import {
  List,
  ListItem,
  ListItemDecorator,
  ListDivider,
  Select,
  Option,
} from "@mui/joy";
import React from "react";

const AdminReportsList = () => {
  return (
    <div>
      <List
        orientation="horizontal"
        variant="outlined"
        sx={{
          flexGrow: 0,
          mx: "auto",
          "--ListItemDecorator-size": "48px",
          "--ListItem-paddingY": "1rem",
          borderRadius: "sm",
        }}
      >
        <ListItem>Overall Report</ListItem>
        <ListDivider inset="gutter" />
        <ListItem>
          <Select placeholder="Select a Mentor">
            <Option value="Shiyas">Shiyas</Option>
            <Option value="Aadarsh">Aadarsh</Option>
            <Option value="Mehanoor">Mehanoor</Option>
            <Option value="Madhav">Madhav</Option>
          </Select>
        </ListItem>
        <ListDivider inset="gutter" />
        <ListItem>
          <Select placeholder="Select a Mentee">
            <Option value="Shiyas">Shiyas</Option>
            <Option value="Aadarsh">Aadarsh</Option>
            <Option value="Mehanoor">Mehanoor</Option>
            <Option value="Madhav">Madhav</Option>
          </Select>
        </ListItem>
      </List>
    </div>
  );
};

export default AdminReportsList;
