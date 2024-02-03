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

const MenteeSearch = () => {
  const mentees = [
    { name: "Ashiq Tharkoski" },
    { name: "Anish" },
    { name: "aadarsh" },
    { name: "hari" },
    { name: "madhav" },
    { name: "shiyas" },
    { name: "ashna" },
    { name: "aljo" },
    { name: "gopika" },
  ];

  const [layout, setLayout] = React.useState<
    ModalDialogProps["layout"] | undefined //layout initial value is undefined
  >(undefined);
  const [selectedMentee, setSelectedMentee] = React.useState<string>();

  return (
    <Grid container justifyContent="center">
      <Grid xs={12} sm={10}>
        <Stack>
          <Grid>Mentee :</Grid>
          <Grid>
            <Stack direction="row">
              <Button
                variant="outlined"
                color="neutral"
                sx={{ width: "-webkit-fill-available" }}
                onClick={() => {
                  setLayout("center"); //layout value becomes center
                  setSelectedMentee(""); // Reset selectedMentee state
                }}
              >
                {selectedMentee || "--SELECT MENTEE--"}
              </Button>
            </Stack>

            <Modal open={!!layout} onClose={() => setLayout(undefined)}>
              {/* !!layout equals true,because layout=center is a true value.so modal opens*/}

              <ModalOverflow>
                <ModalDialog
                  aria-labelledby="modal-dialog-overflow"
                  layout={layout}
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
                        type="search"
                        disableClearable
                        options={mentees.map((option) => option.name)}
                        // value={selectedMentee}
                        onChange={(event, newValue) =>
                          setSelectedMentee(newValue)
                        }
                        onInputChange={(event, newInputValue) => {
                          if (newInputValue.trim() !== "") {
                            setLayout(undefined); // Close the modal,after choosing a value
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

export default MenteeSearch;
