import { Box, Breadcrumbs, FormLabel, Typography } from "@mui/joy";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenteesListHandler from "../../../components/MenteesList/MenteesListHandler";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Link } from "react-router-dom";

const MenteesList = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedFilterOption, setFilterSortOption] = useState("");

  const handleSort = (selectedOption: string) => {
    setSelectedSortOption(selectedOption);
  };

  const handleFilter = (e: any) => {
    const selectedOption = e.target.value;
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
          <Link to="/mentor/home" style={{ color: "grey" }} aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Mentees
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
          Mentees
        </Typography>
      </Box>

      <Box sx={{ display: "flex", mt: 2 }}>
        <Select
          size="sm"
          placeholder="Sort by"
          // onChange={handleSort}
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="ProgramName" onClick={() => handleSort("ProgramName")}>
            A-Z Prgm
          </Option>
          <Option
            value="ProgramName_desc"
            onClick={() => handleSort("ProgramName_desc")}
          >
            Z-A Prgm
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
      </Box>

      <Grid container spacing={1} mt={2}>
        <Grid item xs={12} sm={12} md={12}>
          <MenteesListHandler
            selectedSortOption={selectedSortOption}
            selectedFilterOption={selectedFilterOption}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenteesList;
