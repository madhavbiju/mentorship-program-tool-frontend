import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { FormControl, Select, FormLabel, Option } from "@mui/joy";
import Input from "@mui/joy/Input";
import { Link } from "react-router-dom";
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

  const handleSearchChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const value = formData.get("searchParam") as string;
    setSearch(value ?? "");
  };

  const renderFilters = () => (
    <React.Fragment>
      <FormControl size="sm">
        <FormLabel>Status</FormLabel>
        <Select
          size="sm"
          placeholder="Filter by status"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
          value={status}
          onChange={(e, newValue) => setStatus(newValue!)}
        >
          <Option value="all">All</Option>
          <Option value="active">Active</Option>
          <Option value="inactive">Completed</Option>
        </Select>
      </FormControl>

      <FormControl size="sm">
        <FormLabel>Role</FormLabel>
        <Select
          size="sm"
          placeholder="Filter by Role"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
          value={selectedRole}
          onChange={(e, newValue) => setSelectedRole(newValue!)}
        >
          <Option value="all">All</Option>
          <Option value="assigned">Assigned</Option>
          <Option value="unassigned">Unassigned</Option>
          <Option value="admin">Admin</Option>
          <Option value="mentor">Mentor</Option>
          <Option value="mentee">Mentee</Option>
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
          <Link to="/admin/home" style={{ color: "grey" }} aria-label="Home">
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
          <FormControl sx={{ flex: 1 }} size="sm">
            {/* <FormLabel>Search</FormLabel> */}
            <FormLabel>Search for User</FormLabel>
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
