import React, { useState, useEffect } from "react";
import MenteeInfoBarHandler from "../menteeInfoBar/MenteeInfoBarHandler";
import SelectMenteeDropDownHandler from "../SelectMenteeDropDown/SelectMenteeDropDownHandler";
import { Box, Select, Typography } from "@mui/joy";
import { Grid } from "@mui/material";
import { Option } from "@mui/joy";
import PairReportTaskTableHandler from "../PairReportTaskTable/PairReportTaskTableHandler";
import PairReportMeetingTableHandler from "../PairReportMeetingTable/PairReportMeetingTableHandler";

const PairReport = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("TaskName");
  const [selectedmeetingSortOption, setSelectedMeetingSortOption] =
    useState("MeetingName");

  const handleSort = (selectedOption: string) => {
    setSelectedSortOption(selectedOption);
  };
  const handleMeetingSort = (selectedmeetingOption: string) => {
    setSelectedMeetingSortOption(selectedmeetingOption);
  };
  const [programID, setProgramID] = useState<number>(0);
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
        <Grid xs={12} lg={12}>
          <Grid
            container
            xs={12}
            lg={4}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid>
              <Typography level="h4">Tasks</Typography>
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
        </Grid>
        <PairReportTaskTableHandler
          key={refreshKey}
          sort={selectedSortOption}
          programid={programID}
        />
        <br />
        <Grid
          container
          xs={12}
          lg={4}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid>
            <Typography level="h4">Meetings</Typography>
          </Grid>
          <Grid>
            <Select
              size="sm"
              placeholder="Sort by"
              slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
            >
              <Option value="Title" onClick={() => handleMeetingSort("Title")}>
                Title A-Z
              </Option>
              <Option
                value="Title_desc"
                onClick={() => handleMeetingSort("Title_desc")}
              >
                Title Z-A
              </Option>
              <Option
                value="ScheduleDate"
                onClick={() => handleMeetingSort("ScheduleDate")}
              >
                Schedule Date Asc
              </Option>
              <Option
                value="ScheduleDate_desc"
                onClick={() => handleMeetingSort("ScheduleDate_desc")}
              >
                Schedule Date Des
              </Option>
            </Select>
          </Grid>
        </Grid>

        <Grid>
          <PairReportMeetingTableHandler
            key={refreshKey}
            sort={selectedmeetingSortOption}
            programid={programID}
          />
        </Grid>
        {/* <Grid xs={12} lg={6}>
            <MenteeTaskGraph />
          </Grid> */}
      </Box>
    </div>
  );
};

export default PairReport;
