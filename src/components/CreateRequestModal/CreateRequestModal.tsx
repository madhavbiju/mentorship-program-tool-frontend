import {
  Sheet,
  ModalClose,
  Typography,
  FormControl,
  Button,
  Grid,
} from "@mui/joy";
import { Modal } from "@mui/joy";
import { Input, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SubmitModalProps } from "./Types";
import SetEndDate from "../CourseSetDate/SetEndDate";
import moment from "moment";
import { Divider } from "@mui/material";

const CreateRequestModal = ({
  open,
  setOpen,
  menteeData,
  submit,
}: SubmitModalProps) => {
  const [newDate, setNewDate] = useState(moment());
  const [reason, setReason] = useState("");

  const handleNewDateChange = (newDate: moment.Moment) => {
    setNewDate(newDate);
  };

  // Define function to handle reason change
  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value);
  };

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Grid sx={{ mb: 1 }}>
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              Request Program Extension
            </Typography>
            <Typography id="modal-desc" textColor="text.tertiary">
              Mentee:{" "}
              {menteeData.menteeFirstName + " " + menteeData.menteeLastName}
              <br />
              Program: {menteeData.programName}
              <br />
              Current End Date: {formatDate(menteeData.endDate)}
            </Typography>
          </Grid>
          <Divider />
          <form onSubmit={submit}>
            <FormControl required>
              <Grid
                container
                columnGap={2}
                rowGap={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: 2,
                }}
              >
                <TextField
                  type="date"
                  size="small"
                  name="newEndDate"
                  label="End Date"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    sx: { fontSize: "0.8rem" },
                    inputProps: { min: menteeData.endDate.split("T")[0] },
                  }}
                  required
                />
                {/* <SetEndDate
                  startDate={moment(menteeData.endDate)}
                  onChange={handleNewDateChange}
                /> */}
                <Typography id="modal-desc" textColor="text.tertiary">
                  Reason:
                </Typography>
                {/* Input field for reason */}
                <Input
                  type="text"
                  name="reason"
                  value={reason}
                  onChange={handleReasonChange}
                />

                {/* Button to submit the form */}
                <Button type="submit">Request</Button>
              </Grid>
            </FormControl>
          </form>
        </Sheet>
      </Modal>
    </>
  );
};

export default CreateRequestModal;
