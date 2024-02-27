import { Box, Breadcrumbs, Button, Typography } from "@mui/joy";
import React, { useState } from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import CalendarHandler from "../../../components/Calendar/CalendarHandler";

const MenteeCalendarPage = () => {
  const [isMentor, setIsMentor] = React.useState(false);
  const [roleID, setroleID] = useState<number>(3);
  const history = useNavigate();
  const handleClick = () => {
    history("create");
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
            to="/mentee/home" style={{ color: "grey" }} 
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
      </Box>
      <CalendarHandler roleID={roleID} />
    </>
  );
};

export default MenteeCalendarPage;
