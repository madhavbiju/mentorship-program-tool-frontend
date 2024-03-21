import * as React from "react";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import Input from "@mui/joy/Input";
import { FormControl, FormHelperText, Typography } from "@mui/joy";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { Box } from "@mui/system";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MentorSearchHandler from "../../../components/SearchForMentor/MentorSearchHandler";
import MenteeSearchHandler from "../../../components/SearchForMentee/MenteeSearchHandler";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CreateProgramProps {
  submit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setMentorID: React.Dispatch<React.SetStateAction<number>>;
  setMenteeID: React.Dispatch<React.SetStateAction<number>>;
}

const CreatePairCard = ({
  submit,
  setMentorID,
  setMenteeID,
}: CreateProgramProps) => {
  const [startDate, setStartDate] = useState<string>("");

  const history = useNavigate(); // for navigantion

  const handleStartDateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          ml: "0",
        }}
      >
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
            Create Pair
          </Typography>
        </Breadcrumbs>
      </Box>
      <Typography level="h2" component="h1">
        Create Pair
      </Typography>
      <form onSubmit={submit}>
        <FormControl required>
          <Grid
            container
            rowGap={1}
            sx={{ mx: 10, mt: 2, display: "flex", flexDirection: "column" }}
          >
            <FormHelperText>Program Name</FormHelperText>
            <Input
              type="text"
              name="programName"
              placeholder="Enter Program Name"
              required
            ></Input>

            <MentorSearchHandler setMentorID={setMentorID} />
            <MenteeSearchHandler setMenteeID={setMenteeID} />
            <FormHelperText>Start Date</FormHelperText>
            <Input
              type="date"
              name="startDate"
              slotProps={{
                input: {
                  min: new Date().toISOString().split("T")[0],
                },
              }}
              value={startDate}
              onChange={(e) => handleStartDateChange(e)}
              required
            ></Input>
            <FormHelperText>End Date</FormHelperText>
            <Input
              type="date"
              name="endDate"
              slotProps={{
                input: {
                  min: startDate,
                },
              }}
              required
            ></Input>
            <br></br>
            <Button type="submit">Create</Button>
          </Grid>
        </FormControl>
      </form>
    </React.Fragment>
  );
};

export default CreatePairCard;
