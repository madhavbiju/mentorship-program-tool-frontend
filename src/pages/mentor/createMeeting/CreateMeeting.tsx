import React, { FormEvent, useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Link,
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
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Link
            fontSize={12}
            fontWeight={500}
            underline="none"
            color="neutral"
            href="#some-link"
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
            <MenteeDropDownHandler setProgramID={setProgramID} />
            <Input
              type="text"
              name="title"
              aria-label="Meeting name"
              required
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
              label="End Date"
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
                sx: { fontSize: "0.8rem" },
              }}
              required
            ></TextField>
            <Button type="submit">Schedule</Button>
          </FormControl>
        </form>
      </Grid>
    </>
  );
};

export default CreateMeeting;
