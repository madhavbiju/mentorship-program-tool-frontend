import { Box, Breadcrumbs, Divider, Grid } from "@mui/joy";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CountCard from "../../../components/CountCard/CountCard";
import GreetCard from "../../../components/GreetCard/GreetCard";
import { AdminDashboardProps } from "./Types";
import DashboardTableHandler from "../../../components/DashboardTable/DashboardTableHandler";
import RequestBoxHandler from "../../../components/RequestBox/RequestBoxHandler";
import { Link } from "react-router-dom";

const AdminDashboard = ({ data }: AdminDashboardProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/admin/home" style={{ color: "grey" }} aria-label="Home">
            <HomeRoundedIcon />
          </Link>
        </Breadcrumbs>
      </Box>
      <GreetCard />
      <Divider />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
      >
        <Grid xs={6} lg={4}>
          {" "}
          <CountCard
            title={"Active Mentor Count"}
            count={data.mentorCount}
            sx={(theme) => ({
              width: 1,
            })}
          ></CountCard>
        </Grid>
        <Grid xs={6} lg={4}>
          <CountCard
            title={"Active Mentee Count"}
            count={data.menteeCount}
            sx={(theme) => ({
              width: 1,
            })}
          ></CountCard>
        </Grid>
        <Grid xs={12} lg={4}>
          <CountCard
            title={"Active Pair Count"}
            count={data.activePairCount}
            sx={(theme) => ({
              width: 1,
            })}
          ></CountCard>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 2 }}
        sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
      >
        <Grid xs={12} lg={8}>
          <DashboardTableHandler />
        </Grid>
        <Grid xs={12} lg={4}>
          <RequestBoxHandler />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
