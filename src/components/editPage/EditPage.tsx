import { Box, Breadcrumbs, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Button } from "@mui/joy";
import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { EditPageProps } from "../SearchForMentee/Types";
import { Mentors } from "../SearchForMentor/Types";

const EditPage: React.FC<
  EditPageProps & { mentors: Mentors[] } & {
    submitForm: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  } & { deleteProgram: () => void }
> = ({
  program,
  mentorName,
  menteeName,
  mentees,
  mentors,
  submitForm,
  deleteProgram,
}) => {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const [editableprogramName, setEditableProgramName] = useState<string>(
    program.programName
  );
  // const [editableMentorid, setMentorID] = useState(0);
  // const [editableStartingDate, setStartingDate] = useState<string>("");
  // const [editableEndingDate, setEndingDate] = useState<string>("");

  // const changeMentorid = (mentorID: number) => {
  //   setMentorID(mentorID);
  // };
  // const changeStartingDate = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setStartingDate(e.target.value);
  // };
  // const changeEndingDate = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setEndingDate(e.target.value);
  // };

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
      <form onSubmit={submitForm}>
        <Box
          rowGap={2}
          columnGap={2}
          sx={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Button type="submit" sx={{ px: 4 }}>
            Save
          </Button>
          <Button onClick={deleteProgram} sx={{ px: 3 }}>
            Delete
          </Button>
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
              name="programName"
              size="small"
              placeholder={program.programName}
              value={editableprogramName}
              onChange={(e) => setEditableProgramName(e.target.value)}
            />
            <TextField
              size="small"
              InputLabelProps={{ shrink: true }}
              label="Mentor name"
              name="mentorID"
              select
              value={program.mentorID}
              // onChange={(e) => {
              //   const mentorID = e.target.value as unknown as number;
              //   if (mentorID) {
              //     changeMentorid(mentorID);
              //   }
              // }}
            >
              {mentors?.map((mentor) => (
                <MenuItem key={mentor.employeeID} value={mentor.employeeID}>
                  {mentor.firstName}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              type="date"
              name="startDate"
              label="Start Date"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                sx: { fontSize: "0.8rem" },
                inputProps: {
                  min: new Date().toISOString().split("T")[0],
                },
              }}
              // onChange={(e) => {
              //   changeStartingDate(e);
              // }}
            ></TextField>
            <TextField
              type="date"
              name="endDate"
              label="End Date"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                sx: { fontSize: "0.8rem" },
                inputProps: {
                  min: new Date().toISOString().split("T")[0],
                },
              }}
              // onChange={(e) => {
              //   changeEndingDate(e);
              // }}
            ></TextField>
          </>
        </Grid>
      </form>
    </div>
  );
};

export default EditPage;
