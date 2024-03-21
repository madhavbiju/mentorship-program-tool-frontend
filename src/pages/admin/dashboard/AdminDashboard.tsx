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
          xs={12}
          container
          columnSpacing={1}
          columnGap={1}
          rowGap={1}
          mt={1}
          flex={1}
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Grid xs={12} flex={1}>
            <Sheet
              variant="outlined"
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "sm",
                flex: 1,
              }}
            >
              <AdminReportPieChartHandler />
            </Sheet>
          </Grid>
          <Grid
            xs={12}
            md={4}
            flex={1}
            container
            rowSpacing={1}
            columnSpacing={1}
            display={"flex"}
            flexDirection={{ sm: "row", md: "column" }}
          >
            <Grid flex={1}>
              <CountCard
                title={"Active Mentor Count"}
                count={data.mentorCount}
              ></CountCard>
            </Grid>
            <Grid flex={1}>
              <CountCard
                title={"Active Mentee Count"}
                count={data.menteeCount}
              ></CountCard>
            </Grid>
            <Grid flex={1}>
              <CountCard
                title={"Active Pair Count"}
                count={data.activePairCount}
              ></CountCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          rowGap={1}
          columnGap={1}
          height="30vh"
          mt={1}
          display={"flex"}
          flexDirection={{ xs: "column", lg: "column" }}
        >
          <Sheet
            variant="outlined"
            sx={{ flex: 1, borderRadius: "sm", padding: 1 }}
          >
            <DashboardTableHandler />
          </Sheet>
        </Grid>
      </Grid>
      <Grid xs={12} lg={4}>
        <RequestBoxHandler />
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
