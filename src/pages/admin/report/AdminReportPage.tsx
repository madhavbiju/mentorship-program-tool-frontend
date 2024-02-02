import { Card, Typography } from "@mui/joy";
import { Grid, Button } from "@mui/joy";
import React, { useState } from "react";
import AdminReportPageButtonGroup from "../../../components/AdminReportPageButtonGroup/AdminReportPageButtonGroup";
import SelectMenteeDropDown from "../../../components/SelectMenteeDropDown/SelectMenteeDropDown";
import { Download } from "@mui/icons-material";
import PairReport from "../../../components/pairreport/PairReport";
import MentorReport from "../../../components/mentorreport/MentorReport";
import SelectMentorDropDown from "../../../components/SelectMentorDropDown/SelectMentorDropDown";
import AdminReport from "../../../components/adminreport/AdminReport"; // Import AdminReport component

const AdminReportPage = () => {
  const [reportType, setReportType] = useState<string>("Overall Report");

  return (
    <div>
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
          <Button size="sm">
            Download
            <Download />
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
                <SelectMenteeDropDown />
                <Grid lg={12}>
                  <PairReport />
                </Grid>
              </>
            ) : reportType === "Mentor Report" ? (
              <>
                <SelectMentorDropDown />
                <Grid lg={12}>
                  <MentorReport />
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
