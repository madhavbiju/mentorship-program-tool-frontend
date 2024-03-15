import { Download } from "@mui/icons-material";
import { Box, Breadcrumbs, Button, Grid, Typography } from "@mui/joy";
import React, { useState } from "react";
import AdminReportPageButtonGroup from "../../../components/AdminReportPageButtonGroup/AdminReportPageButtonGroup";
import MentorReportButtonGroup from "../../../components/MentorReportButtonGroup/MentorReportButtonGroup";
import MentorReport from "../../../components/mentorreport/MentorReport";
import SelectMenteeDropDown from "../../../components/SelectMenteeDropDown/SelectMenteeDropDown";
import PairReport from "../../../components/pairreport/PairReport";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";

const MentorReportPage = () => {
  const [reportType, setReportType] = useState<string>("Pair Report");
  const employeeID: string = sessionStorage.getItem("EmployeeId") || "";
  const EmployeeId = parseInt(employeeID);
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/mentor/home" style={{ color: "grey" }} aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Report
          </Typography>
        </Breadcrumbs>
      </Box>
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
        <Grid xs={12} lg={3}>
          <Typography level={"h2"}>Report</Typography>
        </Grid>
        <Grid xs={6} lg={6}>
          <MentorReportButtonGroup
            defaultReport="MentorReport"
            onChange={(newValue: string) => setReportType(newValue)}
          />
        </Grid>
        <Grid xs={6} lg={3}>
          <Button size="sm">
            Download
            <Download />
          </Button>
        </Grid>
      </Grid>
      <Grid lg={12}>
        {reportType === "My Report" ? (
          <MentorReport employeeId={EmployeeId} />
        ) : (
          <>
            <br />
            {/* <SelectMenteeDropDown /> */}
            <PairReport />
          </>
        )}
      </Grid>
    </div>
  );
};

export default MentorReportPage;
