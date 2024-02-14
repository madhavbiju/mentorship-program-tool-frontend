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
          <MenteeDropDownHandler setProgramID={setProgramID} />
          <Input
            type="text"
            name="title"
            placeholder="Task Name"
            required
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
          <Button type="submit">Create</Button>
        </FormControl>
      </form>
      {/* <Grid lg={10} xs={12}>
        <Grid>
          <Typography level="h4">Title</Typography>
        </Grid>
        <Grid>
          <Textarea
            variant="outlined"
            onChange={(e) => handletaskDetailsChange("title", e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid>
          <Typography level="h4">Instructions</Typography>
        </Grid>
        <Grid>
          <Textarea
            variant="outlined"
            minRows={4}
            sx={{ width: "60%" }}
            onChange={(e) =>
              handletaskDetailsChange("taskDescription", e.target.value)
            }
          />
        </Grid>
      </Grid>
      <br />
      <Grid container sx={{ display: "flex" }}>
        <Grid lg={3} xs={12}>
          <Typography level="h4">Upload Files</Typography>
          <FileUploadButton />
        </Grid>
        <Grid lg={3} xs={12}>
          <LocalizationProvider
            dateAdapter={AdapterMoment}
            adapterLocale="en-gb"
          >
            <Typography level="h4">Due Date</Typography>

            <DatePicker
              sx={{
                "& .MuiInputBase-root": {
                  height: "2.5rem",
                  borderColor: "transparent",
                },
              }}
              onChange={(value) => handletaskDetailsChange("endDate", value)}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <br />
      <Button onClick={onCreate}>Create Task</Button> */}
    </div>
  );
};

export default CreateTasks;
