import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import SetStartDate from "../../../components/CourseSetDate/SetStartDate";
import SetEndDate from "../../../components/CourseSetDate/SetEndDate";
import Input from "@mui/joy/Input";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/joy";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { Box } from "@mui/system";
// import { Link } from "react-router-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MentorSearchHandler from "../../../components/SearchForMentor/MentorSearchHandler";
import MenteeSearchHandler from "../../../components/SearchForMentee/MenteeSearchHandler";
import { useEffect, useState } from "react";

interface CreateProgramProps {
  onSubmit: () => void;
  onChange: (key: string, value: any) => void;
}

const CreatePairCard: React.FC<CreateProgramProps> = ({
  onSubmit,
  onChange,
}) => {
  const [mentorID, setMentorID] = useState(0);
  const [menteeID, setMenteeID] = useState(0);
  {
    useEffect(() => {
      console.log("Updated mentoridd:", mentorID);
    }, [mentorID]);

    useEffect(() => {
      console.log("Updated menteeidd:", menteeID);
    }, [menteeID]);
  }

  const [startDate, setStartDate] = React.useState(null);
  const handleStartDateChange = (date: React.SetStateAction<null>) => {
    setStartDate(date); //set the start date to the date that got from setStartDate component
    console.log(startDate)
  };
  const [programDetails, setProgramDetails] = useState({
    mentorID: null,
    menteeID: null,
    createdBy: 1,
    startDate: null,
    endDate: null,
    programName: "",
    programStatus: 1,
  });

  // Handle changes to the program details
  const handleProgramDetailsChange = (key: string, value: any) => {
    setProgramDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
    onChange(key, value);
  };

  // Check if all fields are filled
  const isAllFieldsFilled = () => {
    return Object.values(programDetails).every(
      (value) => Boolean(value) || value === 0
    );
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
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Link
            fontSize={12}
            fontWeight={500}
            underline="none"
            color="neutral"
            href="#some-link"
          >
            Pairs
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Create Pair
          </Typography>
        </Breadcrumbs>
      </Box>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
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
              placeholder="                                             Program Name.."
              sx={{ border: "none", bgcolor: "transparent" }}
              onChange={(e) =>
                handleProgramDetailsChange("programName", e.target.value)
              }
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
                  /* pass the handleStartDateChange function to set start date */
                  onStartDateChange={handleStartDateChange}
                  onChange={(startDate: React.SetStateAction<null>) =>
                    handleProgramDetailsChange("startDate", startDate)
                  }
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card variant="plain" sx={{ bgcolor: "transparent" }}>
              <CardContent>
                <SetEndDate
                  startDate={startDate}
                  onChange={(date: React.SetStateAction<null>) =>
                    handleProgramDetailsChange("endDate", date)
                  }
                />
                {/* pass the starting date to setEndDate component */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Grid container justifyContent="center">
            <Button
              variant="solid"
              startDecorator={<AddIcon />}
              size="sm"
              onClick={onSubmit}
              disabled={!isAllFieldsFilled()} 
            >
              Create Pair
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CreatePairCard;
