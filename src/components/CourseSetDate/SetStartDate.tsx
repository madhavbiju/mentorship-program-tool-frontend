import * as React from "react";
import { Grid } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/joy/Stack";

const SetStartDate = () => {
  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Stack >
          <Grid item>Select Start Date :</Grid>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker />
          </LocalizationProvider>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SetStartDate;
