import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/joy";
import React from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import CalendarCC from "../../../components/Calendar/CalendarCC";

const CalendarPage = () => {
  const [isMentor, setIsMentor] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname.includes("/mentor/calendar")) {
      setIsMentor(true);
    } else {
      setIsMentor(false);
    }
  }, [location.pathname]);
  const history = useNavigate();
  const handleClick = () => {
    history("#");
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
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Calendar
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          Calendar
        </Typography>
        {isMentor && (
          <Button
            color="primary"
            startDecorator={<AddIcon />}
            size="sm"
            onClick={handleClick}
          >
            Schedule Meeting
          </Button>
        )}
      </Box>
      <CalendarCC />
    </>
  );
};

export default CalendarPage;
