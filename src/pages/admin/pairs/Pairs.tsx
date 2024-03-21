/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Typography from "@mui/joy/Typography";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
import PairTableHandler from "../../../components/PairTable/PairTableHandler";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Pairs() {
  const history = useNavigate();

  const handleClick = () => {
    history("/admin/pairs/create");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const value = formData.get("searchParam") as string; // Type assertion
    setSearch(value ?? "");
  };

  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

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
          <Option value="">All</Option>
          <Option value="1">Ongoing</Option>
          <Option value="8">Completed</Option>
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
            Pairs
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
          Pairs
        </Typography>
        <Button
          color="primary"
          startDecorator={<AddIcon />}
          size="sm"
          onClick={handleClick}
        >
          Create Pair
        </Button>
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
        <Box component="form" onSubmit={handleSubmit} sx={{ flex: 1 }}>
          <FormControl sx={{ flex: 1 }} size="sm">
            <FormLabel>Search for Pair</FormLabel>
            <Input
              name="searchParam"
              placeholder="Search"
              startDecorator={<SearchIcon />}
            />
          </FormControl>
        </Box>
        {renderFilters()}
      </Box>
      <Grid sm={12}>
        <PairTableHandler status={status} sort={sort} search={search} />
      </Grid>
    </React.Fragment>
  );
}
