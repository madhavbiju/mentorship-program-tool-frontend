import {
  AspectRatio,
  Box,
  Breadcrumbs,
  Button,
  Card,
  FormControl,
  FormHelperText,
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

import { styled } from "@mui/joy";

interface CreatetaskProps {
  submit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setProgramID: React.Dispatch<React.SetStateAction<number>>;
  endDate: string;
}
const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const CreateTasks: React.FC<CreatetaskProps> = ({
  submit,
  setProgramID,
  endDate,
}) => {
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
      <Typography level="h2" component="h1">
        Create Task
      </Typography>

      <form onSubmit={submit}>
        <FormControl required>
          <Grid
            container
            rowGap={1}
            sx={{ display: "flex", flexDirection: "column", mx: 10 }}
          >
            <FormHelperText>Select Mentee</FormHelperText>
            <MenteeDropDownHandler setProgramID={setProgramID} />
            <FormHelperText>Task Name</FormHelperText>
            <Input
              type="text"
              name="title"
              placeholder="Enter Task Name"
              required
              sx={{ height: 10 }}
            ></Input>
            <FormHelperText>Submission Date</FormHelperText>
            <Input
              type="date"
              name="endDate"
              placeholder="Submission Date"
              required
              slotProps={{
                input: {
                  min: new Date().toISOString().split("T")[0],
                  max: endDate.split("T")[0],
                },
              }}
            ></Input>
            <FormHelperText>Description</FormHelperText>
            <Input
              type="text"
              name="description"
              placeholder="Enter Description"
              required
              sx={{ height: 10 }}
            ></Input>
            <br></br>
            <FileUploadButton />
            <br></br>
            <Button type="submit">Create</Button>
          </Grid>
        </FormControl>
      </form>
    </div>
  );
};

export default CreateTasks;
