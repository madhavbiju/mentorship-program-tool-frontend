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
import { positions } from "@mui/system";

const MentorSearch = () => {
  const mentors = [
    { name: "Ashiq" },
    { name: "Anish" },
    { name: "aadarsh" },
    { name: "hari" },
    { name: "madhav" },
    { name: "shiyas" },
    { name: "ashna" },
    { name: "aljo" },
    { name: "gopika" },
  ];

  const [layout, setLayout] = React.useState<ModalDialogProps["layout"] | undefined>(undefined);
  const [selectedMentor, setSelectedMentor] = React.useState<string>();

  return (
    <Grid container justifyContent="center" >
        <Grid xs={12} sm={10} >
      <Stack>
      <Grid>Mentor :</Grid>
      <Grid>
        <Stack direction="row" spacing={1}>
          <Button 
            variant="outlined"
            color="neutral"
            
            onClick={() => {
              setLayout("center");
            }}
          >
            {selectedMentor || "--SELECT MENTOR--"}
          </Button>
        </Stack>
        <Modal open={!!layout} onClose={() => setLayout(undefined)}>
          <ModalOverflow>
            <ModalDialog aria-labelledby="modal-dialog-overflow" layout={layout}>
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
                    type="search"
                    // freeSolo
                    disableClearable
                    options={mentors.map((option) => option.name)}
                    value={selectedMentor}
                    onChange={(event, newValue) => setSelectedMentor(newValue)}
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
