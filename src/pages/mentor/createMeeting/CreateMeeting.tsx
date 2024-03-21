import React, { FormEvent, useEffect, useState } from "react";
import {
  Input,
  Box,
  Breadcrumbs,
  Stack,
  Typography,
  Textarea,
  Button,
  Grid,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@mui/joy";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenteeDropDownHandler from "../../../components/SelectMenteeDropDown/SelectMenteeDropDownHandler";
import "moment/locale/en-gb";
import { Link } from "react-router-dom";

interface CreateMeetingProps {
  submit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setProgramID: React.Dispatch<React.SetStateAction<number>>;
  endDate: string;
}

const CreateMeeting: React.FC<CreateMeetingProps> = ({
  submit,
  setProgramID,
  endDate,
}) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/mentor/home" style={{ color: "grey" }} aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Link
            to="/mentor/calendar"
            aria-label="Home"
            style={{ fontSize: "12px", color: "grey", textDecoration: "none" }}
          >
            Calendar
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            New Meeting
          </Typography>
        </Breadcrumbs>
      </Box>
      <Grid
        container
        rowGap={2}
        columnGap={1}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography level="h2" component="h1">
          New Meeting
        </Typography>
        <form onSubmit={submit}>
          <FormControl required>
            <Grid
              container
              rowGap={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: 10,
              }}
            >
              <FormHelperText>Select Mentee</FormHelperText>

              <MenteeDropDownHandler setProgramID={setProgramID} />

              <FormHelperText>Meeting Name</FormHelperText>
              <Input
                type="text"
                name="title"
                aria-label="Meeting name"
                required
                placeholder="Enter Meeting name"
              ></Input>
              <FormHelperText>Meeting Date</FormHelperText>
              <Input
                type="date"
                name="scheduledDate"
                placeholder="Meeting Date"
                required
                slotProps={{
                  input: {
                    min: new Date().toISOString().split("T")[0],
                    max: endDate.split("T")[0],
                  },
                }}
              ></Input>
              <FormHelperText>Starting Time</FormHelperText>
              <Input
                type="time"
                name="startTime"
                placeholder="Starting Time"
                required
              ></Input>
              <FormHelperText>Ending Time</FormHelperText>
              <Input
                type="time"
                name="endTime"
                placeholder="Ending Time"
                required
              ></Input>
              <FormHelperText>Meeting Agenda</FormHelperText>
              <Input
                type="text"
                name="agenda"
                placeholder="Type Meeting Agenda"
                required
              ></Input>
              <br></br>
              <Button type="submit">Schedule</Button>
            </Grid>
          </FormControl>
        </form>
      </Grid>
    </>
  );
};

export default CreateMeeting;
