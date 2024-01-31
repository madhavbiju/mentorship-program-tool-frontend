import * as React from "react";
import { Grid } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const SetStartDate = () => {
  return (
    <Grid
      container
      columnSpacing={1} 
      sx={{ display: "flex", justifyContent: "space-around" }}
    >
      <Grid>Select Start Date :</Grid>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker />
      </LocalizationProvider>
    </Grid>
  );
};

export default SetStartDate;
