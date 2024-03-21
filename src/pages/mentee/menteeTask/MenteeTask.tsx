import {
  Box,
  Dropdown,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  Button,
  Breadcrumbs,
  Typography,
  FormLabel,
} from "@mui/joy";
import React, { useState } from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Link } from "react-router-dom";
import MenteeTaskCardHandler from "../../../components/MenteeTaskCard/MenteeTaskCardHandler";

const MenteeTask = () => {
  const history = useNavigate();

  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedFilterOption, setFilterSortOption] = useState("0");

  const handleSort = (selectedOption: string) => {
    setSelectedSortOption(selectedOption);
  };

  const handleFilter = (selectedOption: string) => {
    setFilterSortOption(selectedOption);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/mentee/home" style={{ color: "grey" }} aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Tasks
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
          Tasks
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Select
          size="sm"
          placeholder="Sort by"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="TaskName" onClick={() => handleSort("TaskName")}>
            A-Z Task
          </Option>
          <Option
            value="TaskName_desc"
            onClick={() => handleSort("TaskName_desc")}
          >
            Z-A Task
          </Option>
          <Option value="endDate" onClick={() => handleSort("endDate")}>
            A-Z Date
          </Option>
          <Option
            value="endDate_desc"
            onClick={() => handleSort("endDate_desc")}
          >
            Z-A Date
          </Option>
        </Select>

        <Select
          size="sm"
          placeholder="Filter by"
          sx={{ ml: 1 }}
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="0" onClick={() => handleFilter("0")}>
            Show All
          </Option>
          <Option value="1" onClick={() => handleFilter("1")}>
            In progress
          </Option>
          <Option value="6" onClick={() => handleFilter("6")}>
            Completed
          </Option>
        </Select>
      </Box>

      <Grid container spacing={1} sx={{ my: 2 }}>
        <Grid item xs={12} sm={12} md={12}>
          <MenteeTaskCardHandler
            selectedSortOption={selectedSortOption}
            selectedFilterOption={selectedFilterOption}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenteeTask;
