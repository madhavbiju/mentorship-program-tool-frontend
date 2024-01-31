import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import MentorSearch from "../../../components/SearchForMentor/MentorSearch";
import MenteeSearch from "../../../components/SearchForMentee/MenteeSearch";
import SetStartDate from "../../../components/CourseSetDate/SetStartDate";
import SetEndDate from "../../../components/CourseSetDate/SetEndDate";
import Input from "@mui/joy/Input";

const CreatePairCard = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
    //   sx={{ pt: 2 }}
    >
      <Grid xs={12} sm={8}>
  <Card sx={{ width: "-webkit-fill-available", bgcolor: "transparent", border: 0, padding: 0, margin: 0 }}>
    <Input
      placeholder="Program Name.."
      sx={{ border: "none" ,bgcolor: "transparent"}} 
    />
  </Card>
</Grid>
<Grid container spacing={.5} justifyContent="center">
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
        <Grid container justifyContent="center" >
          <Button size="md" variant="solid">
            + Create Pair
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreatePairCard;
