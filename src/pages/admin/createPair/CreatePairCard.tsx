import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import SetStartDate from "../../../components/CourseSetDate/SetStartDate";
import SetEndDate from "../../../components/CourseSetDate/SetEndDate";
import Input from "@mui/joy/Input";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, Typography } from "@mui/joy";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { Box } from "@mui/system";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MentorSearchHandler from "../../../components/SearchForMentor/MentorSearchHandler";
import MenteeSearchHandler from "../../../components/SearchForMentee/MenteeSearchHandler";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

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
      <form onSubmit={submit}>
        <FormControl required>
          <Grid sx={{ mx: 7, mt: 3 }}>
            <Input
              type="text"
              name="programName"
              placeholder="Program Name"
              required
            ></Input>
          </Grid>
          <Grid sx={{ mx: 7, mt: 2 }}>
            <MentorSearchHandler setMentorID={setMentorID} />
            <MenteeSearchHandler setMenteeID={setMenteeID} />
          </Grid>
          <Grid
            container
            rowGap={2}
            sx={{ mx: 7, mt: 2, display: "flex", flexDirection: "column" }}
          >
            <TextField
              type="date"
              name="startDate"
              label="Start Date"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                sx: { fontSize: "0.8rem" },
                inputProps: { min: new Date().toISOString().split("T")[0] },
              }}
              value={startDate}
              onChange={(e) => handleStartDateChange(e)}
              required
            ></TextField>
            <TextField
              type="date"
              name="endDate"
              label="End Date"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                sx: { fontSize: "0.8rem" },
                inputProps: { min: startDate },
              }}
              required
            ></TextField>

            <Button type="submit">Create</Button>
          </Grid>
        </FormControl>
      </form>
      {/* <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid xs={12} sm={6.5}>
          <Card
            sx={{
              width: "-webkit-fill-available",
              bgcolor: "transparent",
              border: 0,
              padding: 0,
              margin: 0,
            }}
          >
            <Input
              placeholder="Program Name.."
              sx={{ border: "none", bgcolor: "transparent" }}
              onChange={handleProgramNameChange}
            />
          </Card>
        </Grid>

        <Grid container spacing={0.5} justifyContent="center">
          <Grid xs={12} sm={8}>
            <Card variant="plain" sx={{ bgcolor: "transparent" }}>
              <CardContent>
                <MentorSearchHandler setMentorID={setMentorID} />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card variant="plain" sx={{ bgcolor: "transparent" }}>
              <CardContent>
                <MenteeSearchHandler setMenteeID={setMenteeID} />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card variant="plain" sx={{ bgcolor: "transparent" }}>
              <CardContent>
                <SetStartDate
                  onStartDateChange={handleStartDateChange}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card variant="plain" sx={{ bgcolor: "transparent" }}>
              <CardContent>
                <SetEndDate
                  startDate={startDate}
                  onChange={(date: React.SetStateAction<null>) => {
                    setEndDate(date);
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Grid container justifyContent="center">
            <Button onClick={handleSubmit} disabled={isButtonDisabled}>
              <AddIcon />
              Create Pair
            </Button>
          </Grid>
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
};

export default CreatePairCard;
