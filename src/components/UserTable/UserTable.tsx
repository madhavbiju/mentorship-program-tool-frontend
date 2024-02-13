// import Avatar from "@mui/joy/Avatar";
// import Box from "@mui/joy/Box";
// import Button from "@mui/joy/Button";
// import Chip from "@mui/joy/Chip";
// import Table from "@mui/joy/Table";
// import Sheet from "@mui/joy/Sheet";

// import Typography from "@mui/joy/Typography";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff"; // Assuming this as a choice for 'inactive'
// import { UserTableProps } from "./types";
// import { useState } from "react";
// import RoleAssignmentModal from "../AssignRole/AssignRole";

// export default function UserTable({ userList }: UserTableProps) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null); // Add this line

//   const handleOpenModal = (user) => {
//     // Adjust this function
//     setCurrentUser(user);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => setIsModalOpen(false);

//   const handleRoleSubmit = (selectedRoles: string[]) => {
//     console.log("Role Submitted:", selectedRoles);
//     // Add your logic here for what to do with the selected roles
//     handleCloseModal();
//   };
//   return (
//     <Sheet
//       variant="outlined"
//       sx={{
//         display: { sm: "initial" },
//         width: "100%",
//         borderRadius: "sm",
//         flexShrink: 1,
//         overflow: "auto",
//         minHeight: 0,
//       }}
//     >
//       <Table
//         aria-labelledby="tableTitle"
//         stickyHeader
//         hoverRow
//         sx={{
//           "--TableCell-headBackground": "var(--joy-palette-background-level1)",
//           "--Table-headerUnderlineThickness": "1px",
//           "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
//           "--TableCell-paddingY": "4px",
//           "--TableCell-paddingX": "8px",
//         }}
//       >
//         <thead>
//           <tr>
//             <th style={{ width: 240, padding: "12px 6px" }}>Sl No.</th>
//             <th style={{ width: 240, padding: "12px 6px" }}>Employees</th>
//             <th style={{ width: 140, padding: "12px 6px" }}>Roles </th>
//             <th style={{ width: 140, padding: "12px 6px" }}>Status</th>
//             <th style={{ width: 140, padding: "12px 6px" }}> </th>
//           </tr>
//         </thead>
//         <tbody>
//           {userList.map((user, index) => (
//             <tr key={user.id}>
//               <td>
//                 <Typography level="body-xs">{index + 1}</Typography>
//               </td>
//               <td>
//                 <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
//                   <Avatar size="sm">{user.userInitials}</Avatar>
//                   <Typography level="body-xs">{user.userName} </Typography>
//                 </Box>
//               </td>
//               <td>
//                 {user.userRoles.map((role, roleIndex) => (
//                   <Typography
//                     key={roleIndex}
//                     level="body-xs"
//                     sx={{ display: "block" }}
//                   >
//                     {role.charAt(0).toUpperCase() + role.slice(1)}
//                   </Typography>
//                 ))}
//               </td>

//               <td>
//                 <Chip
//                   variant="soft"
//                   size="sm"
//                   color={user.userStatus === "active" ? "success" : "neutral"}
//                   startDecorator={
//                     user.userStatus === "active" ? (
//                       <CheckCircleOutlineIcon />
//                     ) : (
//                       <HighlightOffIcon />
//                     )
//                   }
//                 >
//                   {user.userStatus.charAt(0).toUpperCase() +
//                     user.userStatus.slice(1)}
//                 </Chip>
//               </td>
//               <td>
//                 <Button
//                   variant="outlined"
//                   startDecorator={<AddCircleOutlineIcon />}
//                   onClick={() => handleOpenModal(user)} // Adjust this line
//                 >
//                   Assign Roles
//                 </Button>
//                 {/* <RoleAssignmentModal
//                   open={isModalOpen}
//                   onClose={handleCloseModal}
//                   onSubmit={handleRoleSubmit}
//                   userList={[{ id: parseInt(user.id), roles: user.userRoles }]}
//                   employeeId={parseInt(user.id)}
//                 /> */}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Sheet>
//   );
// }
import React, { useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff"; // Adjust the import path as necessary

import { User, UserTableProps } from "./types";
import RoleAssignmentModal from "../AssignRole/AssignRole";

const UserTable: React.FC<UserTableProps> = ({
  userList,
  setSubmitButtonPressed,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleOpenModal = (user: User) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  const handleRoleSubmit = (selectedRoles: string[]) => {
    console.log("Role Submitted:", selectedRoles);
    setSubmitButtonPressed((current) => !current);

    handleCloseModal();
  };

  return (
    <Sheet
      variant="outlined"
      sx={{
        display: { sm: "initial" },
        width: "100%",
        borderRadius: "sm",
        flexShrink: 1,
        overflow: "auto",
        minHeight: 0,
      }}
    >
      <Table
        aria-labelledby="tableTitle"
        stickyHeader
        hoverRow
        sx={{
          "--TableCell-headBackground": "var(--joy-palette-background-level1)",
          "--Table-headerUnderlineThickness": "1px",
          "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
          "--TableCell-paddingY": "4px",
          "--TableCell-paddingX": "8px",
        }}
      >
        <thead>
          <tr>
            <th style={{ width: 240, padding: "12px 6px" }}>Sl No.</th>
            <th style={{ width: 240, padding: "12px 6px" }}>Employees</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Roles</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Status</th>
            <th style={{ width: 140, padding: "12px 6px" }}></th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={user.id}>
              <td>
                <Typography level="body-xs">{index + 1}</Typography>
              </td>
              <td>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Avatar size="sm">{user.userInitials}</Avatar>
                  <Typography level="body-xs">{user.userName}</Typography>
                </Box>
              </td>
              <td>
                {user.userRoles.map((role, roleIndex) => (
                  <Chip key={roleIndex} size="sm" variant="outlined">
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </Chip>
                ))}
              </td>
              <td>
                <Chip
                  variant="soft"
                  size="sm"
                  color={user.userStatus === "active" ? "success" : "neutral"}
                  startDecorator={
                    user.userStatus === "active" ? (
                      <CheckCircleOutlineIcon />
                    ) : (
                      <HighlightOffIcon />
                    )
                  }
                >
                  {user.userStatus.charAt(0).toUpperCase() +
                    user.userStatus.slice(1)}
                </Chip>
              </td>
              <td>
                <Button
                  variant="outlined"
                  startDecorator={<AddCircleOutlineIcon />}
                  onClick={() => handleOpenModal(user)}
                >
                  Assign Roles
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {currentUser && (
        <RoleAssignmentModal
          open={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleRoleSubmit}
          // Ensure the RoleAssignmentModal is expecting a single user or adapt accordingly
          userList={[currentUser]}
          employeeId={parseInt(currentUser.id)}
        />
      )}
    </Sheet>
  );
};

export default UserTable;
