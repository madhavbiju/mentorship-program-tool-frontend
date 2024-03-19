import { Box, Breadcrumbs, Divider, Grid, Sheet } from "@mui/joy";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CountCard from "../../../components/CountCard/CountCard";
import GreetCard from "../../../components/GreetCard/GreetCard";
import { AdminDashboardProps } from "./Types";
import DashboardTableHandler from "../../../components/DashboardTable/DashboardTableHandler";
import RequestBoxHandler from "../../../components/RequestBox/RequestBoxHandler";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AdminReportPieChartHandler from "../../../components/PieChart/AdminReportPieChartHandler";

const AdminDashboard = ({ data }: AdminDashboardProps) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      console.log(windowHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Grid
      container
      columnSpacing={1}
      sx={{
        width: "100%",
        flex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Grid lg={8}>
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
        <Sheet
          variant="outlined"
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            borderRadius: "sm",
            paddingLeft: 2,
          }}
        >
          <GreetCard />
        </Sheet>

        <Grid
          container
          columnSpacing={1}
          columnGap={1}
          sx={{ marginTop: 1, flex: 1, display: "flex", flexDirection: "row" }}
        >
          <Sheet
            variant="outlined"
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: "sm",
            }}
          >
            <AdminReportPieChartHandler />
          </Sheet>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={3}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Grid>
              <CountCard
                title={"Active Mentor Count"}
                count={data.mentorCount}
              ></CountCard>
            </Grid>
            <Grid>
              <CountCard
                title={"Active Mentee Count"}
                count={data.menteeCount}
              ></CountCard>
            </Grid>
            <Grid xs={12} lg={4}>
              <CountCard
                title={"Active Pair Count"}
                count={data.activePairCount}
              ></CountCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ marginTop: 1 }}>
          <DashboardTableHandler />
        </Grid>
      </Grid>
      <Grid lg={4}>
        <RequestBoxHandler />
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
