import { Box, Breadcrumbs, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Button } from "@mui/joy";
import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { EditPageProps } from "../SearchForMentee/Types";
import { Mentors } from "../SearchForMentor/Types";

const EditPage: React.FC<EditPageProps & { mentors: Mentors[] }> = ({
  program,
  mentorName,
  menteeName,
  mentees,
  mentors,
}) => {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  // let editMode = true;
  const [editableprogramName, setEditableProgramName] = useState<string>(
    program.programName
  );
  // {
  //   console.log("hii", mentorName);
  // }

  // var startingdate = formatDate(program.startDate);
  // var endingdate = formatDate(program.endDate);
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/admin/home" style={{ color: "grey" }} aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Link
            to="/admin/pairs"
            aria-label="Home"
            style={{ fontSize: "12px", color: "grey", textDecoration: "none" }}
          >
            Pairs
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Edit Pair
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        rowGap={2}
        columnGap={2}
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <Button
          // onClick={() => {
          //   editMode == !editMode;
          // }}
          sx={{ px: 4 }}
        >
          Save
        </Button>
        <Button sx={{ px: 3 }}>Delete</Button>
      </Box>
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
          my: 3,
        }}
      >
        <>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Program Name"
            size="small"
            placeholder={program.programName}
            value={editableprogramName}
            onChange={(e) => setEditableProgramName(e.target.value)}
          />
          <TextField
            size="small"
            InputLabelProps={{ shrink: true }}
            label="Mentor name"
            select
            value={program.mentorID}
          >
            {mentors?.map((mentor) => (
              <MenuItem key={mentor.employeeID} value={mentor.employeeID}>
                {mentor.firstName}
              </MenuItem>
            ))}
          </TextField>
          {/* <TextField
            InputLabelProps={{ shrink: true }}
            select
            size="small"
            label="Mentee name"
            placeholder="choose mentee"
          >
            {mentees?.map((mentee) => (
              <MenuItem key={mentee.employeeID} value={mentee.employeeID}>
                {mentee.firstName}
              </MenuItem>
            ))}
          </TextField> */}
          <TextField
            type="date"
            name="scheduledDate"
            label="Start Date"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              sx: { fontSize: "0.8rem" },
              inputProps: {
                min: new Date().toISOString().split("T")[0],
              },
            }}
          ></TextField>
          <TextField
            type="date"
            name="scheduledDate"
            label="End Date"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              sx: { fontSize: "0.8rem" },
              inputProps: {
                min: new Date().toISOString().split("T")[0],
              },
            }}
          ></TextField>
        </>
      </Grid>
    </div>
  );
};

export default EditPage;
