import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Link,
  Stack,
  Typography,
  Textarea,
  Button,
  Grid,
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

interface CreateMeetingProps {
  onSchedule: () => void;
  onChange: (key: string, value: any) => void;
}

const CreateMeeting: React.FC<CreateMeetingProps> = ({
  onSchedule,
  onChange,
}) => {
  const [programID, setProgramID] = useState(0);
  useEffect(() => {
    onChange("programID", programID);
  }, [programID]);
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
        <MenteeDropDownHandler setProgramID={setProgramID} />
        <Stack>
          <Typography level="h4">Title</Typography>
          <Textarea
            variant="outlined"
            onChange={(e) => onChange("title", e.target.value)}
          />
        </Stack>
        <Grid container columnGap={1}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Stack>
              <Typography level="h4">Date</Typography>
              <DatePicker
                sx={{
                  "& .MuiInputBase-root": {
                    height: "2.5rem",
                    borderColor: "transparent",
                  },
                }}
                onChange={(value) => onChange("date", value)}
              />
            </Stack>
            <Stack>
              <Typography level="h4">Time</Typography>
              <Grid
                container
                rowGap={1}
                columnGap={1}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <TimePicker
                  label="Start Time"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "2.5rem",
                      borderColor: "transparent",
                    },
                  }}
                  onChange={(value) => onChange("startTime", value)}
                />
                <TimePicker
                  label="End Time"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "2.5rem",
                      borderColor: "transparent",
                    },
                  }}
                  onChange={(value) => onChange("endTime", value)}
                />
              </Grid>
            </Stack>
          </LocalizationProvider>
        </Grid>
        <Stack>
          <Typography level="h4">Agenda</Typography>
          <Textarea
            variant="outlined"
            minRows={4}
            sx={{ width: "60%" }}
            onChange={(e) => onChange("agenda", e.target.value)}
          />
        </Stack>
        <Stack>
          <Button onClick={onSchedule}>Schedule</Button>
        </Stack>
      </Grid>
    </>
  );
};

export default CreateMeeting;
