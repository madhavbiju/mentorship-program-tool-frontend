import Input from "@mui/joy/Input";
import { Box } from "@mui/system";
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
      <Input
        sx={{ display: "flex", justifyContent: "center" }}
        placeholder="                                                                                        Enter Program Name..!"
        variant="plain"
      />
      <Box>
        <Grid sx={{ display: "flex", justifyContent: "space-around", pt: 10 }}>
          <MentorSearch />
          <MenteeSearch />
        </Grid>

        <Grid sx={{ display: "flex", justifyContent: "space-around", pt: 10 }}>
          <SetStartDate />
          <SetEndDate/>
        </Grid>
<Grid rowSpacing={10} sx={{display:"flex" , justifyContent:"center", pt:10}}>
        <Button size="md" variant="solid">+ Create Pair</Button></Grid>
      </Box>
    </Box>
  );
};
export default CreatePair;
