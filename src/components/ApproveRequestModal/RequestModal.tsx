// RequestModal.js
import React from "react";
import {
  Modal,
  ModalDialog,
  Typography,
  Button,
  Box,
  ModalClose,
} from "@mui/joy";
import { requests } from "../RequestBox/Types";
import {
  approveRequest,
  rejectRequest,
  updateProgramDate,
} from "./api/putService";

interface RequestModalProps {
  open: boolean;
  onClose: () => void;
  request: requests | null;
  modifiedBy: number; // Assuming the user ID of the person making the modifications is passed in
}

export const RequestModal: React.FC<RequestModalProps> = ({
  open,
  onClose,
  request,
  modifiedBy,
}) => {
  if (!request) return null;
  const handleReject = async () => {
    if (request) {
      const rejectData = {
        programExtensionID: request.programExtensionID,
        modifiedBy: modifiedBy,
        requestStatusID: 5,
      };
      try {
        await rejectRequest(rejectData);
        onClose();
      } catch (error) {
        console.error("Failed to approve request:", error);
      }
    }
  };
  const handleApprove = async () => {
    if (request) {
      const approveData = {
        programExtensionID: request.programExtensionID,
        modifiedBy: modifiedBy,
        requestStatusID: 3, // Assuming 4 is the ID for "Approved"
      };

      const updateData = {
        programID: request.programID,
        modifiedBy: modifiedBy,
        modifiedTime: new Date().toISOString(),
        endDate: request.newEndDate,
      };

      try {
        await approveRequest(approveData);
        await updateProgramDate(updateData);
        onClose(); // Close the modal on success
        // Optionally, refresh or update your state to reflect the changes
      } catch (error) {
        console.error("Failed to approve request:", error);
        // Handle errors (e.g., show an error message)
      }
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Typography level="h4" id="modal-title" mb={2}>
          Program Extension Request
        </Typography>
        <Typography id="modal-description" mb={2}>
          Program Name: {request.programName}
        </Typography>
        <Typography mb={2}>Mentor Name: {request.mentorName}</Typography>
        <Typography mb={2}>Mentee Name: {request.menteeName}</Typography>
        <Typography mb={2}>
          Current End Date: {request.currentEndDate}
        </Typography>
        <Typography mb={2}>New End Date: {request.newEndDate}</Typography>
        <Typography mb={2}>Reason: {request.reason}</Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
          <Button variant="solid" color="danger" onClick={handleReject}>
            Reject
          </Button>
          <Button variant="solid" color="success" onClick={handleApprove}>
            Approve
          </Button>
        </Box>
        <ModalClose />
      </ModalDialog>
    </Modal>
  );
};
