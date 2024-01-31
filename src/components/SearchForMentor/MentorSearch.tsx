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
  const [selectedMentor, setSelectedMentor] = React.useState<string | null>(null);
  const [scroll, setScroll] = React.useState<boolean>(true);

  const handleOk = () => {
    // Perform any actions needed with the selected mentor
    console.log("Selected mentor:", selectedMentor);
    // Close the modal
    setLayout(undefined);
  };

  return (
    <Grid container columnSpacing={8} sx={{ display: "flex", justifyContent: "space-around" }}>
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
            --SELECT MENTOR--
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
              <Button  onClick={handleOk}>
                SET
              </Button>
            </ModalDialog>
          </ModalOverflow>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default MentorSearch;
