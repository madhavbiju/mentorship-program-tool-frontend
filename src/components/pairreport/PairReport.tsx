import React, { useState, useEffect } from "react";
import MenteeTaskGraph from "../MenteeTaskGraph/MenteeTaskGraph";
import ReportMeetingsTable from "../ReportTables/ReportMeetingsTable";
import PairReportTasksTable from "../PairReportTaskTable/PairReportTaskTable";
import MenteeInfoBarHandler from "../menteeInfoBar/MenteeInfoBarHandler";
import SelectMenteeDropDownHandler from "../SelectMenteeDropDown/SelectMenteeDropDownHandler";
import { Box, Select, Typography } from "@mui/joy";
import { Grid } from "@mui/material";
import { Option } from "@mui/joy";
import PairReportTaskTableHandler from "../PairReportTaskTable/PairReportTaskTableHandler";

const PairReport = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("TaskName");

  const handleSort = (selectedOption: string) => {
    setSelectedSortOption(selectedOption);
  };
  const [programID, setProgramID] = useState<number>(3);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    // Incrementing the key will force a re-render of MenteeInfoBarHandler
    setRefreshKey((prevKey) => prevKey + 1);
  }, [programID]);

  return (
    <div>
      <Box>
        <br />
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <SelectMenteeDropDownHandler setProgramID={setProgramID} />
          <MenteeInfoBarHandler key={refreshKey} programid={programID} />
          {/* refresh key is used to re render the menu */}
        </Grid>
        <br />
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid xs={12} lg={6}>
            <Typography level="h4">Tasks</Typography>
            <Grid
              xs={12}
              lg={3}
              container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid>
                <Select
                  size="sm"
                  placeholder="Sort by"
                  slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                >
                  <Option
                    value="TaskName"
                    onClick={() => handleSort("TaskName")}
                  >
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
            <PairReportTaskTableHandler
              key={refreshKey}
              sort={selectedSortOption}
              programid={programID}
            />
            <br />
            <Typography level="h4">Meetings</Typography>
            <ReportMeetingsTable />
          </Grid>
          <Grid xs={12} lg={6}>
            <MenteeTaskGraph />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PairReport;
