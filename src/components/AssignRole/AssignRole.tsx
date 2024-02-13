// import React, { useEffect, useState } from "react";
// import { Modal, ModalDialog, FormLabel, Button } from "@mui/joy";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

// interface RoleAssignmentModalProps {
//   open: boolean;
//   onClose: () => void;
//   onSubmit: (selectedRoles: string[]) => void;
//   userList: { id: string; userRoles: string[] }[]; // Assuming this structure for simplicity
//   employeeId: number;
// }
// const RoleAssignmentModal: React.FC<RoleAssignmentModalProps> = ({
//   open,
//   onClose,
//   onSubmit,
//   userList,
//   employeeId,
// }) => {
//   const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

//   useEffect(() => {
//     console.log("Effect running for user ID:", employeeId);
//     const user = userList.find((user) => parseInt(user.id) === employeeId);
//     if (user) {
//       console.log("Found user:", user);
//       const rolesToSelect = user.userRoles.filter(
//         (role) => role === "mentor" || role === "mentee"
//       );
//       console.log("Selecting roles:", rolesToSelect);
//       setSelectedRoles(rolesToSelect);
//     }
//   }, [userList, employeeId, open]);
//   const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     console.log("Toggling role:", value); // Check which role is being toggled

//     setSelectedRoles((prev) => {
//       const isCurrentlySelected = prev.includes(value);
//       console.log("Is currently selected:", isCurrentlySelected); // Verify if the role is currently selected

//       const newSelectedRoles = isCurrentlySelected
//         ? prev.filter((role) => role !== value)
//         : [...prev, value];

//       console.log("New selected roles:", newSelectedRoles); // See the new state
//       return newSelectedRoles;
//     });
//   };

//   const handleSubmit = () => {
//     onSubmit(selectedRoles);
//     setSelectedRoles([]); // Reset selection
//     onClose();
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={onClose}
//       sx={{
//         "& .MuiBackdrop-root": {
//           backdropFilter: "blur(2px)",
//         },
//       }}
//     >
//       <ModalDialog>
//         <FormLabel id="role-assignment-label">Assign Roles</FormLabel>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={selectedRoles.includes("mentor")}
//               onChange={handleRoleChange}
//               value="mentor"
//             />
//           }
//           label="Mentor"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={selectedRoles.includes("mentee")}
//               onChange={handleRoleChange}
//               value="mentee"
//             />
//           }
//           label="Mentee"
//         />
//         <Button onClick={handleSubmit}>Submit</Button>
//       </ModalDialog>
//     </Modal>
//   );
// };

// export default RoleAssignmentModal;
import React, { useEffect, useState } from "react";
import { Modal, ModalDialog, FormLabel, Button } from "@mui/joy";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios"; // Make sure Axios is imported

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

    axios
      .post("https://localhost:7259/api/admin/assignroles", payload)
      .then((response) => {
        console.log("Success:", response.data);
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
