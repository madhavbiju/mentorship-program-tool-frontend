import { Box, FormControl, Grid, Option, Select, Typography } from "@mui/joy";
import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import PairTableHandler from "../PairTable/PairTableHandler";
import AdminReportPieChartHandler from "../PieChart/AdminReportPieChartHandler";
import ReportMeetingHandler from "../ReportMeetingsTable/ReportMeetingHandler";
import ReportTaskTableHandler from "../ReportTables/ReportTaskTable/ReportTaskTableHandler";

const AdminReport = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const handleSort = (selectedOption: string) => {
    setSelectedSortOption(selectedOption);
  };
  const [sort, setSort] = useState("");
  const [meetingSort, setMeetingSort] = useState("date");

  const [showPieChart, setShowPieChart] = useState(true);

  const togglePieChart = () => {
    setShowPieChart(!showPieChart);
  };

  return (
    <div>
      <Box>
        <Grid container>
          <Grid
            xs={12}
            lg={4}
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid>
              <Typography level={"h3"}>Pairs</Typography>
            </Grid>

            <Grid>
              <FormControl size="sm">
                <Select
                  size="sm"
                  placeholder="Sort By"
                  value={sort}
                  onChange={(e, newValue) => setSort(newValue!)}
                >
                  <Option value="programName">Program Name (A-Z)</Option>
                  <Option value="programName_desc">Program Name (Z-A)</Option>
                  <Option value="endDate">End Date (Latest)</Option>
                  <Option value="endDate_desc">End Date (Farthest)</Option>
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <FormControlLabel
                control={
                  <Switch checked={showPieChart} onChange={togglePieChart} />
                }
                label={showPieChart ? "Pie Chart" : "Pie Chart"}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid xs={12} lg={showPieChart ? 8 : 11}>
              <PairTableHandler status={""} sort={sort} search={""} />
            </Grid>
            <Grid xs={12} lg={4}>
              {showPieChart && <AdminReportPieChartHandler />}
            </Grid>
          </Grid>
        </Grid>
        <br />

        <Grid container>
          <Grid
            xs={12}
            lg={3}
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid>
              <Typography level={"h3"}>Tasks</Typography>
            </Grid>

            <Grid>
              <Select
                size="sm"
                placeholder="Sort by"
                slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
              >
                <Option value="TaskName" onClick={() => handleSort("TaskName")}>
                  Title A-Z
                </Option>
                <Option
                  value="TaskName_desc"
                  onClick={() => handleSort("TaskName_desc")}
                >
                  Title Z-A
                </Option>
                <Option value="endDate" onClick={() => handleSort("endDate")}>
                  Due Date Asc
                </Option>
                <Option
                  value="endDate_desc"
                  onClick={() => handleSort("endDate_desc")}
                >
                  Due Date Des
                </Option>
              </Select>
            </Grid>
          </Grid>

          <Grid>
            <Grid xs={12} lg={11}>
              <ReportTaskTableHandler sort={selectedSortOption} />
            </Grid>
          </Grid>
        </Grid>
        <br />

        <Grid container>
          <Grid
            xs={12}
            lg={4}
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid>
              <Typography level={"h3"}>Meetings</Typography>
            </Grid>

            <Grid>
              <FormControl size="sm">
                <Select
                  size="sm"
                  placeholder="Sort By"
                  onChange={(e, newValue) => setMeetingSort(newValue!)}
                  value={meetingSort}
                >
                  <Option value="date">Schedule Date</Option>
                  <Option value="menteeName">Mentee Name (A-Z)</Option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid>
            <Grid xs={12} lg={11}>
              <ReportMeetingHandler sort={meetingSort} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AdminReport;
