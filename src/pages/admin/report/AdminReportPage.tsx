import { Box, Breadcrumbs, Card, Typography } from "@mui/joy";
import { Grid, Button } from "@mui/joy";
import React, { useState } from "react";
import AdminReportPageButtonGroup from "../../../components/AdminReportPageButtonGroup/AdminReportPageButtonGroup";
import PairReport from "../../../components/pairreport/PairReport";
import MentorReport from "../../../components/mentorreport/MentorReport";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AdminReport from "../../../components/adminreport/AdminReport"; // Import AdminReport component
import { Link, useNavigate } from "react-router-dom";
import AdminPairReport from "../../../components/AdminPairReport/AdminPairReport";
import AdminMentorReportPage from "../../../components/AdminMentorReportPage/AdminMentorReportPage";

const AdminReportPage = () => {
  const [reportType, setReportType] = useState<string>("Overall Report");
  const [programID, setProgramID] = useState<number>(0);

  const history = useNavigate();

  const handleClick = () => {
    if (reportType == "Overall Report") {
      history("/admin/report/adminreportdownload");
    } else if (reportType == "Mentor Report") {
      history("/admin/report/mentorreportdownload");
    } else {
      history(`/admin/report/menteereportdownload/${programID}`);
    }
  };

  return (
    <div>
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
          <AdminReportPageButtonGroup
            defaultReport="Overall Report"
            onChange={(newValue: string) => setReportType(newValue)}
          />
        </Grid>
        <Grid xs={6} lg={3}>
          <Button onClick={handleClick} size="sm">
            View Full Report
          </Button>
        </Grid>
      </Grid>
      <br />
      {reportType === "Overall Report" && <AdminReport />}{" "}
      {/* Render AdminReport component when "Overall Report" is selected */}
      {reportType !== "Overall Report" && (
        <Grid
          xs={12}
          lg={10}
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid lg={12}>
            {reportType === "Mentee Report" ? (
              <>
                {/* <SelectMenteeDropDown /> */}
                <Grid lg={12}>
                  <AdminPairReport
                    setProgramID={setProgramID}
                    programID={programID}
                  />
                </Grid>
              </>
            ) : reportType === "Mentor Report" ? (
              <>
                {/* <SelectMentorDropDown /> */}
                <Grid lg={12}>
                  <AdminMentorReportPage />{" "}
                </Grid>
              </>
            ) : null}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default AdminReportPage;
