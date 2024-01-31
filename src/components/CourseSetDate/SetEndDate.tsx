import * as React from "react";
import { Grid } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const SetEndDate = () => {
  return (
    <Grid container columnSpacing={3}
    sx={{ display: "flex", justifyContent: "space-around" }}>
      <Grid>Select End Date :</Grid>
       <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker />
      </LocalizationProvider> 
    </Grid>
  )
}

export default SetEndDate
