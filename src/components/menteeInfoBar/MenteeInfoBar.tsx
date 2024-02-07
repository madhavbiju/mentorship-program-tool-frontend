import React, { useState, useEffect } from "react";
import { List, ListDivider, ListItem, Typography } from "@mui/joy";

const MenteeInfoBar = () => {
  return (
    <List orientation="horizontal">
      <ListItem role="none">
        <Typography level="body-xs"> Mentor:</Typography>
        <Typography level="title-sm">{"Shiyas"}</Typography>
      </ListItem>
      <ListDivider />
      <ListItem role="none">
        <Typography level="body-xs"> Mentee:</Typography>
        <Typography level="title-sm">{"Madhav"}</Typography>
      </ListItem>
      <ListDivider />
      <ListItem role="none">
        <Typography level="body-xs"> Program:</Typography>
        <Typography level="title-sm">{"React Js"}</Typography>
      </ListItem>
      <ListDivider />
      <ListItem role="none">
        <Typography level="body-xs"> Status:</Typography>
        <Typography level="title-sm">{"Active"}</Typography>
      </ListItem>
      <ListDivider />
      <ListItem role="none">
        <Typography level="body-xs"> Ends On:</Typography>
        <Typography level="title-sm">{"25/06/2024"}</Typography>
      </ListItem>
    </List>
  );
};

export default MenteeInfoBar;
