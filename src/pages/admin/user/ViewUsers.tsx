import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import SearchIcon from "@mui/icons-material/Search";
import UserPageHandler from "../../../components/UserTable/UserPageHandler";

export default function ViewUsers() {
  const [selectedRole, setSelectedRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("Asc");
  const [search, setSearch] = useState("");
  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setSelectedRole(event.target.value);
  };
  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSort(event.target.value);
  };
  const handleSearchChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const value = formData.get("searchParam") as string;
    setSearch(value ?? "");
  };
  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value);
  };

  const renderFilters = () => (
    <React.Fragment>
      <FormControl size="small">
        <InputLabel>Sort</InputLabel>
        <Select
          label="Filter"
          value={sort}
          onChange={handleSortChange}
          displayEmpty
        >
          <MenuItem value="Asc">Ascending</MenuItem>
          <MenuItem value="Desc">Descending</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small">
        <InputLabel>Filter</InputLabel>
        <Select
          label="Filter"
          value={status}
          onChange={handleStatusChange}
          displayEmpty
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </Select>
      </FormControl>
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
        <Box component="form" onSubmit={handleSearchChange} sx={{ flex: 1 }}>
          <FormControl size="small">
            {/* <FormLabel>Search</FormLabel> */}
            <Input
              size="sm"
              placeholder="Search"
              name="searchParam"
              startDecorator={<SearchIcon />}
            />
          </FormControl>
        </Box>
        {renderFilters()}
      </Box>
      <UserPageHandler
        selectedRole={selectedRole}
        status={status}
        sort={sort}
        search={search}
      />
    </React.Fragment>
  );
}
