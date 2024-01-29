import { Box, Card, Typography } from "@mui/joy";
import React from "react";
import { MentorAndProgramCardPropType } from "./MentorAndProgramCardPropType";

const MentorAndProgramCard = ({
  mentorName,
  programName,
}: MentorAndProgramCardPropType) => {
  return (
    <div>
      <Card variant="soft" sx={{ width: 1 }}>
        <div>
          <Typography level="body-sm">Mentor Name</Typography>
          <Typography level="title-lg">{mentorName}</Typography>
          <Typography level="body-sm">Program Name</Typography>
          <Typography level="title-lg">{programName}</Typography>
        </div>
      </Card>
    </div>
  );
};

export default MentorAndProgramCard;
