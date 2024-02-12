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
import { MentorsProps } from "./Types";

const MentorSearch = ({ mentors, setMentorID }: MentorsProps) => {
  const [layout, setLayout] = React.useState<ModalDialogProps["layout"] | undefined>(undefined);
  const [selectedMentor, setSelectedMentor] = React.useState<string>("");

  const handleMentorSelect = (value: string) => {
    setSelectedMentor(value);
    setLayout(undefined); // Close the modal
    // Here, you should set the employee ID based on the selected mentor
    // You need to find the corresponding mentor object first
    const selectedMentorObject = mentors.find(
      (mentor) => `${mentor.firstName} ${mentor.lastName}` === value
    );
    if (selectedMentorObject) {
      setMentorID(selectedMentorObject.employeeID);
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid xs={12} sm={10}>
        <Stack>
          <Grid>Mentor :</Grid>
          <Grid>
            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                color="neutral"
                sx={{ width: "-webkit-fill-available" }}
                onClick={() => {
                  setLayout("center");
                  setSelectedMentor("");
                }}
              >
                {selectedMentor || "--SELECT MENTOR--"}
              </Button>
            </Stack>
            <Modal open={!!layout} onClose={() => setLayout(undefined)}>
              <ModalOverflow>
                <ModalDialog
                  aria-labelledby="modal-dialog-overflow"
                  layout={layout}
                >
                  <ModalClose />
                  <Typography id="modal-dialog-overflow" level="h2">
                    Choose Mentor
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
                        options={mentors.map(
                          (option) => `${option.firstName} ${option.lastName}`
                        )}
                        onChange={(event, value) => {
                          if (value) {
                            handleMentorSelect(value);
                          }
                        }}
                      />
                    </FormControl>
                  </FormControl>
                </ModalDialog>
              </ModalOverflow>
            </Modal>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MentorSearch;
