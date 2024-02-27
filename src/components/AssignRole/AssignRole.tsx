import React, { useEffect, useState } from "react";
import { Modal, ModalDialog, FormLabel, Button } from "@mui/joy";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios"; // Make sure Axios is imported
import { baseUrl } from "../../config/configUrl";
import axiosInstance from "../../config/configAxios";

interface RoleAssignmentModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (selectedRoles: string[]) => void;
  userList: { id: string; userRoles: string[] }[];
  employeeId: number;
}

const RoleAssignmentModal: React.FC<RoleAssignmentModalProps> = ({
  open,
  onClose,
  onSubmit,
  userList,
  employeeId,
}) => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  useEffect(() => {
    const user = userList.find((user) => parseInt(user.id) === employeeId);
    if (user) {
      setSelectedRoles(
        user.userRoles.filter((role) => role === "mentor" || role === "mentee")
      );
    }
  }, [userList, employeeId, open]);

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedRoles((prev) =>
      prev.includes(value)
        ? prev.filter((role) => role !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = () => {
    const payload = {
      employeeID: employeeId,
      isMentor: selectedRoles.includes("mentor"),
      isMentee: selectedRoles.includes("mentee"),
    };

    axiosInstance
      .post(`${baseUrl.admin}/assignroles`, payload)
      .then((response) => {
        // Here, you might want to call onSubmit to perform additional actions
        // For example, passing the updated roles back to the parent component
        onSubmit(selectedRoles); // Assuming you want to use it this way

        // Success handling logic here, such as closing the modal and resetting state
        setSelectedRoles([]); // Reset selection
        onClose(); // Close modal
      })
      .catch((error) => {
        console.error("Error posting the data:", error);
        // Error handling logic here
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog>
        <FormLabel id="role-assignment-label">Assign Roles</FormLabel>
        {/* Checkboxes for roles */}
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedRoles.includes("mentor")}
              onChange={handleRoleChange}
              value="mentor"
            />
          }
          label="Mentor"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedRoles.includes("mentee")}
              onChange={handleRoleChange}
              value="mentee"
            />
          }
          label="Mentee"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </ModalDialog>
    </Modal>
  );
};

export default RoleAssignmentModal;
