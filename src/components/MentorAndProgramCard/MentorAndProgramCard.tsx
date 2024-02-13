import { Box, Card, CardContent, Typography } from "@mui/joy";
import React from "react";
import { Mentee } from "./Types";
import { Grid } from "@mui/material";

const MentorAndProgramCard = ({ mentorFirstName, programName }: Mentee) => {
  return (
    <>
      <Card variant="soft">
        <div>
          <Typography sx={{ mb: -1 }} level="body-sm">
            Mentor Name
          </Typography>
        </div>
        <CardContent sx={{ mb: -1 }} orientation="horizontal">
          <div>
            <Typography level="title-lg">{mentorFirstName}</Typography>
          </div>
        </CardContent>

        <div>
          <Typography sx={{ mb: -1 }} level="body-sm">
            Program Name
          </Typography>
        </div>
        <CardContent sx={{ mb: -1 }} orientation="horizontal">
          <div>
            <Typography level="title-lg">{programName}</Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default MentorAndProgramCard;
