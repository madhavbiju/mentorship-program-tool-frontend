import { Typography } from "@mui/joy";
import { Grid, Button } from "@mui/joy";
import React from "react";
import AdminReportsList from "../../../components/AdminReportsList/AdminReportsList";

const AdminReportPage = () => {
  return (
    <div>
      <Grid container sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Grid xs={12} lg={9}>
          <Typography level={"h2"}>Report</Typography>
        </Grid>

        <Grid xs={12} lg={3}>
          <Button size="md">Download</Button>
        </Grid>
      </Grid>
      <AdminReportsList />
    </div>
  );
};

export default AdminReportPage;
