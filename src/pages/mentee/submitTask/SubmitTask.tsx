import {
  Box,
  Typography,
  Breadcrumbs,
  Grid,
  FormControl,
  Input,
  Button,
} from "@mui/joy";
import React from "react";
import { TextField } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";
import FileUploadButton from "../../../components/FileUploadButton.tsx/FileUploadButton";
import { TasksProp } from "./types";

const SubmitTask = ({ detailsOfTask }: TasksProp) => {
  console.log(detailsOfTask.title);
  const formattedEndDate = new Date(detailsOfTask.endDate).toLocaleDateString(
    "en-GB"
  );
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/mentee/home" style={{ color: "grey" }} aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Link
            to="/mentee/tasks"
            aria-label="Home"
            style={{ fontSize: "12px", color: "grey", textDecoration: "none" }}
          >
            Tasks
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Submit Task
          </Typography>
        </Breadcrumbs>
      </Box>

      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          Submit Task
        </Typography>
      </Box>

      {/* <Grid xs={10} sm={6} md={6}> */}
      <form>
        <FormControl required sx={{ pt: 6 }}>
          <Grid
            container
            rowGap={3}
            columnGap={1}
            xs={10}
            sm={10}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              // justifyContent: "center",
            }}
          >
            <Box>
              <Typography level="h4" component="h1">
                Task Name: {detailsOfTask.title}
              </Typography>
            </Box>
            <Typography level="h4" component="h1">
              Description: {detailsOfTask.taskDescription}
            </Typography>
            <Typography level="h4" component="h1">
              Due date: {formattedEndDate}
            </Typography>
            <Grid lg={3} xs={12}>
              {/* <Typography level="h4">Upload File</Typography> */}
              <FileUploadButton />
            </Grid>
            <Button type="submit">Submit</Button>
          </Grid>
        </FormControl>
      </form>
    </div>
  );
};

export default SubmitTask;
