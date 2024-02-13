import * as React from "react";
import { Grid } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/joy/Stack";

const SetStartDate = ({ onStartDateChange }: any) => {
  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item xs={12} sm={10}>
        <Stack>
          <Grid item>Start Date :</Grid>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              sx={{
                "& .MuiInputBase-root": {
                  height: "2.5rem",
                  borderColor: "transparent",
                },
              }}
              onChange={onStartDateChange}
            />
            {/* call the function in CreatePairCard */}
          </LocalizationProvider>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SetStartDate;
