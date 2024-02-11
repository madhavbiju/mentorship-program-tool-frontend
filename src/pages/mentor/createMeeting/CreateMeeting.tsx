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
import "moment/locale/en-gb";

interface CreateMeetingProps {
  onSchedule: () => void;
  onChange: (key: string, value: any) => void;
}

const CreateMeeting: React.FC<CreateMeetingProps> = ({
  onSchedule,
  onChange,
}) => {
  const [programID, setProgramID] = useState(0);
  const [meetingDetails, setMeetingDetails] = useState({
    title: "",
    scheduleDate: null,
    startTime: null,
    endTime: null,
    agenda: "",
  });

  useEffect(() => {
    onChange("programID", programID);
  }, [programID]);

  // Check if all fields are filled
  const isAllFieldsFilled = () => {
    return Object.values(meetingDetails).every(
      (value) => Boolean(value) || value === 0
    );
  };

  // Handle changes to the meeting details
  const handleMeetingDetailsChange = (key: string, value: any) => {
    setMeetingDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
    onChange(key, value);
  };

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
            onChange={(e) =>
              handleMeetingDetailsChange("title", e.target.value)
            }
          />
        </Stack>
        <Grid container columnGap={1}>
          <LocalizationProvider
            dateAdapter={AdapterMoment}
            adapterLocale="en-gb"
          >
            <Stack>
              <Typography level="h4">Date</Typography>
              <DatePicker
                sx={{
                  "& .MuiInputBase-root": {
                    height: "2.5rem",
                    borderColor: "transparent",
                  },
                }}
                onChange={(value) =>
                  handleMeetingDetailsChange("scheduleDate", value)
                }
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
                  onChange={(value) =>
                    handleMeetingDetailsChange("startTime", value)
                  }
                />
                <TimePicker
                  label="End Time"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "2.5rem",
                      borderColor: "transparent",
                    },
                  }}
                  onChange={(value) =>
                    handleMeetingDetailsChange("endTime", value)
                  }
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
            onChange={(e) =>
              handleMeetingDetailsChange("agenda", e.target.value)
            }
          />
        </Stack>
        <Stack>
          <Button disabled={!isAllFieldsFilled()} onClick={onSchedule}>
            Schedule
          </Button>
        </Stack>
      </Grid>
    </>
  );
};

export default CreateMeeting;
