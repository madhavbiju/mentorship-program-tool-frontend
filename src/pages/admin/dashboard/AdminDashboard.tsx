import {
  AspectRatio,
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CountCard from "../../../components/CountCard/CountCard";
import DashboardTable from "../../../components/DashboardTable/DashboardTable";
import GreetCard from "../../../components/GreetCard/GreetCard";
import RequestBox from "../../../components/RequestBox/RequestBox";
import { AdminDashboardProps } from "./Types";

const AdminDashboard = ({ data }: AdminDashboardProps) => {
  console.log(data);
  return (
    <Box sx={{ width: "100%" }}>
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
          <DashboardTable />
        </Grid>
        <Grid xs={12} lg={4}>
          <RequestBox />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
