import Input from "@mui/joy/Input";
import { Box, display } from "@mui/system";
import * as React from "react";
import Button from "@mui/joy/Button";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import Switch from "@mui/joy/Switch";
// import List from "@mui/joy/List";
// import ListItem from "@mui/joy/ListItem";
// import Modal from "@mui/joy/Modal";
// import ModalClose from "@mui/joy/ModalClose";
// import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
// import ModalOverflow from "@mui/joy/ModalOverflow";
// import Stack from "@mui/joy/Stack";
// import Typography from "@mui/joy/Typography";
// import Autocomplete from "@mui/joy/Autocomplete";
import MentorSearch from "../../../components/SearchForMentor/MentorSearch";
import MenteeSearch from "../../../components/SearchForMentee/MenteeSearch";
import Grid from "@mui/joy/Grid";
import SetStartDate from "../../../components/CourseSetDate/SetStartDate";
import SetEndDate from "../../../components/CourseSetDate/SetEndDate";

const CreatePair = () => {
  return (
    <Box sx={{ pt: 5 }}>
      <Grid xs={12}>
        <Input
          sx={{ display: "flex", justifyContent: "center" }}
          placeholder="Enter Program Name..!"
          variant="soft"
        />
      </Grid>
      <Grid container sx={{ display: "flex", flexDirection: "column" }}>
        <Grid
          xs={12}
          sx={{ display: "flex", justifyContent: "space-around", pt: 8 }}
        >
          <MentorSearch />
          <MenteeSearch />
        </Grid>

        <Grid
          //   md={8}
          sx={{
            // border: "2px solid red",
            display: "flex",
            justifyContent: "space-around",
            pt: 7,
          }}
        >
          <Grid xs={12} sx={{ justifyContent: "center" }}>
            <SetStartDate />
          </Grid>
          <Grid xs={12} sx={{ justifyContent: "center" }}>
            <SetEndDate />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        rowSpacing={7}
        sx={{ display: "flex", justifyContent: "center", pt: 7 }}
      >
        <Button size="md" variant="solid">
          + Create Pair
        </Button>
      </Grid>
    </Box>
  );
};
export default CreatePair;
