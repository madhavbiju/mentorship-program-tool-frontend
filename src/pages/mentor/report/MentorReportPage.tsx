import { Download } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/joy";
import React, { useState } from "react";
import AdminReportPageButtonGroup from "../../../components/AdminReportPageButtonGroup/AdminReportPageButtonGroup";
import MentorReportButtonGroup from "../../../components/MentorReportButtonGroup/MentorReportButtonGroup";
import MentorReport from "../../../components/mentorreport/MentorReport";
import SelectMenteeDropDown from "../../../components/SelectMenteeDropDown/SelectMenteeDropDown";
import PairReport from "../../../components/pairreport/PairReport";

const MentorReportPage = () => {
  const [reportType, setReportType] = useState<string>("My Report");

  return (
    <div>
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
        <Grid xs={12} lg={3}>
          <Typography level={"h2"}>Report</Typography>
        </Grid>
        <Grid xs={6} lg={6}>
          <MentorReportButtonGroup
            defaultReport="My Report"
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
          <MentorReport />
        ) : (
          <>
            <br />
            <SelectMenteeDropDown />
            <PairReport />
          </>
        )}
      </Grid>
    </div>
  );
};

export default MentorReportPage;
