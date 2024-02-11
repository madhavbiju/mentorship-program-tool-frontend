import {
  Box,
  Breadcrumbs,
  Button,
  Dropdown,
  FormLabel,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/joy";
import React from "react";
import MenteesListCard from "../../../components/MenteesList/MenteesListCard";
import Grid from "@mui/material/Grid";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenteesListHandler from "../../../components/MenteesList/MenteesListHandler";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const MenteesList = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
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

      <Box sx={{ display: "flex", ml: 3, mt: 3 }}>
        <FormLabel>Sort By</FormLabel>
        <Select
          size="sm"
          placeholder="Sort by"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="ascendingProgram">Asc Prgm</Option>
          <Option value="descendingProgram">Des Prgm</Option>
          <Option value="ascendingEndDate">Asc Date</Option>
          <Option value="descendingEndDate">Desc Date</Option>
        </Select>

        <FormLabel sx={{ ml: 1 }}>Filter</FormLabel>
        <Select size="sm" placeholder="Filter by ">
          <Option value="program">Program</Option>
          <Option value="endDate">EndDate</Option>
        </Select>
      </Box>

      <Grid container spacing={1} sx={{ my: "5%" }}>
        <Grid item xs={12} sm={12} md={12}>
          <MenteesListHandler />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenteesList;
