import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import MentorSearch from "../../../components/SearchForMentor/MentorSearch";
import MenteeSearch from "../../../components/SearchForMentee/MenteeSearch";
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
import OrderTable from "../pairs/OrderTable";

const CreatePairCard = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          ml: "0",
        //   border: "2px red solid",
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
            href="/admin/home"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Link
            fontSize={12}
            fontWeight={500}
            underline="none"
            color="neutral"
            href="/admin/pairs"
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
            />
          </Card>
        </Grid>

        <Grid container spacing={0.5} justifyContent="center">
          <Grid xs={12} sm={8}>
            <Card variant="plain" sx={{ bgcolor: "transparent" }}>
              <CardContent>
                <MentorSearch />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card variant="plain" sx={{ bgcolor: "transparent" }}>
              <CardContent>
                <MenteeSearch />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card variant="plain" sx={{ bgcolor: "transparent" }}>
              <CardContent>
                <SetStartDate />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card variant="plain" sx={{ bgcolor: "transparent" }}>
              <CardContent>
                <SetEndDate />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Grid container justifyContent="center">
            {/* <Button size="md" variant="solid" startDecorator={<AddIcon />}> 
            + Create Pair
          </Button> */}
            <Button variant="solid" startDecorator={<AddIcon />} size="sm">
              Create Pair
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CreatePairCard;
