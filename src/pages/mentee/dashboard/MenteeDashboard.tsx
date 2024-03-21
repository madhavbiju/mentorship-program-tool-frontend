import { Box, Breadcrumbs, Divider, Typography } from "@mui/joy";
import GreetCard from "../../../components/GreetCard/GreetCard";
import { Grid } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Link } from "react-router-dom";
import MeetingCardHandler from "../../../components/MeetingCard/MeetingCardHandler";
import PendingTaskHandler from "../../../components/PendingTasks/PendingTaskHandler";
import ProgramProgressBarHandler from "../../../components/ProgramProgressBar/ProgramProgressBarHandler";
import MentorAndProgramCardHandler from "../../../components/MentorAndProgramCard/MentorAndProgramCardHandler";

const MenteeDashboard = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/mentee/home" style={{ color: "grey" }} aria-label="Home">
            <HomeRoundedIcon />
          </Link>
        </Breadcrumbs>
      </Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          // gap: '20px'
        }}
      >
        <Grid xs={12} md={4}>
          <GreetCard />
        </Grid>
        <Grid xs={12} md={3} sx={{ mr: { sx: 0, md: "150px" } }}>
          <MentorAndProgramCardHandler />
        </Grid>
      </Grid>

      <Divider />
      <br />
      <ProgramProgressBarHandler />

      <Grid
        xs={12}
        container
        rowGap={1}
        columnGap={1}
        height="52vh"
        mt={2}
        display={"flex"}
        flexDirection={{ xs: "row", lg: "column" }}
      >
        <Grid
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PendingTaskHandler />
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MeetingCardHandler />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenteeDashboard;
