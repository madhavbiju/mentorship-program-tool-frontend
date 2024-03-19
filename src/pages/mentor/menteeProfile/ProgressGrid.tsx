import { Box, Button, Grid, Sheet, Typography } from "@mui/joy";
import React, { useEffect, useState } from "react";
import ProgramProgressBar from "../../../components/ProgramProgressBar/ProgramProgressBar";
import CreateRequestModalHandler from "../../../components/CreateRequestModal/CreateRequestModalHandler";
import { menteeProfileProp } from "./Types";

const ProgressGrid = ({ menteeData }: menteeProfileProp) => {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [percentageCompletion, setPercentageCompletion] = useState<number>(0);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (menteeData.endDate) {
      const currentDate = new Date();
      const startDate = new Date(menteeData.startDate);
      const endDateDate = new Date(menteeData.endDate);

      const differenceInTime = endDateDate.getTime() - currentDate.getTime();

      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

      setDaysLeft(differenceInDays); //to find how many days left using currentDate and EndDate

      const totalDuration = endDateDate.getTime() - startDate.getTime();
      const elapsedDuration = currentDate.getTime() - startDate.getTime();
      const percentage = (elapsedDuration / totalDuration) * 100;
      setPercentageCompletion(percentage); //to find percentage of completion using start and end date
    }
  }, [menteeData.startDate, menteeData.endDate]);

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <CreateRequestModalHandler
        open={open}
        setOpen={setOpen}
        menteeData={menteeData}
      />
      <Box
        sx={{
          flex: 1,
          borderRadius: "sm",
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid sx={{ padding: 2, width: "100%" }}>
          <ProgramProgressBar
            daysLeft={daysLeft}
            percentageCompletion={percentageCompletion}
          />
        </Grid>
        <Grid sx={{ padding: 2 }}>
          <Typography level="h4">
            Start Date: {formatDate(menteeData.startDate)}
          </Typography>
          <Typography level="h4">
            End Date: {formatDate(menteeData.endDate)}
          </Typography>
        </Grid>
        <Button onClick={() => handleClick()}>Request Extension</Button>
      </Box>
    </>
  );
};

export default ProgressGrid;
