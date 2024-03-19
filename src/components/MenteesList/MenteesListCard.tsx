import { People } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemDecorator,
  Avatar,
  ListDivider,
  Typography,
  Grid,
  Stack,
  Button,
  ListItemButton, // Import Button from MUI
} from "@mui/joy";
import React, { useState } from "react";
import { Mentee, MenteesProps } from "./Types";
import CreateRequestModal from "../CreateRequestModal/CreateRequestModal";
import CreateRequestModalHandler from "../CreateRequestModal/CreateRequestModalHandler";
import { useNavigate } from "react-router-dom";

const menteesData = [
  {
    image: "/static/images/avatar/1.jpg",
    menteeName: "Mentee1",
    programName: "Program1",
    endDate: "12/11/2024",
  },
  {
    image: "/static/images/avatar/1.jpg",
    menteeName: "Mentee2",
    programName: "Program2",
    endDate: "13/11/2024",
  },
];

const MenteesListCard = ({ mentees, totalCount }: MenteesProps) => {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const history = useNavigate();
  const handleClick = (mentee: Mentee) => {
    history(`profile/${mentee.employeeID}`);
  };

  return (
    <>
      <Grid xs={12}>
        {mentees.map((Mentee, index) => (
          <List
            orientation="horizontal"
            variant="soft"
            sx={{
              "--ListItemDecorator-size": "48px",
              "--ListItem-paddingY": "1rem",
              borderRadius: "sm",
              display: "flex",
              justifyContent: "space-around",
              mb: 1,
            }}
          >
            <ListItemButton
              onClick={() => handleClick(Mentee)}
              color="neutral"
              sx={{
                borderRadius: "sm",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <ListItem sx={{ pt: "18px", pb: "12px" }}>
                <ListItemDecorator>
                  <Avatar src={menteesData[1].image} />
                </ListItemDecorator>
              </ListItem>

              <Stack>
                <Typography
                  level="body-sm"
                  sx={{ display: "flex", justifyContent: "center" }}
                  style={{ fontSize: "10px" }}
                >
                  Mentee
                </Typography>
                <ListItem sx={{ paddingTop: 1.5 }}>
                  <Typography>
                    {Mentee.firstName} {Mentee.lastName}
                  </Typography>
                </ListItem>
              </Stack>

              <Stack>
                <Typography
                  sx={{ display: "flex", justifyContent: "center" }}
                  level="body-sm"
                  style={{ fontSize: "10px" }}
                >
                  Program
                </Typography>
                <ListItem sx={{ paddingTop: 1.5 }}>
                  {Mentee.programName}
                </ListItem>
              </Stack>

              <Stack>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "red",
                  }}
                  level="body-sm"
                  style={{ fontSize: "10px" }}
                >
                  End date
                </Typography>
                <ListItem sx={{ paddingTop: 1.5 }}>
                  {formatDate(Mentee.endDate)}
                </ListItem>
              </Stack>
            </ListItemButton>
          </List>
        ))}
      </Grid>
    </>
  );
};

export default MenteesListCard;
