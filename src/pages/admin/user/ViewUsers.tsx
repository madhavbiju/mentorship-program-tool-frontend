// React and MUI imports
import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  SelectChangeEvent,
} from "@mui/material";
import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import Option from "@mui/joy/Option";
// import Select from "@mui/joy/Select";
import Typography from "@mui/joy/Typography";
// Icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import SearchIcon from "@mui/icons-material/Search";
// Custom components
import UserPageHandler from "../../../components/UserTable/UserPageHandler";

export default function ViewUsers() {
  const [selectedRole, setSelectedRole] = useState("all");

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setSelectedRole(event.target.value);
  };
  const renderFilters = () => (
    <React.Fragment>
      <FormControl size="small">
        <FormLabel>Sort By</FormLabel>
        <Select
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            ".MuiSelect-select": {
              whiteSpace: "nowrap",
            },
          }}
        >
          <MenuItem value="ascending">Ascending</MenuItem>
          <MenuItem value="descending">Descending</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small">
        <FormLabel>Filter</FormLabel>
        <Select displayEmpty inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="purchase">Inactive</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl size="sm">
        <FormLabel>Role</FormLabel>
        <Select
          size="sm"
          placeholder="Select Role"
          value={selectedRole}
          onChange={handleRoleChange} // Set the selected role on change
        >
          <Option value="all">All</Option>
          <Option value="assigned">Assigned</Option>
          <Option value="unassigned">Unassigned</Option>
          <Option value="admin">Admin</Option>
          <Option value="mentor">Mentor</Option>
          <Option value="mentee">Mentee</Option>
        </Select>
      </FormControl> */}
      <FormControl size="small" variant="outlined" fullWidth>
        <InputLabel>Role</InputLabel>
        <Select
          label="Role" // This should match the InputLabel for proper alignment
          value={selectedRole}
          onChange={handleRoleChange} // Presuming handleRoleChange is defined to handle the event
          displayEmpty
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="assigned">Assigned</MenuItem>
          <MenuItem value="unassigned">Unassigned</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="mentor">Mentor</MenuItem>
          <MenuItem value="mentee">Mentee</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link underline="none" color="neutral" href="#" aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Users
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          Users
        </Typography>
      </Box>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: { sm: "flex" },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": {
            minWidth: { xs: "120px", md: "160px" },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="small">
          <FormLabel>Search for users</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
          />
        </FormControl>
        {renderFilters()}
      </Box>
      <UserPageHandler selectedRole={selectedRole} />
    </React.Fragment>
  );
}
