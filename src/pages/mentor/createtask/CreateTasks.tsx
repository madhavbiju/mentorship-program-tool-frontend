import { Button, Grid, Textarea, Typography } from "@mui/joy";
import React from "react";
import SelectMenteeDropDown from "../../../components/SelectMenteeDropDown/SelectMenteeDropDown";
import SetEndDate from "../../../components/CourseSetDate/SetEndDate";
import FileUploadButton from "../../../components/FileUploadButton.tsx/FileUploadButton";
import { DatePicker } from "@mui/x-date-pickers";

const CreateTasks = () => {
  return (
    <div>
      <Grid>
        <Typography level="h3">Create Task</Typography>
      </Grid>
      <Grid xs={12} lg={12}>
        <br />
        <SelectMenteeDropDown />
      </Grid>
      <br />
      <Grid lg={10} xs={12}>
        <Grid>
          <Typography level="h4">Title</Typography>
        </Grid>
        <Grid>
          <Textarea variant="outlined" sx={{ width: "60%" }} />
        </Grid>
      </Grid>
      <Grid>
        <Grid>
          <Typography level="h4">Instructions</Typography>
        </Grid>
        <Grid>
          <Textarea variant="outlined" minRows={4} sx={{ width: "60%" }} />
        </Grid>
      </Grid>
      <br />
      <Grid container sx={{ display: "flex" }}>
        <Grid lg={3} xs={12}>
          <Typography level="h4">Upload Files</Typography>
          <FileUploadButton />
        </Grid>
        <Grid lg={3} xs={12}>
          <SetEndDate />
        </Grid>
      </Grid>
      <br />
      <Button>Submit</Button>
    </div>
  );
};

export default CreateTasks;
