import React, { FormEvent, useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Stack,
  Typography,
  Textarea,
  Button,
  Grid,
  FormControl,
} from "@mui/joy";
import SelectMenteeDropDown from "../../../components/SelectMenteeDropDown/SelectMenteeDropDown";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import MenteeDropDownHandler from "../../../components/SelectMenteeDropDown/SelectMenteeDropDownHandler";
import "moment/locale/en-gb";
import { Link } from "react-router-dom";
import { Input, TextField } from "@mui/material";

interface CreateMeetingProps {
  submit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setProgramID: React.Dispatch<React.SetStateAction<number>>;
}

const CreateMeeting: React.FC<CreateMeetingProps> = ({
  submit,
  setProgramID,
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
              rowGap={3}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <MenteeDropDownHandler setProgramID={setProgramID} />

              <Input
                type="text"
                name="title"
                aria-label="Meeting name"
                required
                placeholder="Type Meeting name!"
              ></Input>

              <TextField
                type="date"
                name="scheduledDate"
                label="Date"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  sx: { fontSize: "0.8rem" },
                  inputProps: { min: new Date().toISOString().split("T")[0] },
                }}
                required
              ></TextField>

              <TextField
                type="time"
                name="startTime"
                label="Start Time"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  sx: { fontSize: "0.8rem" },
                }}
                required
              ></TextField>

              <TextField
                type="time"
                name="endTime"
                label="End Time"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  sx: { fontSize: "0.8rem" },
                }}
                required
              ></TextField>

              <TextField
                type="text"
                size="small"
                name="agenda"
                label="Agenda"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  sx: { fontSize: "0.8rem", height: 50 },
                }}
                required
              ></TextField>

              <Button type="submit">Schedule</Button>
            </Grid>
          </FormControl>
        </form>
      </Grid>
    </>
  );
};

export default CreateMeeting;
