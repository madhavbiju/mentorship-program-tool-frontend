import Input from "@mui/joy/Input";
import { Box } from "@mui/system";
import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Switch from "@mui/joy/Switch";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import ModalOverflow from "@mui/joy/ModalOverflow";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Autocomplete from "@mui/joy/Autocomplete";
import Grid from "@mui/joy/Grid";

const MenteeSearch = () => {
  const mentees = [
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

  const [layout, setLayout] = React.useState<
    ModalDialogProps["layout"] | undefined
  >(undefined);
//   const [scroll, setScroll] = React.useState<boolean>(true);
  return (
    <Grid
      container
      columnSpacing={8}
      sx={{ display: "flex", justifyContent: "space-around" }}
    >
      <Grid>Mentee :</Grid>
      <Grid>
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            color="neutral"
            onClick={() => {
              setLayout("center");
            }}
          >
            --SELECT MENTEE--
          </Button>
        </Stack>
        <Modal
          open={!!layout}
          onClose={() => {
            setLayout(undefined);
          }}
        >
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
                {/* <FormLabel>Search for mentors</FormLabel> */}
                <FormControl>
                  <Autocomplete
                    placeholder="Search here"
                    type="search"
                    // freeSolo
                    disableClearable
                    options={mentees.map((option) => option.name)}
                  />
                </FormControl>
              </FormControl>
              {/* {scroll && (
                    <List>
                      {[...Array(100)].map((item, index) => (
                        <ListItem key={index}>Item number ({index})</ListItem>
                      ))}
                    </List>
                  )} */}
            </ModalDialog>
          </ModalOverflow>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default MenteeSearch;
