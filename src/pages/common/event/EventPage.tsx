import {
  Box,
  Breadcrumbs,
  Link,
  Stack,
  Typography,
  Button,
  Grid,
} from "@mui/joy";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { meetingDetails, meetingProp } from "./Types";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import GroupsIcon from "@mui/icons-material/Groups";
import CategoryIcon from "@mui/icons-material/Category";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimelapseIcon from "@mui/icons-material/Timelapse";

const EventPage = ({ detailsOfMeeting }: meetingProp) => {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const formatDateReverseOrder = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${year}/${month}/${day}`;
  };
  const formatTime = (dateTimeString: string | number | Date) => {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Formatting minutes to have leading zeros if less than 10
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${formattedMinutes}`;
  };

  // Example usage:
  const dateTimeString = "2024-02-10T13:06:05.12";

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
            Meeting: {detailsOfMeeting.title}
          </Typography>
        </Breadcrumbs>
      </Box>
      <Grid
        container
        rowGap={2}
        columnGap={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-around",
        }}
      >
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Grid
            container
            rowGap={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <GroupsIcon />
                <Typography level="h2" component="h1" sx={{ ml: 1 }}>
                  {detailsOfMeeting.title}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <CategoryIcon />
                <Typography level="h3" component="h1" sx={{ ml: 1 }}>
                  Program:{detailsOfMeeting.programID}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ViewAgendaIcon />
                <Typography level="h4" sx={{ ml: 1 }}>
                  Agenda:
                </Typography>
              </Box>
              <Typography level="h4">{detailsOfMeeting.agenda}</Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <InsertInvitationIcon />
                <Typography level="h4" sx={{ ml: 1 }}>
                  Date:
                </Typography>
              </Box>
              <Typography level="h4">
                {formatDate(detailsOfMeeting.scheduleDate)}
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                defaultValue={dayjs(
                  formatDateReverseOrder(detailsOfMeeting.scheduleDate)
                )}
                readOnly
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid
          container
          columnGap={12}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AccessTimeIcon />
              <Typography level="h4" sx={{ ml: 1 }}>
                Starting Time
              </Typography>
            </Box>
            <Typography level="h4">
              {formatTime(detailsOfMeeting.startTime)}
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TimelapseIcon />
              <Typography level="h4" sx={{ ml: 1 }}>
                Ending Time
              </Typography>
            </Box>
            <Typography level="h4">
              {formatTime(detailsOfMeeting.endTime)}
            </Typography>
          </Box>
        </Grid>
        <br></br>
        <Stack>
          <Button>Join</Button>
        </Stack>
      </Grid>
    </>
  );
};

export default EventPage;
