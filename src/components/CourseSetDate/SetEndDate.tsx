import * as React from "react";
import { Grid } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/joy/Stack";

const SetEndDate = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10}>
        <Stack>
          <Grid item>End Date :</Grid>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker sx={{
            "& .MuiInputBase-root": {
              height: "2.5rem",
              borderColor:"transparent"
            }
          }}/>
          </LocalizationProvider>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SetEndDate;
