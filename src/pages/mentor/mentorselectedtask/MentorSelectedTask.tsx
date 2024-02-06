import { Button, Card, Grid, Textarea, Typography } from "@mui/joy";
import React from "react";

const MentorSelectedTask = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography level="h3">Task 1: Creating Components</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography level="title-md">Due Date:12/02/2024</Typography>
        </Grid>
        <Grid xs={12}>
          <Textarea
            size="lg"
            placeholder="uploaded files"
            sx={{ width: "50%" }}
          />
        </Grid>
        <Grid xs={12}>
          <Card variant="outlined">
            <Typography level="body-md">Instructions</Typography>
            <Typography level="body-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={1}>
        <Grid xs={12} lg={6}>
          <Typography level="title-md">Comments from mentee </Typography>
          <Card>
            <Typography level="body-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} lg={6}>
          <Typography level="title-md">Submitted on : 15/02/2023</Typography>
          <Textarea
            sx={{ width: "50%" }}
            size="lg"
            placeholder="uploaded files"
          />
        </Grid>
      </Grid>
      <br />
      <Button>Mark As Done</Button>
    </div>
  );
};

export default MentorSelectedTask;
