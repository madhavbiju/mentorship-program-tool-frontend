import React, { useMemo, useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ColDef, SizeColumnsToFitGridStrategy } from "ag-grid-community";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import { useColorScheme as useMaterialColorScheme } from "@mui/material/styles";
import RoleAssignmentModal from "../AssignRole/AssignRole";
import { User, UserTableProps } from "./types";
import { Stack } from "@mui/joy";

const NewUserTable = ({ userList, setSubmitButtonPressed }: UserTableProps) => {
  const { mode } = useMaterialColorScheme();
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
    setSubmitButtonPressed((current) => !current);

    handleCloseModal();
  };

  const AccountStatusRenderer = (params: CustomCellRendererProps) => (
    <Chip
      variant="soft"
      size="sm"
      color={params.value === "active" ? "success" : "neutral"}
      startDecorator={
        params.value === "active" ? (
          <CheckCircleOutlineIcon />
        ) : (
          <HighlightOffIcon />
        )
      }
    >
      {params.value === "active" ? "Active" : "Innactive"}
    </Chip>
  );
  const AccountRoleRenderer = (params: CustomCellRendererProps) =>
    params.value.map((role: string, roleIndex: React.Key) => (
      <Chip key={roleIndex} size="sm" variant="outlined">
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </Chip>
    ));

  const AccountRoleChangeModalRenderer = (params: User) => (
    <Button
      variant="plain"
      size="md"
      startDecorator={<AddCircleOutlineIcon />}
      onClick={() => handleOpenModal(params)}
    >
      Assign Roles
    </Button>
  );

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState<ColDef[]>([
    {
      headerName: "Employee Name",
      field: "userName",
    },
    {
      headerName: "Roles",
      field: "userRoles",
      cellRenderer: AccountRoleRenderer,
    },
    {
      headerName: "Status",
      field: "userStatus",
      cellRenderer: AccountStatusRenderer,
    },
    {
      headerName: "",
      cellRenderer: AccountRoleChangeModalRenderer,
    },
  ]);

  // Apply settings across all columns
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      filter: true,
      editable: false,
    };
  }, []);

  const autoSizeStrategy: SizeColumnsToFitGridStrategy = {
    type: "fitGridWidth",
    defaultMinWidth: 100,
    columnLimits: [
      {
        colId: "country",
        minWidth: 900,
      },
    ],
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={`${
        mode === "dark" ? "ag-theme-quartz-dark" : "ag-theme-quartz"
      }`}
      style={{ width: "100%", height: "350px" }}
    >
      <AgGridReact
        rowData={userList}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        autoSizeStrategy={autoSizeStrategy}
      />
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
    </div>
  );
};

export default NewUserTable;
