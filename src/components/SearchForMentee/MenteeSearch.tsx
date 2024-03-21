import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Typography from "@mui/joy/Typography";
import Autocomplete from "@mui/joy/Autocomplete";
import Grid from "@mui/joy/Grid";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import ModalOverflow from "@mui/joy/ModalOverflow";
import Stack from "@mui/joy/Stack";
import { useState } from "react";
import { MenteesProps } from "./Types";
import { FormHelperText } from "@mui/joy";

const MenteeSearch = ({ mentees, setMenteeID }: MenteesProps) => {
  const [layout, setLayout] = React.useState<
    ModalDialogProps["layout"] | undefined //layout initial value is undefined
  >(undefined);
  const [selectedMentee, setSelectedMentee] = useState<string>("");

  const handleMenteeSelect = (value: string) => {
    setSelectedMentee(value);
    setLayout(undefined); // Close the modal
    // Here, you should set the employee ID based on the selected mentor
    // You need to find the corresponding mentor object first
    const selectedMentorObject = mentees.find(
      (mentee) => `${mentee.firstName} ${mentee.lastName}` === value
    );
    if (selectedMentorObject) {
      setMenteeID(selectedMentorObject.employeeID);
    }
  };

  return (
    <Grid container rowGap={1}>
      <FormHelperText>Mentee</FormHelperText>

      <Button
        variant="outlined"
        color="neutral"
        sx={{ width: "100%" }}
        onClick={() => {
          setLayout("center"); //layout value becomes center
          setSelectedMentee(""); // Reset selectedMentee state
        }}
      >
        {selectedMentee || "Select Mentee"}
      </Button>

      <Modal open={!!layout} onClose={() => setLayout(undefined)}>
        {/* !!layout equals true,because layout=center is a true value.so modal opens*/}

        <ModalDialog
          aria-labelledby="modal-dialog-overflow"
          layout={layout}
          sx={{ left: "48rem", top: "18rem" }}
        >
          <ModalClose />
          <Typography id="modal-dialog-overflow" level="h2">
            Choose Mentee
          </Typography>
          <FormControl
            orientation="horizontal"
            sx={{
              bgcolor: "background.level2",
              p: 1,
              borderRadius: "sm",
            }}
          >
            <FormControl>
              <Autocomplete
                placeholder="Search here"
                disableClearable
                options={mentees.map(
                  (option) => `${option.firstName} ${option.lastName}`
                )}
                onChange={(event, value) => {
                  if (value) {
                    handleMenteeSelect(value); // value.label contains the selected mentee's name
                  }
                }}
              />
            </FormControl>
          </FormControl>
        </ModalDialog>
      </Modal>
    </Grid>
  );
};

export default MenteeSearch;
