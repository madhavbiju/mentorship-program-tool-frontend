// React and MUI imports
import React from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import Typography from "@mui/joy/Typography";
// Icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import SearchIcon from "@mui/icons-material/Search";
// Custom components
import UserPageHandler from "../../../components/UserTable/UserPageHandler";

export default function ViewUsers() {
  const renderFilters = () => (
    <React.Fragment>
      <FormControl size="sm">
        <FormLabel>Sort By</FormLabel>
        <Select
          size="sm"
          placeholder="Filter by Name"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="ascending">Ascending</Option>
          <Option value="descending">Descending</Option>
        </Select>
      </FormControl>
      <FormControl size="sm">
        <FormLabel>Filter</FormLabel>
        <Select size="sm" placeholder="All">
          <Option value="all">All</Option>
          <Option value="refund">Active</Option>
          <Option value="purchase">Inactive</Option>
        </Select>
      </FormControl>
      <FormControl size="sm">
        <FormLabel>Role</FormLabel>
        <Select size="sm" placeholder="Select Role">
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
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search for users</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
          />
        </FormControl>
        {renderFilters()}
      </Box>
      <UserPageHandler />
    </React.Fragment>
  );
}
