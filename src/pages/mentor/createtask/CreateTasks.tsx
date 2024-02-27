import {
  Box,
  Breadcrumbs,
  Button,
  FormControl,
  Grid,
  Input,
  Textarea,
  Typography,
} from "@mui/joy";
import React, { FormEvent, useEffect, useState } from "react";
import SelectMenteeDropDown from "../../../components/SelectMenteeDropDown/SelectMenteeDropDown";
import SetEndDate from "../../../components/CourseSetDate/SetEndDate";
import { Link } from "react-router-dom";
import FileUploadButton from "../../../components/FileUploadButton.tsx/FileUploadButton";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import MenteeDropDownHandler from "../../../components/SelectMenteeDropDown/SelectMenteeDropDownHandler";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField } from "@mui/material";

interface CreatetaskProps {
  submit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setProgramID: React.Dispatch<React.SetStateAction<number>>;
}

const CreateTasks: React.FC<CreatetaskProps> = ({ submit, setProgramID }) => {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/mentor/home" style={{ color: "grey" }} aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Link
            to="/mentor/tasks"
            aria-label="Home"
            style={{ fontSize: "12px", color: "grey", textDecoration: "none" }}
          >
            Tasks
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            New Task
          </Typography>
        </Breadcrumbs>
      </Box>
      <Grid>
        <Typography level="h3">Create Task</Typography>
      </Grid>

      <form onSubmit={submit}>
        <FormControl required>
          <Grid
            container
            rowGap={3}
            sx={{ display: "flex", flexDirection: "column", mx: 15 }}
          >
            <MenteeDropDownHandler setProgramID={setProgramID} />
            <Input
              type="text"
              name="title"
              placeholder="Task Name"
              required
              sx={{ height: 10 }}
            ></Input>
            <TextField
              type="date"
              name="endDate"
              label="Submission Date"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                sx: { fontSize: "0.8rem" },
                inputProps: { min: new Date().toISOString().split("T")[0] },
              }}
              required
            ></TextField>

            <TextField
              type="text"
              size="medium"
              name="description"
              label="Description"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                sx: { fontSize: "0.8rem" },
              }}
              required
            ></TextField>
            <Grid lg={3} xs={12}>
              <Typography level="h4">Upload Files</Typography>
              <FileUploadButton />
            </Grid>
            <Button type="submit">Create</Button>
          </Grid>
        </FormControl>
      </form>
    </div>
  );
};

export default CreateTasks;
